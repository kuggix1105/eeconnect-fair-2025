
import { StudentCard } from "@/components/student-card";

// Sample student data for homepage display
const STUDENTS = [
  {
    id: "1",
    name: "Alex Johnson",
    title: "Electrical Engineering, Senior",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "Alex is a senior studying Electrical Engineering with a focus on power systems. With experience in renewable energy projects and smart grid technology, Alex has completed internships at major utility companies and is passionate about sustainable energy solutions.",
    cv: "#",
    socialLinks: [
      {
        type: "linkedin" as const,
        url: "#",
        label: "LinkedIn"
      },
      {
        type: "github" as const,
        url: "#",
        label: "GitHub"
      }
    ]
  },
  {
    id: "2",
    name: "Maya Patel",
    title: "Electronics & Communications, Junior",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "Maya specializes in signal processing and communications systems. She has worked on projects involving IoT devices and wireless communications protocols. Her research interests include 5G technology and advanced antenna design.",
    cv: "#",
    socialLinks: [
      {
        type: "linkedin" as const,
        url: "#",
        label: "LinkedIn"
      }
    ]
  },
  {
    id: "3",
    name: "David Kim",
    title: "Computer Engineering, Senior",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "David is passionate about embedded systems and FPGA design. He has experience developing firmware for various microcontrollers and has contributed to open-source hardware projects. His senior project involves creating an advanced vision system for autonomous robots.",
    cv: "#",
    socialLinks: [
      {
        type: "github" as const,
        url: "#",
        label: "GitHub"
      },
      {
        type: "linkedin" as const,
        url: "#",
        label: "LinkedIn"
      }
    ]
  },
  {
    id: "4",
    name: "Sophia Martinez",
    title: "Electronics & Robotics, Senior",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "Sophia focuses on robotics and control systems. She has participated in multiple robotics competitions and has experience with ROS (Robot Operating System). Her interests include machine learning applications in control systems and human-robot interaction.",
    cv: "#",
    socialLinks: [
      {
        type: "linkedin" as const,
        url: "#",
        label: "LinkedIn"
      }
    ]
  },
  {
    id: "5",
    name: "James Wilson",
    title: "Power Systems, Graduate",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "James is a graduate student researching advanced power electronic converters for renewable energy integration. He has published papers on grid stability and has experience working with utility companies on smart grid implementations.",
    cv: "#",
    socialLinks: [
      {
        type: "linkedin" as const,
        url: "#",
        label: "LinkedIn"
      }
    ]
  },
  {
    id: "6",
    name: "Zoe Bennett",
    title: "Digital Systems, Junior",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "Zoe specializes in VLSI design and digital systems. She has completed internships with semiconductor companies and has skills in ASIC design and verification. Her projects include developing custom accelerators for machine learning applications.",
    cv: "#",
    socialLinks: [
      {
        type: "github" as const,
        url: "#",
        label: "GitHub"
      },
      {
        type: "linkedin" as const,
        url: "#",
        label: "LinkedIn"
      }
    ]
  }
];

interface StudentGridProps {
  students?: typeof STUDENTS;
}

export function StudentGrid({ students = STUDENTS }: StudentGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {students.map((student) => (
        <StudentCard key={student.id} {...student} />
      ))}
    </div>
  );
}
