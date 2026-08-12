import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export default function BlogCard({ blog }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-indigo-600 text-md font-semibold px-3 py-1 rounded-full shadow-sm">
          {blog.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-4 text-md text-gray-500 mb-3">
          <span className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1" />
            {blog.date}
          </span>
          <span className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {blog.readingTime}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-3 leading-snug">
          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Footer info */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <span className="text-md font-medium text-gray-700">By {blog.author}</span>
          <Link
            to={`/blog/${blog.slug}`}
            className="inline-flex items-center text-md font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group/btn"
          >
            Read More
            <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}