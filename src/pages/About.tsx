import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutContent from '@/components/About';
import { CheckCircle2 } from 'lucide-react';
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-r from-science-blue/5 to-science-teal/5">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">Sobre Nós</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">Conheça a equipe por trás da SimpleScience e nossa missão de apoiar pesquisadores em ciências experimentais como Física, Química e Engenharias.</p>
          </div>
        </section>
        
        <AboutContent />
        
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
                <p className="text-gray-600 mb-6">
                  Na SimpleScience, nossa missão é capacitar pesquisadores de pós-graduação em física e química experimental 
                  com o suporte especializado necessário para superar obstáculos técnicos, otimizar metodologias de pesquisa 
                  e alcançar resultados significativos em seus estudos acadêmicos.
                </p>
                
                <h3 className="text-xl font-bold mb-4">Nossos Valores</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-science-blue shrink-0 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Excelência Acadêmica</h4>
                      <p className="text-gray-600">Comprometidos com os mais altos padrões de rigor científico e integridade acadêmica.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-science-blue shrink-0 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Inovação Contínua</h4>
                      <p className="text-gray-600">Buscamos constantemente novas abordagens e metodologias para oferecer soluções inovadoras.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-science-blue shrink-0 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Suporte Personalizado</h4>
                      <p className="text-gray-600">Cada projeto é único e merece uma abordagem adaptada às necessidades específicas do pesquisador.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Nossa História</h3>
                <p className="text-gray-600 mb-4">
                  A SimpleScience nasceu da experiência pessoal de seus fundadores, que enfrentaram inúmeros desafios durante 
                  suas próprias jornadas de pesquisa em física e química experimental.
                </p>
                <p className="text-gray-600 mb-4">
                  Reconhecendo a necessidade de suporte especializado para outros pesquisadores enfrentando obstáculos semelhantes, 
                  criamos uma plataforma dedicada a oferecer assistência técnica, metodológica e analítica para estudantes de 
                  pós-graduação nestas áreas específicas.
                </p>
                <p className="text-gray-600">
                  Desde então, temos ajudado dezenas de pesquisadores a superarem desafios técnicos, otimizarem seus métodos 
                  experimentais e produzirem resultados de pesquisa de alta qualidade.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;