
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de assessoria científica
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white shadow-md rounded-lg overflow-hidden">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:no-underline font-medium">
                Como a assessoria pode me ajudar?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                <p>
                  Podemos ajudar desde o planejamento da sua pesquisa com a revisão bibliográfica, 
                  fazendo uma curadoria dos artigos mais relevantes da suas área para facilitar seus estudos, 
                  planejamento de experimentos, sugestão de experimentos que possam ser relevantes para a 
                  sua pesquisa, análise e interpretação de resultado ou ainda montar uma linha de 
                  raciocínio com os resultados que você já obteve (storytelling) e muito mais.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:no-underline font-medium">
                Como é feita a assessoria?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                <p>
                  Nossa assessoria é feita de maneira extremamente personalizada e pode durar uma ou mais 
                  sessões dependendo da demanda. Um primeiro encontro de 30 min é agendado sem custo para 
                  que possamos entender suas necessidades.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:no-underline font-medium">
                Qual o valor da assessoria?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                <p>
                  Nossa assessoria é extremamente personalizada e, portanto, o valor pode variar de acordo 
                  com o serviço requisitado e a duração do trabalho. Fique tranquilo, tudo será informado 
                  anteriormente ao serviço com máxima transparência.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
