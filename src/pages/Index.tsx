
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import DataAnalysis from '@/components/DataAnalysis';
import ServiceExamples from '@/components/ServiceExamples';
import VideoTestimonials from '@/components/VideoTestimonials';
import Founders from '@/components/Founders';
import BlogSection from '@/components/BlogSection';
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
        <Founders />
        <Services />
        <DataAnalysis />
        <ServiceExamples />
        <VideoTestimonials />
        <BlogSection />
        <WhyChooseUs />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
