'use client'

import { FormEvent, useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Mail, Menu, MoveRight, X } from 'lucide-react'

const projects = {
  pt: [
    { number: '01', title: 'Revisão Responsividade', type: 'Página com responsividade', year: '2026', description: 'Projeto simples que tem como finalidade praticar responsividade de grid layout', tone: 'project-sand', href: 'https://trabalhos-front-end.vercel.app/exercicio-15-09-26/', image: '/projects/responsividade.png' },
    { number: '02', title: 'GrãoNobre', type: 'Prática de Bootstrap', year: '2026', description: 'Projeto que utiliza componentes do Framework Bootstrap', tone: 'project-charcoal', href: 'https://trabalhos-front-end.vercel.app/exercicio-22-09-26/' ,image:'/projects/bootstrap.png' },
    { number: '03', title: 'Fio&Prensa', type: 'Prática de Tailwind', year: '2026', description: 'Projeto que utiliza estilizacao em classes do Framework Tailwind', tone: 'project-stone', href: 'https://trabalhos-front-end.vercel.app/exercicio-29-09-26/',image:'/projects/tailwind.png' },
  ],
  en: [
    { number: '01', title: 'Responsiveness', type: 'Responsiveness page', year: '2026', description: 'Simples project with the objective of practicing responsiveness with grid layout', tone: 'project-sand', href: 'https://trabalhos-front-end.vercel.app/exercicio-15-09-26/',image: '/projects/responsividade.png' },
    { number: '02', title: 'GrãoNobre', type: 'Bootstrap practice', year: '2026', description: 'Project that uses components from Bootstrap', tone: 'project-charcoal', href: 'https://trabalhos-front-end.vercel.app/exercicio-22-09-26/' ,image: '/projects/bootstrap.png'},
    { number: '03', title: 'Fio&Prensa', type: 'Tailwind practice', year: '2026', description: 'Project that uses styling with classes from Tailwind Framework', tone: 'project-stone', href: 'https://trabalhos-front-end.vercel.app/exercicio-29-09-26/',image: '/projects/tailwind.png' },
  ],
} as const

const copy = {
  pt: { projects: 'Projetos', selected: 'Trabalhos selecionados', about: 'Sobre mim', aboutEyebrow: 'Um pouco sobre mim', aboutTitle: <>Construo com<br /><em>intenção.</em></>, aboutText: 'Me chamo Matheus Tamataya, estudante de Engenharia de Software e desenvolvedor web apaixonado por transformar ideias em experiências digitais precisas, úteis e bonitas. Trabalho entre a lógica do código e a sensibilidade do design.', download: 'Baixar CV', contact: 'Contato', contactEyebrow: 'Se interessou?', contactTitle: <>Vamos<br /><em>conversar.</em></>, start: 'Comece uma conversa', formTitle: 'Conte sobre o projeto.', name: 'Seu nome', email: 'Seu e-mail', message: 'Mensagem', namePlaceholder: 'Como posso te chamar?', emailPlaceholder: 'seu@email.com', messagePlaceholder: 'Conte um pouco sobre o projeto...', send: 'Enviar mensagem', sent: 'Mensagem enviada', thanks: 'Obrigado. Retorno em breve.', view: 'Ver projeto', scroll: 'Role para explorar', previous: 'Projeto anterior', next: 'Próximo projeto' },
  en: { projects: 'Projects', selected: 'Selected works', about: 'About', aboutEyebrow: 'A little about me', aboutTitle: <>I build with<br /><em>intention.</em></>, aboutText: 'I’m Matheus Tamataya, a Software Engineering student, and a web developer passionate about turning ideas into precise, useful and beautiful digital experiences. I work between the logic of code and the sensitivity of design.', download: 'Download CV', contact: 'Contact', contactEyebrow: 'Got interested?', contactTitle: <>Let’s<br /><em>talk.</em></>, start: 'Start a conversation', formTitle: 'Tell me about the project.', name: 'Your name', email: 'Your email', message: 'Message', namePlaceholder: 'What should I call you?', emailPlaceholder: 'you@email.com', messagePlaceholder: 'Tell me a little about the project...', send: 'Send message', sent: 'Message sent', thanks: 'Thank you. I’ll be in touch soon.', view: 'View project', scroll: 'Scroll to explore', previous: 'Previous project', next: 'Next project' },
} as const

