import { BlogCard } from "@/components/blog-card"
import { SearchBar } from "@/components/search-bar"
import { CategoryFilter } from "@/components/category-filter"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, this would come from a database
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    description:
      "Learn the latest features and improvements in Next.js 15, including the new App Router and enhanced performance optimizations.",
    backgroundImage: "/placeholder.svg?height=300&width=500",
    category: "Web Development",
    author: "John Doe",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "JavaScript"],
  },
  {
    id: 2,
    title: "The Future of AI in Web Design",
    description:
      "Exploring how artificial intelligence is revolutionizing the way we approach web design and user experience.",
    backgroundImage: "/placeholder.svg?height=300&width=500",
    category: "AI & Technology",
    author: "Jane Smith",
    publishedAt: "2024-01-12",
    readTime: "8 min read",
    tags: ["AI", "Design", "UX"],
  },
  {
    id: 3,
    title: "Mastering CSS Grid Layout",
    description:
      "A comprehensive guide to CSS Grid, covering everything from basic concepts to advanced layout techniques.",
    backgroundImage: "/placeholder.svg?height=300&width=500",
    category: "CSS",
    author: "Mike Johnson",
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    tags: ["CSS", "Layout", "Frontend"],
  },
  {
    id: 4,
    title: "Building Scalable React Applications",
    description:
      "Best practices and architectural patterns for building large-scale React applications that can grow with your team.",
    backgroundImage: "/placeholder.svg?height=300&width=500",
    category: "React",
    author: "Sarah Wilson",
    publishedAt: "2024-01-08",
    readTime: "15 min read",
    tags: ["React", "Architecture", "Scalability"],
  },
  {
    id: 5,
    title: "The Art of Typography in Web Design",
    description:
      "Understanding how typography choices can make or break your web design, with practical tips and examples.",
    backgroundImage: "/placeholder.svg?height=300&width=500",
    category: "Design",
    author: "David Brown",
    publishedAt: "2024-01-05",
    readTime: "7 min read",
    tags: ["Typography", "Design", "UI"],
  },
  {
    id: 6,
    title: "Database Optimization Techniques",
    description:
      "Learn advanced database optimization strategies to improve your application's performance and scalability.",
    backgroundImage: "/placeholder.svg?height=300&width=500",
    category: "Backend",
    author: "Lisa Chen",
    publishedAt: "2024-01-03",
    readTime: "10 min read",
    tags: ["Database", "Performance", "Backend"],
  },
]

const categories = ["All", "Web Development", "AI & Technology", "CSS", "React", "Design", "Backend"]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">BlogCraft</h1>
              <span className="ml-2 text-sm text-gray-500">Professional Blogging Platform</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/create">
                <Button className="flex items-center gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Create Post
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover insights, tutorials, and stories from our community of writers and developers.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <SearchBar />
            <CategoryFilter categories={categories} />
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">BlogCraft</h3>
              <p className="text-gray-400">The modern blogging platform for creators, developers, and storytellers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BlogCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
