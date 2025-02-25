import React from 'react';
import './Monster.css';

type MonsterProps = {
  id: number;
  name: string;
  icon: string;
  baseGame: boolean;
  endemic: boolean;
  required?: boolean;
  miniChecked: boolean;
  largeChecked: boolean;
  onCheckboxChange: (monsterId: number, type: 'mini' | 'large', checked: boolean) => void; // Callback for both mini and large checkboxes
};

const Monster: React.FC<MonsterProps> = ({
  id,
  name,
  icon,
  baseGame,
  endemic,
  required,
  miniChecked,
  largeChecked,
  onCheckboxChange
}) => {
  return (
    <tr className="monster-row">
      <td className="monster-info">
        <div className="icon-container">
          <img src={icon} alt={name} className="monster-icon" />
        </div>
        <div className="name-container">
          <span className="monster-name">{name}</span>
        </div>
      </td>

      <td className="checkbox-cell">
        <input 
          type="checkbox" 
          checked={miniChecked} 
          onChange={(e) => onCheckboxChange(id, 'mini', e.target.checked)}
        />
      </td>

      <td className="checkbox-cell">
        <input 
          type="checkbox" 
          checked={largeChecked} 
          onChange={(e) => onCheckboxChange(id, 'large', e.target.checked)}
        />
      </td>
    </tr>
  );
};

export default Monster;
