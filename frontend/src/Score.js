import React from "react";
import "./score.css"; // Import CSS file

const Score = () => {
  const scores = [
    { position: 1, department: "MCA", points: 53 },
    { position: 2, department: "PHD", points: 49 },
    { position: 3, department: "Architecture", points: 21 },
    { position: 4, department: "Electronics Engineering", points: 14 },
    { position: 5, department: "Civil Engineering", points: 8 },
    { position: 6, department: "Electrical Engineering", points: 4 },
    { position: 7, department: "Mechanical Engineering", points: 2 },
    { position: 8, department: "MBA", points: 0 },
    { position: 9, department: "Computer Science Engineering", points: 0 },
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

      {/* Link to Excel file with small logo */}
      <div className="score-link-container">
        <a
          href="https://docs.google.com/file/d/1pGfYITq029Q0t77Zz1wgqqEfvra6G0wV/edit?usp=docslist_api&filetype=msexcel"
          target="_blank"
          rel="noopener noreferrer"
          className="score-link"
        >
          <img src="/p12blue.png" alt="Excel Logo" className="score-logo" />
          View Full Score Sheet
        </a>
      </div>
    </div>
  );
};

export default Score;
