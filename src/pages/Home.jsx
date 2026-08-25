import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogPosts, categories } from "../data/blog";
import FeaturedBlog from "../components/FeaturedBlog";
import BlogCard from "../components/BlogCard";
import Newsletter from "../components/Newsletter";
import Faq from "../components/Faq";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Plane,
  Sparkles,
  ShieldCheck,
  Tag,
  Search,
} from "lucide-react";
import { Helmet } from "react-helmet";

const slides = [
  {
    id: 1,
    image: "/images/ASD Banner 1.png",
   
    title: "Fly Smarter with Airlines Support Desk",
    subtitle:
      "Get instant help with flight bookings, name changes, seat selection, and round-the-clock live phone support.",
    buttonText: "Get Booking Help",
    link: "/blog?category=Travelocity",
    badgeIcon: Plane,
  },
  {
    id: 2,
    image: "/images/ASD Banner 2.png",
    tag: "Flight Cancellations & Refunds",
    title: "Hassle-Free Airline Ticket Modifications",
    subtitle:
      "Need to change dates or cancel a flight? Explore step-by-step guides and live agent support for instant refund requests.",
    buttonText: "View Cancellation Rules",
    link: "/blog?category=Travelocity",
    badgeIcon: Tag,
  },
  {
    id: 3,
    image: "/images/ASD Banner 3.png",
    tag: "Baggage & Check-In Support",
    title: "Complete Airline Baggage & Check-in Guides",
    subtitle:
      "Avoid airport surprises. Check airline-specific baggage allowances, fee waivers, and online check-in procedures.",
    buttonText: "Check Baggage Policies",
    link: "/blog?category=Travelocity",
    badgeIcon: Sparkles,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featured = blogPosts.find((post) => post.featured) || blogPosts[0];
  const latestBlogs = blogPosts.slice(0, 6);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
    <Helmet>
  <title>
     Airline Customer Support & Travel Help | Assistance 
  </title>

  <meta
    name="description"
    content="Get airline customer support for bookings, cancellations, refunds, flight changes and travel assistance. Find helpful guides and contact options online"
  />

  <link
    rel="canonical"
    href="https://airlinessupport-desk.com/"
  />

</Helmet>
    <div className="min-h-screen bg-gray-50/50">
      
      <section className="relative w-full h-[90vh] min-h-[580px] max-h-[850px] overflow-hidden bg-black">
        {slides.map((slide, index) => {
          const BadgeIcon = slide.badgeIcon;
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
    
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
                  
         
                  <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-amber-300">
                    <BadgeIcon className="w-4 h-4" />
                    <span>{slide.tag}</span>
                  </div>

          
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-md">
                    {slide.title}
                  </h1>

    
                  <p className="text-gray-200 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow">
                    {slide.subtitle}
                  </p>

     
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <Link
                      to={slide.link}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-amber-500  text-slate-950 font-bold rounded-2xl shadow-xl hover:shadow-amber-500/20 transition-all text-sm sm:text-base"
                    >
                      {slide.buttonText}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link
                      to="/blog"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-2xl transition-all text-sm sm:text-base"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Browse All Articles
                    </Link>
                  </div>

              
                  <div className="hidden sm:flex items-center justify-center gap-6 pt-6 text-xs text-gray-300 font-medium">
                    <div className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span>24/7 Travel Assistance</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <div className="flex items-center space-x-1.5">
                      <Plane className="w-4 h-4 text-amber-400" />
                      <span>Flight & Booking Guides</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <div className="flex items-center space-x-1.5">
                      <Tag className="w-4 h-4 text-amber-400" />
                      <span>Best Fare Guarantees</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}

  
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>


        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-8 bg-amber-400" : "w-2.5 bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

        {featured && <FeaturedBlog blog={featured} />}


        <section className="my-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Popular Categories</h2>
            <Link to="/blog" className="text-sm font-semibold text-indigo-600 hover:underline">
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

        <section className="my-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Freshly published insights from our editorial team.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
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

        <Faq/>

        <Newsletter />

      </div>
    </div>
    </>
  );
}