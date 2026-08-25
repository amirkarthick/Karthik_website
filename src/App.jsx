import { useState } from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Google Cloud Platform (GCP)',
    badge: '☁️',
    org: 'Cloud Architecture & Enterprise Delivery'
  },
  {
    title: 'SAFe® Scrum Master (SSM®)',
    badge: '⚡',
    org: 'Scaled Agile Academy'
  },
  {
    title: 'Certified ScrumMaster® (CSM®)',
    badge: '🎯',
    org: 'Scrum Alliance'
  },
  {
    title: 'Microsoft Certified Application Developer (MCAD)',
    badge: '💻',
    org: 'Enterprise Systems & Software Architecture'
  }
];

const leadershipPrinciples = [
  {
    number: '01',
    title: 'People & Squad Empowerment',
    subtitle: 'High-trust, high-ownership engineering cultures',
    description: 'Scaling multi-squad organizations through proactive mentorship, clear autonomy, and continuous technical growth. I empower tech leads to make sound architectural decisions with high delivery accountability.'
  },
  {
    number: '02',
    title: 'Architectural Rigor & SRE',
    subtitle: '99.99% reliability with security-by-design',
    description: 'Embedding automated quality, CI/CD guardrails, and Site Reliability Engineering (SRE) from day one. Systems are architected for fault tolerance, elasticity, and zero-downtime evolution on Google Cloud.'
  },
  {
    number: '03',
    title: 'Business Value & FinOps Stewardship',
    subtitle: 'Aligning cloud architecture with executive ROI',
    description: 'Connecting technical roadmaps to C-suite financial goals. Through disciplined FinOps practices and proactive workload right-sizing, I have driven 35%+ cloud cost optimizations while increasing release velocity.'
  }
];

const caseStudies = [
  {
    id: 'gcp-migration',
    tag: 'Cloud Transformation',
    title: 'Enterprise Legacy-to-GCP Modernization',
    challenge: 'Transitioning mission-critical, monolithic workloads from legacy hosting (Rackspace/On-prem) into a scalable, secure multi-region cloud platform with strict zero-downtime mandates.',
    architecture: 'Designed GCP Landing Zones with Cloud Foundation Fabric, Shared VPCs, GKE containerization, Cloud Run serverless endpoints, and automated Terraform infrastructure pipelines.',
    impact: 'Achieved zero-downtime cutover, 99.99% availability, and a 35% reduction in annual cloud TCO through FinOps optimization.',
    technologies: ['Google Cloud', 'GKE', 'Cloud Run', 'Terraform', 'Shared VPC', 'FinOps']
  },
  {
    id: 'genai-platform',
    tag: 'Generative AI & LLMs',
    title: 'Production Agentic AI & Enterprise Gemini Systems',
    challenge: 'Architecting and operationalizing enterprise AI capabilities to automate multi-step technical workflows and enhance engineering team productivity safely within regulatory bounds.',
    architecture: 'Implemented Gemini Enterprise integrations, Vertex AI foundation models, Agentic workflow orchestrators, and Model Context Protocol (MCP) tools with enterprise guardrails and RAG pipelines.',
    impact: 'Reduced routine operational toil by 60%, shortened incident remediation cycles, and created reusable AI blueprints across squads.',
    technologies: ['Vertex AI', 'Gemini 1.5/2.0', 'Agentic AI', 'MCP Protocol', 'Cloud Run', 'Python']
  },
  {
    id: 'data-mesh',
    tag: 'Data & Analytics',
    title: 'Real-Time Financial Analytics & Reconciliation Mesh',
    challenge: 'Modernizing legacy database batch processing into a high-throughput, low-latency streaming pipeline for mission-critical underwriting and transaction reconciliation.',
    architecture: 'Built event-driven streaming ingestion with Cloud Pub/Sub, distributed real-time transformations via Cloud Dataflow (Apache Beam), and petabyte-scale analytics in BigQuery with BigLake integration.',
    impact: 'Cut data latency from hours to sub-second streaming, processing millions of transactions daily with 100% auditability and data integrity.',
    technologies: ['BigQuery', 'Cloud Dataflow', 'Cloud Pub/Sub', 'BigLake', 'Apache Beam', 'Looker']
  }
];

