import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [educations, setEducations] = useState([]); // Array to store Education data
  const [experiences, setExperiences] = useState([]); // Array to store Experience data

  // Function to add an education to the array
  const addEducation = () => {
    setEducations([...educations, {}]);
  };

  // Function to remove an education from the array
  const removeEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  // Function to add an experience to the array
  const addExperience = () => {
    setExperiences([...experiences, {}]);
  };

  // Function to remove an experience from the array
  const removeExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  return (
    <div className="cv-app">
      {/* Left side: Input fields */}
      <div className="left-side">
        {/* Personal Details */}
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

        {/* Education */}
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

        {/* Experience */}
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
        <h2>Personal Details</h2>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phoneNumber}</p>

        <h2>Education</h2>
        {educations.map((education, index) => (
          <div key={index}>
            <p>School: {education.school}</p>
            <p>Degree: {education.degree}</p>
            <p>Start Date: {education.startDate}</p>
            <p>End Date: {education.endDate}</p>
            <p>Location: {education.location}</p>
          </div>
        ))}

        <h2>Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index}>
            <p>Company Name: {experience.companyName}</p>
            <p>Position Title: {experience.positionTitle}</p>
            <p>Start Date: {experience.startDate}</p>
            <p>End Date: {experience.endDate}</p>
            <p>Location: {experience.location}</p>
            {experience.description && (
              <div className="description">
                <h4>Description</h4>
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
