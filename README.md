# DS Assessoria — Landing (React + Vite)

Site institucional da **DS Assessoria Empresarial**: serviços, diferenciais, contacto, formulário de lead e política de privacidade (LGPD).

## Requisitos

- Node.js 18+ (recomendado 20)

## Comandos

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # saída em dist/
npm run preview  # pré-visualizar o build
npm run lint     # ESLint
npm run format   # Prettier (src + index.html)
```

## Variáveis de ambiente (opcional)

Copie `.env.example` para `.env` e ajuste:

| Variável | Descrição |
|----------|-----------|
| `VITE_CONTACT_EMAIL` | E-mail de contacto (predefinido: contato@dsempresarial.com.br) |
| `VITE_FORMSUBMIT_EMAIL` | E-mail só para o [FormSubmit](https://formsubmit.co) (se diferente do anterior) |

O formulário de contacto envia via **FormSubmit**. Na **primeira submissão** a partir de um domínio novo, verifique a caixa **contato@dsempresarial.com.br** e confirme o domínio pelo link do FormSubmit.

## Deploy

- Build estático: `npm run build` e sirva a pasta `dist/` (Netlify, Vercel, Apache, Nginx, etc.).
- **GitHub Pages** com subcaminho: em `vite.config.js` defina `base: '/nome-do-repo/'` e use URLs relativas ao `base` para o favicon se necessário.

## SEO e meta

`index.html` usa canonical e Open Graph apontando para **dsempresarial.com.br**. Se o site público for outro domínio, atualize `canonical`, `og:url`, `og:image` e `twitter:image`.

## Licença

Uso interno / DS Assessoria Empresarial.
