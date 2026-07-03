import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../data/blogData";
import SEO from "../components/seo/SEO";

const bookingUrl = "https://app.elationemr.com/book/UltimateHealthDPC";

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="bg-[#f5f5f7] pt-24 text-[#1d1d1f]">
        <section className="mx-auto max-w-4xl px-6 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
            Article not found
          </p>

          <h1 className="text-5xl font-semibold tracking-tight">
            This blog post does not exist.
          </h1>

          <Link
            to="/blog"
            className="mt-8 inline-flex rounded-full bg-[#1d1d1f] px-7 py-3 text-sm font-semibold text-white"
          >
            Back to Blog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <>
      <SEO
      title={`${post.title} | Ultimate Health Men`}
      description={post.excerpt}
      canonical={`https://ultimatehealthmen.com/blog/${post.slug}`}
    />
    
    <main className="bg-[#f5f5f7] pt-24 text-[#1d1d1f]">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-label)] transition hover:text-[#1d1d1f]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
          {post.category} · {post.readTime}
        </p>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          {post.title}
        </h1>

        <p className="mt-6 text-xl leading-9 text-[var(--text-muted)]">
          {post.excerpt}
        </p>

        <div className="mt-14 space-y-12 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-12">
          {post.content.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-semibold tracking-tight">
                {section.heading}
              </h2>

              <p className="mt-5 text-lg leading-9 text-[var(--text-muted)]">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-[2rem] bg-[#1d1d1f] p-8 text-white sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to take the next step?
          </h2>

          <p className="mt-4 leading-8 text-white/75">
            Schedule a consultation with Ultimate Health Men and start with a
            private conversation about your health goals.
          </p>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
          >
            Book Consultation
          </a>
        </div>
      </section>
    </main>
    </>
  );
}

export default BlogPostPage;