import React from 'react';
import { CheckCircle2 } from 'lucide-react';
const About = () => {
  return <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre <span className="text-gradient">SimpleScience</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fornecemos suporte acadêmico especializado para estudantes de pós-graduação em física e química experimental.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">Assistência Especializada para Pesquisa Acadêmica Avançada</h3>
            <p className="text-gray-600 mb-8">Você está enfrentando problemas durante seu mestrado e doutorado
          </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-science-blue shrink-0 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Equipe de Pesquisa Especializada</h4>
                  <p className="text-gray-600">Nossos especialistas possuem diplomas avançados de instituições prestigiadas com anos de experiência em pesquisa.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-science-blue shrink-0 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Abordagem Personalizada</h4>
                  <p className="text-gray-600">Oferecemos planos de suporte personalizados com base em sua área de pesquisa específica e requisitos.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-science-blue shrink-0 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Assistência Confidencial</h4>
                  <p className="text-gray-600">Mantemos estrita confidencialidade para todos os projetos de clientes e assistência à pesquisa.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-science-purple/10 rounded-full filter blur-3xl"></div>
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default About;