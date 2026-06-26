import { Calendar, Clock, Phone } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

function ContactInfo() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
        <Card variant="light">
          <Phone className="text-[#0071e3]" size={28} strokeWidth={1.8} />
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#6e6e73]">
            Call
          </p>
          <a
            href="tel:3529016582"
            className="mt-4 block text-3xl font-semibold tracking-tight"
          >
            352-901-6582
          </a>
        </Card>

        <Card variant="light">
          <Clock className="text-[#0071e3]" size={28} strokeWidth={1.8} />
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#6e6e73]">
            Hours
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-tight">
            By appointment
          </p>
          <p className="mt-3 leading-7 text-[#6e6e73]">
            Confirmed availability will be provided when booking.
          </p>
        </Card>

        <Card variant="dark">
          <Calendar className="text-white" size={28} strokeWidth={1.8} />
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-white/50">
            Start
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-tight">
            Ready to schedule?
          </p>

          <div className="mt-8">
            <Button
              href="https://app.elationemr.com/book/UltimateHealthDPC"
              target="_blank"
              rel="noreferrer"
              variant="light"
            >
              Book a Visit
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default ContactInfo;