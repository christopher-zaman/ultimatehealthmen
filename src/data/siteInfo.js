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

  get fullAddress() {
    return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`;
  },

  googleMapsUrl:
    "https://www.google.com/maps?q=Ultimate+Health+Men,+175+Avenue+A+NW+Ste+2,+Winter+Haven,+FL+33881",

  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Ultimate+Health+Men,+175+Avenue+A+NW+Ste+2,+Winter+Haven,+FL+33881&output=embed",
};