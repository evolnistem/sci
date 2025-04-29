
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutContent from '@/components/About';
import Services from '@/components/Services';
import ServiceExamplesContent from '@/components/ServiceExamples';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import BlogSection from '@/components/BlogSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <AboutContent />
        <Services />
        <ServiceExamplesContent />
        <WhyChooseUs />
        <BlogSection />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
