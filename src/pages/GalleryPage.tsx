
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GalleryGrid } from "@/components/gallery-grid";

const GalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background -z-10" />
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full mb-6">
              Event Highlights
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">
              EESPIRE Gallery
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Explore moments from previous EESPIRE events. These images capture the energy, connections, 
              and innovation that define our electrical engineering career fair.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="py-12 mb-16">
        <div className="container px-4 mx-auto">
          <GalleryGrid />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
