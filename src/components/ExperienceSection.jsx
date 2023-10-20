import PropTypes from 'prop-types';

function ExperienceSection({
  toggleVisibility,
  activeSection,
  experiences,
  setExperiences,
  removeExperience,
  addExperience,
}) {
  return (
    <div className="section">
      <h3 onClick={() => toggleVisibility('experienceSection')}>
        <span className={`toggle-icon ${activeSection === 'experienceSection' ? 'expanded' : 'collapsed'}`}>
          {activeSection === 'experienceSection' ? '-' : '+'}
        </span>
        Experience
      </h3>
      <div style={{ display: activeSection === 'experienceSection' ? 'block' : 'none' }}>
        {experiences.map((experience, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Company Name"
              value={experience.companyName || ''}
              onChange={(e) => {
                const updatedExperiences = [...experiences];
                updatedExperiences[index] = {
                  ...updatedExperiences[index],
                  companyName: e.target.value,
                };
                setExperiences(updatedExperiences);
              }}
            />
            <input
              type="text"
              placeholder="Position Title"
              value={experience.positionTitle || ''}
              onChange={(e) => {
                const updatedExperiences = [...experiences];
                updatedExperiences[index] = {
                  ...updatedExperiences[index],
                  positionTitle: e.target.value,
                };
                setExperiences(updatedExperiences);
              }}
            />
            <div className="experience-dates">
              <input
                type="text"
                placeholder="Start Date"
                value={experience.startDate || ''}
                onChange={(e) => {
                  const updatedExperiences = [...experiences];
                  updatedExperiences[index] = {
                    ...updatedExperiences[index],
                    startDate: e.target.value,
                  };
                  setExperiences(updatedExperiences);
                }}
              />
              <input
                type="text"
                placeholder="End Date"
                value={experience.endDate || ''}
                onChange={(e) => {
                  const updatedExperiences = [...experiences];
                  updatedExperiences[index] = {
                    ...updatedExperiences[index],
                    endDate: e.target.value,
                  };
                  setExperiences(updatedExperiences);
                }}
              />
            </div>
            <input
              type="text"
              placeholder="Location"
              value={experience.location || ''}
              onChange={(e) => {
                const updatedExperiences = [...experiences];
                updatedExperiences[index] = {
                  ...updatedExperiences[index],
                  location: e.target.value,
                };
                setExperiences(updatedExperiences);
              }}
            />
            <textarea
              className="description-textarea"
              placeholder="Description (optional)"
              value={experience.description || ''}
              onChange={(e) => {
                const updatedExperiences = [...experiences];
                updatedExperiences[index] = {
                  ...updatedExperiences[index],
                  description: e.target.value,
                };
                setExperiences(updatedExperiences);
              }}
            />
            <button onClick={() => removeExperience(index)}>Remove</button>
          </div>
        ))}
        <button onClick={() => addExperience()}>Add Experience</button>
      </div>
    </div>
  );
}

ExperienceSection.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  experiences: PropTypes.array.isRequired,
  setExperiences: PropTypes.func.isRequired,
  removeExperience: PropTypes.func.isRequired,
  addExperience: PropTypes.func.isRequired,
};

export default ExperienceSection;
