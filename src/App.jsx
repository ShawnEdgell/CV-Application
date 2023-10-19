import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [projects, setProjects] = useState('');

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
          <input
            type="text"
            placeholder="Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>

        {/* Experience */}
        <div className="section">
          <h3>Experience</h3>
          <input
            type="text"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        {/* Skills */}
        <div className="section">
          <h3>Skills</h3>
          <input
            type="text"
            placeholder="Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>

        {/* Projects */}
        <div className="section">
          <h3>Projects</h3>
          <input
            type="text"
            placeholder="Projects"
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
          />
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
        <p>{education}</p>

        <h2>Experience</h2>
        <p>{experience}</p>

        <h2>Skills</h2>
        <p>{skills}</p>

        <h2>Projects</h2>
        <p>{projects}</p>
      </div>
    </div>
  );
}

export default App;
