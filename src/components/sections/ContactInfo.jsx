import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";

function ContactInfo() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Start with a private conversation."
            text="Call, book online, or visit Ultimate Health Men in Winter Haven."
          />

          <div className="mt-10 grid gap-4">
            <Card variant="light" className="p-5">
              <div className="flex gap-4">
                <Phone className="text-[#12355b]" size={24} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:3529016582"
                    className="mt-1 block text-2xl font-semibold tracking-tight text-[#111827] hover:text-[#12355b]"
                  >
                    352-901-6582
                  </a>
                </div>
              </div>
            </Card>

            <Card variant="light" className="p-5">
              <div className="flex gap-4">
                <MapPin className="text-[#12355b]" size={24} />

                <div>
                  <p className="font-semibold">Office</p>

                  <a
                    href="https://www.google.com/maps?q=Ultimate+Health+Men,+175+Avenue+A+NW+Ste+2,+Winter+Haven,+FL+33881"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-[#667085] hover:text-[#12355b]"
                  >
                    175 Avenue A NW Suite 2<br />
                    Winter Haven, FL 33881
                  </a>
                </div>
              </div>
            </Card>

            <Card variant="light" className="p-5">
              <div className="flex gap-4">
                <Mail className="text-[#12355b]" size={24} />
                <div>
                  <a
                    href="mailto:info@ultimatehealthdpc.com"
                    className="mt-1 block text-[#667085] hover:text-[#12355b]"
                  >
                    info@ultimatehealthdpc.com
                  </a>
                </div>
              </div>
            </Card>

            <Card variant="light" className="p-5">
              <div className="flex gap-4">
                <Clock className="text-[#12355b]" size={24} />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="mt-1 text-[#667085]">By appointment</p>
                </div>
              </div>
            </Card>

            <Button
              href="https://app.elationemr.com/book/UltimateHealthDPC"
              target="_blank"
              rel="noreferrer"
              className="mt-4"
            >
              Book a Visit
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[3.5rem] bg-[#eef2f6] shadow-sm ring-1 ring-black/5">
          <iframe
            title="Ultimate Health Men map"
            src="https://www.google.com/maps?q=Ultimate+Health+Men,+175+Avenue+A+NW+Ste+2,+Winter+Haven,+FL+33881&output=embed"
            className="h-full min-h-[460px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;