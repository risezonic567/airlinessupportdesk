import { Link } from "react-router-dom";
import { blogPosts, categories } from "../data/blog";
import FeaturedBlog from "../components/FeaturedBlog";
import BlogCard from "../components/BlogCard";
import Newsletter from "../components/Newsletter";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const featured = blogPosts.find((post) => post.featured) || blogPosts[0];
  const latestBlogs = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto py-8 sm:py-12">
          {/* <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-md font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Tech & Business Perspectives</span>
          </div> */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-none mb-6">
            Explore Stories, Ideas & <span className="text-indigo-600">Insights</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            Stay ahead with thought-provoking content on web development, modern AI architectures, startup strategy, and minimalist living.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-indigo-500/25 transition-all text-sm"
          >
            Explore All Blogs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>

        {/* Featured Blog */}
        {featured && <FeaturedBlog blog={featured} />}

        {/* Popular Categories */}
        <section className="my-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Popular Categories</h2>
            <Link to="/blog" className="text-md font-semibold text-indigo-600 hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {categories.filter((c) => c !== "All").map((category) => (
              <Link
                key={category}
                to={`/blog?category=${encodeURIComponent(category)}`}
                className="bg-white border border-gray-100 rounded-2xl p-4 text-center hover:shadow-md hover:border-indigo-200 transition-all group"
              >
                <span className="block text-sm font-semibold text-gray-800 group-hover:text-indigo-600">
                  {category}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Blogs */}
        <section className="my-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
              <p className="text-gray-500 text-md sm:text-sm mt-1">Freshly published insights from our editorial team.</p>
            </div>
            <Link to="/blog" className="inline-flex items-center text-md font-semibold text-indigo-600 hover:text-indigo-800">
              See All
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />

      </div>
    </div>
  );
}