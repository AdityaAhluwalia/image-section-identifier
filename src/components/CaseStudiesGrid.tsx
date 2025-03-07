
import React from 'react';
import CaseStudyCard, { CaseStudyProps } from './CaseStudyCard';

const caseStudies: CaseStudyProps[] = [
  {
    id: 1,
    title: "Decoding US Skincare Content Trends",
    subtitle: "Algorithmic Forecasting of High-Performance Skincare Content Concepts",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470&auto=format&fit=crop",
    platforms: ["instagram", "twitter", "youtube", "facebook"],
    stats: [
      { count: "6.75 billion", description: "non-unique follower touchpoints" },
      { count: "7,700+", description: "videos ingested and processed" }
    ]
  },
  {
    id: 2,
    title: "Decoding US Skincare Content Strategies",
    subtitle: "Algorithmic Forecasting of High-Performance Skincare Content Concepts",
    image: "https://images.unsplash.com/photo-1542830466-91773113dd1f?q=80&w=1470&auto=format&fit=crop",
    platforms: ["instagram", "youtube", "facebook"],
    stats: [
      { count: "5.2 billion", description: "non-unique follower touchpoints" },
      { count: "6,500+", description: "videos ingested and processed" }
    ]
  },
  {
    id: 3,
    title: "Decoding US Skincare Content Performance",
    subtitle: "Algorithmic Forecasting of High-Performance Skincare Content Concepts",
    image: "https://images.unsplash.com/photo-1614859535517-c2eaccffc9d9?q=80&w=1470&auto=format&fit=crop",
    platforms: ["instagram", "twitter", "youtube"],
    stats: [
      { count: "4.9 billion", description: "non-unique follower touchpoints" },
      { count: "5,800+", description: "videos ingested and processed" }
    ]
  },
  {
    id: 4,
    title: "Decoding US Skincare Content Analytics",
    subtitle: "Algorithmic Forecasting of High-Performance Skincare Content Concepts",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1470&auto=format&fit=crop",
    platforms: ["instagram", "facebook"],
    stats: [
      { count: "3.8 billion", description: "non-unique follower touchpoints" },
      { count: "4,200+", description: "videos ingested and processed" }
    ]
  },
  {
    id: 5,
    title: "Decoding US Skincare Content Engagement",
    subtitle: "Algorithmic Forecasting of High-Performance Skincare Content Concepts",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop",
    platforms: ["instagram", "twitter", "youtube", "facebook"],
    stats: [
      { count: "7.2 billion", description: "non-unique follower touchpoints" },
      { count: "8,100+", description: "videos ingested and processed" }
    ]
  },
];

const CaseStudiesGrid = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              {...study}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
