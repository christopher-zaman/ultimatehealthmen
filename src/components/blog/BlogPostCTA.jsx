import { siteInfo } from "../../data/siteInfo";

function BlogPostCTA() {
  return (
    <section className="blog-post-cta">
      <h2>Ready to talk about your health?</h2>

      <p>
        Schedule a private consultation with Ultimate Health Men and start with
        a direct conversation about your goals, concerns, and next steps.
      </p>

      <a
        href={siteInfo.bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="blog-post-cta-btn"
      >
        Book Consultation
      </a>
    </section>
  );
}

export default BlogPostCTA;