
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ServiceExamples from '@/components/ServiceExamples';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceExamples />
        <WhyChooseUs />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
