
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">QuantumScholarLab</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide specialized academic support for postgraduate students in experimental physics and chemistry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">Expert Assistance for Advanced Academic Research</h3>
            <p className="text-gray-600 mb-8">
              With a team of PhDs and subject-matter experts, we offer comprehensive support tailored specifically for experimental sciences. Our mission is to help postgraduate students overcome complex challenges in their research and academic pursuits.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-science-blue shrink-0 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Expert Research Team</h4>
                  <p className="text-gray-600">Our specialists hold advanced degrees from prestigious institutions with years of research experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-science-blue shrink-0 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Customized Approach</h4>
                  <p className="text-gray-600">We offer personalized support plans based on your specific research area and requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-science-blue shrink-0 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Confidential Assistance</h4>
                  <p className="text-gray-600">We maintain strict confidentiality for all client projects and research assistance.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-science-purple/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600" 
                  alt="Research Computer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600" 
                  alt="Programming for Research" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-science-blue/10 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-science-blue">10+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
              
              <div className="bg-science-teal/10 rounded-lg p-6 flex items-center justify-center mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-science-teal">500+</p>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
