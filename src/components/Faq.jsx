import { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall, Plane, ShieldCheck, CreditCard } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "How do I contact Airlines Support Desk?",
    answer:
      "📞 Call +34900680866(ES)/+18888434146(USA) for immediate assistance.  ",
  },
  {
    id: 2,
    question: "Can I change my flight date by phone",
    answer:
      "Yes, call our support desk and request “flight change.”  ",
  },
  {
    id: 3,
   
    question: "How do I request a refund?",
    answer:
      "Call +34900680866(ES)/+18888434146(USA) and ask for “refund assistance.”  ",
  },
  {
    id: 4,
    
    question: "Q4: Is support available in Spanish?",
    answer:
      "Yes, we provide bilingual support (English + Español).",
  },
 
];

const categories = ["All", "Flights & Booking", "Cancellation & Refunds", "Baggage & Check-In", "Payments & Security", "Support & Assistance"];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaqs =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-semibold">
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Everything you need to know about flight bookings, cancellation policies, baggage rules, and support services.
          </p>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-200 ${
                  isOpen
                    ? "bg-white border-indigo-300 shadow-md ring-1 ring-indigo-200"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "bg-indigo-100 text-indigo-600 rotate-180" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

   
       

      </div>
    </section>
  );
}