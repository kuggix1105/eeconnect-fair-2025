
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SponsorGrid } from "@/components/sponsor-grid";
import { Button } from "@/components/ui/button";

const SponsorsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background -z-10" />
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full mb-6">
              Our Partners
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">
              Sponsors & Partners
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              EESPIRE 2025 is made possible by the generous support of our sponsors and partners.
              These organizations are committed to advancing electrical engineering education and careers.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sponsors List */}
      <section className="py-12 mb-16">
        <div className="container px-4 mx-auto">
          <SponsorGrid />
        </div>
      </section>
      
      {/* Become a Sponsor */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold tracking-tight mb-6">
              Become a Sponsor
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join leading companies in supporting EESPIRE 2025. As a sponsor, you'll gain access to top electrical 
              engineering talent, increase your brand visibility, and demonstrate your commitment to advancing the field.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Bronze Sponsor</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Exhibition booth (standard)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Logo on event website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>2 company representatives</span>
                  </li>
                </ul>
                <p className="font-semibold">$1,500</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-blue-200 dark:border-blue-800">
                <div className="absolute top-0 inset-x-0 flex justify-center transform -translate-y-1/2">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Silver Sponsor</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Exhibition booth (premium)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Logo on event website & materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>4 company representatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>30-min presentation slot</span>
                  </li>
                </ul>
                <p className="font-semibold">$3,000</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Gold Sponsor</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Exhibition booth (prime location)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Featured logo placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>6 company representatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>1-hour workshop session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>Access to private interview room</span>
                  </li>
                </ul>
                <p className="font-semibold">$5,000</p>
              </div>
            </div>
            
            <Button size="lg" className="rounded-full px-8">
              Contact Us About Sponsorship
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SponsorsPage;
