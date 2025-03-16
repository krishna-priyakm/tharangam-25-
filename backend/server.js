const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// Import auth routes
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "https://tharangam25.vercel.app",  // Allow only your frontend domain
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(bodyParser.json());

// API Routes
app.use("/api/auth", authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Participant Schema
const participantSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  year: Number,
  phone: String,
  singleEvents: [String],
  groupEvents: [{ eventName: String, teamMembers: [String] }],
});

const Participant = mongoose.model("Participant", participantSchema);

// Register Participant Route
app.post("/register", async (req, res) => {
  const { name, email, department, year, phone, singleEvents, groupEvents } = req.body;

  if (singleEvents.length > 5 || groupEvents.length > 3) {
    return res.status(400).json({ message: "Event selection exceeds limit." });
  }

  try {
    const newParticipant = new Participant({
      name,
      email,
      department,
      year,
      phone,
      singleEvents,
      groupEvents,
    });
    await newParticipant.save();
    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    res.status(500).json({ message: "Error registering participant." });
  }
});

// Fetch All Participants (For Admin)
app.get("/api/registrations", async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching participants." });
  }
});

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
