const SERVICES = [
  {
    num: "01",
    title: "Planejamento tributário",
    body: "Você paga o imposto certo pelo tamanho e ritmo do seu negócio — com crédito, regime e oportunidades legais mapeadas, não achismo.",
  },
  {
    num: "02",
    title: "Contabilidade completa",
    body: "Fechamentos e demonstrativos que mostram se a empresa está saudável, onde cortar custo e onde investir com segurança.",
  },
  {
    num: "03",
    title: "Escrita fiscal",
    body: "Apurações e entregas nos prazos, conferidas nos órgãos certos. Menos multa, menos retrabalho, mais tranquilidade.",
  },
  {
    num: "04",
    title: "Consultoria paralegal",
    body: "Abertura, alteração, contratos e regularização sem dor de cabeça — papelada alinhada ao que o seu negócio precisa hoje.",
  },
  {
    num: "05",
    title: "Departamento pessoal",
    body: "Folha, admissões e rescisões em conformidade, sem surpresa em encargo nem risco trabalhista desnecessário.",
  },
  {
    num: "06",
    title: "Relacionamento e negócios",
    body: "Alguém do seu lado em negociação, parceria e decisão financeira — visão de médio prazo, não só do mês.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section section-tight section-services-market" id="servicos" aria-labelledby="servicos-titulo">
      <div className="container">
        <header className="section-head" data-reveal>
          <h2 id="servicos-titulo">Tudo o que a sua empresa pede — em um só time</h2>
          <p className="section-sub">
            Da folha ao Simples, da abertura ao planejamento: uma assessoria em São Paulo que fala a sua língua e entrega
            resultado, não só obrigação cumprida.
          </p>
        </header>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <article
              key={s.num}
              className="service-card service-card--lift"
              data-reveal
              style={{ "--reveal-delay": `${i * 0.06}s` }}
            >
              <span className="service-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
