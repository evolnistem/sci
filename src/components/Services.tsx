
import React from 'react';
import { 
  FlaskConical, 
  Microscope, 
  BookOpen, 
  FileText, 
  Lightbulb, 
  LineChart
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <FlaskConical className="h-10 w-10 text-science-blue" />,
    title: "Experimental Design Assistance",
    description: "Get expert guidance on designing robust experimental setups for physics and chemistry research projects."
  },
  {
    icon: <Microscope className="h-10 w-10 text-science-blue" />,
    title: "Data Analysis & Interpretation",
    description: "Advanced statistical analysis and scientific interpretation of experimental results and measurements."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-science-blue" />,
    title: "Literature Review & Research",
    description: "Comprehensive literature surveys and research summaries specific to your experimental field."
  },
  {
    icon: <FileText className="h-10 w-10 text-science-blue" />,
    title: "Thesis & Dissertation Support",
    description: "Specialized assistance for structuring, writing, and formatting your scientific documents."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-science-blue" />,
    title: "Problem-Solving Consultation",
    description: "One-on-one consultation sessions to overcome specific research challenges and roadblocks."
  },
  {
    icon: <LineChart className="h-10 w-10 text-science-blue" />,
    title: "Research Method Optimization",
    description: "Fine-tune your experimental methodologies for maximum efficiency and reliable results."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Services</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive academic support designed specifically for postgraduate students in experimental physics and chemistry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 hover:border-science-blue/50 transition-all duration-300 card-hover overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="mb-5 bg-science-blue/10 p-3 inline-flex rounded-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <div className="h-1 w-full bg-gradient-to-r from-science-blue to-science-teal"></div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-6 font-medium text-lg">
            Need a custom solution for your specific research challenge?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-white text-science-blue border-2 border-science-blue hover:bg-science-blue hover:text-white transition-colors duration-300 px-6 py-3 rounded-md font-medium"
          >
            Request Custom Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
