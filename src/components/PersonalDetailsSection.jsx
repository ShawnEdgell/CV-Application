import PropTypes from 'prop-types';

function PersonalDetailsSection({ toggleVisibility, activeSection, name, address, email, phoneNumber, setName, setAddress, setEmail, setPhoneNumber }) {
  return (
    <div className="section">
      <h3 onClick={() => toggleVisibility('personalDetails')}>
        <span className={`toggle-icon ${activeSection === 'personalDetails' ? 'expanded' : 'collapsed'}`}>
          {activeSection === 'personalDetails' ? '-' : '+'}
        </span>
        Personal Details
      </h3>
      <div style={{ display: activeSection === 'personalDetails' ? 'block' : 'none' }}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
    </div>
  );
}

PersonalDetailsSection.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
};

export default PersonalDetailsSection;
