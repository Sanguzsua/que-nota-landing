import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { IconWhatsApp, IconMail, IconInstagram } from './Icons.jsx'

export default function Contacto() {
  const [form, setForm] = useState({ fname: '', fcompany: '', fproduct: 'Agendas', fqty: '', fmsg: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { fname, fcompany, fproduct, fqty, fmsg } = form
    const text = encodeURIComponent(
      `Hola Que Nöta, soy ${fname}${fcompany ? ' de ' + fcompany : ''}. ` +
        `Me interesa cotizar: ${fproduct}${fqty ? ' (' + fqty + ')' : ''}. ${fmsg}`
    )
    setSent(true)
    window.open(`https://wa.me/573103275424?text=${text}`, '_blank')
    setForm({ fname: '', fcompany: '', fproduct: 'Agendas', fqty: '', fmsg: '' })
  }

  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <Reveal as="span" className="eyebrow">
          09 — Hablemos
        </Reveal>
        <Reveal as="h2" className="section-title">
          Conversemos
        </Reveal>
        <Reveal as="p" className="lede" style={{ marginTop: 16 }}>
          Estamos listos para crear soluciones que representen lo mejor de tu marca.
        </Reveal>

        <div className="contact-grid">
          <div className="contact-info">
            <Reveal as="a" className="info-row" href="https://wa.me/573103275424" target="_blank" rel="noreferrer">
              <span className="ic">
                <IconWhatsApp width="18" height="18" />
              </span>
              <span>
                <span className="label">WhatsApp</span>
                <br />
                <span className="value">310 327 5424</span>
              </span>
            </Reveal>
            <Reveal as="a" className="info-row" href="mailto:quenota8454@gmail.com" delay={70}>
              <span className="ic">
                <IconMail width="18" height="18" />
              </span>
              <span>
                <span className="label">Correo</span>
                <br />
                <span className="value">quenota8454@gmail.com</span>
              </span>
            </Reveal>
            <Reveal
              as="a"
              className="info-row"
              href="https://instagram.com/quenota.oficial"
              target="_blank"
              rel="noreferrer"
              delay={140}
            >
              <span className="ic">
                <IconInstagram width="18" height="18" />
              </span>
              <span>
                <span className="label">Instagram</span>
                <br />
                <span className="value">@quenota.oficial</span>
              </span>
            </Reveal>
          </div>

          <Reveal as="form" className="quote-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="fname">Nombre</label>
              <input type="text" id="fname" name="fname" value={form.fname} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="fcompany">Empresa</label>
              <input type="text" id="fcompany" name="fcompany" value={form.fcompany} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="fproduct">Tipo de producto</label>
              <select id="fproduct" name="fproduct" value={form.fproduct} onChange={handleChange}>
                <option>Agendas</option>
                <option>Cuadernos</option>
                <option>Libretas</option>
                <option>Dotación corporativa</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="fqty">Cantidad estimada</label>
              <input type="text" id="fqty" name="fqty" placeholder="Ej. 50 unidades" value={form.fqty} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="fmsg">Mensaje</label>
              <textarea id="fmsg" name="fmsg" placeholder="Cuéntanos sobre tu proyecto..." value={form.fmsg} onChange={handleChange} />
            </div>
            <button type="submit" className="btn" style={{ alignSelf: 'flex-start' }}>
              Enviar solicitud
            </button>
            {sent && <p className="form-msg show">Gracias — hemos recibido tu solicitud. Te contactaremos pronto.</p>}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
