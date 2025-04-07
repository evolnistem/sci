
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Suporte Academico Avançado para <span className="text-gradient">Ciencias Experimentais</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 md:pr-12">
              Specialized assistance for postgraduate students in experimental physics and chemistry. Elevate your research with expert guidance, tailored resources, and comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-science-blue hover:bg-science-blue/90 text-white px-8 py-6 text-lg rounded-md">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-science-blue text-science-blue hover:bg-science-blue/10 px-8 py-6 text-lg rounded-md">
                Request Consultation
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-science-blue/10 rounded-full filter blur-3xl opacity-70"></div>
            <div className="absolute bottom-12 -left-12 w-40 h-40 bg-science-teal/10 rounded-full filter blur-3xl opacity-70"></div>
            
            <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-10">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-science-blue/20 to-science-teal/20 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                  alt="Postgraduate research laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-science-blue flex items-center justify-center text-white font-bold">
                    96%
                  </div>
                  <div>
                    <p className="text-sm font-medium">Success Rate</p>
                    <p className="text-xs text-gray-500">Among our clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 py-8 px-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-wrap justify-between items-center gap-8">
          <div className="text-center mx-auto md:mx-0">
            <p className="text-sm text-gray-500 mb-1">Trusted by students from</p>
            <p className="font-serif font-semibold text-lg">Oxford University</p>
          </div>
          <div className="text-center mx-auto md:mx-0">
            <p className="text-sm text-gray-500 mb-1">Trusted by students from</p>
            <p className="font-serif font-semibold text-lg">MIT</p>
          </div>
          <div className="text-center mx-auto md:mx-0">
            <p className="text-sm text-gray-500 mb-1">Trusted by students from</p>
            <p className="font-serif font-semibold text-lg">Stanford University</p>
          </div>
          <div className="text-center mx-auto md:mx-0">
            <p className="text-sm text-gray-500 mb-1">Trusted by students from</p>
            <p className="font-serif font-semibold text-lg">Cambridge University</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
