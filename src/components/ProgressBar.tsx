import React from 'react';

interface ProgressBarProps {
  title: string;
  current: number;
  max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, current, max }) => {
  const progress = (current / max) * 100;
  const fraction = `${current} / ${max}`;

  return (
    <div className="progress-bar-container">
      <h3>{title}</h3>
      <div className="progress-bar">
        <div className="progress-bar-filled" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-bar-info">
        <span>{fraction}</span>
        <span>{`${Math.round(progress)}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
