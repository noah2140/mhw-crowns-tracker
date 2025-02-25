import React, { useState, useEffect } from 'react';
import './MonsterList.css';
import Monster from './Monster';
import { initialMonsters } from '../assets/monsterList';

type MonsterListProps = {
    showEndemic: boolean;
    showRequired: boolean;
    baseGameFilter: string;
    savedCheckedStates: { [key: number]: { miniChecked: boolean, largeChecked: boolean } };
    updateMonsterCounts: (shownCount: number, overallCount: number, miniCount: number, largeCount: number) => void; // Adjusted for 4 arguments
  };  

const MonsterList: React.FC<MonsterListProps> = ({
  showEndemic,
  showRequired,
  baseGameFilter,
  savedCheckedStates,
  updateMonsterCounts
}) => {
  const [checkedStates, setCheckedStates] = useState(savedCheckedStates);

  useEffect(() => {
    localStorage.setItem('monsterCheckedStates', JSON.stringify(checkedStates));
  }, [checkedStates]);

  const filteredMonsters = initialMonsters.filter(monster => {
    const isEndemicMatch = showEndemic || !monster.endemic;
    const isRequiredMatch = showRequired || monster.required !== false;
    const isBaseGameMatch = baseGameFilter === 'all' || (baseGameFilter === 'true' && monster.baseGame) || (baseGameFilter === 'false' && !monster.baseGame);

    return isEndemicMatch && isRequiredMatch && isBaseGameMatch;
  });

  const handleCheckboxChange = (monsterId: number, type: 'mini' | 'large', checked: boolean) => {
    setCheckedStates(prevState => ({
      ...prevState,
      [monsterId]: {
        ...prevState[monsterId],
        [`${type}Checked`]: checked
      }
    }));
  };

  useEffect(() => {
    const shownCount = filteredMonsters.length;
    
    const miniCheckedCount = filteredMonsters.reduce((count, monster) => {
      return checkedStates[monster.id]?.miniChecked ? count + 1 : count;
    }, 0);
  
    const largeCheckedCount = filteredMonsters.reduce((count, monster) => {
      return checkedStates[monster.id]?.largeChecked ? count + 1 : count;
    }, 0);
  
    const overallCheckedCount = miniCheckedCount + largeCheckedCount;
  
    updateMonsterCounts(shownCount, overallCheckedCount, miniCheckedCount, largeCheckedCount);
  }, [filteredMonsters, checkedStates, updateMonsterCounts]);  

  return (
    <div className="monster-list-container">
      <table className="monster-table">
        <thead>
          <tr>
            <th colSpan={1} className="monster-header">Monster</th>
            <th>Mini</th>
            <th>Large</th>
          </tr>
        </thead>
        <tbody>
          {filteredMonsters.map((monster) => (
            <Monster
              key={monster.id}
              id={monster.id}
              name={monster.name}
              icon={monster.icon}
              baseGame={monster.baseGame}
              endemic={monster.endemic}
              required={monster.required}
              miniChecked={checkedStates[monster.id]?.miniChecked || false}
              largeChecked={checkedStates[monster.id]?.largeChecked || false}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonsterList;
