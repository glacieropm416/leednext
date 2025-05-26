import React from "react";
import "./problems.css";

const Problems = () => {
  return (
    <div className="problems-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">LeetNext's Problems</h1>
        <h2 className="hero-subtitle">Crash Course:</h2>
        <p className="hero-description">System Design for Interviews and Beyond</p>
        <div className="divider"></div>
      </section>

     {/* CTA Button */}
<div className="cta-container">
  <button
    className="cta-button"
    onClick={() => window.open('https://shandeepkm.medium.com/system-design-a-guide-for-reviews-interviews-and-beyond-412a21d4da48', '_blank')}
  >
    Start Learning
  </button>
</div>

      {/* Course Card */}
      <div className="course-card-container">
        <div className="course-card">
          <h3 className="course-title">LeetNext's Problems</h3>
          <h4 className="course-subtitle">Crash Course:</h4>
          <p className="course-description">Data Structures and Algorithms</p>
          <button
  className="course-button"
  onClick={() => window.open('https://www.codechef.com/roadmap/data-structures-and-algorithms', '_blank')}
>
  Start Learning
</button>

        </div>
      </div>

      {/* Trending Section */}
      <section className="trending-section">
        <h3 className="trending-title">New & Trending Company Qs (Vol.1)</h3>
        <p className="trending-description">Latest Qs From Big Tech</p>
        <button
  className="trending-button"
  onClick={() => window.open('https://www.tatacrucible.com/', '_blank')}
>
  Claim Now
</button>

      </section>
    </div>
  );
};

export default Problems;