import React from 'react';
import { CheckCircle2 } from 'lucide-react';
const About = () => {
  return <section id="about" className="section-padding bg-white my-[6px] mx-0 px-0 py-0">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-science-blue/10 to-science-purple/10 p-6 md:p-8 rounded-xl mb-12">
          <h3 className="text-2xl font-bold mb-4">🎓 Está enfrentando dificuldades na sua pós-graduação?</h3>
          <p className="text-gray-700 mb-4">
            Você não está sozinho. Muitos estudantes de mestrado e doutorado sentem-se sobrecarregados diante dos desafios acadêmicos — especialmente nas etapas experimentais, onde os resultados nem sempre saem como o esperado.
          </p>
          
          <p className="text-gray-700 mb-4">
            🔬 Se você atua nas áreas de Física, Química ou Engenharias, sabe que lidar com equipamentos, metodologias complexas e a pressão por produtividade pode ser desgastante.
          </p>
          
          <p className="text-gray-700 mb-4">
            💡 É exatamente aí que entra a minha assessoria acadêmica:
          </p>
          
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li>Acompanhamento individualizado dos seus experimentos;</li>
            <li>Apoio na organização e estruturação da sua pesquisa;</li>
            <li>Leitura crítica e sugestões para sua escrita científica (artigos, dissertação, tese);</li>
            <li>Orientações para análise e interpretação de dados experimentais.</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            📈 Meu objetivo é te ajudar a avançar com mais segurança e eficiência, reduzindo a ansiedade e otimizando seu tempo.
          </p>
          
          <p className="text-gray-700 font-medium">
            Entre em contato e descubra como a assessoria certa pode transformar sua trajetória acadêmica.
          </p>
        </div>
        
        
        
        <div className="mb-16 text-center">
          
          
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-science-purple/10 filter blur-3xl my-0 rounded-xl py-0 px-0"></div>
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default About;