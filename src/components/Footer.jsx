import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white">
              <div className="p-2 bg-indigo-600 text-white rounded-lg">
                
              </div>
              <span>Airlines Support<span className="text-indigo-200"> Desk.</span></span>
            </Link>
            <p className="text-md text-gray-200 leading-relaxed">
              In-depth articles, practical tutorials, and modern perspectives on technology, design, and career growth.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-md">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Categories</h4>
            <ul className="space-y-2 text-md">
              <li><Link to="/blog?category=Travelocity" className="hover:text-white transition-colors">Travelocity</Link></li>
              <li><Link to="/blog?category=AI" className="hover:text-white transition-colors">Artificial Intelligence</Link></li>
              <li><Link to="/blog?category=Business" className="hover:text-white transition-colors">Business</Link></li>
              <li><Link to="/blog?category=Development" className="hover:text-white transition-colors">Development</Link></li>
            </ul>
          </div>



        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-md text-gray-200 gap-4">
          <p>© {new Date().getFullYear()} Airlines Support Desk. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-200">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}