import React from 'react';
import { Microscope, Atom } from 'lucide-react';

const techniques = [{
  name: "Difratometria de Raios X",
  image: "/lovable-uploads/b7184288-60e5-40c9-b146-61b253ecd6d3.png"
}, {
  name: "Microscopia Eletrônica de Varredura e Transmissão",
  image: "https://images.unsplash.com/photo-1516972810927-80185027ca84?auto=format&fit=crop&q=80&w=600"
}, {
  name: "Espectroscopia Raman",
  image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600"
}, {
  name: "FT-IR",
  image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600"
}, {
  name: "ATR",
  image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=600"
}, {
  name: "Análises magnéticas",
  image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600"
}, {
  name: "UV-Vis",
  image: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?auto=format&fit=crop&q=80&w=600"
}, {
  name: "Microscopia de força atômica",
  image: "/lovable-uploads/ac0c01fc-6250-428d-ad68-eda90cb74c33.png"
}];

const DataAnalysis = () => {
  return (
    <section id="data-analysis" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-science-dark mb-6 animate-slide-up">
            Análise de <span className="text-gradient">Dados</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos análises avançadas utilizando técnicas especializadas e equipamentos de última geração para sua pesquisa científica.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <Microscope className="h-8 w-8 text-science-blue" />
            <Atom className="h-8 w-8 text-science-blue" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniques.map((technique, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 group">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-science-blue rounded-full group-hover:scale-125 transition-transform" />
                  <span className="text-lg text-gray-700 group-hover:text-science-blue transition-colors">
                    {technique.name}
                  </span>
                </div>
                <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg transition-transform group-hover:scale-105">
                  <img 
                    src={technique.image} 
                    alt={technique.name} 
                    className="w-full h-full object-contain bg-white p-4"
                    onError={(e) => {
                      console.error(`Error loading image for ${technique.name}:`, e);
                      e.currentTarget.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysis;
