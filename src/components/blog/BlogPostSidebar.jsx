import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ExpandingCTA from "../ui/ExpandingCTA";

function BlogPostSidebar({ currentPost, relatedPosts }) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-navy)] transition hover:text-[var(--brand-navy-light)]"
        >
          <ArrowLeft size={16} />
          All Articles
        </Link>

        {relatedPosts.length > 0 && (
          <>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-navy-light)]">
              More Articles
            </p>

            <div className="mt-5 divide-y divide-black/10">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block py-5 first:pt-0 last:pb-0"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-navy-light)]">
                    {post.category}
                  </p>

                  <h2 className="mt-2 text-base font-semibold leading-6 text-[#1d1d1f] transition group-hover:text-[var(--brand-navy)]">
                    {post.title}
                  </h2>

                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-navy)]">
                    Read article
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="rounded-[2rem] bg-[#0b1f33] p-7 text-white shadow-xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">
          Take the Next Step
        </p>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          Ready for healthcare built around you?
        </h2>

        <p className="mt-4 text-sm leading-7 text-white/75">
          Learn how Ultimate Health Men can support your health, wellness, and
          performance goals.
        </p>

        <div className="mt-6">
          <ExpandingCTA href="/contact">
            Book Consultation
          </ExpandingCTA>
        </div>

        {currentPost.relatedServiceSlug && (
          <Link
            to={`/service/${currentPost.relatedServiceSlug}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
          >
            View related service
            <ArrowRight size={15} />
          </Link>
        )}
      </div>
    </aside>
  );
}

export default BlogPostSidebar;