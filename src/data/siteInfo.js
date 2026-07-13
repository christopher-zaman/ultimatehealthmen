export const siteInfo = {
  name: "Ultimate Health Men",

  phone: "(352) 901-6582",
  phoneRaw: "3529016582",
  phoneHref: "tel:3529016582",

  email: "info@ultimatehealthdpc.com",
  emailHref: "mailto:info@ultimatehealthdpc.com",

  bookingUrl: "https://app.elationemr.com/book/UltimateHealthDPC",

  address: {
    street: "175 Avenue A NW Suite 2",
    city: "Winter Haven",
    state: "FL",
    zip: "33881",
    country: "US",
  },

  serviceAreas: [
    "Winter Haven",
    "Auburndale",
    "Lakeland",
    "Bartow",
  ],

  hours: [
    {
      days: "Monday – Wednesday",
      display: "8:30 AM – 5:00 PM",
    },
    {
      days: "Thursday",
      display: "8:30 AM – 6:00 PM",
    },
    {
      days: "Friday – Saturday",
      display: "8:30 AM – 12:00 PM",
    },
    {
      days: "Sunday",
      display: "Closed",
    },
  ],

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "08:30",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday"],
      opens: "08:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "08:30",
      closes: "12:00",
    },
  ],

  get fullAddress() {
    return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`;
  },

  googleMapsUrl:
    "https://www.google.com/maps?q=Ultimate+Health+Men,+175+Avenue+A+NW+Ste+2,+Winter+Haven,+FL+33881",

  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Ultimate+Health+Men,+175+Avenue+A+NW+Ste+2,+Winter+Haven,+FL+33881&output=embed",
};