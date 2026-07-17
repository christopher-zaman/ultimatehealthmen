import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

const markdownComponents = {
  p({ children }) {
    return (
      <p className="mt-5 first:mt-0">
        {children}
      </p>
    );
  },

  ul({ children }) {
    return (
      <ul className="mt-5 list-disc space-y-2 pl-7">
        {children}
      </ul>
    );
  },

  ol({ children }) {
    return (
      <ol className="mt-5 list-decimal space-y-3 pl-7">
        {children}
      </ol>
    );
  },

  li({ children }) {
    return (
      <li className="pl-1">
        {children}
      </li>
    );
  },

  strong({ children }) {
    return (
      <strong className="font-semibold text-[#1d1d1f]">
        {children}
      </strong>
    );
  },

  em({ children }) {
    return <em>{children}</em>;
  },

  h3({ children }) {
    return (
      <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-[#1d1d1f]">
        {children}
      </h3>
    );
  },

  h4({ children }) {
    return (
      <h4 className="mt-7 text-xl font-semibold text-[#1d1d1f]">
        {children}
      </h4>
    );
  },

  blockquote({ children }) {
    return (
      <blockquote className="mt-6 border-l-4 border-[var(--brand-navy-light)] bg-[#f5f5f7] px-5 py-4 italic">
        {children}
      </blockquote>
    );
  },

  a({ href, children }) {
    const isExternal =
      typeof href === "string" &&
      /^https?:\/\//i.test(href);

    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={
          isExternal
            ? "noopener noreferrer"
            : undefined
        }
        className="font-semibold text-[var(--brand-navy-light)] underline decoration-current/40 underline-offset-4 transition hover:text-[var(--brand-navy)]"
      >
        {children}
      </a>
    );
  },

  hr() {
    return (
      <hr className="my-8 border-black/10" />
    );
  },

  table({ children }) {
    return (
      <table className="mt-6 block w-full overflow-x-auto border-collapse text-left text-base">
        {children}
      </table>
    );
  },

  th({ children }) {
    return (
      <th className="border border-black/10 bg-[#f5f5f7] px-4 py-3 font-semibold text-[#1d1d1f]">
        {children}
      </th>
    );
  },

  td({ children }) {
    return (
      <td className="border border-black/10 px-4 py-3">
        {children}
      </td>
    );
  },
};

function MarkdownContent({ children }) {
  return (
    <div className="mt-5 text-lg leading-8 text-[var(--brand-navy)]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={markdownComponents}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

function BlogPostContent({ post }) {
  return (
    <article className="min-w-0 rounded-[2.5rem] border border-black/5 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12 lg:px-14 lg:py-14">
      <div className="max-w-3xl">
        <div className="border-b border-black/10 pb-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--brand-navy-light)]">
            Introduction
          </p>

          <div className="text-lg leading-8 text-[var(--brand-navy)] sm:text-xl sm:leading-9">
            <ReactMarkdown
              remarkPlugins={[
                remarkGfm,
                remarkBreaks,
              ]}
              components={markdownComponents}
            >
              {post.intro || post.excerpt}
            </ReactMarkdown>
          </div>
        </div>

        <div className="divide-y divide-black/10">
          {post.content.map((section, index) => (
            <section
              className="py-10 first:pt-10 last:pb-0"
              key={`${section.heading}-${index}`}
            >
              <h2 className="text-3xl font-semibold tracking-[-0.045em] text-[#1d1d1f] sm:text-4xl">
                {section.heading}
              </h2>

              <MarkdownContent>
                {section.body}
              </MarkdownContent>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

export default BlogPostContent;