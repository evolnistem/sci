
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
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
            <p className="text-gray-600 mb-8">
              Com uma equipe de doutores e especialistas no assunto, oferecemos suporte abrangente adaptado especificamente para ciências experimentais. Nossa missão é ajudar estudantes de pós-graduação a superar desafios complexos em suas pesquisas e atividades acadêmicas.
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
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600" 
                  alt="Computador de Pesquisa" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-md mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600" 
                  alt="Programação para Pesquisa" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-science-blue/10 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-science-blue">10+</p>
                  <p className="text-sm text-gray-600">Anos de Experiência</p>
                </div>
              </div>
              
              <div className="bg-science-teal/10 rounded-lg p-6 flex items-center justify-center mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-science-teal">500+</p>
                  <p className="text-sm text-gray-600">Projetos Concluídos</p>
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
