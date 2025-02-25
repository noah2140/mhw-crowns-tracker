import React, { useState, useEffect } from 'react';
import './App.css';
import MonsterList from './components/MonsterList';
import StickyContainer from './components/StickyContainer';
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { IconType } from "react-icons";

const LightModeIcon: IconType = MdOutlineLightMode;
const DarkModeIcon: IconType = MdDarkMode;

const App = () => {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);

  const savedEndemic = localStorage.getItem('showEndemic') === 'true';
  const savedRequired = localStorage.getItem('showRequired') === 'true';
  const savedBaseGame = localStorage.getItem('baseGameFilter') || 'all';

  const [showEndemic, setShowEndemic] = useState(savedEndemic);
  const [showRequired, setShowRequired] = useState(savedRequired);
  const [baseGameFilter, setBaseGameFilter] = useState(savedBaseGame);

  const [shownMonstersCount, setShownMonstersCount] = useState(0);
  const [checkedMonstersCount, setCheckedMonstersCount] = useState(0);
  const [miniMonstersCount, setMiniMonstersCount] = useState(0);
  const [largeMonstersCount, setLargeMonstersCount] = useState(0);

  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());

    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('showEndemic', showEndemic.toString());
    localStorage.setItem('showRequired', showRequired.toString());
    localStorage.setItem('baseGameFilter', baseGameFilter);
  }, [showEndemic, showRequired, baseGameFilter]);

  const savedCheckedStates = JSON.parse(localStorage.getItem('monsterCheckedStates') || '{}');

  const updateMonsterCounts = (shownCount: number, overallCount: number, miniCount: number, largeCount: number) => {
    setShownMonstersCount(shownCount);
    setCheckedMonstersCount(overallCount);
    setMiniMonstersCount(miniCount);
    setLargeMonstersCount(largeCount);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button className="dark-mode-toggle" onClick={() => setIsDarkMode((prev) => !prev)}>
        {/* Ignore TypeScript error */}
        {isDarkMode ? (
          // @ts-ignore
          <MdOutlineLightMode size={20} />
        ) : (
          // @ts-ignore
          <MdDarkMode size={20} />
        )}
      </button>

      <button className="toggle-filter-btn" onClick={() => setShowFilters(prev => !prev)}>
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>

      {showFilters && (
        <div className="filterContainer">
          <div>
            <label>
              <input
                type="checkbox"
                checked={showEndemic}
                onChange={() => setShowEndemic(prev => !prev)}
              />
              Show Endemic Monsters
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={showRequired}
                onChange={() => setShowRequired(prev => !prev)}
              />
              Show Optional Monsters
            </label>
          </div>

          <div>
            <label>
              <select
                value={baseGameFilter}
                onChange={(e) => setBaseGameFilter(e.target.value)}
              >
                <option value="all">Base + Iceborne</option>
                <option value="true">Only Base Game</option>
                <option value="false">Only Iceborne</option>
              </select>
            </label>
          </div>
        </div>
      )}

      <MonsterList
        showEndemic={showEndemic}
        showRequired={showRequired}
        baseGameFilter={baseGameFilter}
        savedCheckedStates={savedCheckedStates}
        updateMonsterCounts={updateMonsterCounts}
      />

      <StickyContainer
        overallCrowns={shownMonstersCount}
        miniCrowns={miniMonstersCount}
        largeCrowns={largeMonstersCount}
        maxCrowns={shownMonstersCount}
      />
    </div>
  );
}

export default App;
