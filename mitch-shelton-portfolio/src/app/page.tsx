export default function Home() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Focus", href: "#focus" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const stats = [
    { value: "8+ years", label: "Software engineering" },
    { value: "Unreal Engine", label: "Gameplay + tooling focus" },
    { value: "Backend systems", label: "APIs, services, pipelines" },
  ];

  const highlights = [
    {
      title: "Current focus",
      description:
        "Multiplayer gameplay systems, performant networking, and production-ready toolchains.",
    },
    {
      title: "What I bring",
      description:
        "End-to-end ownership, clean architecture, and calm delivery in complex builds.",
    },
    {
      title: "Looking for",
      description:
        "Roles that value realtime 3D, backend reliability, and a strong player experience.",
    },
  ];

  const focusAreas = [
    {
      title: "Unreal Engine",
      description:
        "Gameplay ability systems, multiplayer architecture, and C++/Blueprint hybrid workflows.",
    },
    {
      title: "Backend Engineering",
      description:
        "Service design, data modeling, observability, and API performance for games and tools.",
    },
    {
      title: "Developer Experience",
      description:
        "Build pipelines, automation, and internal tools that ship faster with fewer regressions.",
    },
  ];

  const projects = [
    {
      title: "Realtime Gameplay Prototype",
      summary:
        "A fast iteration sandbox to validate core mechanics, replication flow, and input feel.",
      stack: ["Unreal Engine", "C++", "Gameplay Ability System"],
      note: "Add screenshots or clips in the media slot.",
    },
    {
      title: "Live Ops Backend",
      summary:
        "A scalable backend foundation for events, player stats, and live content rollouts.",
      stack: ["TypeScript", "Postgres", "Redis", "AWS"],
      note: "Highlight scale, throughput, or reliability wins.",
    },
    {
      title: "Build + Tooling Suite",
      summary:
        "Internal tools that cut build times and made content releases safer and repeatable.",
      stack: ["Python", "CI/CD", "Automation"],
      note: "Swap in a diagram or workflow graphic.",
    },
  ];

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "Studio or Company Name",
      period: "2021 - Present",
      detail:
        "Leading Unreal Engine systems, multiplayer features, and performance optimization.",
    },
    {
      role: "Backend Engineer",
      company: "Company Name",
      period: "2018 - 2021",
      detail:
        "Designed APIs and data pipelines supporting large-scale player data and live services.",
    },
  ];

  const skills = [
    "Unreal Engine 5",
    "C++",
    "Gameplay Ability System",
    "Replication",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Docker",
    "CI/CD",
    "Observability",
  ];

  return (
    <main className="page">
      <section className="panel hero" id="top">
        <div className="panel__inner">
          <nav className="top-nav reveal" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hero__grid">
            <div>
              <p className="eyebrow reveal delay-1">Mitch Shelton</p>
              <h1 className="display reveal delay-2">
                Software engineer shaping Unreal Engine experiences and backend
                systems that scale.
              </h1>
              <p className="lead reveal delay-3">
                I design gameplay architecture, networked features, and reliable
                services for teams that want to ship with confidence.
              </p>
              <div className="cta-row reveal delay-4">
                <a
                  className="btn btn-primary"
                  href="mailto:MitchShelton92@gmail.com"
                >
                  Email me
                </a>
                <a className="btn btn-ghost" href="/resume.pdf">
                  Download resume
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://www.linkedin.com/in/mitchshelton/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="hero__stats reveal delay-4">
                {stats.map((stat) => (
                  <div className="stat-card" key={stat.value}>
                    <strong>{stat.value}</strong>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero__visual reveal delay-2">
              <div className="visual-card">
                <div>
                  <strong>Graphics slot</strong>
                  <p>Drop a render, clip, or static image here.</p>
                </div>
              </div>
              <div className="visual-card">
                <div>
                  <strong>Realtime focus</strong>
                  <p>Highlight a system, shader, or tool that stands out.</p>
                </div>
              </div>
              <div className="visual-card">
                <div>
                  <strong>Backend snapshot</strong>
                  <p>Show a data flow, architecture diagram, or API map.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel" id="about">
        <div className="panel__inner">
          <div className="section-header">
            <h2>About</h2>
            <p>
              I build the connective tissue between immersive worlds and the
              services that keep them running. My work blends gameplay systems
              with backend reliability so teams can move fast without breaking
              stability.
            </p>
          </div>
          <div className="grid-two">
            <div className="card">
              <h3>Snapshot</h3>
              <p>
                Based in your location. Open to full-time roles, contract
                engagements, or technical consulting focused on Unreal Engine and
                backend systems.
              </p>
              <div className="divider" />
              <p>
                Update this copy with the story you want recruiters and teams to
                remember after one scroll.
              </p>
            </div>
            <div className="card-grid">
              {highlights.map((item) => (
                <div className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="panel" id="focus">
        <div className="panel__inner">
          <div className="section-header">
            <h2>Focus areas</h2>
            <p>
              The spaces where I deliver the most impact, from realtime gameplay
              systems to the infrastructure behind them.
            </p>
          </div>
          <div className="card-grid">
            {focusAreas.map((area) => (
              <div className="card" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel" id="work">
        <div className="panel__inner">
          <div className="section-header">
            <h2>Selected work</h2>
            <p>
              Curate the projects that best show your gameplay, backend, and
              tooling strengths. Add images as you build your visual library.
            </p>
          </div>
          <div className="card-grid">
            {projects.map((project) => (
              <div className="card work-card" key={project.title}>
                <div className="media-frame">{project.note}</div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="tags">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel" id="experience">
        <div className="panel__inner">
          <div className="section-header">
            <h2>Experience</h2>
            <p>
              Highlight leadership, shipped titles, and backend services that
              show measurable impact.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={item.role}>
                <h3>
                  {item.role} - {item.company}
                </h3>
                <span>{item.period}</span>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel" id="skills">
        <div className="panel__inner">
          <div className="section-header">
            <h2>Skills</h2>
            <p>
              Keep this list current with the tools you use daily and the tech
              you are excited to grow into.
            </p>
          </div>
          <div className="card">
            <div className="tags">
              {skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="panel" id="contact">
        <div className="panel__inner">
          <div className="contact-card">
            <div className="section-header">
              <h2>Let's build something ambitious</h2>
              <p>
                If you want a teammate who can bridge Unreal Engine and backend
                systems, let's talk about the next release.
              </p>
            </div>
            <div className="cta-row">
              <a
                className="btn btn-primary"
                href="mailto:MitchShelton92@gmail.com"
              >
                MitchShelton92@gmail.com
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/link270"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.linkedin.com/in/mitchshelton/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
