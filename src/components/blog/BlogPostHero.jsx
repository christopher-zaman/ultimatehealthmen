import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function BlogPostHero({ post }) {
  return (
    <section className="blog-post-hero">
      <Link to="/blog" className="blog-back-link">
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      <p className="blog-eyebrow">
        {post.category} · {post.readTime}
      </p>

      <h1>{post.title}</h1>

      <p className="blog-post-excerpt">{post.excerpt}</p>
    </section>
  );
}

export default BlogPostHero;