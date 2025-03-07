
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const isMobile = useIsMobile();
  
  const navItems = [
    { name: "Consumer Insights", href: "#" },
    { name: "Influencers", href: "#" },
    { name: "Case Studies", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-green-500"></div>
          <span className="text-xl font-bold">ConvoTrack</span>
        </div>
        
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium py-2 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700">
                  Contact us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="font-medium hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contact us
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
