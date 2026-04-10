import { CONTACT_EMAIL, SITE_NAME } from "../constants.js";

const PRIVACY_BLOCKS = [
  {
    num: "01",
    title: "Quais dados coletamos",
    body: (
      <>
        <p>
          No formulário de contato do site podemos coletar: <strong>nome, e-mail, telefone</strong> e a{" "}
          <strong>mensagem</strong> que você enviar.
        </p>
        <p>
          Também podemos registrar dados técnicos comuns de navegação (como endereço IP e tipo de navegador) nos
          registros do servidor ou do serviço de envio de formulários, quando aplicável.
        </p>
      </>
    ),
  },
  {
    num: "02",
    title: "Finalidade e base legal",
    body: (
      <>
        <p>
          Utilizamos esses dados para <strong>responder ao seu pedido de contato</strong>, prestar informações sobre
          serviços e, quando contratado, executar o contrato de assessoria.
        </p>
        <p>
          A base legal pode ser a execução de medidas pré-contratuais, o legítimo interesse em responder solicitações ou
          o consentimento, conforme o caso.
        </p>
      </>
    ),
  },
  {
    num: "03",
    title: "Compartilhamento",
    body: (
      <>
        <p>
          O envio do formulário pode ser processado por <strong>prestadores de serviço</strong> (por exemplo, provedor de
          formulário ou e-mail) estritamente para entrega da mensagem à DS.
        </p>
        <p className="privacy-card-highlight">Não vendemos seus dados.</p>
      </>
    ),
  },
  {
    num: "04",
    title: "Armazenamento e prazo",
    body: (
      <p>
        Mantemos os dados pelo tempo necessário para cumprir a finalidade (atendimento, eventual contrato e obrigações
        legais) e, depois disso, eliminamos ou anonimizamos quando possível.
      </p>
    ),
  },
  {
    num: "05",
    title: "Seus direitos",
    body: (
      <p>
        Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação de dados
        desnecessários ou revogação de consentimento, nos limites da lei, entrando em contato pelo e-mail{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ou pelos canais indicados no site.
      </p>
    ),
  },
  {
    num: "06",
    title: "Encarregado (DPO)",
    body: (
      <p>
        Dúvidas sobre privacidade podem ser encaminhadas para o mesmo contato acima; encaminharemos ao responsável
        interno indicado pela DS, se houver.
      </p>
    ),
  },
];

export default function PrivacySection() {
  return (
    <section className="section section-privacy" id="privacidade" aria-labelledby="privacidade-titulo">
      <div className="privacy-bg" aria-hidden="true">
        <div className="privacy-bg-orb privacy-bg-orb--a" />
        <div className="privacy-bg-orb privacy-bg-orb--b" />
      </div>

      <div className="container privacy-shell">
        <header className="privacy-hero" data-reveal>
          <p className="privacy-eyebrow">Transparência em primeiro lugar</p>
          <h2 id="privacidade-titulo">Política de privacidade</h2>
          <p className="privacy-intro">
            A <strong>{SITE_NAME}</strong> (“nós”) respeita a sua privacidade e trata dados pessoais em
            conformidade com a <strong>Lei Geral de Proteção de Dados</strong> (Lei nº 13.709/2018 — LGPD).
          </p>
          <span className="privacy-badge">Última atualização: abril de 2026</span>
        </header>

        <div className="privacy-cards">
          {PRIVACY_BLOCKS.map((block, i) => (
            <article
              key={block.num}
              className={`privacy-card${block.num === "05" || block.num === "06" ? " privacy-card--wide" : ""}`}
              data-reveal
              style={{ "--reveal-delay": `${0.04 + i * 0.065}s` }}
            >
              <div className="privacy-card-top">
                <span className="privacy-card-num" aria-hidden="true">
                  {block.num}
                </span>
                <h3>{block.title}</h3>
              </div>
              <div className="privacy-card-body">{block.body}</div>
            </article>
          ))}
        </div>

        <div className="privacy-cta" data-reveal>
          <div className="privacy-cta-inner">
            <p className="privacy-cta-text">
              <strong>Quer exercer um direito ou tirar dúvidas?</strong> Fale com a DS — resposta humana, sem complicação.
            </p>
            <a className="btn btn-primary privacy-cta-btn" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
