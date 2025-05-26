import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  const navigate = useNavigate();

  const user = {
    name: 'Ashmith Rohan',
    age: 20,
    contact: '+91 8973257083',
    email: 'ashmith@example.com',
  };

  // Generate colorful streaks with random properties
  const streaks = Array.from({ length: 50 }).map((_, i) => {
    const colors = [
      ['#ff00cc', '#333399'],
      ['#00fff7', '#0073ff'],
      ['#39ff14', '#228b22'],
      ['#ff6f61', '#ff9966'],
      ['#fff700', '#ffa500'],
      ['#ff00ff', '#ff69b4']
    ];
    const color = colors[i % colors.length];
    const speed = (Math.random() * 1.5 + 0.5).toFixed(2); // 0.5s to 2s

    return (
      <div
        key={i}
        className="streak"
        style={{
          '--i': i,
          '--color-start': color[0],
          '--color-end': color[1],
          '--speed': `${speed}s`
        }}
      ></div>
    );
  });

  return (
    <div className="profile-page">
      {/* Animated light streaks */}
      <div className="streaks-container">{streaks}</div>

      <h2>User Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Contact:</strong> {user.contact}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      </div>
    </div>
  );
}

export default UserProfile;
