
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, FileText, Microscope } from 'lucide-react';

const serviceExamples = [
  {
    title: "Análise de Dados Espectroscópicos",
    category: "Análise e Interpretação de Dados",
    icon: <Microscope className="h-8 w-8 text-science-blue" />,
    description: "Apoio na análise e interpretação de dados de espectroscopia Raman, FTIR e UV-Vis para identificação de compostos em pesquisas de química orgânica.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    result: "A análise resultou em identificação precisa de marcadores químicos relevantes para a pesquisa do aluno."
  },
  {
    title: "Revisão de Tese em Física Quântica",
    category: "Suporte para Teses e Dissertações",
    icon: <FileText className="h-8 w-8 text-science-blue" />,
    description: "Revisão detalhada e edição de tese de doutorado sobre computação quântica, incluindo verificação de cálculos, formatação e clareza conceitual.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
    result: "Tese aprovada com distinção pela banca examinadora."
  },
  {
    title: "Pesquisa Bibliográfica em Catálise",
    category: "Revisão de Literatura e Pesquisa",
    icon: <BookOpen className="h-8 w-8 text-science-blue" />,
    description: "Levantamento bibliográfico abrangente sobre avanços recentes em catalisadores heterogêneos para reações de hidrogenação.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    result: "Fornecimento de 45 referências relevantes e um resumo analítico de 25 páginas que auxiliou o direcionamento da pesquisa."
  }
];

const ServiceExamples = () => {
  return (
    <section id="service-examples" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exemplos de <span className="text-gradient">Projetos</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja como nossos serviços têm ajudado estudantes a alcançar resultados excepcionais em seus projetos de pesquisa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceExamples.map((example, index) => (
            <Card key={index} className="border border-gray-200 hover:border-science-blue/50 transition-all duration-300 card-hover overflow-hidden">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={example.imageUrl} 
                  alt={example.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <Badge className="absolute top-4 right-4 z-20 bg-science-blue hover:bg-science-blue/90">
                  {example.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 bg-science-blue/10 p-3 inline-flex rounded-md">
                  {example.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{example.title}</h3>
                <p className="text-gray-600 mb-4">{example.description}</p>
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <p className="font-medium text-science-blue">Resultado:</p>
                  <p className="text-gray-700">{example.result}</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <a href="#contact" className="inline-flex items-center text-science-blue hover:underline">
                    Solicitar serviço similar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">
            Estes são apenas alguns exemplos dos muitos projetos bem-sucedidos que realizamos.
          </p>
          <a href="#services" className="inline-flex items-center text-science-blue hover:underline font-medium">
            Ver todos os serviços disponíveis
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceExamples;
