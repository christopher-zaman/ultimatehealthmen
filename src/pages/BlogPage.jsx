import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] =
    useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadBlogPosts() {
      try {
        const response = await fetch("/api/blogs", {
          signal: controller.signal,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message ||
              "The blog posts could not be loaded."
          );
        }

        setBlogPosts(result.posts || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(
            "Unable to load blog posts:",
            error
          );

          setErrorMessage(
            "The articles could not be loaded. Please try again shortly."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadBlogPosts();

    return () => {
      controller.abort();
    };
  }, []);

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
      author: {
        "@type": "Person",
        name: post.author,
      },
      datePublished:
        post.publishedAt || post.date,
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

      <main className="bg-[#f5f5f7] text-[#1d1d1f]">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
            Blog
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Men’s health insights for better energy,
            confidence, and prevention.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--brand-navy-light)] sm:text-xl">
            Helpful articles from Ultimate Health Men
            covering weight management, prostate health,
            heart health, preventive care, and confidence.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          {isLoading && (
            <div
              className="rounded-[2rem] border border-black/10 bg-white px-8 py-16 text-center shadow-sm"
              role="status"
            >
              <p className="text-lg font-medium text-[var(--brand-navy)]">
                Loading articles...
              </p>
            </div>
          )}

          {!isLoading && errorMessage && (
            <div
              className="rounded-[2rem] border border-red-200 bg-white px-8 py-16 text-center shadow-sm"
              role="alert"
            >
              <h2 className="text-2xl font-semibold">
                We couldn’t load the articles.
              </h2>

              <p className="mt-3 text-[var(--brand-navy)]">
                {errorMessage}
              </p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-6 rounded-full bg-[#0b1f33] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-navy)]"
              >
                Try Again
              </button>
            </div>
          )}

          {!isLoading &&
            !errorMessage &&
            blogPosts.length === 0 && (
              <div className="rounded-[2rem] border border-black/10 bg-white px-8 py-16 text-center shadow-sm">
                <h2 className="text-2xl font-semibold">
                  New articles are coming soon.
                </h2>

                <p className="mt-3 text-[var(--brand-navy)]">
                  Please check back for the latest men’s
                  health information.
                </p>
              </div>
            )}

          {!isLoading &&
            !errorMessage &&
            blogPosts.length > 0 && (
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
            )}
        </section>
      </main>
    </>
  );
}

export default BlogPage;