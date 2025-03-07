
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

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
        return (
          <span title="Instagram">
            <Instagram size={18} className="text-pink-500" />
          </span>
        );
      case 'twitter':
        return (
          <span title="Twitter/X">
            <Twitter size={18} className="text-blue-400" />
          </span>
        );
      case 'youtube':
        return (
          <span title="YouTube">
            <Youtube size={18} className="text-red-600" />
          </span>
        );
      case 'facebook':
        return (
          <span title="Facebook">
            <Facebook size={18} className="text-blue-600" />
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow border border-gray-200">
      <div className="relative h-48 md:h-56 w-full bg-gray-100 overflow-hidden">
        <img
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="flex flex-col grow p-5">
        <h3 className="font-bold text-lg line-clamp-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 mb-4 line-clamp-2">{subtitle}</p>
        
        <div className="flex gap-2 mt-auto">
          {platforms.map((platform, index) => (
            <div key={index} className="flex items-center justify-center">
              {renderPlatformIcon(platform)}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-5 py-3 text-sm border-t flex flex-col gap-2">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-500 mt-1.5"></div>
            <div>
              <span className="font-semibold text-gray-800">{stat.count}</span>
              <span className="text-gray-600 ml-1">{stat.description}</span>
            </div>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
