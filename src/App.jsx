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
  };

  // Initialize state with default template values
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setName(defaultTemplate.name);
    setAddress(defaultTemplate.address);
    setEmail(defaultTemplate.email);
    setPhoneNumber(defaultTemplate.phoneNumber);
    setEducations([...defaultTemplate.educations]);
    setExperiences([...defaultTemplate.experiences]);
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
  };

  const clearTemplate = () => {
    setName('');
    setAddress('');
    setEmail('');
    setPhoneNumber('');
    setEducations([]);
    setExperiences([]);
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
          <h3>Education</h3>
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

        <div className="section">
          <h3>Experience</h3>
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
      </div>
    </div>
  );
}

export default App;
