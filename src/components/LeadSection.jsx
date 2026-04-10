import { useState } from "react";
import { CONTACT_EMAIL, getFormSubmitAjaxUrl, PHONE_DISPLAY_SHORT, PHONE_HREF } from "../constants.js";

export default function LeadSection() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const nome = String(fd.get("nome") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const telefone = String(fd.get("telefone") || "").trim();
    const mensagem = String(fd.get("mensagem") || "").trim();
    const gotcha = String(fd.get("_gotcha") || "").trim();

    if (gotcha) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!nome || !email) {
      setErrorMessage("Preencha nome e e-mail.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const payload = {
      nome,
      email,
      telefone,
      mensagem,
      _gotcha: "",
      _subject: "Contato pelo site — DS Assessoria",
      _template: "table",
      _captcha: false,
    };

    try {
      const res = await fetch(getFormSubmitAjaxUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || data.error || `Erro ${res.status}`);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Não foi possível enviar. Tente o WhatsApp ou o e-mail."
      );
      setStatus("error");
    }
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
              <a href={PHONE_HREF}>{PHONE_DISPLAY_SHORT}</a> ·{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
          </ul>
        </div>
        <form
          className="lead-form lead-form--market"
          id="form-lead"
          onSubmit={handleSubmit}
          data-reveal
          noValidate
        >
          <p className="visually-hidden" aria-hidden="true">
            <label>
              <span className="visually-hidden">Deixe em branco</span>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" defaultValue="" />
            </label>
          </p>

          {status === "success" && (
            <p className="lead-form-feedback lead-form-feedback--success" role="status">
              Mensagem enviada. Em breve a equipe DS entra em contato pelo e-mail ou telefone indicados.
            </p>
          )}

          {status === "error" && (
            <p className="lead-form-feedback lead-form-feedback--error" role="alert">
              {errorMessage}
            </p>
          )}

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
          <button type="submit" className="btn btn-primary btn-lg btn-block btn-glow" disabled={status === "loading"}>
            {status === "loading" ? "Enviando…" : "Quero ser contatado pela DS"}
          </button>
          <p className="form-note">
            Ao enviar, você concorda com o tratamento dos dados conforme a{" "}
            <a href="#privacidade">política de privacidade</a>. O envio usa o serviço FormSubmit; na primeira vez, pode
            ser necessário confirmar o domínio pelo link enviado ao e-mail da DS.
          </p>
        </form>
      </div>
    </section>
  );
}
