import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'Siemens AG',
      location: 'Berlin, Germany',
      period: 'Feb 2020 – Present',
      achievements: [
        'Led a team of 4 data scientists to develop predictive maintenance models that reduced equipment downtime by 32%.',
        'Built a real-time anomaly detection system using Kafka + PySpark, deployed on AWS EMR.',
        'Collaborated with product teams to integrate NLP-powered chatbots, improving user retention by 18%.',
        'Automated A/B testing pipeline using Airflow and Bayesian optimization.'
      ],
      tools: 'Python, SQL, AWS, PySpark, Scikit-learn, Airflow, Tableau'
    },
    {
      title: 'Data Scientist',
      company: 'Zalando SE',
      location: 'Berlin, Germany',
      period: 'Jan 2016 – Jan 2020',
      achievements: [
        'Developed customer segmentation models using K-means and hierarchical clustering for personalized marketing campaigns.',
        'Built a price optimization engine that increased profit margins by 12% across key categories.',
        'Created interactive dashboards for business stakeholders to explore key KPIs using Tableau.',
        'Partnered with Data Engineering to optimize ETL pipelines, reducing latency by 40%.'
      ],
      tools: 'Python, R, SQL, Spark, Tableau, Docker, Jenkins'
    },
    {
      title: 'Data Analyst → Junior Data Scientist',
      company: 'Cognizant Technology Solutions',
      location: 'Hyderabad, India',
      period: 'Jun 2013 – Dec 2015',
      achievements: [
        'Conducted root-cause analysis for operational inefficiencies in retail client workflows using Python and Excel VBA.',
        'Automated monthly reporting dashboards, cutting reporting time from 5 days to 30 minutes.',
        'Built early forecasting models for inventory management using ARIMA and Prophet.',
        'Promoted to Junior Data Scientist in 2015 for high-impact contributions to client analytics delivery.'
      ],
      tools: 'Excel, Python, R, SQL, Tableau'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-20">
                {/* Timeline dot */}
                <div className="absolute -left-14 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                      <p className="text-xl text-blue-600 font-semibold mb-1">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <ChevronRight className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Tools: </span>{exp.tools}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;