export function trackHormoneBookingClick(ctaLocation) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "hormone_evaluation_booking_click", {
      location: "winter_haven",
      appointment_type: "male_hormone_consult",
      appointment_value: 175,
      page: "mens_hormone_testing",
      cta_location: ctaLocation,
    });
  }
}