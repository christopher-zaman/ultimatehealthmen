import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogData";
import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";

function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    description:
      "Read men's health articles from Ultimate Health Men covering weight management, prostate health, heart disease, preventive care, sexual wellness, and confidence.",
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      articleSection: post.category,
      description: post.excerpt,
    })),
  };

  return (
    <>
      <SEO
        title={`Men's Health Blog | ${SITE_NAME}`}
        description="Read men's health articles from Ultimate Health Men covering weight management, prostate health, heart disease, preventive care, sexual wellness, and confidence."
        canonical={`${SITE_URL}/blog`}
        structuredData={structuredData}
      />


    <main className="bg-[#f5f5f7] pt-24 text-[#1d1d1f]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
          Blog
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Men’s health insights for better energy, confidence, and prevention.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--brand-navy-light)] sm:text-xl">
          Helpful articles from Ultimate Health Men covering weight management,
          prostate health, heart health, preventive care, and confidence.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex min-h-[300px] flex-col justify-between rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-label)]">
                  {post.category}
                </p>

                <h2 className="text-2xl font-semibold tracking-tight">
                  {post.title}
                </h2>

                <p className="mt-4 leading-7 text-[var(--brand-navy)]">
                  {post.excerpt}
                </p>

                <p className="mt-5 text-sm font-medium text-[var(--text-label)]">
                  {post.readTime}
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1d1d1f]">
                Read Article
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}

export default BlogPage;