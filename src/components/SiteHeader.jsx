import { useCallback, useEffect, useRef, useState } from "react";
import { LOGO_SRC, WHATSAPP_URL } from "../constants.js";

export default function SiteHeader({ heroSectionRef }) {
  const headerRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  const syncPastHero = useCallback(() => {
    const header = headerRef.current;
    const hero = heroSectionRef?.current;
    if (!header || !hero) return;
    const bottom = hero.getBoundingClientRect().bottom;
    header.classList.toggle("is-past-hero", bottom < 64);
  }, [heroSectionRef]);

  useEffect(() => {
    window.addEventListener("scroll", syncPastHero, { passive: true });
    window.addEventListener("resize", syncPastHero);
    syncPastHero();
    return () => {
      window.removeEventListener("scroll", syncPastHero);
      window.removeEventListener("resize", syncPastHero);
    };
  }, [syncPastHero]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    return () => document.body.classList.remove("nav-open");
  }, [navOpen]);

  return (
    <header ref={headerRef} className="site-header site-header--hero-video" id="topo">
      <div className="top-bar">
        <div className="top-bar-inner">
          <a href="tel:+551125662157">(11) 2566-2157</a>
          <span className="top-bar-sep" aria-hidden="true">
            ·
          </span>
          <span>Segunda à sexta, 8h30 às 17h</span>
          <span className="top-bar-sep" aria-hidden="true">
            ·
          </span>
          <div className="top-bar-social">
            <a href="https://www.facebook.com/dsempresarial.6/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com/dsempresarial" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="container header-inner">
        <a className="logo" href="#topo" aria-label="DS Assessoria Empresarial — início">
          <img
            className="logo-img"
            src={LOGO_SRC}
            alt=""
            width={300}
            height={86}
            decoding="async"
            fetchPriority="high"
            loading="eager"
          />
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="menu-principal"
          aria-label={navOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setNavOpen((o) => !o)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
        <nav className={`nav${navOpen ? " is-open" : ""}`} id="menu-principal" aria-label="Principal">
          <ul className="nav-list">
            <li>
              <a href="#servicos" onClick={() => setNavOpen(false)}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#diferenciais" onClick={() => setNavOpen(false)}>
                Por que a DS
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={() => setNavOpen(false)}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#parceiros" onClick={() => setNavOpen(false)}>
                Parceiros
              </a>
            </li>
            <li>
              <a href="#contato" onClick={() => setNavOpen(false)}>
                Contato
              </a>
            </li>
            <li>
              <a href="#privacidade" onClick={() => setNavOpen(false)}>
                Privacidade
              </a>
            </li>
          </ul>
          <a
            className="btn btn-primary btn-nav"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setNavOpen(false)}
          >
            Quero ser cliente DS
          </a>
        </nav>
      </div>
    </header>
  );
}
