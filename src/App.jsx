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
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">Pratap.</a>
          <nav aria-label="Primary">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container" id="main">
        <section className="hero" id="top">
          <p className="eyebrow">Hello, I'm</p>
          <h1>{profile.name}</h1>
          <p className="subtitle">{profile.title}</p>
          <p className="muted">{profile.location}</p>
          <div className="actions">
            <a className="btn primary" href={profile.github} target="_blank" rel="noreferrer">View GitHub</a>
            <a className="btn" href={profile.website} target="_blank" rel="noreferrer">Visit Website</a>
          </div>
        </section>

        <Section id="links" title="Links">
          <div className="card">
            <div className="tags">
              {links.map((link) =>
                link.url ? (
                  <a className="btn" key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                ) : (
                  <span className="tag" key={link.label}>{link.label} — coming soon</span>
                )
              )}
            </div>
          </div>
        </Section>

        <Section id="education" title="Education">
          {education.map((item) => (
            <div className="card" key={item.school}>
              <div className="row">
                <h3>{item.school}</h3>
                <span className="muted">{item.period}</span>
              </div>
              <p>{item.degree}</p>
            </div>
          ))}
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((item) => (
            <div className="card" key={item.company}>
              <div className="row">
                <h3>{item.company}</h3>
                <span className="muted">{item.period}</span>
              </div>
              <p className="role">{item.role} · <span className="muted">{item.place}</span></p>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid">
            {projects.map((project) => (
              <div className="card" key={project.name}>
                <div className="row">
                  <h3>{project.name}</h3>
                  <span className="muted">{project.year}</span>
                </div>
                <p className="role">{project.subtitle}</p>
                <div className="tags">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
                <ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="card">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-row" key={group}>
                <strong>{group}</strong>
                <div className="tags">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="card">
            <ul className="plain">
              {certifications.map((item) => (
                <li className="row" key={item.name}>
                  <span>{item.name}</span>
                  <span className="muted">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="card">
            <p>Phone: <a href={`tel:${profile.phone}`}>{profile.phone}</a></p>
          </div>
        </Section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  )
}
