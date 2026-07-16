
import { Resend } from "resend";
import clientPromise from "./mongodb.js";

const databaseName =
  process.env.MONGODB_DB || "ultimateHealthMen";

const collectionName = "contactSubmissions";

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
      This is the hidden spam field.
      A normal visitor leaves it blank.
    */
    if (requestBody.website) {
      return response.status(200).json({
        success: true,
        message:
          "Thank you. Your inquiry has been submitted.",
      });
    }

    const submission = {
        firstName: cleanText(requestBody.firstName, 100),
        lastName: cleanText(requestBody.lastName, 100),
        email: cleanText(requestBody.email, 200).toLowerCase(),
        phone: cleanText(requestBody.phone, 50),
        service: cleanText(requestBody.service, 150),
        preferredContactMethod: cleanText(
            requestBody.preferredContactMethod,
            50
        ),
        message: cleanText(requestBody.message, 3000),
        consent: requestBody.consent === true,

        status: "new",
        page: cleanText(requestBody.page, 250) || "/contact",
        userAgent: cleanText(
            request.headers["user-agent"],
            500
        ),
        source: "ultimate-health-men-contact-form",
        formVersion: 1,
        createdAt: new Date(),
    };

    if (
      !submission.firstName ||
      !submission.lastName ||
      !submission.email ||
      !submission.message
    ) {
      return response.status(400).json({
        success: false,
        message:
          "Please complete all required fields.",
      });
    }

    if (!isValidEmail(submission.email)) {
      return response.status(400).json({
        success: false,
        message:
          "Please enter a valid email address.",
      });
    }

    if (!submission.consent) {
      return response.status(400).json({
        success: false,
        message:
          "Please agree to the contact consent statement.",
      });
    }

    /*
      Connect to MongoDB and save the submission.
    */
    const mongoClient = await clientPromise;
    const database = mongoClient.db(databaseName);
    const submissionsCollection =
      database.collection(collectionName);

    const insertResult =
      await submissionsCollection.insertOne(submission);

    /*
      Send Amanda an email notification.
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
        "One or more Resend environment variables are missing."
      );

      /*
        The database submission was saved, so we return success
        rather than encouraging the user to submit it repeatedly.
      */
      return response.status(201).json({
        success: true,
        message:
          "Thank you. Your inquiry has been submitted.",
      });
    }

    const resend = new Resend(resendApiKey);

    const fullName =
      `${submission.firstName} ${submission.lastName}`.trim();

    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      replyTo: submission.email,
      subject: `New Ultimate Health Men inquiry from ${fullName}`,
      html: `
        <h2>New Ultimate Health Men inquiry</h2>

        <p>
          A new inquiry was submitted through the website.
        </p>

        <table
          cellpadding="8"
          cellspacing="0"
          border="1"
          style="border-collapse: collapse; border-color: #dddddd;"
        >
          <tr>
            <th align="left">Name</th>
            <td>${escapeHtml(fullName)}</td>
          </tr>

          <tr>
            <th align="left">Email</th>
            <td>${escapeHtml(submission.email)}</td>
          </tr>

          <tr>
            <th align="left">Phone</th>
            <td>
              ${escapeHtml(
                submission.phone || "Not provided"
              )}
            </td>
          </tr>

          <tr>
            <th align="left">Service</th>
            <td>
              ${escapeHtml(
                submission.service || "Not selected"
              )}
            </td>
          </tr>

          <tr>
            <th align="left">
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
            <th align="left">Message</th>
            <td>${escapeHtml(submission.message)}</td>
          </tr>

          <tr>
            <th align="left">Submitted</th>
            <td>
              ${escapeHtml(
                submission.createdAt.toLocaleString(
                  "en-US",
                  {
                    timeZone: "America/New_York",
                  }
                )
              )}
            </td>
          </tr>
        </table>

        <p>
          Submission ID:
          ${escapeHtml(insertResult.insertedId.toString())}
        </p>
      `,
    });

    if (emailResult.error) {
      console.error(
        "Resend email error:",
        emailResult.error
      );
    }

    return response.status(201).json({
      success: true,
      message:
        "Thank you. Your inquiry has been submitted successfully.",
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