import React from 'react';
import { Code, Database, Cloud, BarChart3, Cog, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="h-6 w-6" />,
      skills: ['Python', 'R', 'SQL', 'Bash'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'ML/AI',
      icon: <Cog className="h-6 w-6" />,
      skills: ['Scikit-learn', 'XGBoost', 'LightGBM', 'TensorFlow', 'Keras', 'NLP (spaCy, NLTK)', 'Time-Series'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Big Data',
      icon: <Database className="h-6 w-6" />,
      skills: ['Spark', 'Hadoop', 'Kafka'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Cloud',
      icon: <Cloud className="h-6 w-6" />,
      skills: ['AWS (S3, EC2, EMR, SageMaker)', 'GCP (BigQuery)'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Visualization',
      icon: <BarChart3 className="h-6 w-6" />,
      skills: ['Tableau', 'Power BI', 'Plotly', 'Dash'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Workflow & DevOps',
      icon: <GitBranch className="h-6 w-6" />,
      skills: ['Airflow', 'Git', 'Docker', 'Jenkins', 'MLflow'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const languages = [
    { name: 'English', level: 'Full Professional', percentage: 95 },
    { name: 'German', level: 'Intermediate (B1)', percentage: 60 },
    { name: 'Tamil', level: 'Native', percentage: 100 }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray-700 mr-2 mb-2 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Languages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{lang.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{lang.level}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;