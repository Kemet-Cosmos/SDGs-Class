import { IconType } from "react-icons";
import { BiHome } from "react-icons/bi";

interface Links {
  title: string;
  href: string;
  icon: IconType;
}

export const mainLinks: Links[] = [
  { title: "Home", href: "/", icon: BiHome },
  { title: "About", href: "/about", icon: BiHome },
  { title: "Resources", href: "/resources", icon: BiHome },
  { title: "Contact", href: "/contact", icon: BiHome },
];
