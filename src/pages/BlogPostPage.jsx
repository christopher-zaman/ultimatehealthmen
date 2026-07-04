import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";

import BlogPostHero from "../components/blog/BlogPostHero";
import BlogPostContent from "../components/blog/BlogPostContent";
import BlogPostCTA from "../components/blog/BlogPostCTA";

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

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

        <main className="blog-post-page">
          <section className="blog-post-hero">
            <p className="blog-eyebrow">Article not found</p>
            <h1>This blog post does not exist.</h1>

            <Link to="/blog" className="blog-post-cta-btn">
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

      <main className="blog-post-page">
        <BlogPostHero post={post} />
        <BlogPostContent post={post} />
        <BlogPostCTA />
      </main>
    </>
  );
}

export default BlogPostPage;