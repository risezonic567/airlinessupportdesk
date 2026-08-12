import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 sm:p-12 text-center my-16 max-w-5xl mx-auto relative overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
          <Mail className="w-6 h-6" />
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Stay Ahead with Weekly Insights
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
          Join thousands of developers and designers receiving our handpicked articles directly in their inbox. Zero spam.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center space-x-2 text-emerald-600 font-semibold bg-emerald-50 py-3 px-6 rounded-2xl border border-emerald-200 max-w-md mx-auto">
            <CheckCircle2 className="w-5 h-5" />
            <span>Thank you for subscribing! Check your inbox soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md hover:shadow-indigo-500/25 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
}