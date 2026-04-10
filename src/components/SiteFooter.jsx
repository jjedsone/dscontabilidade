import { LOGO_SRC } from "../constants.js";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          <img
            className="footer-logo-img"
            src={LOGO_SRC}
            alt="DS Assessoria Empresarial"
            width={300}
            height={86}
            loading="lazy"
            decoding="async"
          />
        </p>
        <p className="footer-copy">
          © {year}{" "}
          <a href="https://dsempresarial.com.br/" rel="noopener noreferrer">
            dsempresarial.com.br
          </a>{" "}
          — todos os direitos reservados.
        </p>
        <p className="footer-meta">
          CNPJ 07.454.343/0001-75 · Contato:{" "}
          <a href="mailto:contato@dsempresarial.com.br">contato@dsempresarial.com.br</a> ·{" "}
          <a href="tel:+551125662157">(11) 2566-2157</a>
        </p>
      </div>
    </footer>
  );
}
