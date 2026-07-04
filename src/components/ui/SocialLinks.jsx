import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const businessSocials = [
  {
    label: "Ultimate Health Men on Facebook",
    href: "https://www.facebook.com/61570545390503",
    icon: FaFacebookF,
    color: "#1877F2",
  },
  {
    label: "Ultimate Health Men on Instagram",
    href: "https://www.instagram.com/ultimatehealthmen/",
    icon: FaInstagram,
    color: "#E4405F",
  },
  {
    label: "Amanda Gaskin on LinkedIn",
    href: "https://www.linkedin.com/in/amanda-gaskin-msn-aprn-2b2238202",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },
];

const amandaSocials = [
  {
    label: "Amanda Gaskin on Facebook",
    href: "https://www.facebook.com/AmandaRNBSN",
    icon: FaFacebookF,
    color: "#1877F2",
  },
  {
    label: "Amanda Gaskin on Instagram",
    href: "https://www.instagram.com/petiterattler_bull/",
    icon: FaInstagram,
    color: "#E4405F",
  },
  {
    label: "Amanda Gaskin on LinkedIn",
    href: "https://www.linkedin.com/in/amanda-gaskin-msn-aprn-2b2238202",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },
];

function SocialLinks({ type = "business", title, className = "" }) {
  const socials = type === "amanda" ? amandaSocials : businessSocials;

  return (
    <div className={`social-block ${className}`}>
      {title && <p className="social-title">{title}</p>}

      <div className="social-dock">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="social-dock-link"
              style={{ "--social-color": social.color }}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SocialLinks;