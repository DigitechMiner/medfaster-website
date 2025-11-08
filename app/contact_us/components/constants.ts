import { MapPin, Phone } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export const CONTACT_INFO = {
  location: {
    label: "Location",
    value: "MedFaster Canada Head Office",
    icon: MapPin,
  },
  phone: {
    label: "Phone Number",
    value: "(416) 555-0123",
    icon: Phone,
  },
  social: {
    label: "Follow Us",
    links: [
      {
        icon: FaFacebook,
        href: "https://facebook.com",
        label: "Facebook",
        color: "#1877F2",
      },
      {
        icon: FaLinkedin,
        href: "https://linkedin.com",
        label: "LinkedIn",
        color: "#0A66C2",
      },
      {
        icon: FaInstagram,
        href: "https://instagram.com",
        label: "Instagram",
        color: "#E4405F",
      },
    ],
  },
};

