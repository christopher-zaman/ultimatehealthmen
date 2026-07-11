import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";

import BlogPostHero from "../components/blog/BlogPostHero";
import BlogPostContent from "../components/blog/BlogPostContent";
import BlogPostSidebar from "../components/blog/BlogPostSidebar";
import BlogPostCTA from "../components/blog/BlogPostCTA";

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  const relatedPosts = post
    ? blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3)
    : [];

  const structuredData = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: `${SITE_URL}/blog/${post.slug}`,
        articleSection: post.category,
      }
    : null;

  if (!post) {
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

  return (
    <>
      <SEO
        title={`${post.title} | ${SITE_NAME}`}
        description={post.excerpt}
        canonical={`${SITE_URL}/blog/${post.slug}`}
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