import React from 'react';
import ProgressBar from './ProgressBar';
import './StickyContainer.css';

interface StickyContainerProps {
    overallCrowns: number;
    miniCrowns: number;
    largeCrowns: number;
    maxCrowns: number;
  }
  
  const StickyContainer: React.FC<StickyContainerProps> = ({ overallCrowns, miniCrowns, largeCrowns, maxCrowns }) => {
    return (
      <div className="sticky-container">
        <ProgressBar title="Overall" current={miniCrowns + largeCrowns} max={maxCrowns * 2} />  {/* Multiply by 2 */}
        <ProgressBar title="Mini" current={miniCrowns} max={maxCrowns} />
        <ProgressBar title="Large" current={largeCrowns} max={maxCrowns} />
      </div>
    );
  };  

export default StickyContainer;
