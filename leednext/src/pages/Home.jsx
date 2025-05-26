import { useState, useEffect } from 'react';
import Particles from './particles';
import CodeEditor from '../components/CodeEditor';
import './Home.css';
import CompletionGrid from '../pages/CompletionGrid';

function Home({ darkMode }) {
  const [code, setCode] = useState('// Write your code here');
  const [streak, setStreak] = useState(1); // Start from Day 1

  useEffect(() => {
    const interval = setInterval(() => {
      setStreak(prev => prev + 1);
    }, 30000); // 30 seconds = 30000 ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Smoke Particles Background */}
      <Particles />

      {/* Content */}
      <div className="content-wrapper">
        {/* Centered Welcome Header */}
        <div className="welcome-section">
          <h1 className="welcome-title">
            Welcome to <span className="brand-name">LeedNext</span>
          </h1>

          {/* New Flex Row for Streak + CompletionGrid */}
          <div className="streak-grid-row">
            <div className="streak-badge">
              🔥 Daily Streak: {streak} day{streak !== 1 ? 's' : ''}
            </div>
            <CompletionGrid />
          </div>
        </div>

        {/* Daily Challenge */}
        <section className="daily-challenge">
          <div className="challenge-card">
            <h2 className="challenge-title">🔥 Today's Challenge</h2>
            <h3 className="problem-title">🧠 Two Sum</h3>
            <div className="problem-description">
              Given an array of integers <code>nums</code> and an integer 
              <code>target</code>, return the indices of the two numbers such that 
              they add up to <code>target</code>.<br /><br />
              You may assume that each input would have exactly one solution, and you may not use the same element twice.
            </div>
          </div>
        </section>

        {/* Code Editor */}
        <section className="editor-section">
          <CodeEditor code={code} setCode={setCode} />
        </section>
      </div>
    </div>
  );
}

export default Home;
