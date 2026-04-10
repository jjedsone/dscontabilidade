import { WHATSAPP_URL } from "../constants.js";

const ITEMS = [
  {
    title: "Transparência que libera o gestor",
    text: "Você sabe o que foi pago, o que vem aí e por quê. Sem caixa preta, sem surpresa na véspera do vencimento.",
  },
  {
    title: "WhatsApp e telefone com gente de verdade",
    text: "Dúvida na hora de decidir? Time acessível, linguagem direta — menos e-mail eterno, mais resposta útil.",
  },
  {
    title: "Tecnologia a favor do prazo",
    text: "Automação e conferência nos bastidores para reduzir erro humano e dar previsibilidade ao seu calendário fiscal.",
  },
  {
    title: "Especialistas juntos, não repartidos",
    text: "Tributário, fiscal, DP e contábil integrados: um cenário só, uma narrativa só para o seu negócio.",
  },
  {
    title: "Estratégia alinhada ao tamanho da empresa",
    text: "O que serve para holding não é o que serve para você — plano proporcional ao porte e ao ritmo de crescimento.",
  },
  {
    title: "Foco em economia legal e estabilidade",
    text: "Números que sustentam decisão: menos risco, mais margem dentro da lei e reputação preservada.",
  },
];

export default function DifferentialsSection() {
  return (
    <section className="section section-alt section-diff-market" id="diferenciais" aria-labelledby="diff-titulo">
      <div className="container">
        <header className="section-head section-head-split" data-reveal>
          <div>
            <h2 id="diff-titulo">Por que empresários de SP confiam na DS</h2>
            <p className="section-sub">
              Não somos “mais um escritório”: somos o braço que organiza o caos fiscal para você voltar a pensar em cliente,
              produto e lucro.
            </p>
          </div>
          <a className="btn btn-secondary btn-pulse-hint" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Agendar conversa gratuita
          </a>
        </header>
        <div className="diff-grid">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="diff-item diff-item--reveal"
              data-reveal
              style={{ "--reveal-delay": `${i * 0.05}s` }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
