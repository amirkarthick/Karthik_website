import { motion } from 'framer-motion';

const capabilities = [
  'Strategic Stakeholder Leadership',
  'Enterprise Systems Integration',
  'Cloud & Modern Platform Delivery',
  'Solution Design & Architecture',
  'Technical Program Enablement',
  'Mission-Critical Operations'
];

const highlights = [
  { value: '20+', label: 'Years of engineering experience' },
  { value: '10+', label: 'Years of engineering delivery' },
  { value: '360°', label: 'Customer and technical leadership' },
  { value: '24/7', label: 'Operational resilience mindset' },
  { value: '01', label: 'Enterprise-ready profile' }
];

const timeline = [
  {
    year: '2026',
    title: 'Engineering Leader, Enterprise Change & Delivery',
    description: 'Engineering Leader, Enterprise Change & Delivery, connecting enterprise transformation, delivery leadership, and customer-focused technology outcomes across complex business environments.'
  },
  {
    year: '2024',
    title: 'AI Software Engineering — The Hartford',
    description: 'Led on-site solution architecture for Gemini Enterprise, Agentic AI, Model Context Protocol, Cloud Run, and production-grade developer productivity integrations.'
  },
  {
    year: '2022',
    title: 'Enterprise Cloud Transformation Programs',
    description: 'Guided stakeholder alignment, rapid POCs, automated reconciliation and data mapping workflows, and cross-platform modernization for cloud delivery programs.'
  },
  {
    year: '2019',
    title: 'Senior Manager, Technology — Wolters Kluwer',
    description: 'Spearheaded enterprise cloud transformation, platform migrations out of legacy Rackspace environments, and high-availability data modernization initiatives.'
  },
  {
    year: '2018',
    title: 'Technical Manager & Scrum Master — Selective Insurance',
    description: 'Managed core infrastructure engineering lifecycles, full-stack optimization, release management, and multi-squad Agile delivery across underwriting platforms.'
  },
  {
    year: '2014',
    title: 'Technical Manager — Cognizant',
    description: 'Delivered on-site client engineering to financial services accounts and supported modernization of legacy financial transaction systems.'
  },
  {
    year: '2004',
    title: 'Technology Delivery & Legacy Modernization',
    description: 'Built custom financial transaction software for Fortune-level clients and modernized Oracle 9i to 11g data platforms with high-throughput BPM layers.'
  }
];

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <img className="brand-icon" src="/karthik_pic.png" alt="Karthikeyan Amirthalingam" />
          <div>
            <span className="brand-name">Karthikeyan Amirthalingam</span>
            <span className="brand-role">Engineering Leader, Enterprise Change & Delivery</span>
          </div>
        </div>
        <nav className="main-nav">
          <a href="#profile">Profile</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-sm btn-border" href="#contact">Let’s connect</a>
      </header>

      <section className="hero section">
        <div className="hero-copy">
          <div className="eyebrow">
            <span></span>
            Strategic Technology Delivery
          </div>
          <h1>Engineering leadership for complex transformation.</h1>
          <p className="hero-text">
            I bring a delivery-focused engineering mindset to enterprise environments, combining technical depth,
            stakeholder influence, and operational excellence to help transform strategy into measurable outcomes.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary hero-request" href="#contact">Request profile</a>
          </div>
          <div className="hero-metrics">
            {highlights.map((item, index) => (
              <div className="metric" key={index}>
                <span>{item.value}</span>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-panel">
          <div className="image-frame">
            <img className="profile-image" src="/karthik_pic.png" alt="Karthikeyan Amirthalingam" />
            <div className="status-card glass-card">
              <span className="status-dot"></span>
              <div>
                <span className="status-label">Availability</span>
                <span className="status-text">Let's Connect</span>
              </div>
            </div>
          </div>
          <div className="orbit-grid">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </aside>
      </section>

      <section id="profile" className="section profile-section">
        <div className="section-heading compact">
          <span className="overline">Executive Profile</span>
          <h2>Technology leadership with field-ready execution.</h2>
        </div>
        <div className="profile-content">
          <div className="profile-copy">
            <p>
              A senior technology professional focused on translating customer needs into engineering outcomes,
              leading delivery across evolving enterprise environments, and aligning business priorities with dependable technical execution.
            </p>
            <p>
              The core value proposition is the ability to connect strategy, systems, and people — from requirements and problem framing to implementation, enablement, and measurable operating impact.
            </p>
          </div>
          <div className="quote-card glass-card">
            <span className="quote-mark">“</span>
            <p>
              Delivering secure, scalable, customer-focused engineering outcomes through disciplined execution and clear technical leadership.
            </p>
            <span className="quote-author">FDE Leadership</span>
          </div>
        </div>
      </section>

      <section id="capabilities" className="section capabilities-section">
        <div className="section-heading centered">
          <span className="overline">Capability Stack</span>
          <h2>Systems, delivery, and enterprise influence.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <motion.article className="capability-card" key={capability}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}>
              <span className="card-index">0{index + 1}</span>
              <h3>{capability}</h3>
              <p>
                Enable solution quality, operational consistency, and customer alignment through dependable, measurable engineering practices.
              </p>
              <span className="read-more">Explore capability</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="section timeline-section">
        <div className="section-heading compact">
          <span className="overline">Career Trajectory</span>
          <h2>From engineering execution to enterprise influence.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <article className="timeline-row" key={item.year}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-line">
                <span></span>
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section case-section">
        <div className="case-panel glass-card">
          <div>
            <span className="overline">Impact Focus</span>
            <h2>Mission-aligned delivery at enterprise speed.</h2>
            <p>
              Customer facing delivery requires discipline, technical confidence, and trusted execution. I work across complexity to maintain delivery rhythm,
              reduce ambiguity, and keep business and engineering priorities aligned.
            </p>
            <div className="case-tags">
              <span>Architecture</span>
              <span>Delivery</span>
              <span>Stakeholder Alignment</span>
              <span>Modernization</span>
            </div>
          </div>
          <div className="signal-panel">
            <div className="signal-card">
              <span className="signal-label">Delivery Health</span>
              <span className="signal-value">High</span>
            </div>
            <div className="signal-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-panel">
          <div>
            <span className="overline">Let’s Connect</span>
            <h2>Open to enterprise technology leadership opportunities.</h2>
            <p>
              I am interested in roles where technology delivery, customer transformation, and engineering leadership converge.
            </p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:amir.karthick@gmail.com">Connect by email</a>
            <a className="btn btn-secondary" href="https://www.linkedin.com/in/karthikeyan-amirthalingam-karthik-ssm®-csm®-mcad-b38ba264/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
