import React from "react";
import "./Contest.css";

const Contest = () => {
  return (
    <div className="contest-container">
      <div className="contest-box">
        <h2 className="contest-heading">Upcoming Contests</h2>
        <table className="contest-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Start</th>
              <th>Duration</th>
              <th>Starts In</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>START187</td>
              <td><a href="#">Starters 187 (Rated till 6 star)</a></td>
              <td>21 May 2025, Wed 20:00</td>
              <td>2 Hrs</td>
              <td>1 Hrs 33 Min</td>
            </tr>
            <tr>
              <td>START188</td>
              <td><a href="#">Starters 188</a></td>
              <td>28 May 2025, Wed 20:00</td>
              <td>2 Hrs</td>
              <td>7 Days 1 Hr</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contest;
