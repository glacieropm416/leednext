import './CompletionGrid.css';
import { useMemo } from 'react';

// Generate mock data for 365 days
const generateData = () => {
  const today = new Date();
  const data = [];

  for (let i = 364; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const count = Math.random() < 0.3 ? Math.floor(Math.random() * 6) : 0;
    data.push({ date, count });
  }

  return data;
};

function CompletionGrid() {
  const data = useMemo(generateData, []);

  const getColor = (count) => {
    if (count === 0) return 'level-0';
    if (count <= 2) return 'level-1';
    if (count <= 4) return 'level-2';
    if (count <= 6) return 'level-3';
    return 'level-4';
  };

  const weeks = Array.from({ length: 53 }, (_, weekIndex) =>
    data.filter((_, i) => Math.floor(i / 7) === weekIndex)
  );

  return (
    <div className="completion-container">
      <div className="completion-title">
        <strong>{data.filter(d => d.count > 0).length}</strong> submissions in the past one year
      </div>

      <div className="completion-grid">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="week-column">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`day-cell ${getColor(day.count)}`}
                title={`${day.date.toDateString()}: ${day.count} submissions`}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div className="completion-footer">
        Total active days: {data.filter(d => d.count > 0).length} &nbsp;&nbsp;
        | Max streak: 11
      </div>
    </div>
  );
}

export default CompletionGrid;
