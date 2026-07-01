import { IconInstagram, IconWhatsApp, IconMail } from './Icons.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <span className="logo-mark">QN</span>
            <span>
              QUE N<span className="diaeresis">Ö</span>TA
            </span>
          </div>
          <div className="footer-social">
            <a href="https://instagram.com/quenota.oficial" target="_blank" rel="noreferrer" aria-label="Instagram">
              <IconInstagram width="16" height="16" />
            </a>
            <a href="https://wa.me/573103275424" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <IconWhatsApp width="16" height="16" />
            </a>
            <a href="mailto:quenota8454@gmail.com" aria-label="Correo">
              <IconMail width="16" height="16" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Que Nöta. Todos los derechos reservados.</span>
          <span>Diseño y personalización corporativa — Colombia</span>
        </div>
      </div>
    </footer>
  )
}

export function WhatsAppFloat() {
  return (
    <a href="https://wa.me/573103275424" target="_blank" rel="noreferrer" className="wa-float" aria-label="Escríbenos por WhatsApp">
      <IconWhatsApp width="26" height="26" />
    </a>
  )
}
