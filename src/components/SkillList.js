import React from 'react'

function SkillList({ skills, onDelete }) {
    return (
      <ul id="skill-list">
        {skills.map((skill, index) => (
          <li key={index} id={`skill-number-${index}`} onClick={() => onDelete(index)}>
            {skill}
          </li>
        ))}
      </ul>
    );
  }

export default SkillList