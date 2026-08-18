import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-md">
            Contact Us
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            We'd Love to Hear From You
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question, suggestion, or need help? Feel free to reach out
            to us. Our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         
          <div className="bg-blue-500 text-white rounded-2xl p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-center mb-4">
              Get in Touch
            </h3>

            <p className="text-blue-100 text-xl mb-8 text-center leading-relaxed">
              We're here to help. Contact us through any of the following
              channels and we'll be happy to assist you.
            </p>

            <div className="space-y-6">
           
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-blue-100 text-md mt-1">
                    info@risezonic.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-blue-100 text-md mt-1">
                    +91 97111 10975
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-blue-100 text-md mt-1">
                    RZ11/D, Upper Ground Floor Opp. Palam Metro Station Gate No 3, Palam Dwarka Road, Delhi, 110045
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-md font-medium text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;