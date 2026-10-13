import { useState, type FormEvent } from 'react'

const services = [
  { number: '01', title: 'Website development', copy: 'Fast, thoughtful websites that make it easy for the right people to understand what you do and get in touch.', tags: 'Landing pages · Business websites · Online stores' },
  { number: '02', title: 'Graphic design', copy: 'A consistent visual identity and useful design assets, made to look considered everywhere your business shows up.', tags: 'Brand identity · Social templates · Print' },
  { number: '03', title: 'Content creation', copy: 'Clear, on-brand words and visuals that give your website and social channels something worth sharing.', tags: 'Web copy · Social content · Campaigns' },
  { number: '04', title: 'AI automation', copy: 'Practical automations that take repetitive admin off your plate, with a human in control of the important decisions.', tags: 'Workflow review · No-code setup · AI assistants' },
  { number: '05', title: 'Wedding digital cards', copy: 'A personal invitation page that brings your event details, venue map and RSVP link together in one easy-to-share place.', tags: 'Digital invitation · Event details · RSVP link' },
  { number: '06', title: 'Wedding photography + videography', copy: 'Photo and video coverage shaped around your day, with deliverables and availability agreed before booking.', tags: 'Photography · Videography · Coverage by quote' },
]

const packages = [
  { name: 'Website essentials', price: 'RM 2,800', note: 'A polished starting point for a small business.', items: ['Up to 5 pages', 'Mobile-friendly design', 'Contact form setup', 'Basic search setup'], featured: true },
  { name: 'Brand foundations', price: 'RM 950', note: 'A visual system you can use with confidence.', items: ['Logo suite and colour palette', 'Type and usage guide', '3 social media templates'], featured: false },
  { name: 'Workflow starter', price: 'RM 1,200', note: 'One focused workflow, thoughtfully automated.', items: ['Workflow discovery session', 'One automation setup', 'Walkthrough and handover'], featured: false },
  { name: 'Wedding digital card', price: 'RM 450', note: 'A lovely, easy-to-share home for your wedding details.', items: ['Custom mobile-friendly invitation page', 'Venue map and event details', 'RSVP link to your chosen contact'], featured: false },
  { name: 'Wedding photo + video', price: 'Custom quote', note: 'Photo and video coverage planned around your celebration.', items: ['Coverage plan based on your event', 'Deliverables agreed before booking', 'Availability confirmed at enquiry'], featured: false },
]

const faqs = [
  { q: 'How long does a project take?', a: 'A focused website usually takes 3–5 weeks once we have the content and direction agreed. Design and automation projects vary with scope. You’ll get a clear timeline before work begins.' },
  { q: 'How does pricing work?', a: 'The packages above are introductory starting points in Malaysian ringgit. Final pricing depends on scope, content and any integrations. We’ll confirm a written quote before you commit.' },
  { q: 'Is hosting included?', a: 'Hosting is not included in these packages. We can recommend a suitable provider and help with setup; ongoing hosting charges are paid directly to that provider.' },
  { q: 'Who owns the finished work?', a: 'Once the agreed project is paid in full, you own the final custom assets and website content we create for you. Third-party tools and stock assets remain subject to their own licences.' },
  { q: 'Does the wedding digital card include RSVP tracking?', a: 'The introductory package includes an RSVP link to a contact you choose, such as WhatsApp or email. It does not include a built-in guest list or RSVP tracking system.' },
  { q: 'How do wedding photo and video bookings work?', a: 'Share your date, venue and the moments you want covered. Availability, coverage hours, deliverables and the final quote are confirmed before you book.' },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['Services', '#services'], ['Weddings', '#weddings'], ['Work', '#work'], ['Packages', '#packages'], ['About', '#about']]
  return <header className="site-header"><a className="wordmark" href="#top" aria-label="Space Solutions home"><span className="brand-mark">S</span><span>space<span className="wordmark-light">solutions</span></span></a>
    <button className="menu-toggle" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
    <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow diagonal /></a></nav>
  </header>
}

