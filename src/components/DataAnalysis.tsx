import React, { useState } from 'react';
import { Microscope, Atom, Edit } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const initialTechniques = [{
  name: "Difratometria de Raios X",
  image: "/lovable-uploads/b7184288-60e5-40c9-b146-61b253ecd6d3.png",
  description: "Técnica de caracterização que permite identificar estruturas cristalinas através da difração de raios X."
}, {
  name: "Microscopia Eletrônica de Varredura e Transmissão",
  image: "/lovable-uploads/d2b65613-42ff-4eb9-affc-000df3d6845b.png",
  description: "Análise morfológica e estrutural de materiais em escala nanométrica."
}, {
  name: "Espectroscopia Raman",
  image: "/lovable-uploads/b980fa39-cb49-4448-8e12-9c719422a111.png",
  description: "Técnica espectroscópica que fornece informações sobre modos vibracionais moleculares."
}, {
  name: "FT-IR",
  image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600",
  description: "Espectroscopia no infravermelho por transformada de Fourier para análise de grupos funcionais."
}, {
  name: "ATR",
  image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=600",
  description: "Reflexão total atenuada para análise de superfícies e filmes finos."
}, {
  name: "Análises magnéticas",
  image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600",
  description: "Caracterização das propriedades magnéticas de materiais."
}, {
  name: "UV-Vis",
  image: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?auto=format&fit=crop&q=80&w=600",
  description: "Espectroscopia no ultravioleta-visível para análise de propriedades ópticas."
}, {
  name: "Microscopia de força atômica",
  image: "/lovable-uploads/ac0c01fc-6250-428d-ad68-eda90cb74c33.png",
  description: "Análise topográfica de superfícies com resolução atômica."
}];

const DataAnalysis = () => {
  const [techniques, setTechniques] = useState(initialTechniques);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [tempDescription, setTempDescription] = useState("");

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setTempDescription(techniques[index].description);
  };

  const handleSave = (index: number) => {
    const updatedTechniques = [...techniques];
    updatedTechniques[index] = {
      ...updatedTechniques[index],
      description: tempDescription
    };
    setTechniques(updatedTechniques);
    setEditingIndex(null);
  };

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
        
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <Microscope className="h-8 w-8 text-science-blue" />
            <Atom className="h-8 w-8 text-science-blue" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniques.map((technique, index) => <div key={index} className="flex flex-col items-center space-y-4 group">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-science-blue rounded-full group-hover:scale-125 transition-transform" />
                  <span className="text-lg text-gray-700 group-hover:text-science-blue transition-colors">
                    {technique.name}
                  </span>
                </div>

                <div className="w-full p-4 bg-white rounded-lg shadow">
                  {editingIndex === index ? <div className="space-y-4">
                      <Textarea value={tempDescription} onChange={e => setTempDescription(e.target.value)} className="min-h-[100px]" />
                      <Button onClick={() => handleSave(index)} className="w-full">
                        Salvar Descrição
                      </Button>
                    </div> : <div className="relative group">
                      <p className="text-gray-600 text-sm">{technique.description}</p>
                      <Button variant="ghost" size="icon" className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => handleEdit(index)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>}
                </div>

                <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg transition-transform group-hover:scale-105">
                  <img src={technique.image} alt={technique.name} onError={e => {
                console.error(`Error loading image for ${technique.name}:`, e);
                e.currentTarget.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600";
              }} className="w-full h-full bg-white p-4 object-contain" />
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};

export default DataAnalysis;
