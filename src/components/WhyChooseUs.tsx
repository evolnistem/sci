
import React from 'react';
import { Shield, Users, Clock, Award, Sparkles, Gauge } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="h-8 w-8 text-science-blue" />,
    title: "100% de Confidencialidade",
    description: "Sua pesquisa e informações pessoais são sempre mantidas estritamente confidenciais."
  },
  {
    icon: <Users className="h-8 w-8 text-science-blue" />,
    title: "Especialistas com Doutorado",
    description: "Nossa equipe é composta por especialistas com diplomas avançados em física e química."
  },
  {
    icon: <Clock className="h-8 w-8 text-science-blue" />,
    title: "Entrega Pontual",
    description: "Entendemos os prazos acadêmicos e garantimos a entrega pontual de todos os projetos."
  },
  {
    icon: <Award className="h-8 w-8 text-science-blue" />,
    title: "Alta Taxa de Sucesso",
    description: "96% dos nossos clientes concluíram com sucesso seus objetivos acadêmicos."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-science-blue" />,
    title: "Soluções Personalizadas",
    description: "Cada serviço é adaptado às suas necessidades e desafios específicos de pesquisa."
  },
  {
    icon: <Gauge className="h-8 w-8 text-science-blue" />,
    title: "Métodos de Ponta",
    description: "Mantemo-nos atualizados com as mais recentes metodologias e tecnologias de pesquisa."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que <span className="text-gradient">Nos Escolher</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nosso compromisso com a excelência acadêmica e expertise especializada nos diferencia no apoio à pesquisa em ciências experimentais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex">
              <div className="mr-4 shrink-0">
                <div className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-gradient-to-r from-science-blue/10 to-science-teal/10 rounded-2xl border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">A Satisfação do Cliente é Nossa Prioridade</h3>
              <p className="text-gray-600 mb-6">
                Orgulhamo-nos de manter os mais altos padrões de integridade acadêmica enquanto oferecemos suporte excepcional aos pesquisadores de pós-graduação.
              </p>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 font-medium">Classificação média de 4,9/5 dos clientes</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="italic text-gray-600">
                    "A assistência que recebi com meu design experimental de mecânica quântica foi inestimável. A expertise da equipe me ajudou a superar desafios significativos na minha pesquisa de tese."
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-science-blue flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">João D.</p>
                      <p className="text-sm text-gray-500">Doutorando em Física</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="italic text-gray-600">
                    "A expertise deles em métodos de química analítica melhorou significativamente os resultados da minha pesquisa. O suporte personalizado era exatamente o que eu precisava para meu trabalho de pós-graduação."
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-science-teal flex items-center justify-center text-white font-bold">
                      ML
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Maria L.</p>
                      <p className="text-sm text-gray-500">Associada de Pesquisa em Química</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
