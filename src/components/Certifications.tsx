import React from 'react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Python Programming",
      issuer: "Coursera",
      date: "June 2023",
      description: "Comprehensive course covering Python fundamentals, data structures, algorithms, and application development."
    },
    {
      id: 2,
      title: "Cloud Computing Fundamentals",
      issuer: "GREAT LEARNING",
      date: "August 2023",
      description: "Introduction to cloud computing concepts, AWS services, and deployment strategies."
    },
    {
      id: 3,
      title: "Android Development",
      issuer: "GREAT LEARNING",
      date: "January 2024",
      description: "Mobile application development using Android Studio, Java, and Kotlin."
    }
  ];

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Technology Job Simulation",
      company: "Deloitte Australia",
      date: "JANUARYU 2025",
      description: "Participated in a virtual job simulation focused on technology consulting, data analysis, and client presentations."
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "Tech Solutions Inc.",
      date: "May 2023 - July 2023",
      description: "Developed responsive web applications using React and Node.js. Collaborated with a team of developers to implement new features and fix bugs."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-400">Certifications & Experience</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Certifications</h3>
          <div className="space-y-6">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-medium text-white">{cert.title}</h4>
                  <span className="text-sm text-gray-400">{cert.date}</span>
                </div>
                <p className="text-blue-300 mb-2">{cert.issuer}</p>
                <p className="text-gray-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-medium text-white">{exp.title}</h4>
                  <span className="text-sm text-gray-400">{exp.date}</span>
                </div>
                <p className="text-blue-300 mb-2">{exp.company}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;