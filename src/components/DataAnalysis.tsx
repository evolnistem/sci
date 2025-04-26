import React from 'react';
import { Microscope, Atom } from 'lucide-react';
const techniques = ["Difratometria de Raios X", "Microscopia Eletrônica de Varredura e Transmissão", "Espectroscopia Raman", "FT-IR", "ATR", "Análises magnéticas", "UV-Vis", "Microscopia de força atômica"];
const DataAnalysis = () => {
  return <section id="data-analysis" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-science-dark mb-6 animate-slide-up">
            Análise de <span className="text-gradient">Dados</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos análises avançadas utilizando técnicas especializadas e equipamentos de última geração para sua pesquisa científica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <Microscope className="h-8 w-8 text-science-blue" />
              <Atom className="h-8 w-8 text-science-blue" />
            </div>
            <ul className="space-y-4">
              {techniques.map((technique, index) => <li key={index} className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-science-blue rounded-full group-hover:scale-125 transition-transform" />
                  <span className="text-lg text-gray-700 group-hover:text-science-blue transition-colors">
                    {technique}
                  </span>
                </li>)}
            </ul>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Equipamento de análise científica" className="object-cover w-full h-full" />
            
          </div>
        </div>
      </div>
    </section>;
};
export default DataAnalysis;