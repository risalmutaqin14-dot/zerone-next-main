"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeSectionAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const hasOurSolution =
        document.querySelector("#our-solution") &&
        document.querySelector(".os-header-left") &&
        document.querySelector(".os-header-right") &&
        document.querySelector(".os-card") &&
        document.querySelector(".os-card-image");

      if (hasOurSolution) {
        gsap.timeline({
          scrollTrigger: {
            trigger: "#our-solution",
            start: "top 75%",
            once: true,
          },
        })
          .fromTo(
            ".os-header-left",
            {
              y: 28,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.65,
              ease: "power3.out",
              immediateRender: false,
            }
          )
          .fromTo(
            ".os-header-right",
            {
              y: 24,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              immediateRender: false,
            },
            "-=0.35"
          )
          .fromTo(
            ".os-card",
            {
              y: 36,
              opacity: 0,
              scale: 0.96,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.75,
              stagger: 0.1,
              ease: "power3.out",
              immediateRender: false,
            },
            "-=0.25"
          )
          .fromTo(
            ".os-card-image",
            {
              y: 24,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              delay: 0.12,
              stagger: 0.12,
              ease: "power2.out",
              immediateRender: false,
            },
            ">"
          );
      }

      const hasWhyChooseUs =
        document.querySelector("#why-choose-us") &&
        document.querySelector(".why-copy") &&
        document.querySelector(".why-progress") &&
        document.querySelector(".why-image-wrap");

      if (hasWhyChooseUs) {
        gsap.timeline({
          scrollTrigger: {
            trigger: "#why-choose-us",
            start: "top 75%",
            once: true,
          },
        })
          .from(".why-copy", {
            x: -36,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
          })
          .from(
            ".why-progress",
            {
              y: 22,
              opacity: 0,
              duration: 0.55,
              ease: "power2.out",
            },
            "-=0.3"
          )
          .from(
            ".why-image-wrap",
            {
              x: 36,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.35"
          );
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
