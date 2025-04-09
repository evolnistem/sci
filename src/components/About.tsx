
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-center">
          Somos uma empresa especializada em fornecer suporte acadêmico para estudantes de pós-graduação em física e química, ajudando-os a superar desafios em suas pesquisas e alcançar excelência acadêmica.
        </p>
        
        <div className="bg-gradient-to-r from-science-blue/5 to-science-purple/5 p-6 md:p-8 rounded-xl mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">🎓 Está enfrentando dificuldades na sua pós-graduação?</h3>
          <p className="text-gray-700 mb-4">
            Você não está sozinho. Muitos estudantes de mestrado e doutorado sentem-se sobrecarregados diante dos desafios acadêmicos — especialmente nas etapas experimentais, onde os resultados nem sempre saem como o esperado.
          </p>
          
          <p className="text-gray-700 mb-4">
            🔬 Se você atua nas áreas de Física, Química ou Engenharias, sabe que lidar com equipamentos, metodologias complexas e a pressão por produtividade pode ser desgastante.
          </p>
          
          <p className="text-gray-700 mb-4">
            💡 É exatamente aí que entra a nossa assessoria acadêmica:
          </p>
          
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Acompanhamento individualizado dos seus experimentos;</li>
            <li>Apoio na organização e estruturação da sua pesquisa;</li>
            <li>Leitura crítica e sugestões para sua escrita científica (artigos, dissertação, tese);</li>
            <li>Orientações para análise e interpretação de dados experimentais.</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            📈 Nosso objetivo é te ajudar a avançar com mais segurança e eficiência, reduzindo a ansiedade e otimizando seu tempo.
          </p>
          
          <p className="text-gray-700 font-semibold">
            Entre em contato e descubra como a assessoria certa pode transformar sua trajetória acadêmica.
          </p>
        </div>
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre <span className="text-gradient">SimpleScience</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fornecemos suporte acadêmico especializado para estudantes de pós-graduação em física e química experimental.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">Assistência Especializada para Pesquisa Acadêmica Avançada</h3>
            <p className="text-gray-600 mb-8">Você está enfrentando problemas durante seu mestrado e doutorado
          </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-science-blue shrink-0 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Equipe de Pesquisa Especializada</h4>
                  <p className="text-gray-600">Nossos especialistas possuem diplomas avançados de instituições prestigiadas com anos de experiência em pesquisa.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-science-blue shrink-0 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Abordagem Personalizada</h4>
                  <p className="text-gray-600">Oferecemos planos de suporte personalizados com base em sua área de pesquisa específica e requisitos.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-science-blue shrink-0 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lg">Assistência Confidencial</h4>
                  <p className="text-gray-600">Mantemos estrita confidencialidade para todos os projetos de clientes e assistência à pesquisa.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-science-purple/10 rounded-full filter blur-3xl"></div>
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default About;