const capabilities = [
  {
    title: 'GCP Enterprise Architecture & Landing Zones',
    description: 'Architecting secure, multi-region Google Cloud foundations with Cloud Foundation Fabric, Shared VPCs, GKE, Cloud IAM, and Cloud Security Command Center.',
    tags: ['Google Cloud', 'Cloud Foundation', 'GKE', 'Security']
  },
  {
    title: 'Generative AI & Vertex AI Solutions',
    description: 'Leading production-grade AI initiatives: Gemini 1.5/2.0 API integrations, Agentic workflows, Model Context Protocol (MCP), Vertex AI, and enterprise RAG systems.',
    tags: ['Vertex AI', 'Gemini', 'Agentic AI', 'MCP']
  },
  {
    title: 'Data Modernization & Analytics Fabrics',
    description: 'Directing petabyte-scale data modernization on BigQuery, Cloud Dataflow (Apache Beam), Pub/Sub, Dataproc, and unified BigLake data architectures.',
    tags: ['BigQuery', 'Dataflow', 'Pub/Sub', 'BigLake']
  },
  {
    title: 'Cloud-Native & Distributed Microservices',
    description: 'Modernizing legacy monoliths into highly scalable, containerized architectures leveraging Google Kubernetes Engine (GKE), Cloud Run, and event-driven meshes.',
    tags: ['GKE', 'Cloud Run', 'Microservices', 'Event-Driven']
  },
  {
    title: 'Engineering Org Scaling & Multi-Squad Leadership',
    description: 'Mentoring and directing 50+ engineers, tech leads, and managers across global squads. Cultivating high-ownership culture, CI/CD rigor, and rapid delivery cadences.',
    tags: ['Org Scaling', 'Talent Leadership', 'Agile/SAFe', 'Mentorship']
  },
  {
    title: 'Cloud FinOps, SRE & Operational Governance',
    description: 'Institutionalizing FinOps for 35%+ cloud cost optimization, SRE discipline with 99.99% availability SLAs, automated guardrails, and compliance assurance.',
    tags: ['FinOps', 'SRE / Observability', '99.99% SLAs', 'Governance']
  }
];

const techStack = {
  'Cloud Infrastructure (GCP)': [
    'Google Cloud Platform (GCP)',
    'Google Kubernetes Engine (GKE)',
    'Cloud Run & App Engine',
    'Compute Engine & VPC Architecture',
    'Anthos / Distributed Cloud',
    'Cloud IAM & Organization Policies',
    'Terraform / IaC'
  ],
  'AI, ML & Data Engineering': [
    'Vertex AI & Generative AI Studio',
    'Gemini Enterprise Models',
    'Agentic AI & MCP Frameworks',
    'BigQuery (Data Warehouse & ML)',
    'Cloud Dataflow (Apache Beam)',
    'Cloud Pub/Sub & Kafka',
    'Cloud Storage & BigLake'
  ],
  'Leadership, Architecture & Delivery': [
    'Enterprise Engineering Leadership & Governance',
    'Multi-Squad Agile / SAFe Scaling',
    'C-Suite & Executive Alignment',
    'Cloud FinOps & Cost Optimization',
    'Site Reliability Engineering (SRE)',
    'Enterprise Legacy Modernization',
    'Vendor & Partner Management'
  ]
};

const highlights = [
  { value: '20+', label: 'Years Tech Leadership' },
  { value: '50+', label: 'Engineers & Leads Mentored' },
  { value: 'GCP', label: 'Primary Cloud Architecture' },
  { value: '99.99%', label: 'Resilience & Uptime SLA' },
  { value: '35%+', label: 'Cloud TCO Optimization' }
];

