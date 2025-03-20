
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StudentGrid } from "@/components/student-grid";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useState } from "react";

// Generate 100 students data
const generateStudents = () => {
  const specialties = [
    "Electrical Engineering",
    "Electronics & Communications",
    "Computer Engineering",
    "Power Systems",
    "Digital Systems",
    "Embedded Systems",
    "Control Systems",
    "Robotics",
    "Signal Processing",
    "Microelectronics",
    "RF Engineering",
    "VLSI Design",
    "Telecommunications",
    "Semiconductor Physics"
  ];

  const years = ["Freshman", "Sophomore", "Junior", "Senior", "Graduate", "PhD Candidate"];
  
  const images = [
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3"
  ];

  const firstNames = ["Alex", "Maya", "David", "Sophia", "James", "Zoe", "Samuel", "Emma", "Michael", "Olivia", "Daniel", "Ava", "William", "Emily", "Jason", "Lily", "Ryan", "Chloe", "Benjamin", "Grace"];
  const lastNames = ["Johnson", "Patel", "Kim", "Martinez", "Wilson", "Bennett", "Taylor", "Smith", "Brown", "Garcia", "Davis", "Rodriguez", "Miller", "Chen", "Williams", "Lee", "Anderson", "Harris", "Clark", "Walker"];

  const students = [];
  
  for (let i = 1; i <= 100; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    
    const specialty = specialties[Math.floor(Math.random() * specialties.length)];
    const year = years[Math.floor(Math.random() * years.length)];
    const title = `${specialty}, ${year}`;
    
    const image = images[Math.floor(Math.random() * images.length)];
    
    const hasBothSocialLinks = Math.random() > 0.5;
    const socialLinks = [];
    
    if (hasBothSocialLinks || Math.random() > 0.3) {
      socialLinks.push({
        type: "linkedin" as const,
        url: "#",
        label: "LinkedIn"
      });
    }
    
    if (hasBothSocialLinks || Math.random() > 0.3) {
      socialLinks.push({
        type: "github" as const,
        url: "#",
        label: "GitHub"
      });
    }
    
    students.push({
      id: i.toString(),
      name,
      title,
      image,
      description: `${name} is a ${year.toLowerCase()} studying ${specialty} with a focus on innovative technologies. With experience in various projects and research initiatives, ${firstName} has developed strong skills in problem-solving and technical implementation.`,
      cv: "#",
      socialLinks
    });
  }
  
  return students;
};

const EXTENDED_STUDENTS = generateStudents();

const StudentsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 16;
  
  // Calculate the students to display on the current page
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = EXTENDED_STUDENTS.slice(indexOfFirstStudent, indexOfLastStudent);
  
  // Calculate total pages
  const totalPages = Math.ceil(EXTENDED_STUDENTS.length / studentsPerPage);
  
  // Handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    
    if (totalPages <= 7) {
      // If we have 7 or fewer pages, show all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);
      
      // If current page is among the first 3 pages
      if (currentPage <= 3) {
        pageNumbers.push(2, 3, 4, 5, "ellipsis", totalPages);
      } 
      // If current page is among the last 3 pages
      else if (currentPage >= totalPages - 2) {
        pageNumbers.push("ellipsis", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } 
      // If current page is somewhere in the middle
      else {
        pageNumbers.push("ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages);
      }
    }
    
    return pageNumbers;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background -z-10" />
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              Meet Our <span className="text-[#ff0419] dark:text-[#ff0419]">Talented Students</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              EESPIRE showcases the brightest minds in electrical engineering. Connect with our students to discover their skills, projects, and research interests.
            </p>
          </div>
        </div>
      </section>
      
      {/* Students Grid Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-2 text-center">Student Profiles</h2>
            <p className="text-muted-foreground text-center">Browse through our electrical engineering talent showcase</p>
          </div>
          
          <div className="custom-student-grid">
            <StudentGrid students={currentStudents} />
          </div>
          
          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                  </PaginationItem>
                )}
                
                {getPageNumbers().map((page, index) => (
                  page === "ellipsis" ? (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink 
                        isActive={page === currentPage}
                        onClick={() => handlePageChange(page as number)}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                ))}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default StudentsPage;
