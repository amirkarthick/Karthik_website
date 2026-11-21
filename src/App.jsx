import { useState } from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'AI-First Software Engineering',
    badge: '🤖',
    org: 'Graduate Certificate — Stevens Institute of Technology'
  },
  {
    title: 'Data Science Principles',
    badge: '📊',
    org: 'Certificate — Harvard Business School Online'
  },
  {
    title: 'SAFe 6.0 Scrum Master (SSM)',
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
    subtitle: 'Leading 45+ engineers across AI & platform teams',
    description: 'Building high-trust, high-ownership engineering cultures. I lead cross-functional teams through proactive mentorship, clear autonomy, and continuous technical growth — empowering tech leads and AI engineers to deliver production-grade systems with accountability.'
  },
  {
    number: '02',
    title: 'Agentic AI & Responsible Governance',
    subtitle: 'Production multi-agent systems with enterprise guardrails',
    description: 'Architecting and operationalizing enterprise agentic AI solutions — from MCP-based SDLC accelerators to multi-agent RFP orchestration. I partner with risk, security, and architecture leaders to embed responsible AI governance and reusable design patterns across the SDLC.'
  },
  {
    number: '03',
    title: 'Business Value & FinOps Stewardship',
    subtitle: 'Aligning cloud architecture with executive ROI',
    description: 'Managing $25M+ annual engineering budgets with disciplined FinOps practices. Cloud migrations, vendor partnerships, and workload right-sizing have delivered 30%+ infrastructure cost reductions while accelerating release velocity and business outcomes.'
  }
];

const caseStudies = [
  {
    id: 'mcp-accelerators',
    tag: 'Agentic AI & MCP',
    title: 'Enterprise MCP-Based SDLC Developer Accelerators',
    challenge: 'Engineering teams spending excessive time on manual code reviews, API integration, and repetitive development tasks — slowing delivery velocity and increasing cycle times across a 45-person AI engineering org.',
    architecture: 'Architected and deployed Model Context Protocol (MCP) based SDLC accelerators: Code Assist, Code Review, and API Bridge tools on Google Cloud (GCP) with enterprise guardrails, responsible AI governance, and reusable agentic design patterns.',
    impact: 'Boosted engineering productivity by 25% and cut code review cycle times by 80%. Established reusable agentic design patterns now adopted across multiple engineering squads.',
    technologies: ['MCP (FastMCP)', 'Google Cloud (GCP)', 'Agentic AI', 'GitHub Copilot', 'RAG', 'Python']
  },
  {
    id: 'multi-agent-rfp',
    tag: 'Multi-Agent Automation',
    title: 'Enterprise Multi-Agent RFP Orchestration System',
    challenge: 'Manual, time-intensive RFP intake and orchestration workflows across insurance operations, causing slow turnaround times and high operational overhead for cross-functional teams.',
    architecture: 'Built enterprise multi-agent RFP orchestration on Google Cloud (GCP) and automated functional intake workflows via Microsoft Power Platform agents. Integrated Gemini Enterprise models with responsible AI evaluation benchmarks.',
    impact: 'Reduced RFP turnaround time by 60%. Automated functional intake workflows eliminated manual processing bottlenecks across business operations.',
    technologies: ['Google Cloud', 'Microsoft Power Platform', 'Gemini Enterprise', 'Multi-Agent', 'Python', 'TypeScript']
  },
  {
    id: 'azure-migration',
    tag: 'Cloud Transformation',
    title: 'Enterprise Rackspace-to-Azure Cloud Migration',
    challenge: 'Modernizing mission-critical monolithic applications from legacy Rackspace hosting to a scalable, cloud-native Azure platform — with zero-downtime mandates for core insurance and financial services workloads.',
    architecture: 'Spearheaded enterprise cloud migration to Microsoft Azure: modernized core applications, reporting, and data platforms using AKS, Terraform, CI/CD pipelines, and Azure Synapse for analytics. Managed $25M annual budget and vendor partnerships across 5 scrum teams.',
    impact: 'Cut infrastructure costs by 30%, improved scalability and delivery cadence across 5 engineering teams. Delivered zero-downtime migration of mission-critical underwriting platforms.',
    technologies: ['Microsoft Azure', 'AKS', 'Terraform', 'Azure Synapse', 'CI/CD', 'DevSecOps']
  }
];

