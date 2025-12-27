import { useState, useEffect } from 'react';

// Mock projects data - Replace with API calls later
const MOCK_PROJECTS = [
  {
    id: 1,
    title: "Digital Marketing Campaign",
    description: "Led a successful social media campaign increasing engagement by 200%.",
    category: "Work",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Brand Strategy Overhaul",
    description: "Redefined brand identity for a local startup.",
    category: "Work",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Photography",
    description: "Capturing moments in nature and urban landscapes.",
    category: "Hobby",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Web Design System",
    description: "Built a comprehensive design system for a tech startup.",
    category: "Work",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Created a React Native mobile application.",
    category: "Work",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Content Creation",
    description: "Regular blogging and educational content for tech community.",
    category: "Interest",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
  }
];

export function useProjects() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      try {
        setData(MOCK_PROJECTS);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading, error };
}
