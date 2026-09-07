import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import ExpandingCTA from "../ui/ExpandingCTA";
import ExpandingCallCTA from "../ui/ExpandingCallCTA";
import { siteInfo } from "../../data/siteInfo";

const HORMONE_EVALUATION_URL =
  "https://app.elationemr.com/book/UltimateHealthDPC/service-locations/1283934613995767?appointment_types=598882342010985";

function MobileActionBar() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const isHormoneLandingPage =
    location.pathname === "/mens-hormone-testing-winter-haven";

  const bookingUrl = isHormoneLandingPage
    ? HORMONE_EVALUATION_URL
    : siteInfo.bookingUrl;

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 220);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            y: 100,
            opacity: 0,
            scale: 0.96,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
          }}
          className="fixed bottom-5 left-4 right-4 z-[100] rounded-full bg-white/90 px-3 py-3 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-md gap-3">
            <ExpandingCallCTA
              label="Call Now"
              className="flex-1 justify-center"
            />

            <ExpandingCTA
              href={bookingUrl}
              className="flex-1 justify-center"
            >
              Book Visit
            </ExpandingCTA>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileActionBar;