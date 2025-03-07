
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-pink-50 to-purple-100 py-12 md:py-24">
      <div className="container px-4 md:px-8 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
          Case Studies
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-purple-600 mb-4">
          Our Success Stories
        </h2>
        <p className="max-w-2xl text-gray-600 mb-8 md:text-lg">
          Explore our successful projects where we've helped brands transform their data into actionable
          marketing insights. Our case studies showcase our expertise across various industries.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Contact us
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
