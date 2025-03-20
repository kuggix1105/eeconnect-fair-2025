
import { useEffect, useRef } from "react";
import { ArrowDown, CalendarCheck, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PopupAd } from "@/components/popup-ad";
import { Link } from "react-router-dom";

const Index = () => {
  const sponsorsRef = useRef<HTMLDivElement>(null);

  // Function to create intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".slide-up");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSponsors = () => {
    sponsorsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-background -z-10" />
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 rounded-full mb-6">
              April 15-17, 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              Connect With Your Future at <span className="text-[#ff0419] dark:text-red-400">EESPIRE 2025</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join the premier career fair for electrical engineering students and industry leaders. Discover opportunities, connect with employers, and launch your career.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 bg-[#ff0419] hover:bg-red-600">
                Register Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8"
                onClick={scrollToSponsors}
              >
                Our Sponsors
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Info */}
      <section className="py-16 bg-white dark:bg-gray-900/50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-6 text-center slide-up">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-[#ff0419] dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Date & Time</h3>
              <p className="text-muted-foreground">April 15-17, 2025<br />9:00 AM - 5:00 PM</p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-[#ff0419] dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">University Engineering Center<br />123 Campus Drive</p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-[#ff0419] dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Attendees</h3>
              <p className="text-muted-foreground">50+ Companies<br />500+ Students</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-gray-900/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 slide-up">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 rounded-full mb-4">
              About The Event
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              The Premier Electrical Engineering Career Fair
            </h2>
            <p className="text-lg text-muted-foreground">
              EESPIRE is more than just a career fair—it's a platform for innovation, networking, and professional growth. 
              We bring together top talent from electrical engineering programs and industry-leading companies for three days 
              of career exploration and opportunity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h3 className="text-2xl font-semibold mb-4">For Students</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/40 text-[#ff0419] dark:text-red-400 flex items-center justify-center">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <span>Connect with employers looking to hire engineering talent</span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/40 text-[#ff0419] dark:text-red-400 flex items-center justify-center">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <span>Participate in on-site interviews and resume reviews</span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/40 text-[#ff0419] dark:text-red-400 flex items-center justify-center">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <span>Attend workshops on industry trends and career development</span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/40 text-[#ff0419] dark:text-red-400 flex items-center justify-center">
                    <span className="text-sm font-medium">4</span>
                  </div>
                  <span>Showcase your projects and research to potential employers</span>
                </li>
              </ul>
            </div>
            
            <div className="slide-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-semibold mb-4">For Employers</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/40 text-[#ff0419] dark:text-red-400 flex items-center justify-center">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <span>Access to a pool of top electrical engineering talent</span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/40 text-[#ff0419] dark:text-red-400 flex items-center justify-center">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <span>Conduct on-site interviews and information sessions</span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/40 text-[#ff0419] dark:text-red-400 flex items-center justify-center">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <span>Showcase your company's innovations and work culture</span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/40 text-[#ff0419] dark:text-red-400 flex items-center justify-center">
                    <span className="text-sm font-medium">4</span>
                  </div>
                  <span>Build relationships with faculty and research groups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 slide-up">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 rounded-full mb-4">
              Our Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Partnerships by Tier
            </h2>
            <p className="text-lg text-muted-foreground">
              EESPIRE is supported by industry leaders across various tiers of partnership.
            </p>
          </div>
          
          {/* Platinum Partners */}
          <div className="mb-12 slide-up">
            <h3 className="text-xl font-semibold mb-6 text-center">Platinum Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png" alt="Platinum partner logo" className="max-h-12 max-w-full mb-6" />
                <h4 className="text-lg font-medium mb-2">TechCorp</h4>
                <p className="text-center text-muted-foreground text-sm">Global leader in technology solutions with a focus on innovation and cutting-edge development.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 flex flex-col items-center justify-center shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" alt="Platinum partner logo" className="max-h-12 max-w-full mb-6" />
                <h4 className="text-lg font-medium mb-2">CircuitSystems</h4>
                <p className="text-center text-muted-foreground text-sm">Leading provider of electronic components and ASIC design solutions for various industries.</p>
              </div>
            </div>
          </div>
          
          {/* Gold Partners */}
          <div className="mb-12 slide-up">
            <h3 className="text-xl font-semibold mb-6 text-center">Gold Partners</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Texas_Instruments_Logo.svg/1024px-Texas_Instruments_Logo.svg.png" alt="Gold partner logo" className="max-h-10 max-w-full mb-4" />
                <h4 className="text-base font-medium">EnergyWave</h4>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Intel_Logo.svg/1280px-Intel_Logo.svg.png" alt="Gold partner logo" className="max-h-10 max-w-full mb-4" />
                <h4 className="text-base font-medium">DataStream</h4>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1280px-Cisco_logo_blue_2016.svg.png" alt="Gold partner logo" className="max-h-10 max-w-full mb-4" />
                <h4 className="text-base font-medium">RoboTech</h4>
              </div>
            </div>
          </div>
          
          {/* Silver & Bronze Partners */}
          <div className="slide-up">
            <h3 className="text-xl font-semibold mb-6 text-center">Silver & Bronze Partners</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center h-20 shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Siemens-logo.svg/2560px-Siemens-logo.svg.png" alt="Partner logo" className="max-h-8 max-w-full" />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center h-20 shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Partner logo" className="max-h-8 max-w-full" />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center h-20 shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Tesla_Motors_Club.png/800px-Tesla_Motors_Club.png" alt="Partner logo" className="max-h-8 max-w-full" />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center h-20 shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" alt="Partner logo" className="max-h-8 max-w-full" />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 slide-up">
            <Link to="/sponsors">
              <Button variant="outline" className="rounded-full px-8 border-[#ff0419] text-[#ff0419] hover:bg-red-50">
                View All Sponsors
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Sponsors Section */}
      <section ref={sponsorsRef} className="py-24 bg-red-50 dark:bg-red-900/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 slide-up">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 rounded-full mb-4">
              Our Sponsors
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Sponsored by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground">
              EESPIRE is made possible by the support of these innovative companies at the forefront of electrical engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 slide-up">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex items-center justify-center h-24">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png" alt="Sponsor logo" className="max-h-10 max-w-full" />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex items-center justify-center h-24">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Texas_Instruments_Logo.svg/1024px-Texas_Instruments_Logo.svg.png" alt="Sponsor logo" className="max-h-10 max-w-full" />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex items-center justify-center h-24">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Intel_Logo.svg/1280px-Intel_Logo.svg.png" alt="Sponsor logo" className="max-h-10 max-w-full" />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex items-center justify-center h-24">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1280px-Cisco_logo_blue_2016.svg.png" alt="Sponsor logo" className="max-h-10 max-w-full" />
            </div>
          </div>
          
          <div className="text-center mt-12 slide-up">
            <Link to="/sponsors">
              <Button variant="outline" className="rounded-full px-8 border-[#ff0419] text-[#ff0419] hover:bg-red-50">
                View All Sponsors
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 slide-up">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 rounded-full mb-4">
              Event Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore moments from previous EESPIRE events. From networking sessions to workshops, 
              our gallery captures the essence of our career fair.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 slide-up">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Career fair main hall"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80"
                alt="Keynote presentation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                alt="Networking session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="text-center mt-12 slide-up">
            <Link to="/gallery">
              <Button variant="outline" className="rounded-full px-8 border-[#ff0419] text-[#ff0419] hover:bg-red-50">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#ff0419] to-red-700">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Shape Your Future?
            </h2>
            <p className="text-red-100 text-lg mb-10">
              Whether you're a student looking for opportunities or an employer seeking talent,
              EESPIRE 2025 is the place to be. Registration is now open for all participants.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                Register as Student
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-white border-white hover:bg-white/10">
                Register as Employer
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Popup Ad */}
      <PopupAd
        title="Early Bird Registration Now Open!"
        content="Register before January 31, 2025 to get special early bird pricing and priority access to employer sessions."
        ctaText="Register Now"
      />
    </div>
  );
};

export default Index;
