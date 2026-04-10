import { WHATSAPP_URL } from "../constants.js";

export default function ContactSection() {
  return (
    <section className="section section-tight section-contact-market" id="contato" aria-labelledby="contato-titulo">
      <div className="container">
        <header className="section-head" data-reveal>
          <h2 id="contato-titulo">Atendimento em São Paulo — perto de você</h2>
          <p className="section-sub">
            Paulista para reuniões estratégicas · Kemel para operação sólida. Escolha o canal que preferir: presencial,
            telefone ou WhatsApp.
          </p>
        </header>
        <div className="contact-grid">
          <address className="contact-card" data-reveal style={{ "--reveal-delay": "0s" }}>
            <h3>Centro de negócios</h3>
            <p>Visitas e reuniões</p>
            <p>
              Av. Paulista, 302 (ao lado do Metrô Brigadeiro) — Bela Vista
              <br />
              São Paulo, SP — CEP 01310-000
            </p>
            <p className="contact-map-link">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Paulista,+302,+Bela+Vista,+S%C3%A3o+Paulo,+SP"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir Paulista no Google Maps
              </a>
            </p>
          </address>
          <address className="contact-card" data-reveal style={{ "--reveal-delay": "0.08s" }}>
            <h3>Escritório operacional</h3>
            <p>Centro de trabalho</p>
            <p>
              Av. Kemel Addas, 1032 — Cidade Kemel
              <br />
              São Paulo, SP — CEP 08130-485
            </p>
            <p className="contact-mail">
              <a href="mailto:contato@dsempresarial.com.br">contato@dsempresarial.com.br</a>
            </p>
            <p className="muted contact-anchor-map">
              <a href="#mapa-kemel">Ver localização no mapa</a>
            </p>
          </address>
          <div className="contact-card contact-card-phone" data-reveal style={{ "--reveal-delay": "0.16s" }}>
            <h3>Contato e redes</h3>
            <p>
              <a href="tel:+551125662157">+55 (11) 2566-2157</a>
            </p>
            <p className="muted">Segunda a sexta, 8h30 às 17h</p>
            <p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Fale com a equipe no WhatsApp
              </a>
            </p>
            <p className="social-links">
              <a href="https://www.instagram.com/dsempresarial" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://www.facebook.com/dsempresarial.6/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a
                href="https://br.linkedin.com/in/ds-assessoria-empresarial-74b86520"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div
          className="contact-map-panel"
          id="mapa-kemel"
          aria-labelledby="mapa-kemel-titulo"
          data-reveal-soft
        >
          <div className="contact-map-panel-head">
            <div className="contact-map-panel-intro">
              <h3 id="mapa-kemel-titulo">Escritório operacional</h3>
              <p>Av. Kemel Addas, 1032 — Cidade Kemel, São Paulo · CEP 08130-485</p>
            </div>
            <a
              className="btn btn-secondary btn-sm map-external-link"
              href="https://www.google.com/maps/search/?api=1&query=Av.+Kemel+Addas,+1032,+Cidade+Kemel,+S%C3%A3o+Paulo,+SP"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div className="map-embed-wrap">
            <iframe
              title="Localização do escritório DS Assessoria — Av. Kemel Addas, 1032, Cidade Kemel, São Paulo"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3658.752182883389!2d-46.366479!3d-23.505434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce64b3ce927375%3A0x53db271b280e7a49!2sAv.%20Kemel%20Addas%2C%201032%20-%20Cidade%20Kemel%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2007220-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1775777992773!5m2!1spt-BR!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
