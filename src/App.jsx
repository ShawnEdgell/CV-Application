import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [experienceStartDate, setExperienceStartDate] = useState('');
  const [experienceEndDate, setExperienceEndDate] = useState('');
  const [experienceLocation, setExperienceLocation] = useState('');
  const [experienceDescription, setExperienceDescription] = useState('');

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
            placeholder="School"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
          <input
            type="text"
            placeholder="Degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <div className="education-dates">
            <input
              type="text"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Experience */}
        <div className="section">
          <h3>Experience</h3>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Position Title"
            value={positionTitle}
            onChange={(e) => setPositionTitle(e.target.value)}
          />
          <div className="experience-dates">
            <input
              type="text"
              placeholder="Start Date"
              value={experienceStartDate}
              onChange={(e) => setExperienceStartDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="End Date"
              value={experienceEndDate}
              onChange={(e) => setExperienceEndDate(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Location"
            value={experienceLocation}
            onChange={(e) => setExperienceLocation(e.target.value)}
          />
          <textarea
            placeholder="Description (optional)"
            value={experienceDescription}
            onChange={(e) => setExperienceDescription(e.target.value)}
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
        <p>School: {school}</p>
        <p>Degree: {degree}</p>
        <p>Start Date: {startDate}</p>
        <p>End Date: {endDate}</p>
        <p>Location: {location}</p>

        <h2>Experience</h2>
        <p>Company Name: {companyName}</p>
        <p>Position Title: {positionTitle}</p>
        <p>Start Date: {experienceStartDate}</p>
        <p>End Date: {experienceEndDate}</p>
        <p>Location: {experienceLocation}</p>
        {experienceDescription && (
          <div className="description">
            <h3>Description</h3>
            <p>{experienceDescription}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
