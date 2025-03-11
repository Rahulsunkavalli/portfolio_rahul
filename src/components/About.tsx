import React from 'react';

const About: React.FC = () => {
  const skills = {
    languages: ['Python', 'Java', 'C', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    frameworks: ['Pandas', 'NumPy', 'Scikit-Learn', 'Power-BI', 'OpenCV'],
    softSkills: ['Teamwork', 'Leadership', 'Communication', 'Problem Solving', 'Critical Thinking']
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-400">About Me</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium">B.Tech in Computer Science Engineering</h4>
                <p className="text-gray-400">Final Year Student</p>
                <p className="text-gray-400">2021 - 2025</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Career Objective</h3>
            <p className="text-gray-300">
              Seeking opportunities to apply my technical skills in Python development, data science, and web development to create innovative solutions. Passionate about leveraging technology for impactful applications in data analytics and AI-powered systems.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Technical Skills</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-900 bg-opacity-50 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-2">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-medium mb-2">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.softSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;