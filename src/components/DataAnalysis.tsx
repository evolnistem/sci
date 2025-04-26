
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, ChartPie, Database } from 'lucide-react';

const analysisTypes = [
  {
    title: "Análise Estatística",
    description: "Aplicação de métodos estatísticos avançados para validar hipóteses e identificar padrões significativos em seus dados experimentais.",
    icon: <ChartBar className="h-12 w-12 text-science-blue" />
  },
  {
    title: "Visualização de Dados",
    description: "Criação de gráficos e visualizações interativas para comunicar resultados de forma clara e impactante em suas publicações.",
    icon: <ChartPie className="h-12 w-12 text-science-blue" />
  },
  {
    title: "Modelagem de Dados",
    description: "Desenvolvimento de modelos matemáticos e computacionais para interpretar e prever comportamentos em seus experimentos.",
    icon: <Database className="h-12 w-12 text-science-blue" />
  }
];

const DataAnalysis = () => {
  return (
    <section id="data-analysis" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-science-dark mb-6 animate-slide-up">
            Análise de <span className="text-gradient">Dados</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforme seus dados experimentais em insights valiosos com nossas soluções especializadas em análise de dados para pesquisas científicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {analysisTypes.map((type, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-science-dark">
                  {type.title}
                </h3>
                <p className="text-gray-600">
                  {type.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataAnalysis;
