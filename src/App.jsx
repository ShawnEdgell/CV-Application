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
  } = defaultTemplate;

  // Initialize state for user input
  const [name, setName] = useState(defaultName);
  const [address, setAddress] = useState(defaultAddress);
  const [email, setEmail] = useState(defaultEmail);
  const [phoneNumber, setPhoneNumber] = useState(defaultPhoneNumber);
  const [educations, setEducations] = useState([...defaultEducations]);
  const [experiences, setExperiences] = useState([...defaultExperiences]);
  const [skills, setSkills] = useState([...defaultSkills]);
  const [certificates, setCertificates] = useState([...defaultCertificates]);
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
          }}
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

      {/* Right side: Display user input */}
      <div className="right-side">
        <p>{name}</p>
        <p>{address}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>

        {/* Display Education */}
        {educations.length > 0 && (
          <>
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
          </>
        )}

        {/* Display Experience */}
        {experiences.length > 0 && (
          <>
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
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* Display Skills */}
        {skills.length > 0 && (
          <>
            <h2>Skills</h2>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </>
        )}

        {/* Display Certificates */}
        {certificates.length > 0 && (
          <>
            <h2>Certificates</h2>
            {certificates.map((certificate, index) => (
              <div key={index}>
                <p>{certificate.name}</p>
                <p>{certificate.date}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
