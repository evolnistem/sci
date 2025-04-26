import React, { useState } from 'react';
import { FlaskConical, Microscope, BookOpen, FileText, Lightbulb, LineChart, FilePen, Book, Search } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import ServiceRequestDialog from './ServiceRequestDialog';

const services = [{
  icon: <FlaskConical className="h-10 w-10 text-science-blue" />,
  title: "Assistência em Design Experimental",
  description: "Obtenha orientação especializada para projetar configurações experimentais robustas para projetos de pesquisa em física e química."
}, {
  icon: <Microscope className="h-10 w-10 text-science-blue" />,
  title: "Análise e Interpretação de Dados",
  description: "Análise estatística avançada e interpretação científica de resultados experimentais e medições."
}, {
  icon: <BookOpen className="h-10 w-10 text-science-blue" />,
  title: "Revisão de Literatura e Pesquisa",
  description: "Levantamentos abrangentes de literatura e resumos de pesquisas específicos para seu campo experimental."
}, {
  icon: <FileText className="h-10 w-10 text-science-blue" />,
  title: "Suporte para Teses e Dissertações",
  description: "Assistência especializada para estruturação, redação e formatação de seus documentos científicos."
}, {
  icon: <Lightbulb className="h-10 w-10 text-science-blue" />,
  title: "Consultoria para Resolução de Problemas",
  description: "Sessões de consultoria individuais para superar desafios específicos de pesquisa e obstáculos."
}, {
  icon: <LineChart className="h-10 w-10 text-science-blue" />,
  title: "Otimização de Métodos de Pesquisa",
  description: "Aprimore suas metodologias experimentais para máxima eficiência e resultados confiáveis."
}, {
  icon: <FilePen className="h-10 w-10 text-science-blue" />,
  title: "Redação de Artigos Científicos",
  description: "Auxílio especializado na estruturação e redação de artigos científicos com clareza e rigor metodológico."
}, {
  icon: <Book className="h-10 w-10 text-science-blue" />,
  title: "Revisão e Edição para Publicação",
  description: "Revisão detalhada e edição de manuscritos para aumentar as chances de aceitação em periódicos de alto impacto."
}, {
  icon: <Search className="h-10 w-10 text-science-blue" />,
  title: "Estratégias de Publicação",
  description: "Aumente suas chances de publicação recebendo orientações desde a escolha da revista até a preparação dos arquivos pré-submissão"
}];

const Services = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos <span className="text-gradient">Serviços</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Suporte acadêmico abrangente projetado especificamente para estudantes de pós-graduação em física e química experimental.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="border border-gray-200 hover:border-science-blue/50 transition-all duration-300 card-hover overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-5 bg-science-blue/10 p-3 inline-flex rounded-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <div className="h-1 w-full bg-gradient-to-r from-science-blue to-science-teal"></div>
            </Card>)}
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-6 font-medium text-lg">
            Precisa de uma solução personalizada para seu desafio específico de pesquisa?
          </p>
          <button
            onClick={() => setDialogOpen(true)}
            className="inline-flex items-center bg-white text-science-blue border-2 border-science-blue hover:bg-science-blue hover:text-white transition-colors duration-300 px-6 py-3 rounded-md font-medium"
          >
            Solicitar Serviço Personalizado
          </button>
        </div>

        <ServiceRequestDialog 
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>
    </section>;
};

export default Services;
