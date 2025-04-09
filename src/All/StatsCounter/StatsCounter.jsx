import React, { useEffect, useState } from 'react';
import './StatsCounter.css';

const statsData = [
  { target: 4.6, suffix: '/5+', label: 'Hacker rating', decimals: 1 },
  { target: 300, suffix: '+', label: 'Hacks' },
  { target: 25, suffix: '+', label: 'Speakers and mentors' },
  { target: 500, suffix: '+', label: 'Hackers' },
];

export const StatsCounter = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      const step = stat.decimals ? 0.1 : 1;
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.target) {
            newCounts[index] = parseFloat(
              Math.min(newCounts[index] + step, stat.target).toFixed(stat.decimals || 0)
            );
          }
          return newCounts;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="stats-container">
      {statsData.map((stat, i) => (
        <div className="stat-box" key={i}>
          <span className="stat-number">{counts[i]}{stat.suffix}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

