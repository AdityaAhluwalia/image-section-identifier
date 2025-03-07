
import React from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import CaseStudiesGrid from '@/components/CaseStudiesGrid';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <CaseStudiesGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
