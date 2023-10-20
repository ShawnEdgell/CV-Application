import PropTypes from 'prop-types';

function CertificatesSection({ toggleVisibility, activeSection, certificates, setCertificates, removeCertificate, addCertificate }) {
  return (
    <div className="section">
      <h2 onClick={() => toggleVisibility('certificatesSection')}>
        <span className={`toggle-icon ${activeSection === 'certificatesSection' ? 'expanded' : 'collapsed'}`}>
          {activeSection === 'certificatesSection' ? '-' : '+'}
        </span>
        Certificates
      </h2>
      <div style={{ display: activeSection === 'certificatesSection' ? 'block' : 'none' }}>
        {certificates.map((certificate, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Certificate Name"
              value={certificate.name}
              onChange={(e) => {
                const updatedCertificates = [...certificates];
                updatedCertificates[index].name = e.target.value;
                setCertificates(updatedCertificates);
              }}
            />
            <input
              type="text"
              placeholder="Date"
              value={certificate.date}
              onChange={(e) => {
                const updatedCertificates = [...certificates];
                updatedCertificates[index].date = e.target.value;
                setCertificates(updatedCertificates);
              }}
            />
            <button onClick={() => removeCertificate(index)}>Remove</button>
          </div>
        ))}
        <button onClick={addCertificate}>Add Certificate</button>
      </div>
    </div>
  );
}

CertificatesSection.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  certificates: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCertificates: PropTypes.func.isRequired,
  removeCertificate: PropTypes.func.isRequired,
  addCertificate: PropTypes.func.isRequired,
};

export default CertificatesSection;
