import Reveal from './Reveal.jsx'
import { IconPencilPath, IconStar, IconHandshake, IconGrid, IconClock } from './Icons.jsx'

const checklist = [
  'Logo y colores corporativos',
  'Nombres personalizados',
  'Materiales y acabados de alta calidad',
  'Boceto virtual del producto o necesidad',
]

export function Personalizacion() {
  return (
    <section className="split reverse">
      <div className="text-side">
        <Reveal as="span" className="eyebrow">
          07 — A tu medida
        </Reveal>
        <Reveal as="h2" className="section-title">
          Adaptamos cada producto a la identidad de tu empresa
        </Reveal>
        <Reveal className="gold-rule" style={{ marginLeft: 0 }} />
        <ul className="checklist">
          {checklist.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 70}>
              <span className="tick">✓</span> {item}
            </Reveal>
          ))}
        </ul>
      </div>
      <div className="visual-side">
        <Reveal className="mini-notebook" style={{ background: '#8a8a8a' }}>
          <div className="qn2" style={{ color: '#1a1a1a' }}>
            <div className="m" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
              TU MARCA
            </div>
            <div className="w" style={{ letterSpacing: '.14em' }}>
              AQUÍ
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const whyItems = [
  { Icon: IconPencilPath, title: 'Diseño Propio', text: 'Colecciones originales pensadas para inspirar y acompañar.' },
  { Icon: IconStar, title: 'Producción Personalizada', text: 'Atención al detalle y materiales de alta calidad.' },
  { Icon: IconHandshake, title: 'Atención Directa', text: 'Acompañamiento cercano y soluciones flexibles.' },
  { Icon: IconGrid, title: 'Flexibilidad en Cantidades', text: 'Desde pedidos pequeños hasta proyectos corporativos.' },
  { Icon: IconClock, title: 'Desarrollo a Medida', text: 'Creamos productos únicos para cada necesidad.' },
]

export function PorQue() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="cards-head">
          <Reveal as="span" className="eyebrow">
            08 — Nuestra ventaja
          </Reveal>
          <Reveal as="h2" className="section-title">
            ¿Por qué Que Nöta?
          </Reveal>
        </div>
        <div className="why-grid">
          {whyItems.map(({ Icon, title, text }, i) => (
            <Reveal
              key={title}
              className="why-item"
              delay={i * 60}
              style={i === whyItems.length - 1 ? { borderBottom: 'none' } : undefined}
            >
              <div className="ic">
                <Icon />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
