import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [projects, setProjects] = useState('');

  return (
    <div className="cv-app">
      {/* Left side: Input fields */}
      <div className="left-side">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact Information"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="text"
          placeholder="Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <input
          type="text"
          placeholder="Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <input
          type="text"
          placeholder="Projects"
          value={projects}
          onChange={(e) => setProjects(e.target.value)}
        />
      </div>

      {/* Right side: Display user input */}
      <div className="right-side">
        <h2>Name</h2>
        <p>{name}</p>
        <h2>Contact</h2>
        <p>{contact}</p>
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
