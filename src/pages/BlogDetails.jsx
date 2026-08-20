import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blog";
import BlogCard from "../components/BlogCard";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Share2,
  Bookmark,
  FileQuestion
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function BlogDetails() {
  const { slug } = useParams();

  const blogIndex = blogPosts.findIndex((post) => post.slug === slug);
  const blog = blogPosts[blogIndex];

  // 404 Guard
  if (!blog) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="p-4 bg-indigo-50 text-indigo-600 rounded-full mb-4">
          <FileQuestion className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Blog Not Found</h1>
        <p className="text-gray-600 text-sm max-w-md mb-6">
          The article you are looking for might have been moved or removed.
        </p>
        <Link
          to="/blog"
          className="px-5 py-2.5 bg-indigo-600 text-white text-md font-semibold rounded-xl hover:bg-indigo-500 transition-colors inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>
      </div>
    );
  }

  const prevBlog = blogIndex > 0 ? blogPosts[blogIndex - 1] : null;
  const nextBlog = blogIndex < blogPosts.length - 1 ? blogPosts[blogIndex + 1] : null;

  const relatedBlogs = blogPosts
    .filter((p) => p.category === blog.category && p.id !== blog.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blog.metatitle}</title>
        <meta name="description" content={blog.metadescription}/>
        <link rel="canonical" href={blog.conanical} />
       <script type="application/ld+json">
  {JSON.stringify(blogSchema)}
</script>

      </Helmet>

      <article className="min-h-screen bg-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center text-md font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Blog List
          </Link>

          {/* Header Metadata */}
          <header className="mb-8">
            <div className="inline-block bg-indigo-50 text-indigo-700 text-md font-bold px-3 py-1 rounded-full mb-4">
              {blog.category}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-100 text-md text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center font-medium text-gray-800">
                  <User className="w-4 h-4 mr-1 text-indigo-600" />
                  {blog.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {blog.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  {blog.readingTime}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-full transition-colors" title="Share Article">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-full transition-colors" title="Bookmark">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden aspect-[16/9] mb-10 shadow-lg bg-gray-100">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>

          {/* Content Render Area */}
          <div
            className="prose prose-indigo max-w-none text-gray-700 text-base leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags */}
          {/* <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
          <span className="text-md font-semibold text-gray-500 mr-2">Tags:</span>
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-md bg-gray-100 text-gray-600 px-3 py-1 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div> */}

          {/* Prev / Next Pagination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-12 pt-8 border-t border-gray-100">
            {prevBlog ? (
              <Link
                to={`/blog/${prevBlog.slug}`}
                className="p-4 border border-gray-100 rounded-2xl hover:border-indigo-200 hover:shadow-md transition-all flex flex-col group"
              >
                <span className="text-md text-gray-500 flex items-center mb-1">
                  <ChevronLeft className="w-3.5 h-3.5 mr-1" /> Previous Post
                </span>
                <span className="text-sm font-bold text-gray-800 group-hover:text-indigo-600 line-clamp-1">
                  {prevBlog.title}
                </span>
              </Link>
            ) : <div />}

            {nextBlog && (
              <Link
                to={`/blog/${nextBlog.slug}`}
                className="p-4 border border-gray-100 rounded-2xl hover:border-indigo-200 hover:shadow-md transition-all flex flex-col items-end text-right group ml-auto w-full"
              >
                <span className="text-md text-gray-500 flex items-center mb-1">
                  Next Post <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </span>
                <span className="text-sm font-bold text-gray-800 group-hover:text-indigo-600 line-clamp-1">
                  {nextBlog.title}
                </span>
              </Link>
            )}
          </div>

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <section className="mt-16 pt-12 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((related) => (
                  <BlogCard key={related.id} blog={related} />
                ))}
              </div>
            </section>
          )}

        </div>
      </article>
    </>
  );
}