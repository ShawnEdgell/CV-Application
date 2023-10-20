import { useMemo } from 'react';

const DefaultTemplate = () => {
  return useMemo(() => ({
    aboutMe: 'I am a passionate software engineer with expertise in web development technologies. My goal is to create meaningful and user-friendly web applications that solve real-world problems.',
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
    skills: ['JavaScript', 'React.js', 'Node.js'],
    certificates: [
      {
        name: 'React Developer Certificate',
        date: '2015',
      },
      {
        name: 'Full Stack Web Development',
        date: '2017',
      },
    ],
  }), []);
};

export default DefaultTemplate;