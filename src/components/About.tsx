import React from 'react';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <TrendingUp className="h-8 w-8" />, value: '10+', label: 'Years Experience' },
    { icon: <Users className="h-8 w-8" />, value: '4', label: 'Team Members Led' },
    { icon: <Award className="h-8 w-8" />, value: '32%', label: 'Downtime Reduction' },
    { icon: <Target className="h-8 w-8" />, value: '25%', label: 'Forecast Accuracy' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Professional Summary</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Results-driven Data Scientist with 10+ years of experience in machine learning, 
                statistical modeling, and data engineering. I have a proven track record of building 
                scalable ML systems, delivering business insights, and leading cross-functional teams 
                in fast-paced environments.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm adept at solving complex problems using Python, SQL, and cloud technologies. 
                My passion lies in applying AI to real-world business problems with measurable ROI, 
                transforming data into actionable insights that drive strategic decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  <div className="text-blue-600 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;