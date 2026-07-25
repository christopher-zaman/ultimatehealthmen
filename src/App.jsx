import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MobileActionBar from "./components/layout/MobileActionBar";
import ScrollToTop from "./components/ScrollToTop";

// Keep the homepage eager because it is the initial PageSpeed-tested route.
import Home from "./pages/Home";

// Load secondary routes only when they are visited.
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Team = lazy(() => import("./pages/Team"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const TreatmentsPage = lazy(() => import("./pages/TreatmentsPage"));
const TreatmentPage = lazy(() => import("./pages/TreatmentPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const NewBlogPage = lazy(() => import("./pages/NewBlogPage"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />

      <ScrollToTop />

      <main>
        <Suspense
          fallback={
            <div
              className="min-h-[50vh]"
              aria-label="Loading page"
              role="status"
            />
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/service/:slug" element={<ServicePage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatment/:slug" element={<TreatmentPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/newblog" element={<NewBlogPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;