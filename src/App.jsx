import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const defaultTemplate = {
    name: 'John Smith',
    address: '123 Example Street',
    email: 'john@example.com',
    phoneNumber: '123-456-7890',
    educations: [
      {
        school: 'Example University',
        degree: 'Bachelor of Science',
        startDate: '2000',
        endDate: '2004',
        location: 'Example City',
      },
    ],
    experiences: [
      {
        companyName: 'Example Company',
        positionTitle: 'Software Engineer',
        startDate: '2005',
        endDate: '2010',
        location: 'Example City',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
    skills: [
      'JavaScript',
      'React.js',
      'Node.js'
    ],
    certificates: [
      {
        name: 'React Developer Certificate',
        date: '2015'
      },
      {
        name: 'Full Stack Web Development',
        date: '2017'
      }
    ]
  };

  // Initialize state with default template values
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [activeSection, setActiveSection] = useState('');
  

  useEffect(() => {
    setName(defaultTemplate.name);
    setAddress(defaultTemplate.address);
    setEmail(defaultTemplate.email);
    setPhoneNumber(defaultTemplate.phoneNumber);
    setEducations([...defaultTemplate.educations]);
    setExperiences([...defaultTemplate.experiences]);
    setSkills([...defaultTemplate.skills]);
    setCertificates([...defaultTemplate.certificates]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addEducation = () => {
    setEducations([...educations, {}]);
  };

  const removeEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  const addExperience = () => {
    setExperiences([...experiences, {}]);
  };

  const removeExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const addTemplate = () => {
    setName(defaultTemplate.name);
    setAddress(defaultTemplate.address);
    setEmail(defaultTemplate.email);
    setPhoneNumber(defaultTemplate.phoneNumber);
    setEducations([...defaultTemplate.educations]);
    setExperiences([...defaultTemplate.experiences]);
    setSkills([...defaultTemplate.skills]);
    setCertificates([...defaultTemplate.certificates]);
  };

  const clearTemplate = () => {
    setName('');
    setAddress('');
    setEmail('');
    setPhoneNumber('');
    setEducations([]);
    setExperiences([]);
    setSkills([]);
    setCertificates([]);
  };

  const addSkill = () => {
    setSkills([...skills, '']);  // Add an empty string as a placeholder for a new skill.
  };
  
  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };
  
  const addCertificate = () => {
    setCertificates([...certificates, { name: '', date: '' }]);
  };
  
  const removeCertificate = (index) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    setCertificates(updatedCertificates);
  };

  // Toggle visibility function
  const toggleVisibility = (section) => {
    if (activeSection === section) {
      setActiveSection('');  // If clicked section is already active, close it.
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="cv-app">
      <div className="left-side">
        <div className="section">
          <h3>Template Actions</h3>
          <button onClick={addTemplate}>Add Template</button>
          <button onClick={clearTemplate}>Clear Template</button>
        </div>

        
        <div className="section">
          <h3>Personal Details</h3>
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



<div className="section">
  <h3 onClick={() => toggleVisibility('skillsSection')}>
    <span className={`toggle-icon ${activeSection === 'skillsSection' ? 'expanded' : 'collapsed'}`}>
      {activeSection === 'skillsSection' ? '-' : '+'}
    </span>
    Skills
  </h3>
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


<div className="section">
  <h3 onClick={() => toggleVisibility('certificatesSection')}>
    <span className={`toggle-icon ${activeSection === 'certificatesSection' ? 'expanded' : 'collapsed'}`}>
      {activeSection === 'certificatesSection' ? '-' : '+'}
    </span>
    Certificates
  </h3>
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



      </div>

      {/* Right side: Display user input */}
      <div className="right-side">
        <p>{name}</p>
        <p>{address}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>

        <h2>Education</h2>
        {educations.map((education, index) => (
          <div key={index}>
            <p>{education.school}</p>
            <p>{education.degree}</p>
            <p>{education.startDate}</p>
            <p>{education.endDate}</p>
            <p>{education.location}</p>
          </div>
        ))}

        <h2>Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index}>
            <p>{experience.companyName}</p>
            <p>{experience.positionTitle}</p>
            <p>{experience.startDate}</p>
            <p>{experience.endDate}</p>
            <p>{experience.location}</p>
            {experience.description && (
              <div className="description">
                <p>{experience.description}</p>
                <br></br>
              </div>
            )}
          </div>
        ))}

        <h2>Skills</h2>
        <ul>
        {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
        ))}
        </ul>

        <h2>Certificates</h2>
        {certificates.map((certificate, index) => (
        <div key={index}>
        <p>{certificate.name}</p>
        <p>{certificate.date}</p>
    </div>
  ))}
      </div>
    </div>
  );
}

export default App;
