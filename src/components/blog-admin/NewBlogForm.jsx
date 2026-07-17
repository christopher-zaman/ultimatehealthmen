import { useState } from "react";
import {
  CirclePlus,
  ExternalLink,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

const emptySection = {
  heading: "",
  body: "",
};

const initialForm = {
  title: "",
  excerpt: "",
  intro: "",
  category: "Men’s Health",
  image: "",
  imageAlt: "",
  relatedServiceSlug: "",
  content: [{ ...emptySection }],
};

const categories = [
  "Men’s Health",
  "Preventive Care",
  "Direct Primary Care",
  "Hormone Health",
  "Weight Management",
  "Sexual Wellness",
  "Hair Restoration",
  "Practice News",
];

const relatedServices = [
  {
    label: "No related service",
    value: "",
  },
  {
    label: "Direct Primary Care",
    value: "direct-primary-care",
  },
  {
    label: "Elective IV Hydration",
    value: "elective-iv-hydration",
  },
  {
    label: "Erectile Dysfunction Treatment",
    value: "erectile-dysfunction-treatment",
  },
  {
    label: "Sexual Wellness",
    value: "sexual-wellness",
  },
  {
    label: "Hormone Optimization",
    value: "hormone-optimization",
  },
  {
    label: "Weight Management",
    value: "weight-management",
  },
  {
    label: "Peptide Therapy",
    value: "peptide-therapy",
  },
];

function NewBlogForm({
  onSessionExpired,
  onLogout,
}) {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [errorMessage, setErrorMessage] =
    useState("");
  const [publishedPost, setPublishedPost] =
    useState(null);

  function updateField(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function updateSection(index, field, value) {
    setForm((currentForm) => ({
      ...currentForm,
      content: currentForm.content.map(
        (section, sectionIndex) =>
          sectionIndex === index
            ? {
                ...section,
                [field]: value,
              }
            : section
      ),
    }));
  }

  function addSection() {
    setForm((currentForm) => ({
      ...currentForm,
      content: [
        ...currentForm.content,
        { ...emptySection },
      ],
    }));
  }

  function removeSection(index) {
    setForm((currentForm) => ({
      ...currentForm,
      content: currentForm.content.filter(
        (_, sectionIndex) =>
          sectionIndex !== index
      ),
    }));
  }

  function resetForm() {
    setForm({
      ...initialForm,
      content: [{ ...emptySection }],
    });

    setPublishedPost(null);
    setErrorMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");
    setPublishedPost(null);

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.status === 401) {
        onSessionExpired();
        return;
      }

      if (!response.ok) {
        throw new Error(
          result.message ||
            "The blog post could not be published."
        );
      }

      setPublishedPost({
        title: result.post.title,
        url: result.url,
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (publishedPost) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <div className="rounded-[2rem] border border-green-200 bg-white p-8 text-center shadow-xl sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-700">
            Published successfully
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#1d1d1f] sm:text-5xl">
            {publishedPost.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-[var(--brand-navy)]">
            The article is now available on the
            Ultimate Health Men blog.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to={publishedPost.url}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b1f33] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-navy)]"
            >
              View Article
              <ExternalLink size={16} />
            </Link>

            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center justify-center rounded-full border border-[#0b1f33] px-7 py-3 text-sm font-semibold text-[#0b1f33] transition hover:bg-[#0b1f33]/5"
            >
              Add Another Blog
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <div className="flex flex-col gap-6 border-b border-black/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-navy-light)]">
            Blog administration
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#1d1d1f] sm:text-6xl">
            Add a new blog
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--brand-navy)]">
            Complete the fields below. The post will
            publish immediately after submission.
          </p>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="self-start text-sm font-semibold text-[var(--brand-navy)] underline-offset-4 hover:underline"
        >
          Sign Out
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-8"
      >
        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold">
            Article details
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <label
                htmlFor="title"
                className="text-sm font-semibold"
              >
                Title
              </label>

              <input
                id="title"
                name="title"
                value={form.title}
                onChange={updateField}
                maxLength={200}
                required
                className="mt-2 w-full rounded-2xl border border-black/15 px-4 py-3 outline-none transition focus:border-[#0b1f33] focus:ring-4 focus:ring-[#0b1f33]/10"
              />
            </div>

            <div>
              <label
                htmlFor="excerpt"
                className="text-sm font-semibold"
              >
                Excerpt
              </label>

              <p className="mt-1 text-sm text-[var(--brand-navy-light)]">
                A short summary displayed on the blog
                card and in search results.
              </p>

              <textarea
                id="excerpt"
                name="excerpt"
                value={form.excerpt}
                onChange={updateField}
                maxLength={500}
                required
                rows={3}
                className="mt-2 w-full resize-y rounded-2xl border border-black/15 px-4 py-3 outline-none transition focus:border-[#0b1f33] focus:ring-4 focus:ring-[#0b1f33]/10"
              />
            </div>

            <div>
              <label
                htmlFor="intro"
                className="text-sm font-semibold"
              >
                Introduction
              </label>

              <p className="mt-1 text-sm text-[var(--brand-navy-light)]">
                Leave this blank to use the excerpt as
                the introduction.
              </p>

              <textarea
                id="intro"
                name="intro"
                value={form.intro}
                onChange={updateField}
                maxLength={2000}
                rows={5}
                className="mt-2 w-full resize-y rounded-2xl border border-black/15 px-4 py-3 outline-none transition focus:border-[#0b1f33] focus:ring-4 focus:ring-[#0b1f33]/10"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="category"
                  className="text-sm font-semibold"
                >
                  Category
                </label>

                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={updateField}
                  className="mt-2 w-full rounded-2xl border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-[#0b1f33] focus:ring-4 focus:ring-[#0b1f33]/10"
                >
                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="relatedServiceSlug"
                  className="text-sm font-semibold"
                >
                  Related service
                </label>

                <select
                  id="relatedServiceSlug"
                  name="relatedServiceSlug"
                  value={form.relatedServiceSlug}
                  onChange={updateField}
                  className="mt-2 w-full rounded-2xl border border-black/15 bg-white px-4 py-3 outline-none transition focus:border-[#0b1f33] focus:ring-4 focus:ring-[#0b1f33]/10"
                >
                  {relatedServices.map((service) => (
                    <option
                      key={service.value}
                      value={service.value}
                    >
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold">
            Featured image
          </h2>

          <p className="mt-2 text-sm leading-6 text-[var(--brand-navy-light)]">
            The image must already be publicly available
            online.
          </p>

          <div className="mt-7 space-y-6">
            <div>
              <label
                htmlFor="image"
                className="text-sm font-semibold"
              >
                Image URL
              </label>

              <input
                id="image"
                name="image"
                type="url"
                value={form.image}
                onChange={updateField}
                placeholder="https://example.com/image.jpg"
                className="mt-2 w-full rounded-2xl border border-black/15 px-4 py-3 outline-none transition focus:border-[#0b1f33] focus:ring-4 focus:ring-[#0b1f33]/10"
              />
            </div>

            <div>
              <label
                htmlFor="imageAlt"
                className="text-sm font-semibold"
              >
                Image description
              </label>

              <input
                id="imageAlt"
                name="imageAlt"
                value={form.imageAlt}
                onChange={updateField}
                maxLength={300}
                placeholder="Describe the image for accessibility"
                className="mt-2 w-full rounded-2xl border border-black/15 px-4 py-3 outline-none transition focus:border-[#0b1f33] focus:ring-4 focus:ring-[#0b1f33]/10"
              />
            </div>

            {form.image && (
              <img
                src={form.image}
                alt={
                  form.imageAlt ||
                  "Featured image preview"
                }
                className="max-h-[420px] w-full rounded-2xl object-cover"
              />
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">
              Article sections
            </h2>

            <p className="mt-2 text-sm leading-6 text-[var(--brand-navy-light)]">
              Each section needs a heading and its
              corresponding body text.
            </p>
          </div>

          {form.content.map((section, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold">
                  Section {index + 1}
                </h3>

                {form.content.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      removeSection(index)
                    }
                    className="inline-flex items-center gap-2 text-sm font-semibold text-red-700"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                )}
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <label
                    htmlFor={`heading-${index}`}
                    className="text-sm font-semibold"
                  >
                    Section heading
                  </label>

                  <input
                    id={`heading-${index}`}
                    value={section.heading}
                    onChange={(event) =>
                      updateSection(
                        index,
                        "heading",
                        event.target.value
                      )
                    }
                    maxLength={200}
                    required
                    className="mt-2 w-full rounded-2xl border border-black/15 px-4 py-3 outline-none transition focus:border-[#0b1f33] focus:ring-4 focus:ring-[#0b1f33]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`body-${index}`}
                    className="text-sm font-semibold"
                  >
                    Section body
                  </label>

                  <textarea
                    id={`body-${index}`}
                    value={section.body}
                    onChange={(event) =>
                      updateSection(
                        index,
                        "body",
                        event.target.value
                      )
                    }
                    maxLength={10000}
                    required
                    rows={8}
                    className="mt-2 w-full resize-y rounded-2xl border border-black/15 px-4 py-3 leading-7 outline-none transition focus:border-[#0b1f33] focus:ring-4 focus:ring-[#0b1f33]/10"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addSection}
            className="inline-flex items-center gap-2 rounded-full border border-[#0b1f33] bg-white px-6 py-3 text-sm font-semibold text-[#0b1f33] transition hover:bg-[#0b1f33]/5"
          >
            <CirclePlus size={17} />
            Add Section
          </button>
        </div>

        {errorMessage && (
          <div
            className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm font-medium text-red-800"
            role="alert"
          >
            {errorMessage}
          </div>
        )}

        <div className="flex justify-end border-t border-black/10 pt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-w-48 items-center justify-center rounded-full bg-[#0b1f33] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-navy)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting
              ? "Publishing..."
              : "Publish Blog"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewBlogForm;