import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            About DevPulse
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Delivering clean, practical, and cutting-edge perspectives on modern software engineering, web design, and digital craft.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-8 mb-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-base">
              DevPulse was created to cut through the digital noise. We curate high-signal articles that help engineers, founders, and creators stay inspired and execute better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900">High Impact</h3>
              <p className="text-md text-gray-500 leading-relaxed">
                Actionable solutions and tutorials focused on current web development realities.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900">Forward Looking</h3>
              <p className="text-md text-gray-500 leading-relaxed">
                Deep dives into AI workflows, cloud architecture, and modern JS ecosystems.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900">Zero Fluff</h3>
              <p className="text-md text-gray-500 leading-relaxed">
                Clear code, intentional typography, and concise editorial standards.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-indigo-600 rounded-3xl p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-3">Ready to dive in?</h2>
          <p className="text-indigo-100 text-sm max-w-md mx-auto mb-6">
            Browse our catalog of articles across AI, development, and business strategy.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 hover:bg-indigo-50 text-md font-bold rounded-xl transition-colors shadow-sm"
          >
            Explore All Stories
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </div>
  );
}