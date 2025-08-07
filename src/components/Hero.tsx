import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Globe, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              DJ
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-teal-200 bg-clip-text text-transparent">
              Dany Joseph
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-6 text-blue-100">
              Senior Data Scientist
            </p>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
              10+ years of experience in machine learning, statistical modeling, and data engineering. 
              Passionate about applying AI to real-world business problems with measurable ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 text-sm">
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <MapPin className="h-4 w-4" />
              <span>Berlin, Germany</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Phone className="h-4 w-4" />
              <span>+49 176 1234 5678</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Mail className="h-4 w-4" />
              <span>dany.joseph.ds@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Linkedin className="h-4 w-4" />
              <span>linkedin.com/in/danyjoseph-ds</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Globe className="h-4 w-4" />
              <span>www.danyjoseph.ai</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download CV</span>
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/10"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;