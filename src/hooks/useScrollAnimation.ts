import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(
      ".animate-on-scroll, .animate-slide-in, .animated-underline"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
