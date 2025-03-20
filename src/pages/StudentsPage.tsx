
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StudentGrid } from "@/components/student-grid";

const StudentsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-24 pt-32">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 slide-up">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 rounded-full mb-4">
              Our Talent
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Meet Our Students
            </h2>
            <p className="text-lg text-muted-foreground">
              EESPIRE showcases top talent from our electrical engineering programs. 
              Each student brings unique skills and perspectives to the industry.
            </p>
          </div>
          
          <div className="slide-up">
            <StudentGrid />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default StudentsPage;
