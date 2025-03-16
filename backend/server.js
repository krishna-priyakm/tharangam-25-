const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// Import auth routes
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use("/api/auth", authRoutes);



app.use(cors({
  origin: '*',   // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']  // Allow all methods
}));


app.use(express.json());


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Participant Schema
// const participantSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   department: String,
//   year: Number,
//   phone: String,
//   singleEvents: [String],
//   groupEvents: [{ eventName: String, teamMembers: [String] }],
// });

// const Participant = mongoose.model("Participant", participantSchema);

const Participant = mongoose.models.Participant || mongoose.model("Participant", new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  year: Number,
  phone: String,
  singleEvents: [String],
  groupEvents: [{ eventName: String, teamMembers: [String] }]
}));

module.exports = Participant;

// Register Participant Route
// app.post('/register',async (req, res) => {
//   // Handle registration logic here
//   console.log("Registerrr")
//   res.status(200).send('Registration successful');

//   const { name, email, department, year, phone, singleEvents, groupEvents } = req.body;

//   if (singleEvents.length > 5 || groupEvents.length > 3) {
//     return res.status(400).json({ message: "Event selection exceeds limit." });
//   }
// console.log(req.body)
// try {
//   const { name, email, department, year, phone, singleEvents, groupEvents } = req.body;

//   const newParticipant = new Participant({
//     name,
//     email,
//     department,
//     year,
//     phone,
//     singleEvents,
//     groupEvents,
//   });

//   // Save the new participant to the database
//   await newParticipant.save();

//   // Respond with a success message
//   return res.status(201).json({ message: "Registration successful!" });  // Added return to ensure no further response

// } catch (error) {
//   console.error(error);  // Log the error for debugging purposes

//   // Respond with an error message
//   return res.status(500).json({ message: "Error registering participant." });  // Added return here too
// }
// })

app.post('/register', async (req, res) => {
  console.log("Registerrr");

  const { name, email, department, year, phone, singleEvents, groupEvents } = req.body;

  // Check if event selection exceeds the limit
  if (singleEvents.length > 5 || groupEvents.length > 3) {
    return res.status(400).json({ message: "Event selection exceeds limit." });
  }

  console.log(req.body);

  try {
    // Create a new participant object
    const newParticipant = new Participant({
      name,
      email,
      department,
      year,
      phone,
      singleEvents,
      groupEvents,
    });

    // Save the new participant to the database
    await newParticipant.save();

    // Respond with a success message
    return res.status(201).json({ message: "Registration successful!" });
    
  } catch (error) {
    console.error(error);  // Log the error for debugging purposes

    // Respond with an error message
    return res.status(500).json({ message: "Error registering participant." });
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

// Root route to check server status
app.get("/", (req, res) => {
  res.send("Backend is live!");
});

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));