import ExpandingCTA from "../ui/ExpandingCTA";
import { siteInfo } from "../../data/siteInfo";

function ServiceCTA() {
  return (
    <ExpandingCTA
      title="Ready to take control of your health?"
      subtitle="Schedule a consultation and learn how Ultimate Health Men can support your goals."
      buttonText="Book Consultation"
      href={siteInfo.bookingUrl}
    />
  );
}

export default ServiceCTA;