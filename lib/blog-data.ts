export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  tags: string[]
  imageUrl: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Web Development",
    excerpt: "A beginner's guide to modern web development technologies and practices.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    date: "2024-03-15",
    tags: ["Web Development", "Beginners", "Tutorial"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    title: "Open Source: Why and How to Contribute",
    excerpt: "Learn about the importance of open source and how you can start contributing.",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Smith",
    date: "2024-03-10",
    tags: ["Open Source", "Community", "Programming"],
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1000",
  },
]