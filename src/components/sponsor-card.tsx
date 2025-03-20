
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SponsorCardProps {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  logo: string;
  description: string;
  website?: string;
}

export function SponsorCard({
  id,
  name,
  tier,
  logo,
  description,
  website
}: SponsorCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const tierColors = {
    platinum: "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700",
    gold: "bg-gradient-to-br from-yellow-200 to-yellow-300 text-yellow-800",
    silver: "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700",
    bronze: "bg-gradient-to-br from-amber-200 to-amber-300 text-amber-800",
  };

  return (
    <>
      <Card 
        className={cn(
          "overflow-hidden cursor-pointer card-hover",
          "bg-card/50 backdrop-blur-sm border border-border/50"
        )}
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="aspect-video p-6 flex items-center justify-center bg-white dark:bg-gray-900 border-b">
          <img
            src={logo}
            alt={name}
            className="max-h-16 w-auto max-w-full object-contain"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">{name}</h3>
            <span 
              className={cn(
                "text-xs font-semibold px-2 py-0.5 rounded-full",
                tierColors[tier]
              )}
            >
              {tier.charAt(0).toUpperCase() + tier.slice(1)}
            </span>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              {name}
              <span 
                className={cn(
                  "text-xs font-semibold px-2 py-0.5 rounded-full",
                  tierColors[tier]
                )}
              >
                {tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsor
              </span>
            </DialogTitle>
            <DialogDescription>
              {website && (
                <a 
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <Link2 className="h-3.5 w-3.5 mr-1" />
                  {website.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '')}
                </a>
              )}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0 w-full md:w-40 h-40 flex items-center justify-center bg-white dark:bg-gray-900 rounded-md border">
              <img
                src={logo}
                alt={name}
                className="max-h-20 w-auto max-w-full object-contain"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <p className="text-foreground/90 leading-relaxed">{description}</p>
              
              {website && (
                <div>
                  <Button 
                    className="mt-4"
                    onClick={() => window.open(website, '_blank')}
                  >
                    Visit Website
                  </Button>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
