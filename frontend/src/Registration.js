import React, { useState } from "react";
import axios from "axios";

const singleEvents = [
    "Light Music", "Classical Music", "Persona", "Mappilapattu",
    "Essay Writing (English)", "Essay Writing (Malayalam)", "Essay Writing (Hindi)",
    "Pencil Drawing", "Water Colouring", "Folk Dance", "Solo Dance", "Adaptune", 
    "Mohiniyattam", "Bharatanatyam", "Western Vocal Solo", "Recitation(English)", 
    "Recitation(Malayalam)", "Recitation(Hindi)", "Kadhaprasangam(Malayalam)",
     "Mono Act", "Mimicry", "Fancy Dress", "Stand Up Comdey", "Jam(Malayalam)", "Jam(English)",
];

const groupEvents = ["Debate-English (2)", "Debate-Malayalam (2)", "Quiz (2)", "Face Painting (2)", 
    "Mehandi (2)", "Group Song (10)", "Folk Song (7)", "Ganamela (7)", "Mime (8)", "Skit (8)", 
    "Step-In-Synchro (7)", "Group Dance (14)", "Nostalgia Dance (10)", "Fusion Dance (10)", "Thiruvathira (10)", "Margamkali (10)", 
    "Oppana (10)", "Fashion Show (14)", "Contraption (6)", "Adzap (5)", "Treasure Hunt (5)"];

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
        year: "",
        phone: "",
        singleEvents: [],
        groupEvents: [],
        teamMembers: {} // Object to hold team member names for each group event
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSingleEventChange = (event) => {
        const { value, checked } = event.target;
        let updatedSelection = [...formData.singleEvents];

        if (checked) {
            if (updatedSelection.length < 5) {
                updatedSelection.push(value);
            } else {
                alert("You can select only up to 5 single events.");
                return;
            }
        } else {
            updatedSelection = updatedSelection.filter(item => item !== value);
        }

        setFormData({ ...formData, singleEvents: updatedSelection });
    };

    const handleGroupEventChange = (event) => {
        const { value, checked } = event.target;
        let updatedSelection = [...formData.groupEvents];
        const updatedTeamMembers = { ...formData.teamMembers };

        if (checked) {
            if (updatedSelection.length < 3) {
                updatedSelection.push(value);
                updatedTeamMembers[value] = ""; // Initialize team members for the selected event
            } else {
                alert("You can select only up to 3 group events.");
                return;
            }
        } else {
            updatedSelection = updatedSelection.filter(item => item !== value);
            delete updatedTeamMembers[value]; // Remove team members when the event is unchecked
        }

        setFormData({ ...formData, groupEvents: updatedSelection, teamMembers: updatedTeamMembers });
    };

    const handleTeamMemberChange = (event, eventName) => {
        const updatedTeamMembers = { ...formData.teamMembers, [eventName]: event.target.value };
        setFormData({ ...formData, teamMembers: updatedTeamMembers });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = axios.post('https://tharangam-backend.vercel.app/register', formData)
            .then(response => console.log('Success:', response))
            .catch(error => {
              console.error('Error:', error.message);
              console.error('Details:', error.response || error);
            });          
          
            alert("Registration successful!");
            setFormData({
                name: "",
                email: "",
                department: "",
                year: "",
                phone: "",
                singleEvents: [],
                groupEvents: [],
                teamMembers: {}
            });
        } catch (error) {
            console.error("Registration failed:", error);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <img src="/p12.png" alt="Event Logo" className="register-logo" />
                <h2 className="register-title">Event Registration</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Department:</label>
                        <select name="department" value={formData.department} onChange={handleChange} required>
                            <option value="">Select Department</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Mechanical">Mechanical</option>
                            <option value="Electrical">Electrical</option>
                            <option value="Electronics">Electronics</option>
                            <option value="MBS">MBS</option>
                            <option value="MCA">MCA</option>
                            <option value="PhD">PhD</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Year:</label>
                        <select name="year" value={formData.year} onChange={handleChange} required>
                            <option value="">Select Year</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Single Events (Max: 5):</label>
                        <div className="event-grid">
                            {singleEvents.map((event, index) => (
                                <div key={index} className="checkbox-group">
                                    <input
                                        type="checkbox"
                                        value={event}
                                        checked={formData.singleEvents.includes(event)}
                                        onChange={handleSingleEventChange}
                                    />
                                    <span>{event}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Group Events (Team-Members):</label>
                        <div className="event-grid">
                            {groupEvents.map((event, index) => (
                                <div key={index} className="checkbox-group">
                                    <input
                                        type="checkbox"
                                        value={event}
                                        checked={formData.groupEvents.includes(event)}
                                        onChange={handleGroupEventChange}
                                    />
                                    <span>{event}</span>
                                    {formData.groupEvents.includes(event) && (
                                        <input
                                            type="text"
                                            placeholder="Enter Team Members"
                                            value={formData.teamMembers[event] || ""}
                                            onChange={(e) => handleTeamMemberChange(e, event)}
                                            className="team-member-input"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className="register-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
