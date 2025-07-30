import { IconType } from "react-icons";
import { BiHome } from "react-icons/bi";
import { FcAbout, FcContacts } from "react-icons/fc";
import { GrResources } from "react-icons/gr";
import { MdPlayLesson } from "react-icons/md";

interface Links {
  title: string;
  href: string;
  icon: IconType;
}

export const mainLinks: Links[] = [
  { title: "Home", href: "/", icon: BiHome },
  { title: "About", href: "/about", icon: FcAbout },
  { title: "Lesson Plan", href: "/lesson", icon: MdPlayLesson},
  { title: "Resources", href: "/resources", icon: GrResources },
  { title: "Contact", href: "/contact", icon: FcContacts},
];
