import { useState } from "react";
import { LockKeyhole } from "lucide-react";

function BlogPinWall({ onAuthenticated }) {
  const [pin, setPin] = useState("");
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [errorMessage, setErrorMessage] =
    useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "/api/blog-auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pin,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "The PIN could not be verified."
        );
      }

      setPin("");
      onAuthenticated();
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="mx-auto max-w-xl px-6 py-20 sm:py-28">
      <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b1f33] text-white">
          <LockKeyhole size={25} />
        </div>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-navy-light)]">
          Private access
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#1d1d1f] sm:text-5xl">
          Add a new blog
        </h1>

        <p className="mt-5 leading-7 text-[var(--brand-navy)]">
          Enter your private PIN to access the blog
          publishing form.
        </p>

        <form
          className="mt-8"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="blog-pin"
            className="text-sm font-semibold text-[#1d1d1f]"
          >
            PIN
          </label>

          <input
            id="blog-pin"
            type="password"
            value={pin}
            onChange={(event) =>
              setPin(event.target.value)
            }
            autoComplete="current-password"
            required
            autoFocus
            className="mt-2 w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-lg outline-none transition focus:border-[#0b1f33] focus:ring-4 focus:ring-[#0b1f33]/10"
          />

          {errorMessage && (
            <p
              className="mt-4 text-sm font-medium text-red-700"
              role="alert"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !pin.trim()}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0b1f33] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-navy)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting
              ? "Checking PIN..."
              : "Continue"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default BlogPinWall;