const capabilities = [
  {
    title: 'Agentic AI Architecture & MCP Systems',
    description: 'Designing and deploying production multi-agent orchestration systems, MCP-based SDLC accelerators, RAG pipelines, and enterprise AI governance frameworks with Gemini, OpenAI GPT, and GitHub Copilot.',
    tags: ['Agentic AI', 'MCP (FastMCP)', 'RAG', 'Responsible AI']
  },
  {
    title: 'Multi-Cloud Engineering (GCP, Azure, AWS)',
    description: 'Leading enterprise cloud migrations and cloud-native platform modernization across GCP, Microsoft Azure, and AWS. Expertise in AKS, GKE, Terraform, CI/CD, and DevSecOps at scale.',
    tags: ['Google Cloud', 'Microsoft Azure', 'AWS', 'Terraform']
  },
  {
    title: 'Data Modernization & Analytics Platforms',
    description: 'Directing data platform modernization with BigQuery, Azure Synapse, ADF, Delta Lake, and Power BI. Delivering intelligent automation, RPA, and data reconciliation pipelines for financial services.',
    tags: ['BigQuery', 'Azure Synapse', 'Delta Lake', 'Power BI']
  },
  {
    title: 'Cloud-Native & Distributed Microservices',
    description: 'Modernizing legacy monoliths into highly scalable, containerized architectures leveraging GKE, AKS, Cloud Run, Microsoft Power Platform, and event-driven microservice meshes.',
    tags: ['GKE / AKS', 'Cloud Run', 'Microservices', 'Power Platform']
  },
  {
    title: 'Engineering Org Scaling & AI Team Leadership',
    description: 'Leading 45+ AI engineers, tech leads, and managers across cross-functional squads. Managing $25M+ annual budgets, SAFe 6.0 ART delivery, vendor partnerships, and high-ownership engineering cultures.',
    tags: ['Org Scaling', 'SAFe 6.0 / ART', '$25M Budget', 'Mentorship']
  },
  {
    title: 'AI Governance, FinOps & Delivery Excellence',
    description: 'Establishing responsible AI governance benchmarks, evaluation frameworks, and reusable agentic design patterns. Delivering 30%+ cloud cost reductions through disciplined FinOps and DevSecOps practices.',
    tags: ['Responsible AI', 'FinOps', 'DevSecOps', 'Governance']
  }
];

const techStack = {
  'AI & Agentic Systems': [
    'Agentic AI Architecture & Multi-Agent Orchestration',
    'Model Context Protocol (MCP / FastMCP)',
    'Retrieval-Augmented Generation (RAG)',
    'Gemini Enterprise & Vertex AI',
    'OpenAI GPT & GitHub Copilot',
    'Responsible AI & Governance Frameworks',
    'Microsoft Power Platform Agents'
  ],
  'Cloud, DevOps & Data': [
    'Google Cloud Platform (GCP)',
    'Microsoft Azure (AKS, Synapse, ADF)',
    'Amazon Web Services (AWS)',
    'Terraform / IaC & CI/CD Pipelines',
    'Docker, Kubernetes (GKE / AKS)',
    'BigQuery, Delta Lake & Azure Synapse',
    'DevSecOps & Cloud FinOps'
  ],
  'Leadership & Delivery': [
    'Engineering Management (45+ Engineers)',
    'SAFe 6.0 & ART Delivery',
    'Enterprise Architecture & Governance',
    '$25M+ Budget & Vendor Management',
    'Agile Coaching & Scrum Mastery',
    'Cloud Migration & Legacy Modernization',
    'Stakeholder & C-Suite Alignment'
  ]
};

const highlights = [
  { value: '20+', label: 'Years Tech Leadership' },
  { value: '45+', label: 'Engineers Led' },
  { value: '$25M+', label: 'Annual Budget Managed' },
  { value: '80%', label: 'Code Review Cycle Reduction' },
  { value: '60%', label: 'RFP Turnaround Reduction' }
];

