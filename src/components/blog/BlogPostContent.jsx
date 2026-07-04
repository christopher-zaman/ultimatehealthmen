function BlogPostContent({ post }) {
  return (
    <article className="blog-post-content">
      <div className="blog-introduction">
        <p className="blog-intro-label">Introduction</p>

        <p className="blog-intro-text">{post.intro || post.excerpt}</p>
      </div>

      {post.content.map((section) => (
        <section className="blog-article-section" key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </section>
      ))}
    </article>
  );
}

export default BlogPostContent;