// this module configures FontAwesome for the entire app
// it is imported once in `app/layout.tsx` so the icons we need
// are added to the shared library and any auto css is prevented.

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // brand icons
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faXmark,
  faChevronDown,
  // add more solid icons here as needed
} from "@fortawesome/free-solid-svg-icons";

// prevent FontAwesome from adding its own <style> tag; we handle it via tailwind
config.autoAddCss = false;

// add icons used throughout the application
library.add(
  faWhatsapp,
  faPhone,
  faEnvelope,
  faLocationDot,
  faXmark,
  faChevronDown
);
