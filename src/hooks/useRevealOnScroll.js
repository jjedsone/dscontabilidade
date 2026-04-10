import { useEffect } from "react";

/**
 * Observa [data-reveal] e aplica .is-revealed ao entrar na viewport.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const nodes = () => document.querySelectorAll("[data-reveal], [data-reveal-soft]");

    const revealAll = () => {
      nodes().forEach((el) => el.classList.add("is-revealed"));
    };

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.05 }
    );

    nodes().forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
