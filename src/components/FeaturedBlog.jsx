import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";

export default function FeaturedBlog({ blog }) {
  if (!blog) return null;

  return (
    <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-900 rounded-3xl overflow-hidden shadow-2xl text-white my-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* Image Column */}
        <div className="lg:col-span-7 h-64 sm:h-80 lg:h-[420px] overflow-hidden relative">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:hidden" />
        </div>

        {/* Content Column */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center space-x-2 text-indigo-400 text-md font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Featured Article</span>
            <span>•</span>
            <span className="bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-full border border-indigo-500/30">
              {blog.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4 hover:text-indigo-200 transition-colors">
            <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base line-clamp-3 mb-6 leading-relaxed">
            {blog.excerpt}
          </p>

          <div className="flex items-center text-md text-gray-500 space-x-4 mb-6">
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {blog.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {blog.readingTime}
            </span>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <span className="text-md font-medium text-gray-500">By {blog.author}</span>
            <Link
              to={`/blog/${blog.slug}`}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-md font-semibold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25"
            >
              Read Article
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}