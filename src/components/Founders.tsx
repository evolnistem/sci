import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const Founders = () => {
  return <section id="founders" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos <span className="text-gradient">Fundadores</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os doutores em física que fundaram a SimpleScience com a missão de apoiar estudantes e pesquisadores em ciências experimentais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Founder 1 */}
          <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Avatar className="h-40 w-40 border-4 border-science-blue/20">
                <AvatarImage alt="Dr. Eduardo Azzolini Volnistem" src="/lovable-uploads/73627472-8c69-48ea-97f0-eaee4e02fb49.jpg" />
                <AvatarFallback className="bg-science-blue/10 text-science-blue text-2xl">
                  EV
                </AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-2xl font-bold mb-2">Dr. Eduardo Azzolini Volnistem</h3>
            <p className="text-science-blue font-medium mb-4">Doutor em Física</p>
            <p className="text-gray-600">Especialista em física experimental com foco em ciência de materiais. Experiência em sinteses físicas e quimicas de materiais, vasta experiência em microscopia eletrônica de Varredura (MEV) e transmissão (TEM), microscopia de força atômica (AFM) além de técnicas de caracteriazação como Difratometria de Raio X, Espectroscopia Raman, FTIR e diversas caracteriações elétricas e magnéticas. Com mais de 10 anos de experiência em pesquisa acadêmica e orientação de estudantes. Possui ampla experiência em metodologias de pesquisa e publicações em periódicos internacionais. com mais de 30 artigos em diversas áreas do conhecimento.</p>
          </div>
          
          {/* Founder 2 */}
          <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Avatar className="h-40 w-40 border-4 border-science-purple/20">
                <AvatarImage alt="Dra. Adriane Nascimento Volnistem" src="/lovable-uploads/3b9e0a8f-82be-4010-976f-2e5df85f4ccb.jpg" />
                <AvatarFallback className="bg-science-purple/10 text-science-purple text-2xl">
                  AV
                </AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-2xl font-bold mb-2">Dra. Adriane Nascimento Volnistem</h3>
            <p className="text-science-purple font-medium mb-4">Doutora em Física</p>
            <p className="text-gray-600">Especialista em espectroscopia e análise de dados complexos. Experiência em técnicas de espectroscopia como Raman, FTIR, ATR. </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Founders;