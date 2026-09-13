import Reveal from './Reveal.jsx'
import { InkStroke } from './QueEsYHacemos.jsx'

const notebooks = [
  { src: '/disenos/own-your-growth.jpg', label: 'Own your growth' },
  { src: '/disenos/where-ideas-grow.jpg', label: 'Where ideas grow' },
  { src: '/disenos/planifica-ejecuta-logra.jpg', label: 'Planifica · Ejecuta · Logra' },
  { src: '/disenos/moon-mind.jpg', label: 'Moon & Mind' },
  { src: '/disenos/let-yourself-bloom.jpg', label: 'Let yourself bloom' },
  { src: '/disenos/sin-excusas.jpg', label: 'Sin excusas' },
  { src: '/disenos/sin-detalle-cuenta.jpg', label: 'Cada detalle cuenta' },
  { src: '/disenos/sunsets-dreams.jpg', label: 'Sunsets & Dreams' },
]

export function Disenos() {
  return (
    <section id="disenos" className="gallery-section">
      <div className="container">
        <div className="cards-head">
          <Reveal as="span" className="eyebrow">
            05 — Colecciones
          </Reveal>
          <Reveal as="h2" className="section-title">
            Diseños propios
          </Reveal>
          <Reveal as="p" className="lede" style={{ margin: '18px auto 0' }}>
            Colecciones originales pensadas para inspirar y acompañar.
          </Reveal>
        </div>
        <div className="gallery-grid">
          {notebooks.map((n, i) => (
            <Reveal key={n.src} className="nb-card" delay={i * 60}>
              <img src={n.src} alt={n.label} loading="lazy" />
              <span>{n.label}</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="stars-feature" delay={480}>
          <img src="/disenos/beyond-the-stars.jpg" alt="Beyond the Stars" />
        </Reveal>
      </div>
    </section>
  )
}

export function Colaboraciones() {
  return (
    <section id="colaboraciones" className="collabs-section">
      <div className="container">
        <Reveal as="span" className="eyebrow">
          06 — Marcas aliadas
        </Reveal>
        <Reveal as="h2" className="section-title">
          Colaboraciones
        </Reveal>
        <InkStroke style={{ marginTop: 18 }} />
        <div className="collabs-grid">
          <Reveal className="collab-block">
            <div className="collab-name">iVascular — therapies for living</div>
            <div className="collab-mockups">
              <div className="mockup-chip mk1">
                <span>Cardio</span>
              </div>
              <div className="mockup-chip mk2">
                <span>EV</span>
              </div>
              <div className="mockup-chip mk3">
                <span>Brain</span>
              </div>
            </div>
          </Reveal>
          <Reveal className="collab-block" delay={100}>
            <div className="collab-name">Piratas — equipo de baloncesto</div>
            <div className="collab-mockups">
              <div className="mockup-chip mk4">
                <span>Piratas</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
