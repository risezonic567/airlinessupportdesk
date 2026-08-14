import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            {/* Fixed nested links: Only one <Link> wrapper used now */}
            <Link to="/" className="inline-block py-1 overflow-hidden">
              <div className="p-2 bg-white/5 rounded-lg inline-block">
                <img
                  src="/images/ASD Logo.png"
                  alt="Airlines Support Desk"
                  className="h-16 sm:h-20 w-auto object-contain origin-left"
                />
              </div>
            </Link>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Your trusted platform for flight bookings, real-time airline assistance, cancellation guides, and exclusive travel deals.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Categories</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li><Link to="/blog?category=Flights" className="hover:text-white transition-colors">Flights & Bookings</Link></li>
              <li><Link to="/blog?category=Cancellations" className="hover:text-white transition-colors">Cancellations & Refunds</Link></li>
              <li><Link to="/blog?category=Baggage" className="hover:text-white transition-colors">Baggage Policies</Link></li>
              <li><Link to="/blog?category=Travel" className="hover:text-white transition-colors">Travel Guides</Link></li>
            </ul>
          </div>

          {/* Support (New 4th Column to fill the grid) */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li><a href="tel:+18001234567" className="hover:text-white transition-colors">24/7 Helpline</a></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><a href="mailto:support@airlinessupportdesk.com" className="hover:text-white transition-colors">Email Support</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-sm sm:text-base text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Airlines Support Desk. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}