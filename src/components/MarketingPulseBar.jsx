import { WHATSAPP_URL } from "../constants.js";

const ITEMS = [
  "+20 anos com empresários em São Paulo",
  "Paulista · Kemel — atendimento humano",
  "Menos surpresa no imposto · mais previsibilidade",
  "Resposta ágil no WhatsApp",
  "Contabilidade que fala a língua do gestor",
];

function MarqueeChunk() {
  return (
    <>
      {ITEMS.map((text) => (
        <span key={text} className="marketing-pulse-item">
          <span className="marketing-pulse-dot" aria-hidden="true" />
          {text}
        </span>
      ))}
    </>
  );
}

export default function MarketingPulseBar() {
  return (
    <aside className="marketing-pulse" aria-label="Destaques DS Assessoria">
      <div className="marketing-pulse-glow" aria-hidden="true" />
      <div className="container marketing-pulse-inner">
        <a className="marketing-pulse-cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <span className="marketing-pulse-cta-ping" aria-hidden="true" />
          Falar com especialista agora
        </a>
        <div className="marketing-pulse-marquee" role="presentation">
          <div className="marketing-pulse-track">
            <div className="marketing-pulse-group">
              <MarqueeChunk />
            </div>
            <div className="marketing-pulse-group" aria-hidden="true">
              <MarqueeChunk />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
