import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { WHATSAPP_URL } from "../constants.js";

function getVideoSrc() {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}video.mp4`;
}

const HeroSection = forwardRef(function HeroSection(_, ref) {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);

  const tryPlay = useCallback(() => {
    const el = videoRef.current;
    if (!el || videoFailed) return;
    el.muted = true;
    if ("defaultMuted" in el) el.defaultMuted = true;
    el.setAttribute("muted", "");
    const p = el.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, [videoFailed]);

  useEffect(() => {
    tryPlay();
  }, [tryPlay]);

  return (
    <section className="hero hero--apresentacao" id="apresentacao" ref={ref} aria-labelledby="apresentacao-titulo">
      <h2 id="apresentacao-titulo" className="visually-hidden">
        DS Assessoria — contabilidade estratégica em São Paulo, Av. Paulista e Cidade Kemel
      </h2>
      <div
        className={`hero-media${videoFailed ? " hero-media--fallback" : ""}`}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          className="hero-video apresentacao-video"
          src={getVideoSrc()}
          muted
          loop
          autoPlay
          playsInline
          disablePictureInPicture
          preload="auto"
          onLoadedData={tryPlay}
          onCanPlay={tryPlay}
          onError={() => setVideoFailed(true)}
        />
        <div className="hero-scrim" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy hero-copy--market">
          <div className="hero-badge-row">
            <span className="hero-badge">São Paulo</span>
            <span className="hero-badge hero-badge--accent">+20 anos</span>
            <span className="hero-badge">Atendimento humano</span>
          </div>
          <p className="eyebrow eyebrow--pulse">Para quem não aguenta mais surpresa no imposto</p>
          <h1>
            Pare de perder dinheiro e sono com o <em>fisco</em> — tenha números que viram decisão.
          </h1>
          <p className="lead">
            Você precisa de um time que traduz tributo, folha e obrigações em{" "}
            <strong>lucro líquido, segurança e tempo</strong>. A DS fala a língua do gestor — Paulista e Kemel, com
            resposta real no WhatsApp.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg btn-glow" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quero falar com um especialista
            </a>
            <a className="btn btn-ghost btn-lg" href="#servicos">
              Ver o que fazemos por você
            </a>
          </div>
          <ul className="hero-trust" role="list">
            <li>
              <strong>Diagnóstico claro</strong> no primeiro contato
            </li>
            <li>
              <strong>100%</strong> dentro da lei, com estratégia
            </li>
            <li>
              <span className="hero-trust-pin" aria-hidden="true">
                📍
              </span>{" "}
              Paulista e Cidade Kemel
            </li>
          </ul>
        </div>
        <div className="hero-panel" aria-hidden="true">
          <div className="hero-card hero-card--shine">
            <p className="hero-card-label">O que muda na sua rotina</p>
            <ul className="hero-card-list">
              <li>Imposto e caixa mais previsíveis — menos susto no DARF</li>
              <li>Obrigações em dia com checklist que você entende</li>
              <li>Relatórios para a reunião do sócio, não para a gaveta</li>
            </ul>
          </div>
        </div>

        <div className="hero-hook">
          <div className="hero-hook-line" aria-hidden="true" />
          <p className="hero-hook-text">
            <span className="hero-hook-highlight">Primeiro contato sem compromisso</span> — conte seu caso no WhatsApp
            e receba orientação objetiva ainda hoje.
            <a className="hero-hook-cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Abrir WhatsApp agora →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
