
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLink {
  type: 'linkedin' | 'github' | 'other';
  url: string;
  label?: string;
}

interface StudentCardProps {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
  cv?: string;
  socialLinks?: SocialLink[];
}

export function StudentCard({
  id,
  name,
  title,
  image,
  description,
  cv,
  socialLinks = [],
}: StudentCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const renderSocialIcon = (type: SocialLink['type']) => {
    switch (type) {
      case 'linkedin':
        return <Linkedin className="h-4 w-4" />;
      case 'github':
        return <Github className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Card 
        className={cn(
          "overflow-hidden card-hover cursor-pointer h-full",
          "bg-card/50 backdrop-blur-sm border border-border/50"
        )}
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="p-5">
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-muted-foreground text-sm">{title}</p>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-2">
              <div className="aspect-square rounded-md overflow-hidden bg-muted mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cv && (
                  <a href={cv} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <FileText className="h-3.5 w-3.5" />
                      CV
                    </Button>
                  </a>
                )}
                
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-1.5">
                      {renderSocialIcon(link.type)}
                      {link.label || link.type}
                    </Button>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3">
              <DialogHeader>
                <DialogTitle className="text-2xl">{name}</DialogTitle>
                <DialogDescription className="text-base text-primary">
                  {title}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 space-y-4">
                <p className="text-foreground/90 leading-relaxed">{description}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
