import React from 'react'

function SkillList({ skills, onDelete }) {
    return (
      <ul>
        {skills.map((skill, index) => (
          <li key={index} id={`skill-${index}`} onClick={() => onDelete(index)}>
            {skill}
          </li>
        ))}
      </ul>
    );
  }

export default SkillList