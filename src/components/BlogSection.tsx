
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, FilePlus } from 'lucide-react';

const BlogSection = () => {
  return <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-science-dark mb-6 animate-slide-up">
            Blog 
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Artigos, dicas e recursos para ajudar você em sua jornada na pós-graduação em ciências exatas e experimentais.
          </p>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Link to="/blog" className="inline-flex items-center justify-center bg-science-blue text-white hover:bg-science-blue/90 transition-colors duration-300 px-6 py-3 rounded-md font-medium">
            <GraduationCap className="mr-2 h-5 w-5" />
            Ver meus artigos
          </Link>
          
          <Link to="/blog" className="inline-flex items-center justify-center bg-white border border-science-blue text-science-blue hover:bg-gray-50 transition-colors duration-300 px-6 py-3 rounded-md font-medium">
            <FilePlus className="mr-2 h-5 w-5" />
            Criar novo artigo
          </Link>
        </div>
      </div>
    </section>;
};
export default BlogSection;
