import {
  profile,
  links,
  education,
  experience,
  projects,
  skills,
  certifications,
} from './data.js'

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">Pratap.</a>
          <nav>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container" id="top">
        <section className="hero">
          <p className="eyebrow">Hello, I'm</p>
          <h1>{profile.name}</h1>
          <p className="subtitle">{profile.title}</p>
          <p className="muted">{profile.location}</p>
          <div className="actions">
            <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={profile.website} target="_blank" rel="noreferrer">Website</a>
          </div>
        </section>

        <Section id="links" title="Links">
          <div className="card">
            <div className="tags">
              {links.map((l) =>
                l.url ? (
                  <a className="btn" key={l.label} href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
                ) : (
                  <span className="tag" key={l.label}>{l.label} — link coming soon</span>
                )
              )}
            </div>
          </div>
        </Section>

        <Section id="education" title="Education">
          {education.map((e) => (
            <div className="card" key={e.school}>
              <div className="row">
                <h3>{e.school}</h3>
                <span className="muted">{e.period}</span>
              </div>
              <p>{e.degree}</p>
            </div>
          ))}
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((x) => (
            <div className="card" key={x.company}>
              <div className="row">
                <h3>{x.company}</h3>
                <span className="muted">{x.period}</span>
              </div>
              <p className="role">{x.role} · <span className="muted">{x.place}</span></p>
              <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid">
            {projects.map((p) => (
              <div className="card" key={p.name}>
                <div className="row">
                  <h3>{p.name}</h3>
                  <span className="muted">{p.year}</span>
                </div>
                <p className="role">{p.subtitle}</p>
                <div className="tags">{p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
                <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="card">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-row" key={group}>
                <strong>{group}</strong>
                <div className="tags">{items.map((i) => <span className="tag" key={i}>{i}</span>)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="card">
            <ul className="plain">
              {certifications.map((c) => (
                <li key={c.name} className="row"><span>{c.name}</span><span className="muted">{c.date}</span></li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="card">
            <p>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <p>Phone: <a href={`tel:${profile.phone}`}>{profile.phone}</a></p>
          </div>
        </Section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  )
}