function ProjectVisual({ kind }: { kind: 'cafe' | 'wellness' | 'goods' }) {
  if (kind === 'cafe') return <div className="project-art cafe-art"><div className="browser-bar"><i /><i /><i /><span>LOCAL CAFE · WEBSITE</span></div><div className="cafe-layout"><div className="cafe-copy"><span>GOOD DAYS START HERE</span><b>A little<br />more local.</b><small>Good coffee. Good company.</small><em>EXPLORE THE MENU ↗</em></div><div className="coffee-cup"><span>LOCAL<br />COFFEE</span></div></div><div className="cafe-stamp">BREWED<br />WITH CARE</div></div>
  if (kind === 'wellness') return <div className="project-art wellness-art"><div className="wellness-top"><span>WELLNESS PRACTICE</span><span>MENU&nbsp;&nbsp; ☰</span></div><div className="wellness-shape shape-one"/><div className="wellness-shape shape-two"/><div className="wellness-copy"><small>COME BACK TO YOU</small><b>Room to<br /><i>feel good.</i></b><span>A slower kind of self-care.</span><button>FIND YOUR RITUAL&nbsp; ↗</button></div><div className="wellness-flower">✳</div></div>
  return <div className="project-art goods-art"><div className="goods-nav"><span>PRODUCT STUDIO</span><span>OBJECTS FOR EVERY DAY&nbsp;&nbsp; · &nbsp;&nbsp; BAG (0)</span></div><div className="goods-copy"><small>THE EVERYDAY COLLECTION</small><b>Made for<br />the in-between.</b><span>Thoughtful things. Made to last.</span><button>SHOP THE COLLECTION&nbsp; ↗</button></div><div className="goods-object object-a"/><div className="goods-object object-b"/><div className="goods-sun"/></div>
}

function Portfolio() {
  const projects = [
    { label: 'WEBSITE · HOSPITALITY', name: 'Hospitality website', desc: 'A clear digital home for menus, location and booking enquiries.', kind: 'cafe' as const },
    { label: 'BRAND + WEBSITE · WELLNESS', name: 'Wellness practice', desc: 'A calm visual direction for a service-led wellbeing business.', kind: 'wellness' as const },
    { label: 'ECOMMERCE · LIFESTYLE', name: 'Product storefront', desc: 'An editorial storefront direction for thoughtfully made goods.', kind: 'goods' as const },
  ]
  return <section className="section work-section" id="work"><div className="section-heading"><div><span className="eyebrow">HOW WE APPROACH EACH BRIEF</span><h2>Good ideas,<br /><span>made tangible.</span></h2></div><p>Illustrative design directions for different business needs. Each example shows the kind of thinking behind the work, without presenting fictional brands as clients.</p></div><div className="project-grid">{projects.map((p, i) => <article className="project-card" key={p.name}><a href="#contact" className="project-link" aria-label={`Discuss a project like ${p.name}`}><ProjectVisual kind={p.kind} /><div className="project-meta"><div><span className="eyebrow">{p.label} <span className="concept-label">· SAMPLE DIRECTION</span></span><h3>{p.name}</h3><p>{p.desc}</p></div><span className="project-arrow"><Arrow diagonal /></span></div></a><span className="project-index">0{i + 1}</span></article>)}</div><p className="concept-note">Illustrative design studies only. No client work or business results are claimed.</p></section>
}

function ContactForm() {
  const [draftReady, setDraftReady] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) { form.reportValidity(); return }

    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()
    const subject = encodeURIComponent(`Project enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject details:\n${message}`)

    setError('')
    setDraftReady(true)
    window.location.href = `mailto:muhddanish704@gmail.com?subject=${subject}&body=${body}`
  }

  return <>
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="How should we address you?" required minLength={2} /></label><label>Email address<input type="email" name="email" autoComplete="email" placeholder="you@company.com" required /></label></div>
      <label>What are you looking for?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Website development</option><option>Graphic design</option><option>Content creation</option><option>AI automation</option><option>Wedding digital card</option><option>Wedding photography + videography</option><option>A mix of things</option></select></label>
      <label>A little about your project<textarea name="message" placeholder="What are you building, and what would you like help with?" rows={4} required minLength={10} /></label>
      <button type="submit" className="button button-light">Send your enquiry <Arrow diagonal /></button>
      <p className="form-note" aria-live="polite">{error || 'This prepares an email draft. Press Send in your email app to deliver your enquiry; this website does not store it.'}</p>
    </form>
    {draftReady && <div className="success-backdrop" role="presentation">
      <section className="success-dialog" role="dialog" aria-modal="true" aria-labelledby="enquiry-draft-title">
        <button type="button" className="success-close" aria-label="Close message" onClick={() => setDraftReady(false)}>×</button>
        <span className="success-icon" aria-hidden="true">↗</span>
        <span className="eyebrow">ONE LAST STEP</span>
        <h2 id="enquiry-draft-title">Finish sending your enquiry.</h2>
        <p>Your email app should open with your message ready. Press Send there to deliver it to us.</p>
        <a className="button button-blue" href="mailto:muhddanish704@gmail.com">Email muhddanish704@gmail.com <Arrow diagonal /></a>
        <button type="button" className="success-dismiss" onClick={() => setDraftReady(false)}>Close</button>
      </section>
    </div>}
  </>
}
function PackageCards({ items }: { items: typeof packages }) {
  return <div className="package-grid">{items.map(p => <article className={p.featured ? 'package-card package-featured' : 'package-card'} key={p.name}><div className="package-top"><span className="eyebrow">{p.featured ? 'MOST POPULAR START' : 'INTRODUCTORY PACKAGE'}</span><span className="package-spark">✳</span></div><h3>{p.name}</h3><p>{p.note}</p><div className="package-price">{p.price}{p.price === 'Custom quote' ? null : <span> / starting from</span>}</div><ul>{p.items.map(item => <li key={item}><span>↗</span>{item}</li>)}</ul><a href="#contact" className={p.featured ? 'package-cta package-cta-light' : 'package-cta'}>Ask about this package <Arrow /></a></article>)}</div>
}

