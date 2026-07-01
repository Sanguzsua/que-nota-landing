import Reveal from './Reveal.jsx'
import { InkStroke } from './QueEsYHacemos.jsx'

const notebooks = [
  { cls: 'nb1', label: 'Own your growth' },
  { cls: 'nb2', label: 'Where ideas grow' },
  { cls: 'nb3', label: 'Planifica · Ejecuta · Logra' },
  { cls: 'nb4', label: 'Moon & Mind' },
  { cls: 'nb5', label: 'Let yourself bloom' },
  { cls: 'nb6', label: 'Sin excusas' },
  { cls: 'nb7', label: 'Sunsets & Dreams' },
  { cls: 'nb8', label: 'Beyond the Stars' },
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
            <Reveal key={n.cls} className={`nb-card ${n.cls}`} delay={i * 60}>
              <span>{n.label}</span>
            </Reveal>
          ))}
        </div>
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
