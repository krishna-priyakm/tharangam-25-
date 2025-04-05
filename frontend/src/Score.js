import React from "react";
import "./score.css"; // Import CSS file

const Score = () => {
  const scores = [
    { position: 1, department: "MCA", points: 145 },
    { position: 2, department: "PHD", points: 111 },
    { position: 3, department: "Civil Engineering", points: 54 },
    { position: 4, department: "Electronics Engineering", points: 52 },
    { position: 5, department: "Mechanical Engineering", points: 34 },
    { position: 6, department: "Electrical Engineering", points: 30 },
    { position: 7, department: "Architecture", points: 27 },
    { position: 8, department: "MBA", points: 11 },
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
