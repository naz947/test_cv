import React from 'react';
import { ExternalLink, GitBranch, TrendingUp, Users, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Demand Forecasting for Fashion Retailer',
      description: 'Built LSTM-based models that improved forecast accuracy by 25% over classical models.',
      icon: <TrendingUp className="h-8 w-8" />,
      technologies: ['Python', 'TensorFlow', 'LSTM', 'Time Series Analysis'],
      impact: '25% accuracy improvement',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Churn Prediction Platform',
      description: 'Designed and deployed a real-time churn prediction service using Flask + Docker + AWS Lambda.',
      icon: <Users className="h-8 w-8" />,
      technologies: ['Flask', 'Docker', 'AWS Lambda', 'Scikit-learn'],
      impact: 'Real-time predictions',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'AI Document Classifier',
      description: 'Developed BERT-based classifier for legal documents with 91% accuracy.',
      icon: <FileText className="h-8 w-8" />,
      technologies: ['BERT', 'NLP', 'PyTorch', 'Transformers'],
      impact: '91% classification accuracy',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Highlights</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${project.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {project.impact}
                  </span>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    <span className="text-sm font-medium">View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;