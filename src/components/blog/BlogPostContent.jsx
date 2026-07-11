function BlogPostContent({ post }) {
  return (
    <article className="min-w-0 rounded-[2.5rem] border border-black/5 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12 lg:px-14 lg:py-14">
      <div className="max-w-3xl">
        <div className="border-b border-black/10 pb-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--brand-navy-light)]">
            Introduction
          </p>

          <p className="mt-5 text-lg leading-8 text-[var(--brand-navy)] sm:text-xl sm:leading-9">
            {post.intro || post.excerpt}
          </p>
        </div>

        <div className="divide-y divide-black/10">
          {post.content.map((section) => (
            <section
              className="py-10 first:pt-10 last:pb-0"
              key={section.heading}
            >
              <h2 className="text-3xl font-semibold tracking-[-0.045em] text-[#1d1d1f] sm:text-4xl">
                {section.heading}
              </h2>

              <p className="mt-5 text-lg leading-8 text-[var(--brand-navy)]">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

export default BlogPostContent;