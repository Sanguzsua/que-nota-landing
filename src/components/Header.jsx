import { useState } from 'react'

const links = [
  { href: '#que-es', label: 'Qué es' },
  { href: '#hacemos', label: 'Qué hacemos' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#disenos', label: 'Diseños' },
  { href: '#colaboraciones', label: 'Colaboraciones' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header>
        <div className="nav-wrap">
          <a href="#top" className="logo">
            <span className="logo-mark">QN</span>
            <span className="logo-word">
              QUE N<span className="diaeresis">Ö</span>TA
            </span>
          </a>
          <nav className="links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="https://wa.me/573103275424" target="_blank" rel="noreferrer" className="btn nav-cta">
            Cotiza tu proyecto
          </a>
          <button
            className={`burger ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
