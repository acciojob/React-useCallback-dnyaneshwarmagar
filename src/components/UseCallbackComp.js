// UseCallbackComp.js

import React, { useState, useCallback } from 'react';
import SkillList from './SkillList';



function UseCallbackComp() {
  const [inputValue, setInputValue] = useState('');
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddSkill = useCallback(() => {
    if (inputValue.trim() !== '' && !skills.includes(inputValue)) {
      setSkills([...skills, inputValue]);
      setInputValue('');
    }
  }, [inputValue, skills]);

  const handleDeleteSkill = useCallback((index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  }, []);

  return (
    <div>
      <h2 id="heading">Skills</h2>
      <input
        type="text"
        id="skill-input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button id="skill-add-btn" onClick={handleAddSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} onDelete={handleDeleteSkill} />
    </div>
  );
}

export default UseCallbackComp;
