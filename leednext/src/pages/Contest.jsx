import React from "react";
import "./Contest.css";

const Contest = () => {
  return (
    <div className="contest-container">
      {/* Featured Contests */}
      <h2 className="contest-featured-heading">Featured Contests</h2>
      <div className="featured-contests">
        <div className="featured-card">
          <div className="featured-image img-weekly-291"></div>
          <div className="contest-info">
            <h3>Weekly Contest 291</h3>
            <p><i className="fa fa-clock-o"></i> Ended &nbsp; July 1, 2022</p>
          </div>
        </div>

        <div className="featured-card">
          <div className="featured-image img-weekly-290"></div>
          <div className="contest-info">
            <h3>Weekly Contest 290</h3>
            <p><i className="fa fa-clock-o"></i> Ended &nbsp; July 24, 2022</p>
          </div>
        </div>

        <div className="featured-card">
          <div className="featured-image img-biweekly-85"></div>
          <div className="contest-info">
            <h3>Biweekly Contest 85</h3>
            <p><i className="fa fa-clock-o"></i> Ended &nbsp; Aug 20, 2022</p>
          </div>
        </div>
      </div>

      {/* Upcoming Contests */}
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
              <td>21 June 2025, Wed 20:00</td>
              <td>2 Hrs</td>
              <td>1 Hrs 33 Min</td>
            </tr>
            <tr>
              <td>START188</td>
              <td><a href="#">Starters 188</a></td>
              <td>28 June 2025, Wed 20:00</td>
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
