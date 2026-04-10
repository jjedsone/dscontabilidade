export default function LeadSection() {
  function handleSubmit(e) {
    e.preventDefault();
    window.alert(
      "Este é um protótipo estático. Ao publicar, conecte o envio ao seu e-mail, WhatsApp Business API ou CRM."
    );
  }

  return (
    <section className="section section-cta section-lead-market" id="lead" aria-labelledby="lead-titulo">
      <div className="container cta-grid">
        <div data-reveal>
          <h2 id="lead-titulo">Vamos colocar ordem no seu fiscal em dias, não em meses</h2>
          <p>
            Conte o segmento, o porte e o que está te tirando o sono. Voltamos com um caminho claro — sem compromisso
            para ouvir você.
          </p>
          <ul className="cta-list" role="list">
            <li>Diagnóstico inicial direto, sem juridiquês</li>
            <li>Proposta alinhada ao regime e ao tamanho da operação</li>
            <li>
              <a href="tel:+551125662157">(11) 2566-2157</a> ·{" "}
              <a href="mailto:contato@dsempresarial.com.br">contato@dsempresarial.com.br</a>
            </li>
          </ul>
        </div>
        <form
          className="lead-form lead-form--market"
          action="#"
          method="post"
          id="form-lead"
          onSubmit={handleSubmit}
          data-reveal
        >
          <label className="field">
            <span>Nome</span>
            <input type="text" name="nome" required autoComplete="name" placeholder="Seu nome" />
          </label>
          <label className="field">
            <span>E-mail</span>
            <input type="email" name="email" required autoComplete="email" placeholder="voce@empresa.com.br" />
          </label>
          <label className="field">
            <span>Telefone / WhatsApp</span>
            <input type="tel" name="telefone" autoComplete="tel" placeholder="(11) 90000-0000" />
          </label>
          <label className="field field-full">
            <span>O que você precisa resolver?</span>
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Ex.: MEI crescendo, troca de regime, folha, atraso com obrigação…"
            />
          </label>
          <button type="submit" className="btn btn-primary btn-lg btn-block btn-glow">
            Quero ser contatado pela DS
          </button>
          <p className="form-note">Demonstração estática: conecte este formulário ao CRM ou e-mail ao publicar.</p>
        </form>
      </div>
    </section>
  );
}
