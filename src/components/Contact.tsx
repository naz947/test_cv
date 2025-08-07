import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'dany.joseph.ds@gmail.com',
      link: 'mailto:dany.joseph.ds@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+49 176 1234 5678',
      link: 'tel:+491761234567'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      details: 'Berlin, Germany',
      link: null
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: 'LinkedIn',
      details: 'linkedin.com/in/danyjoseph-ds',
      link: 'https://linkedin.com/in/danyjoseph-ds'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Ready to discuss your next data science project? Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <MessageCircle className="h-6 w-6 mr-3 text-blue-400" />
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-300">
                    <div className="text-blue-400 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-blue-200 hover:text-blue-100 transition-colors duration-200"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.details}
                        </a>
                      ) : (
                        <span className="text-blue-200">{info.details}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center lg:text-left">
                <p className="text-blue-200 mb-6">
                  Available for freelance projects, consulting opportunities, and full-time positions.
                </p>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a 
                    href="https://linkedin.com/in/danyjoseph-ds" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="http://www.danyjoseph.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-200 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-200">
            © 2025 Dany Joseph. All rights reserved. | Built with passion for data science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;