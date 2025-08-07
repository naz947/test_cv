import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'M.Sc. in Data Science',
      institution: 'Technical University of Munich, Germany',
      period: '2016 – 2018',
      type: 'Masters'
    },
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Anna University, Chennai, India',
      period: '2009 – 2013',
      type: 'Bachelors'
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Machine Learning – Specialty',
      year: '2021',
      provider: 'Amazon Web Services'
    },
    {
      title: 'TensorFlow Developer Certificate',
      year: '2020',
      provider: 'Google'
    },
    {
      title: 'Certified Data Scientist',
      year: '2019',
      provider: 'DataCamp'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                        <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                      </div>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {edu.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-8">
                <Award className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gradient-to-br from-teal-50 to-orange-50 p-6 rounded-xl border border-teal-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h4>
                        <p className="text-teal-600 font-medium text-sm">{cert.provider}</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;