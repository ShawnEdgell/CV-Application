import PropTypes from 'prop-types';

function SkillsSection({ toggleVisibility, activeSection, skills, setSkills, removeSkill, addSkill }) {
  return (
    <div className="section">
      <h2 onClick={() => toggleVisibility('skillsSection')}>
        <span className={`toggle-icon ${activeSection === 'skillsSection' ? 'expanded' : 'collapsed'}`}>
          {activeSection === 'skillsSection' ? '-' : '+'}
        </span>
        Skills
      </h2>
      <div style={{ display: activeSection === 'skillsSection' ? 'block' : 'none' }}>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => {
                const updatedSkills = [...skills];
                updatedSkills[index] = e.target.value;
                setSkills(updatedSkills);
              }}
            />
            <button onClick={() => removeSkill(index)}>Remove</button>
          </div>
        ))}
        <button onClick={addSkill}>Add Skill</button>
      </div>
    </div>
  );
}

SkillsSection.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSkills: PropTypes.func.isRequired,
  removeSkill: PropTypes.func.isRequired,
  addSkill: PropTypes.func.isRequired,
};

export default SkillsSection;
