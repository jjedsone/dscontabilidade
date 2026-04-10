import { useCallback, useEffect, useId, useRef, useState } from "react";
import { PARTNERS } from "../data/partners.js";

/** Troca automática a cada 3 s (pausa ao passar o mouse ou focar). */
const AUTO_MS = 3000;

export default function PartnersSection() {
  const carouselId = useId();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused || PARTNERS.length < 2) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % PARTNERS.length);
    }, AUTO_MS);
    return () => window.clearInterval(t);
  }, [reduceMotion, paused]);

  const go = useCallback((dir) => {
    setIndex((i) => {
      const n = PARTNERS.length;
      if (dir === "next") return (i + 1) % n;
      return (i - 1 + n) % n;
    });
  }, []);

  const goTo = useCallback((i) => {
    setIndex(i);
  }, []);

  const n = PARTNERS.length;
  const current = PARTNERS[index];

  return (
    <section className="section section-tight partners-section" id="parceiros" aria-labelledby="parceiros-titulo">
      <div className="container partners-section-inner">
        <header className="section-head partners-section-head" data-reveal>
          <h2 id="parceiros-titulo">Clientes e parceiros</h2>
          <p className="section-sub">
            Quem já confia na DS — as marcas também estão no site{" "}
            <a href="https://dsempresarial.com.br/" rel="noopener noreferrer">
              dsempresarial.com.br
            </a>
            .
          </p>
        </header>

        <div
          ref={wrapRef}
          className="partners-carousel"
          data-reveal
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!wrapRef.current?.contains(e.relatedTarget)) setPaused(false);
          }}
        >
          <div className="partners-carousel-row">
            <button
              type="button"
              className="partners-carousel-btn"
              aria-controls={carouselId}
              aria-label="Parceiro anterior"
              onClick={() => go("prev")}
            >
              <span aria-hidden="true">‹</span>
            </button>

            <div
              id={carouselId}
              className="partners-carousel-region"
              role="region"
              aria-roledescription="carrossel"
              aria-label={`Clientes e parceiros, ${index + 1} de ${n}: ${current.alt}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  go("prev");
                } else if (e.key === "ArrowRight") {
                  e.preventDefault();
                  go("next");
                } else if (e.key === "Home") {
                  e.preventDefault();
                  goTo(0);
                } else if (e.key === "End") {
                  e.preventDefault();
                  goTo(n - 1);
                }
              }}
            >
              <div className="partners-carousel-viewport">
                {PARTNERS.map((p, i) => (
                  <div
                    key={`partner-${i}`}
                    className={`partners-slide${i === index ? " is-active" : ""}`}
                    aria-hidden={i !== index}
                  >
                    <div className={`partner-cell${p.dark ? " partner-cell--dark" : ""}`}>
                      <img
                        src={p.src}
                        alt={i === index ? p.alt : ""}
                        width={p.width}
                        height={p.height}
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="partners-carousel-btn"
              aria-controls={carouselId}
              aria-label="Próximo parceiro"
              onClick={() => go("next")}
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>

          <div className="partners-carousel-dots" role="group" aria-label="Selecionar parceiro">
            {PARTNERS.map((p, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                aria-label={`${p.alt}, ${i + 1} de ${n}`}
                aria-current={i === index ? "true" : undefined}
                className={`partners-carousel-dot${i === index ? " is-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
