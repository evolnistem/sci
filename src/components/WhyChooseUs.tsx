
import React from 'react';
import { Shield, Users, Clock, Award, Sparkles, Gauge } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="h-8 w-8 text-science-blue" />,
    title: "100% Confidentiality",
    description: "Your research and personal information are always kept strictly confidential."
  },
  {
    icon: <Users className="h-8 w-8 text-science-blue" />,
    title: "PhD-Level Experts",
    description: "Our team consists of specialists with advanced degrees in physics and chemistry."
  },
  {
    icon: <Clock className="h-8 w-8 text-science-blue" />,
    title: "Timely Delivery",
    description: "We understand academic deadlines and ensure on-time delivery of all projects."
  },
  {
    icon: <Award className="h-8 w-8 text-science-blue" />,
    title: "High Success Rate",
    description: "96% of our clients have successfully completed their academic objectives."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-science-blue" />,
    title: "Custom Solutions",
    description: "Every service is tailored to your specific research needs and challenges."
  },
  {
    icon: <Gauge className="h-8 w-8 text-science-blue" />,
    title: "Cutting-Edge Methods",
    description: "We stay updated with the latest research methodologies and technologies."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-gradient">Us</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to academic excellence and specialized expertise sets us apart in supporting experimental science research.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex">
              <div className="mr-4 shrink-0">
                <div className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-gradient-to-r from-science-blue/10 to-science-teal/10 rounded-2xl border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Client Satisfaction Is Our Priority</h3>
              <p className="text-gray-600 mb-6">
                We pride ourselves on maintaining the highest standards of academic integrity while delivering exceptional support to postgraduate researchers.
              </p>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 font-medium">4.9/5 average client rating</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="italic text-gray-600">
                    "The assistance I received with my quantum mechanics experimental design was invaluable. The team's expertise helped me overcome significant challenges in my thesis research."
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-science-blue flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">John D.</p>
                      <p className="text-sm text-gray-500">PhD Candidate in Physics</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="italic text-gray-600">
                    "Their expertise in analytical chemistry methods significantly improved my research outcomes. The personalized support was exactly what I needed for my postgraduate work."
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-science-teal flex items-center justify-center text-white font-bold">
                      ML
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Maria L.</p>
                      <p className="text-sm text-gray-500">Chemistry Research Associate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
