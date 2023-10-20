import PropTypes from 'prop-types';

function AboutMe({ toggleVisibility, activeSection, description, setDescription }) {
  return (
    <div className="section">
      <h2 onClick={() => toggleVisibility('aboutMeSection')}>
        <span className={`toggle-icon ${activeSection === 'aboutMeSection' ? 'expanded' : 'collapsed'}`}>
          {activeSection === 'aboutMeSection' ? '-' : '+'}
        </span>
        About Me
      </h2>
      <div style={{ display: activeSection === 'aboutMeSection' ? 'block' : 'none' }}>
        <textarea
          placeholder="Write a brief about yourself..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default AboutMe;
