import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Check, ChevronRight,
  Code2, Database, Download, ExternalLink, Layers3,
  Mail, Menu, Server, Sparkles, X, Zap
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Sunny Bholanath Yadav',
  shortName: 'Sunny Yadav',
  title: 'SAP Commerce Cloud (Hybris) & Java Developer',
  subtitle: 'Enterprise Systems Engineer',
  location: 'Mumbai, India',
  email: 'sunny.yadav001018@gmail.com',
  phone: '+91-9004696970',
  linkedin: 'https://www.linkedin.com/in/sunny-yadav-753331204',
  resume: '/Sunny-Bholanath-Yadav-Resume.pdf'
};

const experience = [
  {
    period: '07/2026 — Present',
    role: 'Senior Executive — Systems',
    company: 'Asian Paints Ltd',
    focus: 'SAP Hybris & Java Developer',
    current: true,
    points: [
      'Lead development and maintenance for the public-facing Vendor Engagement & Procurement Portal using SAP Hybris, Java, Spring Framework and JSP.',
      'Engineered vendor self-service modules for digital invoices, payment lifecycle tracking, dispute claims, PO acknowledgement and automated loyalty tokens.',
      'Architected bidirectional integrations connecting the Hybris storefront to core SAP ERP through custom RFCs, BAPIs and REST APIs.',
      'Managed feature delivery, sprint backlogs, hotfixes and release pipelines using Git and Jira.'
    ]
  },
  {
    period: '07/2023 — 06/2026',
    role: 'Executive — Systems / Senior Executive',
    company: 'Asian Paints Ltd',
    focus: 'Full Stack Systems Developer',
    points: [
      'Spearheaded end-to-end SDLC for the dealer Credit Note (CN) Scheme Settlement engine deployed nationwide across business units.',
      'Re-engineered CN Product Split Allocation procedures from HANA to Python, eliminating 3+ days of monthly manual effort and accelerating execution by ~5× while reducing database overhead.',
      'Developed custom RFCs automating Input Utilisation Reporting (IUR), moving report turnaround from 15–20 days to scheduled automated background runs.',
      'Collaborated with IBM to upgrade IBM ODM from v8.9 to v8.12, establishing in-house development capability for dealer incentive settlements.',
      'Optimized enterprise systems by developing ABAP module pools, calculation views and interfaces across Sales, Distribution, Commercial and Accounts, reducing recurring support overhead by 30%.'
    ]
  },
  {
    period: '01/2023 — 06/2023',
    role: 'Systems Intern',
    company: 'Asian Paints Ltd',
    focus: 'Software Engineering',
    points: [
      'Assisted in building and validating SAP system integrations, data queries and operational reports for supply chain and procurement systems.'
    ]
  }
];

const projects = [
  {
    id: 'spring-ai',
    number: '01',
    type: 'PERSONAL PROJECT',
    title: 'Spring AI Chatbot',
    description: 'A backend conversational service designed around Spring AI and open-source LLMs to deliver context-aware query resolution.',
    stack: ['Java', 'Spring Boot', 'Spring AI', 'REST API', 'LLM'],
    accent: 'ai',
    details: 'The project explores how a Java/Spring backend can expose an AI-powered conversational layer while keeping application architecture, API design and service boundaries explicit.'
  },
  {
    id: 'job-portal',
    number: '02',
    type: 'PERSONAL PROJECT',
    title: 'Job Portal Application',
    description: 'A full-cycle recruitment web platform for posting listings and processing applications through RESTful services.',
    stack: ['Java', 'Spring Framework', 'Hibernate', 'REST API', 'SQL'],
    accent: 'backend',
    details: 'The application focuses on practical backend fundamentals: domain modelling, persistence with Hibernate, REST endpoint design and the complete job-posting/application workflow.'
  },
  {
    id: 'cn-engine',
    number: '03',
    type: 'ENTERPRISE DELIVERY',
    title: 'Dealer CN Settlement Engine',
    description: 'Nationwide Credit Note Scheme Settlement workflow delivered across business units at Asian Paints.',
    stack: ['SAP', 'IBM ODM', 'Java', 'RFC', 'Enterprise Integration'],
    accent: 'enterprise',
    details: 'A business-critical settlement workflow spanning enterprise rules, SAP integration and application delivery. The resume describes this as an end-to-end SDLC responsibility.'
  },
  {
    id: 'iur',
    number: '04',
    type: 'ENTERPRISE AUTOMATION',
    title: 'IUR Reporting Automation',
    description: 'Automated Input Utilisation Reporting through custom RFCs and scheduled background execution.',
    stack: ['SAP RFC', 'Automation', 'ABAP', 'Reporting'],
    accent: 'automation',
    details: 'The automation replaced a 15–20 day report turnaround with scheduled background runs, reducing manual dependency in the reporting workflow.'
  }
];

