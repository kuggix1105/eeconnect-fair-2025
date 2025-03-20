
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PopupAdProps {
  title: string;
  content: string;
  ctaText?: string;
  ctaLink?: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export function PopupAd({ 
  title, 
  content, 
  ctaText = "Learn More", 
  ctaLink = "#",
  autoClose = true,
  autoCloseDelay = 8000 
}: PopupAdProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a small delay to let the page load
    const showTimeout = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    // Auto-close popup after specified delay if autoClose is true
    let closeTimeout: NodeJS.Timeout | null = null;
    if (autoClose) {
      closeTimeout = setTimeout(() => {
        setIsOpen(false);
      }, autoCloseDelay);
    }

    return () => {
      clearTimeout(showTimeout);
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [autoClose, autoCloseDelay]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm animate-fade-in p-4">
      <Card className={cn(
        "max-w-md w-full bg-card shadow-lg relative overflow-hidden animate-slide-in",
        "border border-border/50 dark:border-border/30"
      )}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 rounded-full opacity-70 hover:opacity-100"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <CardContent className="pt-6 pb-6 px-6">
          <div className="mb-1">
            <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 py-1 px-2 rounded-full">
              Announcement
            </span>
          </div>
          <h3 className="text-xl font-semibold mt-3 mb-2">{title}</h3>
          <p className="text-muted-foreground mb-6">{content}</p>
          <Button 
            className="w-full rounded-full" 
            onClick={() => setIsOpen(false)}
          >
            {ctaText}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
