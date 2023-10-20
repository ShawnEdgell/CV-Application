// Import necessary modules and components
import { useState } from 'react';
import './App.css';
import TemplateActions from './components/TemplateActions';
import PersonalDetailsSection from './components/PersonalDetailsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import CertificatesSection from './components/CertificatesSection';
import DefaultTemplate from './components/DefaultTemplate';
import AboutMe from './components/AboutMe';

function App() {
  // Initialize state with default template values using the DefaultTemplate component
  const defaultTemplate = DefaultTemplate();

  // Destructure default template data
  const {
    name: defaultName,
    address: defaultAddress,
    email: defaultEmail,
    phoneNumber: defaultPhoneNumber,
    educations: defaultEducations,
    experiences: defaultExperiences,
    skills: defaultSkills,
    certificates: defaultCertificates,
    aboutMe: defaultAboutMe, // Add this line to destructure the aboutMe field
  } = defaultTemplate;

  // Now you can use the destructured variables without re-declaring defaultTemplate
  const [name, setName] = useState(defaultName);
  const [address, setAddress] = useState(defaultAddress);
  const [email, setEmail] = useState(defaultEmail);
  const [phoneNumber, setPhoneNumber] = useState(defaultPhoneNumber);
  const [educations, setEducations] = useState([...defaultEducations]);
  const [experiences, setExperiences] = useState([...defaultExperiences]);
  const [skills, setSkills] = useState([...defaultSkills]);
  const [certificates, setCertificates] = useState([...defaultCertificates]);
  const [description, setDescription] = useState(defaultAboutMe); // Initialize description with defaultAboutMe
  const [activeSection, setActiveSection] = useState('');

  // Reset user input to default template values
  const resetToDefaultTemplate = () => {
    setName(defaultName);
    setAddress(defaultAddress);
    setEmail(defaultEmail);
    setPhoneNumber(defaultPhoneNumber);
    setEducations([...defaultEducations]);
    setExperiences([...defaultExperiences]);
    setSkills([...defaultSkills]);
    setCertificates([...defaultCertificates]);
    setDescription(defaultAboutMe); // Reset description to defaultAboutMe
  };

  // Add an empty education section
  const addEducation = () => {
    setEducations([...educations, {}]);
  };

  // Remove an education section by index
  const removeEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  // Add an empty experience section
  const addExperience = () => {
    setExperiences([...experiences, {}]);
  };

  // Remove an experience section by index
  const removeExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  // Add an empty skill
  const addSkill = () => {
    setSkills([...skills, '']);
  };

  // Remove a skill by index
  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  // Add an empty certificate section
  const addCertificate = () => {
    setCertificates([...certificates, { name: '', date: '' }]);
  };

  // Remove a certificate section by index
  const removeCertificate = (index) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    setCertificates(updatedCertificates);
  };

  // Toggle visibility function
  const toggleVisibility = (section) => {
    if (activeSection === section) {
      setActiveSection(''); // If clicked section is already active, close it.
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="cv-app">
      <div className="left-side">
        <div className="left-top">
        <AboutMe
        toggleVisibility={toggleVisibility}
        activeSection={activeSection}
        description={description}
        setDescription={setDescription}
      />

        {/* PersonalDetailsSection component */}
        <PersonalDetailsSection
          toggleVisibility={toggleVisibility}
          activeSection={activeSection}
          name={name}
          address={address}
          email={email}
          phoneNumber={phoneNumber}
          setName={setName}
          setAddress={setAddress}
          setEmail={setEmail}
          setPhoneNumber={setPhoneNumber}
        />

        {/* EducationSection component */}
        <EducationSection
          toggleVisibility={toggleVisibility}
          activeSection={activeSection}
          educations={educations}
          setEducations={setEducations}
          removeEducation={removeEducation}
          addEducation={addEducation}
        />

        {/* ExperienceSection component */}
        <ExperienceSection
          toggleVisibility={toggleVisibility}
          activeSection={activeSection}
          experiences={experiences}
          setExperiences={setExperiences}
          removeExperience={removeExperience}
          addExperience={addExperience}
        />

        {/* SkillsSection component */}
        <SkillsSection
          toggleVisibility={toggleVisibility}
          activeSection={activeSection}
          skills={skills}
          setSkills={setSkills}
          removeSkill={removeSkill}
          addSkill={addSkill}
        />

        {/* CertificatesSection component */}
        <CertificatesSection
          toggleVisibility={toggleVisibility}
          activeSection={activeSection}
          certificates={certificates}
          setCertificates={setCertificates}
          removeCertificate={removeCertificate}
          addCertificate={addCertificate}
        />
        </div>

        <div className="left-bottom">
        {/* TemplateActions component */}
        <TemplateActions
          addTemplate={resetToDefaultTemplate}
          clearTemplate={() => {
            // Clear all user input
            setName('');
            setAddress('');
            setEmail('');
            setPhoneNumber('');
            setEducations([]);
            setExperiences([]);
            setSkills([]);
            setCertificates([]);
            setDescription(''); // Clear the About Me section
          }}
        />
        </div>
      </div>

      <div className="right-side">
      {name || address || email || phoneNumber ? (
        <div className="personal-name">
        <h1>{name}</h1>
        <div className="personal-info">
        <p>{address}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        </div>
        </div>
        ) : null}

        {/* Display Description (About Me) */}
        <div className={`user-information ${activeSection === 'aboutMeSection' ? 'active' : ''}`}>
          <p>{description}</p>
        </div>


        {/* Display Education */}
        {educations.length > 0 && (
          <>
            <h3>Education</h3>
            {educations.map((education, index) => (
              <div className="education" key={index}>
                <p>{education.school}</p>
                <p>{education.degree}</p>
                <p>{education.startDate} - {education.endDate}</p>
                <p>{education.location}</p>
              </div>
            ))}
          </>
        )}

        {/* Display Experience */}
        {experiences.length > 0 && (
          <>
            <h3>Experience</h3>
            {experiences.map((experience, index) => (
              <div className="experience" key={index}>
                <p>{experience.companyName}</p>
                <p>{experience.positionTitle}</p>
                <p>{experience.startDate} - {experience.endDate}</p>
                <p>{experience.location}</p>
                {experience.description && (
                  <div className="description">
                    <p>{experience.description}</p>
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* Display Skills */}
        {skills.length > 0 && (
      
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Display Certificates */}
        {certificates.length > 0 && (
          <div className="certificates">
            <h3>Certificates</h3>
            {certificates.map((certificate, index) => (
              <div key={index}>
                <p>{certificate.name}</p>
                <p>{certificate.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