const timeline = [
  {
    year: 'Dec 2024 – Present',
    role: 'Manager, AI Software Engineering — The Hartford',
    focus: 'Agentic AI, MCP Accelerators & Multi-Agent Systems (Hartford, CT)',
    description: 'Leading 45 developers and AI engineers in end-to-end architecture and production delivery of enterprise generative and agentic AI solutions. Architected MCP-based SDLC accelerators (Code Assist, Code Review, API Bridge) boosting productivity by 25% and cutting code review cycles by 80%. Built enterprise multi-agent RFP orchestration on GCP and automated intake workflows via Microsoft Power Platform, reducing turnaround by 60%.'
  },
  {
    year: 'Jan 2019 – Dec 2024',
    role: 'Senior Manager, Technology — Wolters Kluwer',
    focus: 'Program Leadership, Azure Migration & Intelligent Automation (Glastonbury, CT)',
    description: 'Directed solution architecture and program execution across 5 engineering scrum teams, managing a $25M annual budget, vendor partnerships, and SAFe 6.0 Agile Release Train (ART) PI planning. Spearheaded enterprise cloud migration from Rackspace to Microsoft Azure, cutting infrastructure costs by 30%. Delivered RPA and intelligent automation POCs across invoice reconciliation and data processing, eliminating 30 manual hours annually.'
  },
  {
    year: 'Apr 2014 – Dec 2018',
    role: 'Technical Manager & Scrum Master — Selective Insurance',
    focus: 'Underwriting Platform Delivery & Agile Transformation (Glastonbury, CT)',
    description: 'Led software development, technical architecture, and release management for Personal Lines underwriting systems (Auto & Home), improving sprint predictability by 15%. Facilitated Agile ceremonies and backlog prioritization while leading the Agile Community of Practice (CoP) and coaching multiple Scrum teams on delivery maturity.'
  },
  {
    year: 'Apr 2004 – Apr 2014',
    role: 'Technical Manager — Cognizant',
    focus: 'Enterprise Consulting & Architecture (Hartford, CT & Client Sites)',
    description: 'Led .NET technical architecture, PEGA (DCO) workflow automation, and Oracle 9i-to-11g database upgrades for Commercial Lines underwriting and specialty policy issuance systems. Delivered enterprise solutions for Travelers, The Hartford, Ameriprise Financial, and Intuit.'
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('AI & Agentic Systems');
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
          <img className="brand-icon" src={`${import.meta.env.BASE_URL}karthik_pic.png`} alt="Karthikeyan Amirthalingam" />
          <div>
            <span className="brand-name">Karthikeyan Amirthalingam</span>
            <span className="brand-role">Engineering Leader | AI Software Engineering</span>
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
            Enterprise AI, Cloud & Insurance Technology
          </div>
          <h1>Engineering leadership for agentic AI & cloud scale.</h1>
          <p className="hero-text">
            20+ years of technology leadership across insurance and financial services, specializing in <strong>production Agentic AI</strong>,
            <strong> Model Context Protocol (MCP)</strong> systems, and multi-cloud modernization on <strong>GCP, Azure & AWS</strong>. Currently leading 45+ AI engineers at The Hartford to architect and deliver enterprise AI platforms at scale.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary hero-request" href="mailto:amir.karthick@gmail.com">
              Connect by Email
            </a>
            <a className="btn btn-secondary" href="https://www.linkedin.com/in/karthikeyan-amirthalingam-karthik-ssm®-csm®-mcad-b38ba264/" target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
            <a className="btn btn-border" href={`${import.meta.env.BASE_URL}Karthikeyan_Amirthalingam_Resume.pdf`} target="_blank" rel="noreferrer" download>
              📄 Download Resume
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
            <img className="profile-image" src={`${import.meta.env.BASE_URL}karthik_pic.png`} alt="Karthikeyan Amirthalingam" />
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
              Engineering leader with 20+ years of experience delivering enterprise software, cloud migrations, and AI-driven platforms across insurance and financial services.
            </p>
            <p>
              Proven track record leading cross-functional engineering teams to architect and deploy production agentic AI solutions, Model Context Protocol (MCP) developer accelerators, and multi-agent workflows across GCP, Azure, and Microsoft Power Platform. Adept at embedding generative AI across the SDLC, establishing responsible AI governance, and aligning scalable architectures with measurable business outcomes.
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
              I am open to Engineering Leader, VP of Engineering, and Director of AI/Cloud roles where agentic AI strategy,
              enterprise modernization, and high-impact engineering leadership converge across GCP, Azure, and multi-cloud environments.
            </p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:amir.karthick@gmail.com">Connect by email</a>
            <a className="btn btn-secondary" href="https://www.linkedin.com/in/karthikeyan-amirthalingam-karthik-ssm®-csm®-mcad-b38ba264/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-border" href={`${import.meta.env.BASE_URL}Karthikeyan_Amirthalingam_Resume.pdf`} target="_blank" rel="noreferrer" download>
              📄 Download Resume
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
            <span className="footer-sub">Engineering Leader | AI Software Engineering | Cloud, Data & Enterprise AI</span>
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
