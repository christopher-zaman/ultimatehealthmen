import { CalendarDays, Clock } from "lucide-react";
import RevealImage from "../ui/RevealImage";

function formatPostDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function BlogPostHero({ post }) {
  return (
    <section className="px-6 pt-14 pb-12 sm:pt-16 sm:pb-16 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--brand-navy-light)] sm:text-sm">
              {post.category}
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-[-0.065em] text-[#1d1d1f] sm:text-6xl lg:text-[4.75rem] lg:leading-[0.98]">
              {post.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--text-body)] sm:text-xl sm:leading-9">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[var(--brand-navy-light)]">
              {post.author && <span>By {post.author}</span>}

              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} />
                {formatPostDate(post.date)}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
          </div>

          {post.image && (
            <RevealImage
              src={post.image}
              alt={post.imageAlt || post.title}
              from="right"
              className="h-[340px] w-full rounded-[2rem] shadow-2xl sm:h-[420px] lg:h-[500px]"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogPostHero;