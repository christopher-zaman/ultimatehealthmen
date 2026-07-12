import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { siteInfo } from "../../data/siteInfo";

function BlogPostCTA() {
  return (
    <section className="blog-post-cta">
      <div className="blog-post-cta-icons" aria-hidden="true">
        <Stethoscope className="blog-post-cta-icon blog-post-cta-icon-left" />
        <Activity className="blog-post-cta-icon blog-post-cta-icon-top" />
        <ShieldCheck className="blog-post-cta-icon blog-post-cta-icon-right" />
        <HeartPulse className="blog-post-cta-icon blog-post-cta-icon-bottom" />
      </div>

      <div className="blog-post-cta-content">
        <p className="blog-post-cta-eyebrow">
          Personalized men&apos;s healthcare
        </p>

        <h2>Ready to talk about your health?</h2>

        <p>
          Schedule a private consultation with Ultimate Health Men and start
          with a direct conversation about your goals, concerns, and next
          steps.
        </p>

        <a
          href={siteInfo.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="blog-post-cta-btn"
        >
          Book Consultation
        </a>
      </div>
    </section>
  );
}

export default BlogPostCTA;