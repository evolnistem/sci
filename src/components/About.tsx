
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-science-dark">About Our Company</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing innovative solutions for businesses looking to thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-science-dark">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and success in an ever-evolving digital world.
            </p>
            
            <div className="space-y-2 mt-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-science-blue mt-1" />
                <p className="text-gray-700">Industry-leading expertise and innovation</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-science-blue mt-1" />
                <p className="text-gray-700">Customer-focused approach with personalized solutions</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-science-blue mt-1" />
                <p className="text-gray-700">Commitment to sustainable and ethical business practices</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-science-dark">Company Timeline</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-science-blue pl-4 pb-4">
                <p className="text-sm text-science-blue font-medium">2018</p>
                <p className="text-gray-700">Founded with a vision to transform digital experiences</p>
              </div>
              <div className="border-l-2 border-science-blue pl-4 pb-4">
                <p className="text-sm text-science-blue font-medium">2020</p>
                <p className="text-gray-700">Expanded services to include data analytics and AI solutions</p>
              </div>
              <div className="border-l-2 border-science-blue pl-4">
                <p className="text-sm text-science-blue font-medium">2023</p>
                <p className="text-gray-700">Achieved industry recognition for innovative approaches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
