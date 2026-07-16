import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contactFormFields } from "../../data/contactFormFields";

const createInitialFormData = (defaultService = "") => ({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: defaultService,
  preferredContactMethod: "",
  message: "",
  consent: false,

  // Honeypot spam field.
  website: "",
});

function ContactForm({
  defaultService = "",
  sourcePage = "",
}) {
  const [formData, setFormData] = useState(() =>
    createInitialFormData(defaultService)
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formMessageType, setFormMessageType] = useState("");

  /*
    Update the preselected service when navigating directly
    between treatment pages without a full page refresh.
  */
  useEffect(() => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      service: defaultService,
    }));
  }, [defaultService]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setFormMessage("");
    setFormMessageType("");

    const submittedFrom =
      sourcePage || window.location.pathname;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,

          // Useful for the email subject and body.
          subject: defaultService
            ? `Treatment inquiry: ${defaultService}`
            : "Website contact inquiry",

          page: submittedFrom,
          submittedFrom,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "The form could not be submitted."
        );
      }

      setFormData(createInitialFormData(defaultService));
      setFormMessage(result.message);
      setFormMessageType("success");
    } catch (error) {
      setFormMessage(
        error.message ||
          "Something went wrong. Please try again."
      );

      setFormMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  function renderField(field) {
    const fieldClassName =
      "mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#12355b] focus:ring-2 focus:ring-[#12355b]/15";

    if (field.type === "textarea") {
      return (
        <textarea
          id={field.name}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          required={field.required}
          rows={6}
          className={fieldClassName}
        />
      );
    }

    if (field.type === "select") {
      const options = [...field.options];

    if (
        field.name === "service" &&
        defaultService &&
        !options.includes(defaultService)
      ) {
        options.unshift(defaultService);
    }

      return (
        <select
          id={field.name}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          required={field.required}
          className={fieldClassName}
        >
          <option value="">
            {field.name === "service"
              ? "Select a service"
              : "Select an option"}
          </option>

          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        id={field.name}
        name={field.name}
        type={field.type}
        value={formData[field.name]}
        onChange={handleChange}
        required={field.required}
        autoComplete={field.autoComplete}
        className={fieldClassName}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative space-y-6"
    >
      <div className="grid gap-x-6 gap-y-7 md:grid-cols-2">
        {contactFormFields.map((field) => (
          <div
            key={field.name}
            className={
              field.type === "textarea"
                ? "md:col-span-2"
                : ""
            }
          >
            <label
              htmlFor={field.name}
              className="block text-sm font-semibold text-slate-900"
            >
              {field.label}

              {field.required && (
                <span className="text-red-600"> *</span>
              )}
            </label>

            {renderField(field)}
          </div>
        ))}
      </div>

      {/* Honeypot spam field */}
      <div
        className="absolute -left-[9999px]"
        aria-hidden="true"
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mt-1 h-4 w-4"
        />

        <span>
          I agree that Ultimate Health Men may contact me
          regarding this inquiry. I understand that this form
          should not be used for emergencies or sensitive
          medical information. See our{" "}
          <Link
            to="/privacy-policy"
            className="font-medium text-[#0b1f33] underline"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0b1f33] px-7 py-3 font-semibold text-white transition hover:bg-[#12314d] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting
          ? "Submitting..."
          : "Submit inquiry"}
      </button>

      {formMessage && (
        <p
          role="status"
          className={
            formMessageType === "success"
              ? "text-sm font-medium text-green-700"
              : "text-sm font-medium text-red-700"
          }
        >
          {formMessage}
        </p>
      )}
    </form>
  );
}

export default ContactForm;