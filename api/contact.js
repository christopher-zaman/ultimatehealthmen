import { Resend } from "resend";
import clientPromise from "./mongodb.js";

const databaseName =
  process.env.MONGODB_DB || "ultimateHealthMen";

const collectionName = "contactSubmissions";

const successMessage =
  "Thank you. Your inquiry has been submitted successfully.";

function cleanText(value, maximumLength = 1000) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maximumLength);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatSubmittedDate(date) {
  return date.toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function createSubmission(requestBody, request) {
  const submittedPage =
    cleanText(
      requestBody.submittedFrom || requestBody.page,
      250
    ) || "/contact";

  return {
    firstName: cleanText(requestBody.firstName, 100),
    lastName: cleanText(requestBody.lastName, 100),
    email: cleanText(
      requestBody.email,
      200
    ).toLowerCase(),
    phone: cleanText(requestBody.phone, 50),
    service: cleanText(requestBody.service, 150),
    preferredContactMethod: cleanText(
      requestBody.preferredContactMethod,
      50
    ),
    message: cleanText(requestBody.message, 3000),
    consent: requestBody.consent === true,

    status: "new",

    // Page where the visitor submitted the form.
    page: submittedPage,

    userAgent: cleanText(
      request.headers["user-agent"],
      500
    ),

    source: "ultimate-health-men-contact-form",
    formVersion: 2,
    createdAt: new Date(),
  };
}

function validateSubmission(submission) {
  if (
    !submission.firstName ||
    !submission.lastName ||
    !submission.email ||
    !submission.message
  ) {
    return "Please complete all required fields.";
  }

  if (!isValidEmail(submission.email)) {
    return "Please enter a valid email address.";
  }

  if (!submission.consent) {
    return "Please agree to the contact consent statement.";
  }

  return null;
}

function createEmailSubject(submission) {
  const fullName =
    `${submission.firstName} ${submission.lastName}`.trim();

  if (submission.service) {
    return `New ${submission.service} inquiry from ${fullName}`;
  }

  return `New Ultimate Health Men inquiry from ${fullName}`;
}

function createEmailHtml(submission, submissionId) {
  const fullName =
    `${submission.firstName} ${submission.lastName}`.trim();

  const submittedDate = formatSubmittedDate(
    submission.createdAt
  );

  return `
    <div
      style="
        max-width: 680px;
        margin: 0 auto;
        font-family: Arial, Helvetica, sans-serif;
        color: #1d1d1f;
        line-height: 1.5;
      "
    >
      <h2
        style="
          margin-bottom: 8px;
          color: #0b1f33;
        "
      >
        New Ultimate Health Men inquiry
      </h2>

      <p style="margin-top: 0;">
        A new inquiry was submitted through the Ultimate Health
        Men website.
      </p>

      ${
        submission.service
          ? `
            <p
              style="
                padding: 12px 16px;
                border-radius: 8px;
                background-color: #f1f5f9;
                font-weight: 600;
              "
            >
              Inquiry regarding:
              ${escapeHtml(submission.service)}
            </p>
          `
          : ""
      }

      <table
        cellpadding="10"
        cellspacing="0"
        border="1"
        style="
          width: 100%;
          border-collapse: collapse;
          border-color: #dddddd;
        "
      >
        <tr>
          <th
            align="left"
            style="width: 190px; background-color: #f8fafc;"
          >
            Name
          </th>

          <td>${escapeHtml(fullName)}</td>
        </tr>

        <tr>
          <th
            align="left"
            style="background-color: #f8fafc;"
          >
            Email
          </th>

          <td>
            <a
              href="mailto:${escapeHtml(submission.email)}"
              style="color: #12355b;"
            >
              ${escapeHtml(submission.email)}
            </a>
          </td>
        </tr>

        <tr>
          <th
            align="left"
            style="background-color: #f8fafc;"
          >
            Phone
          </th>

          <td>
            ${escapeHtml(
              submission.phone || "Not provided"
            )}
          </td>
        </tr>

        <tr>
          <th
            align="left"
            style="background-color: #f8fafc;"
          >
            Treatment or service
          </th>

          <td>
            ${escapeHtml(
              submission.service || "Not selected"
            )}
          </td>
        </tr>

        <tr>
          <th
            align="left"
            style="background-color: #f8fafc;"
          >
            Preferred contact method
          </th>

          <td>
            ${escapeHtml(
              submission.preferredContactMethod ||
                "Not selected"
            )}
          </td>
        </tr>

        <tr>
          <th
            align="left"
            style="background-color: #f8fafc;"
          >
            Submitted from page
          </th>

          <td>${escapeHtml(submission.page)}</td>
        </tr>

        <tr>
          <th
            align="left"
            style="background-color: #f8fafc;"
          >
            Message
          </th>

          <td style="white-space: pre-wrap;">
            ${escapeHtml(submission.message)}
          </td>
        </tr>

        <tr>
          <th
            align="left"
            style="background-color: #f8fafc;"
          >
            Submitted
          </th>

          <td>${escapeHtml(submittedDate)} ET</td>
        </tr>
      </table>

      <p
        style="
          margin-top: 20px;
          font-size: 12px;
          color: #64748b;
        "
      >
        Submission ID:
        ${escapeHtml(submissionId)}
      </p>
    </div>
  `;
}

function createEmailText(submission, submissionId) {
  const fullName =
    `${submission.firstName} ${submission.lastName}`.trim();

  return `
New Ultimate Health Men inquiry

Name: ${fullName}
Email: ${submission.email}
Phone: ${submission.phone || "Not provided"}
Treatment or service: ${
    submission.service || "Not selected"
  }
Preferred contact method: ${
    submission.preferredContactMethod || "Not selected"
  }
Submitted from page: ${submission.page}
Submitted: ${formatSubmittedDate(
    submission.createdAt
  )} ET

Message:
${submission.message}

Submission ID: ${submissionId}
  `.trim();
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");

    return response.status(405).json({
      success: false,
      message: "Only POST requests are allowed.",
    });
  }

  try {
    const requestBody = request.body || {};

    /*
      Honeypot field.

      A normal visitor leaves this blank. Returning success prevents
      a bot from learning that the spam submission was rejected.
    */
    if (requestBody.website) {
      return response.status(200).json({
        success: true,
        message: successMessage,
      });
    }

    const submission = createSubmission(
      requestBody,
      request
    );

    const validationError =
      validateSubmission(submission);

    if (validationError) {
      return response.status(400).json({
        success: false,
        message: validationError,
      });
    }

    /*
      Save the inquiry before attempting to send the notification.
      This ensures Amanda can still retrieve the submission if the
      email service temporarily fails.
    */
    const mongoClient = await clientPromise;
    const database = mongoClient.db(databaseName);

    const submissionsCollection =
      database.collection(collectionName);

    const insertResult =
      await submissionsCollection.insertOne(submission);

    const submissionId =
      insertResult.insertedId.toString();

    /*
      Send Amanda the email notification.
    */
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail =
      process.env.NOTIFY_TO_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;

    if (
      !resendApiKey ||
      !notificationEmail ||
      !fromEmail
    ) {
      console.error(
        "The submission was saved, but one or more Resend environment variables are missing."
      );

      return response.status(201).json({
        success: true,
        message: successMessage,
      });
    }

    const resend = new Resend(resendApiKey);

    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      replyTo: submission.email,
      subject: createEmailSubject(submission),
      html: createEmailHtml(
        submission,
        submissionId
      ),
      text: createEmailText(
        submission,
        submissionId
      ),
    });

    if (emailResult.error) {
      console.error(
        "The submission was saved, but Resend could not send the notification:",
        emailResult.error
      );
    }

    return response.status(201).json({
      success: true,
      message: successMessage,
    });
  } catch (error) {
    console.error(
      "Contact form submission error:",
      error
    );

    return response.status(500).json({
      success: false,
      message:
        "We could not submit your inquiry. Please try again shortly.",
    });
  }
}