import { Github, Linkedin, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const SOCIAL_LINKS: {
  icon: LucideIcon;
  url: string;
}[] = [
  { icon: Github, url: "https://github.com/Akhilpanwar" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/akhil-panwar/" },
  { icon: Mail, url: "mailto:panwarakhil1811@email.com" },
  { icon: Phone, url: "tel:+919592459890" },
];
