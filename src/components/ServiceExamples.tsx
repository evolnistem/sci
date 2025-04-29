
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, FileText, Microscope } from 'lucide-react';

const serviceExamples = [{
  title: "Análise de Dados Espectroscópicos",
  category: "Análise e Interpretação de Dados",
  icon: <Microscope className="h-8 w-8 text-science-blue" />,
  description: "Apoio na análise e interpretação de dados de espectroscopia Raman, FTIR e UV-Vis para identificação de compostos em pesquisas de química orgânica.",
  imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  result: "A análise resultou em identificação precisa de marcadores químicos relevantes para a pesquisa do aluno."
}, {
  title: "Revisão de Tese em Física Quântica",
  category: "Suporte para Teses e Dissertações",
  icon: <FileText className="h-8 w-8 text-science-blue" />,
  description: "Revisão detalhada e edição de tese de doutorado sobre computação quântica, incluindo verificação de cálculos, formatação e clareza conceitual.",
  imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
  result: "Tese aprovada com distinção pela banca examinadora."
}, {
  title: "Pesquisa Bibliográfica em Catálise",
  category: "Revisão de Literatura e Pesquisa",
  icon: <BookOpen className="h-8 w-8 text-science-blue" />,
  description: "Levantamento bibliográfico abrangente sobre avanços recentes em catalisadores heterogêneos para reações de hidrogenação.",
  imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
  result: "Fornecimento de 45 referências relevantes e um resumo analítico de 25 páginas que auxiliou o direcionamento da pesquisa."
}];

const ServiceExamples = () => {
  return (
    <section id="service-examples" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exemplos de <span className="text-gradient">Serviços</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns casos reais onde nossos serviços fizeram diferença para pesquisadores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceExamples.map((example, index) => (
            <Card key={index} className="overflow-hidden border-t-4 border-t-science-blue transition-all duration-300 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={example.imageUrl} 
                  alt={example.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">{example.category}</Badge>
                <div className="mb-4">{example.icon}</div>
                <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                <p className="text-gray-600 mb-4">{example.description}</p>
                <div className="border-t pt-4">
                  <p className="flex items-center text-science-blue font-medium">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Resultado
                  </p>
                  <p className="mt-2 text-gray-700 italic">{example.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceExamples;
