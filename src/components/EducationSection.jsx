import PropTypes from 'prop-types';

function EducationSection({ toggleVisibility, activeSection, educations, setEducations, removeEducation, addEducation }) {
  return (
    <div className="section">
      <h3 onClick={() => toggleVisibility('educationSection')}>
        <span className={`toggle-icon ${activeSection === 'educationSection' ? 'expanded' : 'collapsed'}`}>
          {activeSection === 'educationSection' ? '-' : '+'}
        </span>
        Education
      </h3>
      <div style={{ display: activeSection === 'educationSection' ? 'block' : 'none' }}>
        {educations.map((education, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="School"
              value={education.school || ''}
              onChange={(e) => {
                const updatedEducations = [...educations];
                updatedEducations[index] = {
                  ...updatedEducations[index],
                  school: e.target.value,
                };
                setEducations(updatedEducations);
              }}
            />
            <input
              type="text"
              placeholder="Degree"
              value={education.degree || ''}
              onChange={(e) => {
                const updatedEducations = [...educations];
                updatedEducations[index] = {
                  ...updatedEducations[index],
                  degree: e.target.value,
                };
                setEducations(updatedEducations);
              }}
            />
            <div className="education-dates">
              <input
                type="text"
                placeholder="Start Date"
                value={education.startDate || ''}
                onChange={(e) => {
                  const updatedEducations = [...educations];
                  updatedEducations[index] = {
                    ...updatedEducations[index],
                    startDate: e.target.value,
                  };
                  setEducations(updatedEducations);
                }}
              />
              <input
                type="text"
                placeholder="End Date"
                value={education.endDate || ''}
                onChange={(e) => {
                  const updatedEducations = [...educations];
                  updatedEducations[index] = {
                    ...updatedEducations[index],
                    endDate: e.target.value,
                  };
                  setEducations(updatedEducations);
                }}
              />
            </div>
            <input
              type="text"
              placeholder="Location"
              value={education.location || ''}
              onChange={(e) => {
                const updatedEducations = [...educations];
                updatedEducations[index] = {
                  ...updatedEducations[index],
                  location: e.target.value,
                };
                setEducations(updatedEducations);
              }}
            />
            <button onClick={() => removeEducation(index)}>Remove</button>
          </div>
        ))}
        <button onClick={() => addEducation()}>Add Education</button>
      </div>
    </div>
  );
}

EducationSection.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  educations: PropTypes.array.isRequired,
  setEducations: PropTypes.func.isRequired,
  removeEducation: PropTypes.func.isRequired,
  addEducation: PropTypes.func.isRequired,
};

export default EducationSection;
