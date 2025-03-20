
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Sample gallery data
const GALLERY_IMAGES = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Career fair main hall",
    caption: "Opening day of EESPIRE 2024 with students networking with industry representatives"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80",
    alt: "Keynote presentation",
    caption: "Industry leaders sharing insights during the keynote presentation"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
    alt: "Networking session",
    caption: "Students engaging with company representatives during networking sessions"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1575467678930-c7adb7bbc2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Workshop session",
    caption: "Hands-on workshop on emerging technologies in electrical engineering"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Panel discussion",
    caption: "Panel discussion on the future of electrical engineering careers"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    alt: "Resume review session",
    caption: "Students receiving personalized resume feedback from industry professionals"
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Team collaboration",
    caption: "Student teams collaborating on challenge projects presented by sponsor companies"
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Job interview",
    caption: "On-site interviews conducted during the career fair"
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Student showcase",
    caption: "Students presenting their innovative projects to industry representatives"
  }
];

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {GALLERY_IMAGES.map((image) => (
          <div
            key={image.id}
            className={cn(
              "aspect-video overflow-hidden rounded-lg cursor-pointer",
              "bg-muted border border-border/50 group"
            )}
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-white text-sm">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <div>
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-4 bg-background">
                <p className="text-foreground/90 text-sm">{selectedImage.caption}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
