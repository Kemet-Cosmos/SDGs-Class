import { IconType } from "react-icons";
import { CiCircleInfo } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { IoBookOutline, IoHomeOutline, IoPersonOutline } from "react-icons/io5";

interface Links {
  title: string;
  href: string;
  icon: IconType;
}

export const mainLinks: Links[] = [
  { title: "Home", href: "/", icon: IoHomeOutline },
  { title: "About", href: "/about", icon: CiCircleInfo },
  { title: "Lesson Plan", href: "/lesson", icon: IoBookOutline },
  { title: "Resources", href: "/resources", icon: GoDatabase },
  { title: "Contact", href: "/contact", icon: IoPersonOutline },
];
