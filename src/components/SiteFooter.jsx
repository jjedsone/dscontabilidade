import { CONTACT_EMAIL, LOGO_SRC, PHONE_DISPLAY_SHORT, PHONE_HREF, SITE_HOST, SITE_NAME, SITE_URL } from "../constants.js";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          <img
            className="footer-logo-img"
            src={LOGO_SRC}
            alt={SITE_NAME}
            width={300}
            height={86}
            loading="lazy"
            decoding="async"
          />
        </p>
        <p className="footer-copy">
          © {year}{" "}
          <a href={SITE_URL} rel="noopener noreferrer">
            {SITE_HOST}
          </a>{" "}
          — todos os direitos reservados.
        </p>
        <p className="footer-meta">
          CNPJ 07.454.343/0001-75 · Contato:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ·{" "}
          <a href={PHONE_HREF}>{PHONE_DISPLAY_SHORT}</a>
        </p>
        <p className="footer-legal">
          <a href="#privacidade">Política de privacidade</a>
        </p>
      </div>
    </footer>
  );
}
