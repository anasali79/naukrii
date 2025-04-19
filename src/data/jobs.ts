export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  salary?: string;
  skills: string[];
  description: string;
  postedDate: string;
  type: string;
}

export const jobDataByCategory: Record<string, Job[]> = {
  "Technology": [
    {
      id: "tech-1",
      title: "Senior Software Engineer",
      company: "Microsoft",
      location: "Bangalore",
      experience: "5-7",
      salary: "25-35 LPA",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      description: "Looking for an experienced software engineer to join our cloud services team...",
      postedDate: "2024-03-15",
      type: "Full-time"
    },
    {
      id: "tech-2",
      title: "Frontend Developer",
      company: "Amazon",
      location: "Hyderabad",
      experience: "3-5",
      salary: "18-25 LPA",
      skills: ["JavaScript", "React", "CSS", "HTML"],
      description: "Join our dynamic team building next-gen web applications...",
      postedDate: "2024-03-14",
      type: "Full-time"
    }
  ],
  "Finance": [
    {
      id: "fin-1",
      title: "Investment Analyst",
      company: "Goldman Sachs",
      location: "Mumbai",
      experience: "1-3",
      salary: "12-18 LPA",
      skills: ["Financial Modeling", "Excel", "SQL", "Python"],
      description: "Seeking analytical minds for our investment banking division...",
      postedDate: "2024-03-13",
      type: "Full-time"
    }
  ],
  "Marketing": [
    {
      id: "mkt-1",
      title: "Digital Marketing Manager",
      company: "Flipkart",
      location: "Delhi",
      experience: "3-5",
      salary: "15-20 LPA",
      skills: ["SEO", "Social Media Marketing", "Google Analytics", "Content Strategy"],
      description: "Lead our digital marketing initiatives across platforms...",
      postedDate: "2024-03-12",
      type: "Full-time"
    }
  ],
  "Fresher": [
    {
      id: "fresh-1",
      title: "Software Developer Trainee",
      company: "TCS",
      location: "Chennai",
      experience: "fresher",
      salary: "3.5-4.5 LPA",
      skills: ["Java", "Python", "SQL", "Data Structures"],
      description: "Great opportunity for fresh graduates to start their IT career...",
      postedDate: "2024-03-11",
      type: "Full-time"
    }
  ]
}; 