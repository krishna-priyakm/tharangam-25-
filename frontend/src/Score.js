import React from "react";
import "./score.css"; // Import CSS file

const Score = () => {
  const scores = [
    { position: 1, department: "MCA", points: 37 },
    { position: 2, department: "PHD", points: 14 },
    { position: 3, department: "Architecture", points: 10},
    { position: 4, department: "Electrical Engineering", points: 4 },
    { position: 5, department: "Electronics Engineering", points: 0 },
    { position: 6, department: "Computer Science Engineering", points: 0},
    { position: 7, department: "MBA", points: 0},
    { position: 8, department: "Mechanical Engineering", points: 0},
    { position: 9, department: "Civil Engineering", points: 0},
  ];

  return (
    <div className="score-container">
      <h1 className="score-title">Leaderboard</h1>
      <table className="score-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Department</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((entry, index) => (
            <tr key={index}>
              <td>{entry.position}</td>
              <td>{entry.department}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Score;
