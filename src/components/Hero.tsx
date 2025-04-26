import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import BookingDialog from './BookingDialog';
const Hero = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  return <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-justify">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 lg:text-4xl">
              Suporte Academico Avançado para <span className="text-gradient">mestrandos e doutorandos em ciências experimentais</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 md:pr-12">Assistência especializada para estudantes de pós-graduação em nível experimental como Física, Química e engenharias. Eleve sua pesquisa com orientação especializada,, recursos personalizados e suporte abrangente.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-science-blue hover:bg-science-blue/90 text-white px-8 py-6 text-lg rounded-md">
                Explorar Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-science-blue text-science-blue hover:bg-science-blue/10 px-8 py-6 text-lg rounded-md" onClick={() => setBookingDialogOpen(true)}>
                Agendar uma conversa
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-science-blue/10 rounded-full filter blur-3xl opacity-70"></div>
            <div className="absolute bottom-12 -left-12 w-40 h-40 bg-science-teal/10 rounded-full filter blur-3xl opacity-70"></div>
            
            <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-10">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-science-blue/20 to-science-teal/20 flex items-center justify-center">
                <img alt="Laboratório de pesquisa de pós-graduação" className="w-full h-full object-cover" src="/lovable-uploads/c212b70d-23c3-4ce2-8f4c-be833b8608c2.jpg" />
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      
      <BookingDialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen} />
    </section>;
};
export default Hero;