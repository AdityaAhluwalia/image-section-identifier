
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface SocialStat {
  count: string;
  description: string;
}

export interface CaseStudyProps {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  platforms: string[];
  stats: SocialStat[];
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({
  title,
  subtitle,
  image,
  platforms,
  stats
}) => {
  // Function to render platform icons
  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <div className="h-5 w-5 rounded-full bg-pink-500" title="Instagram" />;
      case 'twitter':
        return <div className="h-5 w-5 rounded-full bg-blue-400" title="Twitter/X" />;
      case 'youtube':
        return <div className="h-5 w-5 rounded-full bg-red-600" title="YouTube" />;
      case 'facebook':
        return <div className="h-5 w-5 rounded-full bg-blue-600" title="Facebook" />;
      default:
        return <div className="h-5 w-5 rounded-full bg-gray-400" />;
    }
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
        <img
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="flex flex-col grow p-5">
        <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 mb-4">{subtitle}</p>
        
        <div className="flex gap-2 mt-auto">
          {platforms.map((platform, index) => (
            <div key={index} className="flex items-center justify-center">
              {renderPlatformIcon(platform)}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-5 py-3 text-sm border-t flex flex-col gap-1">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
            <span className="font-medium">{stat.count}</span>
            <span className="text-gray-600">{stat.description}</span>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
