import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";

import BlogPostHero from "../components/blog/BlogPostHero";
import BlogPostContent from "../components/blog/BlogPostContent";
import BlogPostSidebar from "../components/blog/BlogPostSidebar";
import BlogPostCTA from "../components/blog/BlogPostCTA";

function BlogPostPage() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const [errorMessage, setErrorMessage] =
    useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadBlogPost() {
      setIsLoading(true);
      setIsNotFound(false);
      setErrorMessage("");
      setPost(null);
      setRelatedPosts([]);

      try {
        const postResponse = await fetch(
          `/api/blogs?slug=${encodeURIComponent(slug)}`,
          {
            signal: controller.signal,
          }
        );

        const postResult = await postResponse.json();

        if (postResponse.status === 404) {
          setIsNotFound(true);
          return;
        }

        if (!postResponse.ok) {
          throw new Error(
            postResult.message ||
              "The article could not be loaded."
          );
        }

        setPost(postResult.post);

        /*
          Load the article list separately for the sidebar.
          A sidebar failure should not prevent the main article
          from appearing.
        */
        try {
          const relatedResponse = await fetch(
            "/api/blogs",
            {
              signal: controller.signal,
            }
          );

          const relatedResult =
            await relatedResponse.json();

          if (relatedResponse.ok) {
            const otherPosts = (
              relatedResult.posts || []
            )
              .filter(
                (item) =>
                  item.slug !== postResult.post.slug
              )
              .slice(0, 3);

            setRelatedPosts(otherPosts);
          }
        } catch (relatedError) {
          if (relatedError.name !== "AbortError") {
            console.error(
              "Unable to load related posts:",
              relatedError
            );
          }
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(
            "Unable to load blog post:",
            error
          );

          setErrorMessage(
            "The article could not be loaded. Please try again shortly."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadBlogPost();

    return () => {
      controller.abort();
    };
  }, [slug]);

  if (isLoading) {
    return (
      <>
        <SEO
          title={`Loading Article | ${SITE_NAME}`}
          description="Loading an article from Ultimate Health Men."
          canonical={`${SITE_URL}/blog/${slug}`}
        />

        <main className="min-h-screen bg-[#f5f5f7] px-6 py-24">
          <section
            className="mx-auto max-w-5xl text-center"
            role="status"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-navy-light)]">
              Ultimate Health Men
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[#1d1d1f] md:text-6xl">
              Loading article...
            </h1>
          </section>
        </main>
      </>
    );
  }

  if (isNotFound) {
    return (
      <>
        <SEO
          title={`Article Not Found | ${SITE_NAME}`}
          description="The requested blog post could not be found."
          canonical={`${SITE_URL}/blog`}
        />

        <main className="min-h-screen bg-[#f5f5f7] px-6 py-24">
          <section className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-navy-light)]">
              Article not found
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-[#1d1d1f] md:text-7xl">
              This blog post does not exist.
            </h1>

            <Link
              to="/blog"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#0b1f33] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-navy)]"
            >
              Back to Blog
            </Link>
          </section>
        </main>
      </>
    );
  }

  if (errorMessage || !post) {
    return (
      <>
        <SEO
          title={`Article Unavailable | ${SITE_NAME}`}
          description="The requested article is temporarily unavailable."
          canonical={`${SITE_URL}/blog`}
        />

        <main className="min-h-screen bg-[#f5f5f7] px-6 py-24">
          <section className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-navy-light)]">
              Article unavailable
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-[#1d1d1f] md:text-7xl">
              We couldn’t load this article.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--brand-navy)]">
              {errorMessage}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center rounded-full bg-[#0b1f33] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-navy)]"
              >
                Try Again
              </button>

              <Link
                to="/blog"
                className="inline-flex items-center justify-center rounded-full border border-[#0b1f33] px-7 py-3 text-sm font-semibold text-[#0b1f33] transition hover:bg-white"
              >
                Back to Blog
              </Link>
            </div>
          </section>
        </main>
      </>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    articleSection: post.category,
    datePublished: post.publishedAt || post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    ...(post.image
      ? {
          image: post.image,
        }
      : {}),
  };

  return (
    <>
      <SEO
        title={`${post.title} | ${SITE_NAME}`}
        description={post.excerpt}
        canonical={`${SITE_URL}/blog/${post.slug}`}
        image={post.image || undefined}
        structuredData={structuredData}
      />

      <main className="overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
        <BlogPostHero post={post} />

        <section className="px-6 pb-24 lg:pb-32">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-12">
            <BlogPostContent post={post} />

            <BlogPostSidebar
              currentPost={post}
              relatedPosts={relatedPosts}
            />
          </div>
        </section>

        <BlogPostCTA />
      </main>
    </>
  );
}

export default BlogPostPage;