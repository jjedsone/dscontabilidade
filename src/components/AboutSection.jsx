export default function AboutSection() {
  return (
    <section className="section section-about-market" id="sobre" aria-labelledby="sobre-titulo">
      <div className="container about-grid">
        <div data-reveal>
          <h2 id="sobre-titulo">Feita para quem manda na empresa</h2>
          <p className="about-lead">
            A DS existe para que você durma melhor: contabilidade e tributário viram apoio à decisão — não fila de problema
            na segunda-feira.
          </p>
          <p>
            Há mais de duas décadas acompanhamos negócios que crescem em São Paulo. Unimos experiência, processo e
            ferramentas atuais para você ter clareza de caixa, de imposto e de pessoas, sem abrir mão de conformidade.
          </p>
        </div>
        <blockquote className="quote-block quote-block--glow" data-reveal style={{ "--reveal-delay": "0.14s" }}>
          <p>“Não entregamos só obrigações cumpridas; entregamos direção para o seu negócio.”</p>
          <footer>— DS Assessoria Empresarial</footer>
        </blockquote>
      </div>
    </section>
  );
}
