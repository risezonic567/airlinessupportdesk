import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import Contactus from "./pages/Contactus";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contactus />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}