export default function Page() {
  const [locale, setLocale] = useState<'pt' | 'en' | null>(null)
  const [activeProject, setActiveProject] = useState(0)
  const text = locale ? copy[locale] : copy.pt
  const localizedProjects = locale ? projects[locale] : projects.pt
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [typedName, setTypedName] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (locale === null) return

    const fullName = 'Tamataya'
    setTypedName('')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedName(fullName)
      return
    }

    let index = 0
    const typingTimer = window.setInterval(() => {
      index += 1
      setTypedName(fullName.slice(0, index))
      if (index === fullName.length) {
        window.clearInterval(typingTimer)
      }
    }, 105)

    return () => window.clearInterval(typingTimer)
  }, [locale])


  async function submitContact(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const form = event.currentTarget
  setSending(true)
  setError(false)
  try {
    const res = await fetch('https://formspree.io/f/xljgakao', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    })
    if (!res.ok) throw new Error()
    setSent(true)
    form.reset()
  } catch {
    setError(true)
  } finally {
    setSending(false)
  }
}

  return (
    <>
      {locale === null && <div className="language-overlay" role="dialog" aria-modal="true" aria-labelledby="language-title"><div className="language-dialog"><p className="eyebrow">Welcome / Bem-vindo</p><h2 id="language-title">Escolha seu idioma<br /><em>Choose your language.</em></h2><div className="language-options"><button onClick={() => setLocale('pt')}>Português <span>PT</span></button><button onClick={() => setLocale('en')}>English <span>EN</span></button></div></div></div>}
      <main className="site-shell" aria-hidden={locale === null}>
      <header className="site-header">
        <div
          className="header-blur"
          aria-hidden="true"
          style={{ backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
        />    
        <a className="wordmark" href="#top" aria-label="Voltar ao início">MYT<span>®</span></a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal">
          <a href="#projects" onClick={() => setMenuOpen(false)}>{text.projects}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{text.about}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{text.contact}</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <div className="floating-socials" aria-label="Redes sociais"><a href="https://www.instagram.com/tamatayya" target="_blank" rel="noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg></a><a href="https://www.linkedin.com/in/matheus-tamataya/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9v9M6 6.2v.1M10 18v-5a3 3 0 0 1 6 0v5M10 9v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></a></div>

      <section className="hero architectural-grid" id="top">
        <div className="hero-meta"><span>Web developer</span><span>Brazil · 2026</span></div>
        <div className="hero-title-wrap">
          <p className="eyebrow hero-eyebrow">A digital portfolio by</p>
          <h1 aria-label="Tamataya"><span className="typing-name">{typedName.split('').map((letter, index) => <span className="typing-letter" key={`${letter}-${index}`} style={{ animationDelay: `${index * 55}ms` }}>{letter}</span>)}</span></h1>
          <p className="hero-subtitle">Matheus Yukio Tamataya</p>
        </div>
        <div className="hero-footer"><span>{text.scroll}</span><ArrowDownRight aria-hidden="true" /></div>
      </section>

      <section className="projects-section section-frame" id="projects">
        <div className="section-heading">
          <div><h2>{text.projects}<span className="heading-dot">.</span></h2></div>
          <p className="section-index">0{activeProject + 1} <span>/</span> 0{localizedProjects.length}</p>
        </div>
        <div className="project-carousel" aria-live="polite">
          <a key={localizedProjects[activeProject].number} className={`project-card ${localizedProjects[activeProject].tone}`} href={localizedProjects[activeProject].href} target="_blank" rel="noreferrer">
            <div className="project-image-slot">
              <img
                src={localizedProjects[activeProject].image}
                alt={`Preview do projeto ${localizedProjects[activeProject].title}`}
              />
            </div>
            <div className="project-card-top"><span>{localizedProjects[activeProject].number} — {localizedProjects[activeProject].type}</span><ArrowUpRight aria-hidden="true" /></div>
            <div className="project-card-bottom"><h3>{localizedProjects[activeProject].title}</h3><p>{localizedProjects[activeProject].description}</p><span className="view-project">{text.view} <MoveRight aria-hidden="true" /></span></div>
          </a>
        </div>
        <div className="carousel-controls"><div className="progress-track"><span style={{ width: `${((activeProject + 1) / localizedProjects.length) * 100}%` }} /></div><div className="control-buttons"><button onClick={() => setActiveProject((activeProject - 1 + localizedProjects.length) % localizedProjects.length)} aria-label={text.previous}>←</button><button onClick={() => setActiveProject((activeProject + 1) % localizedProjects.length)} aria-label={text.next}>→</button></div></div>
        <div className="project-list">{localizedProjects.map((project, index) => <button key={project.number} className={index === activeProject ? 'project-list-item active' : 'project-list-item'} onClick={() => setActiveProject(index)}><span>{project.number}</span><span>{project.title}</span><span>{project.type}</span><ArrowUpRight aria-hidden="true" /></button>)}</div>
      </section>

      <section className="about-section section-frame" id="about">
        <div className="about-copy"><p className="eyebrow">{text.aboutEyebrow}</p><h2>{text.aboutTitle}</h2><p className="about-text">{text.aboutText}</p><a className="cv-link" href="/CurriculoMatheusTamataya.pdf" download>{text.download} <ArrowDownRight aria-hidden="true" /></a></div>
        <div className="about-photo" role="img" aria-label="Foto de Matheus Yukio Tamataya"><img src="/MatheusTamataya.png" alt="Foto de Matheus Yukio Tamataya" /></div>  
      </section>

      <section className="contact-section section-frame" id="contact">
        <div className="contact-copy"><p className="eyebrow">{text.contactEyebrow}</p><h2>{text.contactTitle}</h2><div className="contact-details"><a href="mailto:matheustamatayya@gmail.com"><Mail aria-hidden="true" /> matheustamatayya@gmail.com</a><a href="https://github.com/tamatayya" target="_blank" rel="noreferrer"><span aria-hidden="true">◉</span> github.com/tamatayya</a></div></div>
        <form className="contact-form" onSubmit={submitContact}><div className="form-top"><p className="eyebrow">{text.start}</p><h3>{text.formTitle}</h3></div><label>{text.name}<input required name="name" placeholder={text.namePlaceholder} /></label><label>{text.email}<input required type="email" name="email" placeholder={text.emailPlaceholder} /></label><label>{text.message}<textarea required name="message" rows={4} placeholder={text.messagePlaceholder} /></label><button type="submit" disabled={sending}>{sending ? '...' : sent ? text.sent : text.send} <ArrowUpRight aria-hidden="true" /></button>{sent && <p className="form-success" role="status">{text.thanks}</p>}{error && <p className="form-success" role="alert">{locale === 'en' ? 'Could not send. Please email me directly.' : 'Não foi possível enviar. Me escreva por e-mail.'}</p>}</form>
      </section>

      <footer className="site-footer"><span>MYT® — Matheus Yukio Tamataya</span><span>Built with care / 2026</span><div className="social-links"><a href="https://github.com/tamatayya" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/matheus-tamataya/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
    </main>
    </>
  )
}
