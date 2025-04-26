import React from 'react';
import { Shield, Users, Clock, Award, Sparkles, Gauge } from 'lucide-react';
const reasons = [{
  icon: <Shield className="h-8 w-8 text-science-blue" />,
  title: "100% de Confidencialidade",
  description: "Sua pesquisa e informações pessoais são sempre mantidas estritamente confidenciais."
}, {
  icon: <Users className="h-8 w-8 text-science-blue" />,
  title: "Especialistas com Doutorado",
  description: "Nossa equipe é composta por especialistas com diplomas avançados em física e química."
}, {
  icon: <Clock className="h-8 w-8 text-science-blue" />,
  title: "Entrega Pontual",
  description: "Entendemos os prazos acadêmicos e garantimos a entrega pontual de todos os projetos."
}, {
  icon: <Award className="h-8 w-8 text-science-blue" />,
  title: "Alta Taxa de Sucesso",
  description: "96% dos nossos clientes concluíram com sucesso seus objetivos acadêmicos."
}, {
  icon: <Sparkles className="h-8 w-8 text-science-blue" />,
  title: "Soluções Personalizadas",
  description: "Cada serviço é adaptado às suas necessidades e desafios específicos de pesquisa."
}, {
  icon: <Gauge className="h-8 w-8 text-science-blue" />,
  title: "Métodos de Ponta",
  description: "Mantemo-nos atualizados com as mais recentes metodologias e tecnologias de pesquisa."
}];
const WhyChooseUs = () => {
  return <section id="why-choose-us" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que <span className="text-gradient">Nos Escolher</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nosso compromisso com a excelência acadêmica e expertise especializada nos diferencia no apoio à pesquisa em ciências experimentais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, index) => <div key={index} className="flex">
              <div className="mr-4 shrink-0">
                <div className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>)}
        </div>
        
        
      </div>
    </section>;
};
export default WhyChooseUs;