const skillGroups = [
  { icon: Code2, label: 'Backend & Frameworks', items: ['Java', 'Spring Boot', 'Spring Framework', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'Microservices', 'RESTful APIs', 'Python', 'C/C++', 'Node JS'] },
  { icon: Layers3, label: 'SAP & Commerce', items: ['SAP Commerce Cloud (Hybris)', 'Hybris Core/Storefront', 'SAP ERP', 'SAP ABAP', 'RFCs', 'BAPIs', 'SAP HANA Studio', 'SAP SD', 'SAP PO', 'RPA Automation'] },
  { icon: Database, label: 'Databases & Rules', items: ['IBM ODM 8.9 / 8.12', 'IBM DB2', 'SAP HANA', 'Oracle SQL', 'Postgres'] },
  { icon: Server, label: 'Frontend & Tools', items: ['JSP', 'Servlets', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Git', 'GitHub', 'Jira', 'Docker', 'Maven'] }
];

const metrics = [
  ['~4 yrs', 'enterprise experience'],
  ['~5×', 'faster CN allocation execution'],
  ['15–20 days', 'report turnaround replaced'],
  ['30%', 'support overhead reduction']
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeProject]);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <button className="brand" onClick={() => go('home')} aria-label="Go to home">
          <span className="brand-mark">SY</span>
          <span>{profile.shortName}</span>
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['about', 'experience', 'projects', 'skills', 'contact'].map((id, i) => (
            <button key={id} onClick={() => go(id)}><span>0{i + 1}</span>{id}</button>
          ))}
        </nav>
        <a className="nav-cta" href={profile.resume} download>Resume <Download size={15} /></a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse" /> AVAILABLE FOR ENGINEERING CONVERSATIONS</div>
              <h1>Building enterprise systems that <em>move</em> work forward.</h1>
              <p className="hero-lead">I'm Sunny — a {profile.title.toLowerCase()} with a strong enterprise systems background at Asian Paints. I work across Java, Spring, SAP Commerce Cloud, integrations and automation.</p>
              <div className="hero-actions">
                <button className="button primary" onClick={() => go('projects')}>Explore projects <ArrowDownRight size={17} /></button>
                <a className="button secondary" href={profile.resume} download>Download resume <Download size={17} /></a>
              </div>
              <div className="hero-meta">
                <span>{profile.location}</span><span className="dot" /><span>Java · Spring · SAP Commerce</span>
              </div>
            </div>
            <div className="hero-terminal">
              <div className="terminal-top"><span /><span /><span /><label>sunny@systems:~</label></div>
              <div className="terminal-body">
                <p><b>$</b> whoami</p>
                <h3>Enterprise Systems Engineer</h3>
                <p className="muted">specializing in</p>
                <div className="terminal-tags"><span>Java</span><span>Spring</span><span>Hybris</span><span>SAP</span></div>
                <p><b>$</b> cat impact.txt</p>
                <p className="accent-text">3+ days manual work → automated</p>
                <p className="accent-text">15–20 days reporting → scheduled runs</p>
                <p className="accent-text">support overhead → -30%</p>
                <div className="cursor">_</div>
              </div>
            </div>
          </div>
          <div className="metric-strip">
            {metrics.map(([value, label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section id="about" className="section-pad section-light">
          <div className="section-heading"><span>01 / ABOUT</span><h2>From enterprise systems<br />to modern backend engineering.</h2></div>
          <div className="about-grid">
            <div className="about-story">
              <p className="big-copy">My career started in enterprise systems at Asian Paints, where I moved from an internship into full-time systems development and then into a senior executive role.</p>
              <p>That journey has put me close to the complete lifecycle: business workflows, SAP integrations, backend services, automation, production support and feature delivery. Alongside that enterprise foundation, I'm deliberately building deeper Java and Spring expertise through backend projects.</p>
              <p>The common thread is simple: understand the workflow, design the system behind it, automate the repetitive parts, and make the result measurable.</p>
            </div>
            <div className="about-facts">
              <div><span>01</span><b>Enterprise first</b><p>Experience with SAP Commerce, SAP ERP, RFC/BAPI integrations and IBM ODM.</p></div>
              <div><span>02</span><b>Backend focused</b><p>Java, Spring, REST APIs, persistence and service-oriented application design.</p></div>
              <div><span>03</span><b>Impact driven</b><p>Automation work tied to execution speed, turnaround time and support overhead.</p></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad section-dark">
          <div className="section-heading light"><span>02 / EXPERIENCE</span><h2>Enterprise experience,<br /><em>measurable impact.</em></h2></div>
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={job.period}>
                <div className="timeline-date">{job.period}</div>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-card">
                  <div className="role-line"><BriefcaseBusiness size={18} /><span>{job.company}</span>{job.current && <b>CURRENT</b>}</div>
                  <h3>{job.role}</h3><p className="role-focus">{job.focus}</p>
                  <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-pad section-light">
          <div className="section-heading"><span>03 / PROJECTS</span><h2>Systems I've built,<br /><em>problems I've explored.</em></h2></div>
          <div className="projects-grid">
            {projects.map((project) => (
              <button className={`project-card ${project.accent}`} key={project.id} onClick={() => setActiveProject(project)}>
                <div className="project-top"><span>{project.number}</span><span>{project.type}</span><ArrowUpRight size={20} /></div>
                <div className="project-visual"><div className="visual-icon">{project.accent === 'ai' ? <Sparkles /> : project.accent === 'automation' ? <Zap /> : project.accent === 'enterprise' ? <Layers3 /> : <Code2 />}</div><div className="visual-lines"><i /><i /><i /></div></div>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="stack">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
                <div className="project-link">View case study <ChevronRight size={16} /></div>
              </button>
            ))}
          </div>
          <p className="project-note"><span>*</span> Enterprise project descriptions are intentionally high-level and avoid confidential implementation details.</p>
        </section>

        <section id="skills" className="section-pad skills-section">
          <div className="section-heading"><span>04 / TOOLBOX</span><h2>The stack behind<br /><em>the work.</em></h2></div>
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, label, items }) => (
              <div className="skill-group" key={label}><Icon size={23} /><h3>{label}</h3><div className="skill-list">{items.map(item => <span key={item}>{item}</span>)}</div></div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="contact-inner">
            <span className="eyebrow">05 / CONTACT</span>
            <h2>Let's build something<br /><em>useful.</em></h2>
            <p>For engineering conversations, backend opportunities or a walkthrough of a project, reach out directly.</p>
            <a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={22} /></a>
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="social-icon">in</span> LinkedIn</a>
              <a href={`tel:${profile.phone}`}><Mail size={18} /> {profile.phone}</a>
              <a href={profile.resume} download><Download size={18} /> Resume PDF</a>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Sunny Bholanath Yadav</span><span>Java · Spring · SAP Commerce · Enterprise Systems</span></footer>

      {activeProject && <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setActiveProject(null)}><X /></button>
          <span className="eyebrow">{activeProject.type}</span>
          <h2>{activeProject.title}</h2>
          <p className="modal-description">{activeProject.details}</p>
          <div className="modal-stack">{activeProject.stack.map(s => <span key={s}><Check size={13} /> {s}</span>)}</div>
          <div className="modal-footer"><span>Portfolio case study</span><span>{activeProject.number} / 04</span></div>
        </div>
      </div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