const timeline = [
  {
    year: '2024 – Present',
    role: 'Engineering Leader – Cloud & Enterprise AI',
    focus: 'Google Cloud Platform, Vertex AI, Agentic Systems & Org Leadership',
    description: 'Leading solution architecture and engineering delivery for enterprise Gemini AI implementations, Agentic AI workflows with Model Context Protocol (MCP), Cloud Run serverless platforms, and high-throughput developer productivity ecosystems.'
  },
  {
    year: '2022 – 2024',
    role: 'Head of Cloud Engineering & Platform Transformation',
    focus: 'GCP Migration, Data Modernization & Multi-Squad Governance',
    description: 'Spearheaded multi-squad cloud modernization programs onto Google Cloud. Directed rapid POCs, automated data reconciliation pipelines, BigQuery analytics adoption, and cross-platform modernization delivering zero-downtime cutovers.'
  },
  {
    year: '2019 – 2022',
    role: 'Senior Manager, Cloud Technology & Modernization',
    focus: 'Enterprise Cloud Transformation & Infrastructure Engineering',
    description: 'Directed large-scale enterprise cloud transformations, executing legacy workload migrations out of Rackspace into resilient cloud environments. Architected high-availability data infrastructure and improved delivery velocity across multiple product teams.'
  },
  {
    year: '2018 – 2019',
    role: 'Technical Manager & Agile Engineering Leader',
    focus: 'Core Platform Engineering & Release Governance',
    description: 'Managed core infrastructure engineering lifecycles, full-stack microservices optimization, release governance, and multi-squad Agile delivery across mission-critical underwriting and financial platforms.'
  },
  {
    year: '2014 – 2018',
    role: 'Technical Delivery Manager – Financial Services',
    focus: 'Client Engineering, SLAs & Systems Integration',
    description: 'Led on-site client engineering programs for Tier-1 financial institutions. Supported the modernization of high-frequency financial transaction platforms with strict regulatory compliance and low-latency requirements.'
  },
  {
    year: '2004 – 2014',
    role: 'Senior Technology Specialist & Systems Modernizer',
    focus: 'Distributed Systems & Database Modernization',
    description: 'Built custom mission-critical financial transaction platforms for Fortune 500 clients. Modernized enterprise Oracle data tiers to high-throughput BPM architectures, establishing foundational patterns for future cloud modernization.'
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('Cloud Infrastructure (GCP)');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('amir.karthick@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <img className="brand-icon" src="/karthik_pic.png" alt="Karthikeyan Amirthalingam" />
          <div>
            <span className="brand-name">Karthikeyan Amirthalingam</span>
            <span className="brand-role">Engineering Leader | Cloud, Data & AI </span>
          </div>
        </div>
        <nav className="main-nav">
          <a href="#profile">Profile</a>
          <a href="#leadership">Leadership</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#cases">Case Studies</a>
          <a href="#stack">Tech Stack</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-sm btn-border" href="#contact">Let’s connect</a>
      </header>

      <section className="hero section">
        <div className="hero-copy">
          <div className="eyebrow">
            <span></span>
            Enterprise Cloud & AI Transformation
          </div>
          <h1>Engineering leadership for cloud & AI scale.</h1>
          <p className="hero-text">
            20+ years of technology leadership specializing in <strong>Google Cloud Platform (GCP)</strong>,
            enterprise modernization, and <strong>production Generative AI</strong>. I lead high-performing teams,
            align C-suite strategy with resilient architecture, and turn complex transformation into measurable business value.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary hero-request" href="mailto:amir.karthick@gmail.com">
              Connect by Email
            </a>
            <a className="btn btn-secondary" href="https://www.linkedin.com/in/karthikeyan-amirthalingam-karthik-ssm®-csm®-mcad-b38ba264/" target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
            <button className="btn btn-border btn-copy" onClick={handleCopyEmail} title="Copy email to clipboard">
              {copied ? '✓ Copied Email' : '📋 Copy Email'}
            </button>
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
                <span className="status-label">Leadership Profile</span>
                <span className="status-text">Open to Engineering Leadership</span>
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

      {/* Certifications & Credentials Ribbon */}
      <section className="certifications-ribbon">
        <div className="ribbon-inner">
          <span className="ribbon-title">Credentials & Accreditations</span>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div className="cert-card glass-card" key={cert.title}>
                <span className="cert-badge">{cert.badge}</span>
                <div>
                  <h4 className="cert-name">{cert.title}</h4>
                  <span className="cert-org">{cert.org}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="profile" className="section profile-section">
        <div className="section-heading compact">
          <span className="overline">Executive Profile</span>
          <h2>Strategic vision with deep GCP engineering authority.</h2>
        </div>
        <div className="profile-content">
          <div className="profile-copy">
            <p>
              As an Engineering Leader, I specialize in navigating complex enterprise ecosystems, transitioning legacy architectures
              into high-performing Google Cloud environments, and pioneering production-grade AI & data systems.
            </p>
            <p>
              My leadership model bridges the gap between executive objectives, product roadmaps, and technical teams.
              Whether establishing GCP Landing Zones, architecting Vertex AI agentic pipelines, or scaling engineering organizations across global squads,
              I ensure operational excellence, financial governance (FinOps), and 99.99% availability SLAs.
            </p>
          </div>
          <div className="quote-card glass-card">
            <span className="quote-mark">“</span>
            <p>
              True engineering leadership is about scaling human potential, architecting resilient cloud foundations, and delivering customer outcomes with uncompromising quality.
            </p>
            <span className="quote-author">Engineering Leader | Google Cloud Platform</span>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section id="leadership" className="section leadership-section">
        <div className="section-heading centered">
          <span className="overline">Leadership Philosophy</span>
          <h2>How I Lead Teams & Drive Cloud Outcomes</h2>
        </div>
        <div className="principles-grid">
          {leadershipPrinciples.map((item, index) => (
            <motion.article
              className="principle-card glass-card"
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="principle-header">
                <span className="principle-number">{item.number}</span>
                <span className="principle-sub">{item.subtitle}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section capabilities-section">
        <div className="section-heading centered">
          <span className="overline">Core Pillars</span>
          <h2>Engineering Leadership & GCP Specialization</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <motion.article className="capability-card" key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}>
              <div>
                <span className="card-index">0{index + 1}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
              <div className="card-tags">
                {capability.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Flagship Case Studies Section */}
      <section id="cases" className="section case-studies-section">
        <div className="section-heading compact">
          <span className="overline">Architecture in Action</span>
          <h2>Flagship Enterprise Transformation Case Studies</h2>
        </div>
        <div className="case-studies-grid">
          {caseStudies.map((cs, index) => (
            <motion.div
              className="case-study-card glass-card"
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="cs-header">
                <span className="cs-tag">{cs.tag}</span>
                <span className="cs-num">0{index + 1}</span>
              </div>
              <h3>{cs.title}</h3>

              <div className="cs-body">
                <div className="cs-block">
                  <span className="cs-label">Challenge:</span>
                  <p>{cs.challenge}</p>
                </div>
                <div className="cs-block">
                  <span className="cs-label">Architecture:</span>
                  <p>{cs.architecture}</p>
                </div>
                <div className="cs-block cs-highlight">
                  <span className="cs-label">Measurable Impact:</span>
                  <p>{cs.impact}</p>
                </div>
              </div>

              <div className="cs-techs">
                {cs.technologies.map(tech => (
                  <span key={tech} className="cs-tech-pill">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="stack" className="section stack-section">
        <div className="section-heading compact">
          <span className="overline">Technology Matrix</span>
          <h2>Enterprise Stack & Google Cloud Mastery</h2>
        </div>
        <div className="stack-container glass-card">
          <div className="stack-tabs">
            {Object.keys(techStack).map((category) => (
              <button
                key={category}
                className={`tab-btn ${activeTab === category ? 'active' : ''}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="stack-list">
            {techStack[activeTab].map((skill, index) => (
              <motion.div
                key={skill}
                className="stack-badge"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <span className="badge-icon">✦</span>
                <span className="badge-text">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section timeline-section">
        <div className="section-heading compact">
          <span className="overline">Career Trajectory</span>
          <h2>Executive progression & transformation milestones.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-row" key={item.year}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-line">
                <span></span>
              </div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <span className="timeline-focus">{item.focus}</span>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section case-section">
        <div className="case-panel glass-card">
          <div>
            <span className="overline">Enterprise Impact</span>
            <h2>Proven delivery for mission-critical scale.</h2>
            <p>
              Executive technology leadership requires the dual capability to speak to board-level strategy while maintaining
              unshakeable architectural rigor. From orchestrating complex GCP migrations to launching enterprise AI agents,
              my focus remains on business value, team empowerment, and system dependability.
            </p>
            <div className="case-tags">
              <span>Google Cloud (GCP)</span>
              <span>Vertex AI & GenAI</span>
              <span>Landing Zones</span>
              <span>Multi-Squad Scaling</span>
              <span>FinOps & TCO</span>
              <span>99.99% Availability</span>
            </div>
          </div>
          <div className="signal-panel">
            <div className="signal-card">
              <span className="signal-label">Architecture Health</span>
              <span className="signal-value">99.99%</span>
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
            <span className="overline">Executive Engagement</span>
            <h2>Let’s discuss leadership & transformation opportunities.</h2>
            <p>
              I am open to Engineering Leader, Director of Engineering, and Cloud Transformation roles where GCP cloud strategy,
              enterprise modernization, and high-impact engineering leadership converge.
            </p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:amir.karthick@gmail.com">Connect by email</a>
            <a className="btn btn-secondary" href="https://www.linkedin.com/in/karthikeyan-amirthalingam-karthik-ssm®-csm®-mcad-b38ba264/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <button className="btn btn-border btn-copy" onClick={handleCopyEmail}>
              {copied ? '✓ Copied: amir.karthick@gmail.com' : '📋 Copy Email Address'}
            </button>
          </div>
        </div>
      </section>

      {/* Minimalist Executive Footer */}
      <footer className="app-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-name">Karthikeyan Amirthalingam</span>
            <span className="footer-sub">Engineering Leader | Cloud, Data & Enterprise AI (GCP)</span>
          </div>
          <div className="footer-links">
            <a href="#profile">Profile</a>
            <a href="#leadership">Leadership</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#cases">Case Studies</a>
            <a href="#stack">GCP Stack</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Karthikeyan Amirthalingam. All rights reserved.</p>
            <div className="footer-socials">
              <a href="mailto:amir.karthick@gmail.com">amir.karthick@gmail.com</a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/karthikeyan-amirthalingam-karthik-ssm®-csm®-mcad-b38ba264/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
