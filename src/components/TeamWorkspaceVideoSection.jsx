import { useCallback, useEffect, useRef } from "react";
import { WHATSAPP_URL } from "../constants.js";

function getTeamVideoSrc() {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}team-ds-workspace.mp4`;
}

export default function TeamWorkspaceVideoSection() {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);

  const tryPlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    if ("defaultMuted" in el) el.defaultMuted = true;
    el.setAttribute("muted", "");
    el.loop = true;
    el.playsInline = true;
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "");
    const p = el.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    const root = wrapRef.current;
    if (!el || !root) return;

    const onEnded = () => {
      el.currentTime = 0;
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    el.addEventListener("ended", onEnded);

    const onVisibility = () => {
      if (document.hidden) el.pause();
      else tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) tryPlay();
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 160px 0px" }
    );
    obs.observe(root);

    tryPlay();
    const t1 = setTimeout(tryPlay, 120);
    const t2 = setTimeout(tryPlay, 500);
    const t3 = setTimeout(tryPlay, 1500);

    let nudgeId = 0;
    const nudgeWhilePaused = () => {
      nudgeId = window.setInterval(() => {
        if (!el.paused || document.hidden) return;
        const r = root.getBoundingClientRect();
        const vh = window.innerHeight || 0;
        const near = r.top < vh + 120 && r.bottom > -80;
        if (near) tryPlay();
      }, 800);
    };
    nudgeWhilePaused();

    return () => {
      el.removeEventListener("ended", onEnded);
      document.removeEventListener("visibilitychange", onVisibility);
      obs.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.clearInterval(nudgeId);
    };
  }, [tryPlay]);

  return (
    <section
      className="section section-team-workspace"
      id="equipe"
      aria-labelledby="equipe-titulo"
    >
      <div className="container team-workspace-grid">
        <div className="team-workspace-copy" data-reveal>
          <p className="eyebrow">Quem está com você</p>
          <h2 id="equipe-titulo">Equipe e espaço no ritmo do seu negócio</h2>
          <p className="team-workspace-lead">
            Um ambiente organizado e uma equipe focada em desempenho: é assim que a DS transforma obrigações em clareza e
            resultado para a sua empresa.
          </p>
          <p className="team-workspace-note">
            Apresentação em movimento do nosso espaço — atendimento, processos e o cuidado com cada cliente.
          </p>
          <a className="btn btn-primary team-workspace-cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Falar com a equipe no WhatsApp
          </a>
        </div>

        <div className="team-workspace-media" ref={wrapRef} data-reveal-soft>
          <div className="team-workspace-stage" aria-hidden="true">
            <div className="team-workspace-stage-glow" />
            <div className="team-workspace-canvas">
              <video
                ref={videoRef}
                className="team-workspace-motion"
                src={getTeamVideoSrc()}
                muted
                loop
                playsInline
                autoPlay
                preload="auto"
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                tabIndex={-1}
                onLoadedData={tryPlay}
                onCanPlay={tryPlay}
                onCanPlayThrough={tryPlay}
                onContextMenu={(e) => e.preventDefault()}
                aria-hidden="true"
              />
              <span className="team-workspace-presentation-badge">Apresentação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