function App() {
  return <><Header /><main id="top">
    <section className="hero"><div className="hero-copy"><span className="eyebrow hero-kicker"><span className="status-dot" /> DIGITAL STUDIO · MALAYSIA</span><h1>Make your online<br />presence <span>work harder.</span></h1><p>We help Malaysian small businesses show up with clarity—through thoughtful websites, design, content and practical AI.</p><div className="hero-actions"><a className="button button-blue" href="#contact">Tell us what you’re building <Arrow diagonal /></a><a className="text-link" href="#services">Explore what we do <Arrow /></a></div><div className="hero-proof"><span className="proof-icon">✳</span><p>Good work should make<br />the next step feel simple.</p><span className="proof-rule" /><span className="proof-loc">KUALA LUMPUR<br />WORKING EVERYWHERE</span></div></div><div className="hero-art" aria-label="Abstract blue studio artwork" role="img"><div className="art-grid"/><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-sphere"><div className="sphere-shine"/></div><div className="art-disc"/><span className="art-coordinate">03°08′ N<br />101°41′ E</span><span className="art-caption">A CLEARER DIGITAL PRESENCE<br />STARTS WITH A GOOD CONVERSATION.</span><span className="art-cross">+</span></div><div className="hero-bottom"><span>INDEPENDENT BY DESIGN</span><span>WEBSITE · DESIGN · CONTENT · AUTOMATION</span><a href="#services" aria-label="Scroll to services">SCROLL TO EXPLORE <span>↓</span></a></div></section>
    <section className="section services-section" id="services"><div className="section-heading"><div><span className="eyebrow">FOR MALAYSIAN SMALL BUSINESSES</span><h2>Small studio.<br /><span>Useful by design.</span></h2></div><p>Bring us a clear brief or a half-formed idea. We’ll find the right-sized next step for your business.</p></div><div className="service-list">{services.filter(s => !s.title.startsWith('Wedding')).map(s => <article className="service-row" key={s.number}><span className="service-number">{s.number}</span><div className="service-main"><h3>{s.title}</h3><p>{s.copy}</p></div><span className="service-tags">{s.tags}</span><a href="#contact" className="service-link" aria-label={`Enquire about ${s.title}`}><Arrow diagonal /></a></article>)}</div></section>
    <section className="wedding-section" id="weddings"><div className="wedding-intro"><span className="eyebrow">A SEPARATE OFFERING · FOR YOUR WEDDING DAY</span><h2>Thoughtful details<br />for your <span>day.</span></h2><p>From the first invitation to the moments you’ll keep, explore dedicated digital card and event coverage options.</p><a className="button button-blue" href="#wedding-packages">Explore wedding packages <Arrow diagonal /></a></div><div className="wedding-offerings">{services.filter(s => s.title.startsWith('Wedding')).map((s, i) => <article className="wedding-offering" key={s.number}><span className="wedding-offering-number">0{i + 1}</span><div><h3>{s.title}</h3><p>{s.copy}</p><span>{s.tags}</span></div><a href="#wedding-packages" aria-label={`See ${s.title} package`}><Arrow diagonal /></a></article>)}</div></section>
    <Portfolio />
    <section className="section packages-section" id="packages"><div className="section-heading"><div><span className="eyebrow">A CLEAR PLACE TO START</span><h2>Good work.<br /><span>Clear numbers.</span></h2></div><p>Introductory package pricing in RM. Each project is scoped together, so you know what’s included before we begin.</p></div><PackageCards items={packages.slice(0, 3)} /><p className="package-footnote">Prices are introductory guides in MYR. Custom scope, copywriting, paid tools and third-party costs may be quoted separately. Final scope and price are agreed in writing before work begins.</p><div className="wedding-package-heading" id="wedding-packages"><span className="eyebrow">FOR YOUR WEDDING DAY</span><h3>Wedding packages</h3><p>Digital invitations and event coverage, scoped around your plans.</p></div><PackageCards items={packages.slice(3)} /><p className="package-footnote">The RM 450 digital card price is an introductory guide. Photo and video quotes depend on date, location, coverage hours and agreed deliverables.</p></section>
    <section className="about-section" id="about"><div className="about-mark" aria-hidden="true"><span>S</span><i>.</i></div><div className="about-copy"><span className="eyebrow">A LITTLE ABOUT US</span><h2>Digital should feel<br />a little more <span>human.</span></h2><p>Space Solutions makes room for better ideas. We’re a small digital solutions studio working with Malaysian SMEs to make their online presence clearer and more useful.</p><p>We ask good questions, keep the process collaborative and focus on what helps your business day to day. No jargon for its own sake. Just considered work and a clear handover.</p><a className="text-link" href="#contact">Let’s make room for your next idea <Arrow /></a></div><div className="about-aside"><span className="eyebrow">OUR WAY OF WORKING</span><div><span>01</span><b>Listen first</b><p>Understand the people, goals and constraints behind the brief.</p></div><div><span>02</span><b>Keep it clear</b><p>Agree on scope, timing and price before the work starts.</p></div><div><span>03</span><b>Hand over well</b><p>Leave you with the files and know-how to move forward.</p></div></div></section>
    <section className="section faq-section" id="faq"><div className="faq-heading"><span className="eyebrow">GOOD TO KNOW</span><h2>Questions,<br /><span>answered.</span></h2><p>A little more clarity before we start.</p></div><div className="faq-list">{faqs.map((f, i) => <details key={f.q} className="faq-item"><summary><span className="faq-num">0{i + 1}</span>{f.q}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{f.a}</p></details>)}</div></section>
    <section className="contact-section" id="contact"><div className="contact-top"><div><span className="eyebrow"><span className="status-dot" /> YOUR NEXT STEP</span><h2>Have a good one<br /><span>in mind?</span></h2><p>Tell us a little about your project. We’ll use your answers to understand what you need and suggest a sensible next step.</p></div><div className="contact-aside"><span className="aside-number">01—04</span><span>WEBSITE<br />DESIGN<br />CONTENT<br />AUTOMATION</span><span className="aside-star">✳</span></div></div><div className="contact-body"><div className="contact-invite"><span className="eyebrow">PROJECT ENQUIRY</span><p>Share the shape of your idea.<br />Rough notes are welcome.</p><div className="contact-shortcuts"><a className="contact-channel whatsapp-channel" href="https://wa.me/60182394418" target="_blank" rel="noreferrer">Chat on WhatsApp <span>+60 18-239 4418</span><Arrow diagonal /></a><a className="contact-channel" href="mailto:muhddanish704@gmail.com">Email us <span>muhddanish704@gmail.com</span><Arrow diagonal /></a></div><a href="#top" className="text-link">Back to the top <Arrow diagonal /></a></div><ContactForm /></div></section>
  </main><footer className="site-footer"><div className="footer-main"><a className="wordmark footer-brand" href="#top"><span className="brand-mark">S</span><span>space<span className="wordmark-light">solutions</span></span></a><p>Digital, made useful.<br />A small studio for businesses with somewhere to go.</p><div className="footer-contact"><span className="eyebrow">SAY HELLO</span><a href="https://wa.me/60182394418" target="_blank" rel="noreferrer">WhatsApp · +60 18-239 4418 <Arrow diagonal /></a><a href="mailto:muhddanish704@gmail.com">muhddanish704@gmail.com <Arrow diagonal /></a><span>Malaysia · Working everywhere</span></div><div className="footer-social"><span className="eyebrow">FOLLOW ALONG</span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Space Solutions. Made with care.</span><div><a href="#services">Services</a><a href="#weddings">Weddings</a><a href="#work">Work</a><a href="#packages">Packages</a><a href="#faq">FAQ</a></div><a href="#top">Back to top ↑</a></div></footer></>
}

export default App
