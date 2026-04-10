/** URL do WhatsApp com mensagem padrão (site DS). */
export const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=551125662157&text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+site+de+voc%C3%AAs+e+gostaria+de+conhecer+melhor+os+servi%C3%A7os+da+DS+Assessoria+Empresarial.+Podem+me+ajudar%3F&type=phone_number&app_absent=0";

/** Logo institucional (arquivo em /public). */
export const LOGO_SRC = `${import.meta.env.BASE_URL}logo-ds-assessoria.png`;

/** E-mail de contato (exibido no site e destino padrão do formulário). */
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "contato@dsempresarial.com.br";

/**
 * URL AJAX do FormSubmit (https://formsubmit.co). Na primeira utilização, confirme o domínio no e-mail recebido.
 * Pode sobrepor com VITE_FORMSUBMIT_EMAIL se quiser outro destinatário só para o form.
 */
export function getFormSubmitAjaxUrl() {
  const email = (import.meta.env.VITE_FORMSUBMIT_EMAIL || CONTACT_EMAIL).trim();
  return `https://formsubmit.co/ajax/${encodeURIComponent(email)}`;
}
