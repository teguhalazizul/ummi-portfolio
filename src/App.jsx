import { useEffect, useRef, useState } from 'react'
import * as Ic from './icons.jsx'

const T = {
  id: {
    nav: ['Tentang', 'Pengalaman', 'Keahlian', 'Pendidikan', 'Sertifikat', 'Kontak'],
    hi: 'Halo, saya', roles: ['Shipping Officer', 'Freight Forwarding', 'Export Documentation', 'Warehouse Operations'],
    sum: 'Profesional logistik dan pengiriman yang teliti, berpengalaman dalam booking pengiriman, dokumen ekspor, freight forwarding, kurir, tracking, dan operasional gudang. Saat ini mengelola pengiriman dari booking, dokumentasi, dispatch, hingga follow-up pengantaran.',
    cv: 'Unduh CV', contact: 'Hubungi Saya',
    stats: [['3.80', 'IPK / 4.00'], ['4', 'Sistem: SAP, CEISA, INSW, Excel']],
    aboutT: 'Tentang Saya', about: 'Lulusan Sarjana Terapan Logistik Perdagangan Internasional dari Politeknik Negeri Batam. Terbiasa berkoordinasi dengan pelanggan, vendor, tim internal, kurir, dan freight forwarder agar setiap kiriman tiba tepat waktu dan sesuai persyaratan.',
    expT: 'Pengalaman Profesional', now: 'Sekarang',
    exp: [
      { r: 'Shipping Officer', c: 'Stargazer Cable Assembly Pte Ltd', d: '2025 - Sekarang', i: 'Ship', b: [
        'Mengelola koordinasi pengiriman end-to-end: booking, dokumentasi, dispatch, tracking, dan follow-up pengantaran.',
        'Booking pengiriman dengan kurir internasional (DHL, FedEx, UPS) sesuai kebutuhan pelanggan dan jadwal.',
        'Koordinasi sea freight dengan freight forwarder: booking, pengambilan kargo, jadwal, dan status pengiriman.',
        'Menyiapkan commercial invoice, packing list, dokumen pengiriman, dan shipment advice.',
        'Membandingkan tarif kurir dan freight forwarder serta memeriksa tagihan terhadap tarif yang disepakati.',
        'Mengidentifikasi risiko pengiriman dan berkomunikasi proaktif agar kiriman tetap sesuai jadwal.'] },
      { r: 'Logistics & Warehouse Intern', c: 'PT. Synergy Oil Nusantara', d: 'Apr 2024 - Okt 2025', i: 'Warehouse', b: [
        'Verifikasi dokumen kepabeanan dan pajak seluruh pengiriman melalui CEISA PPFTZ Online dan INSW.',
        'Receiving barang masuk berdasarkan dokumen pengiriman dan pembelian menggunakan SAP.',
        'Put away dan picking sesuai order gudang dengan SAP Warehouse Management.',
        'Stock opname dan memastikan data sistem sesuai kondisi stok fisik.'] },
    ],
    skT: 'Keahlian', sk: [
      ['Truck', 'Logistik & Pengiriman', ['Shipment Booking', 'Export Documentation', 'Freight Forwarding', 'Courier Shipment', 'Sea Freight Coordination', 'Shipment Tracking', 'Freight Cost Comparison', 'Commercial Invoice & Packing List', 'Customs Documentation', 'Warehouse Operations']],
      ['Container', 'Sistem & Software', ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'SAP', 'CEISA PPFTZ Online', 'INSW']],
      ['Globe', 'Keahlian Profesional', ['Komunikasi', 'Koordinasi', 'Problem-Solving', 'Berpikir Analitis', 'Manajemen Waktu', 'Ketelitian', 'Kerja Sama Tim']]],
    edT: 'Pendidikan', ed: ['Politeknik Negeri Batam', 'Sarjana Terapan Logistik Perdagangan Internasional', 'Agu 2021 - Nov 2025', 'IPK 3.80/4.00'],
    cw: 'Mata kuliah: Logistics & Supply Chain Management, Warehouse & Inventory Management, Integrated Logistics System (ERP), Freight Forwarding, Custom Clearance, Distribution & Transportation, Quality & Risk Management, Data Analysis, Contemporary Logistics.',
    ceT: 'Sertifikasi & Prestasi', ce: ['Sertifikasi SAP for Logistic', 'Sertifikasi Warehouse Supervisor (BNSP)', 'Sertifikat program UMKM Merdeka APINDO, Kepulauan Riau', 'Sertifikat Manajemen UMKM Kota Batam & Package Management, Tower A Polibatam', 'Finalis nasional Program Kreativitas Mahasiswa (PKM)', 'Juara 2 Business Model Competition tingkat kampus'],
    ctT: 'Siap mengirim kerja sama berikutnya?', ctS: 'Hubungi saya untuk peluang di bidang logistik dan pengiriman.', crsT: 'Mata Kuliah Relevan', trkT: 'Perjalanan Kiriman', trk: ['Booking', 'Dokumen & Pickup', 'Dalam Perjalanan', 'Terkirim'],
    hl: [['File', 'Teliti', 'Dokumen ekspor akurat dan sesuai syarat pelanggan.'], ['Truck', 'Proaktif', 'Follow-up kurir dan forwarder sebelum masalah muncul.'], ['Globe', 'Hemat biaya', 'Membandingkan tarif dan memeriksa tagihan.']],
    say: ['Halo! Aku Boxy 📦', 'Klik aku lagi!', 'Paketmu aman bersama Ummi!', 'Siap kirim ke seluruh dunia 🌍'], top: 'Ke atas',
    foot: 'Dibuat dengan React'
  },
  en: {
    nav: ['About', 'Experience', 'Skills', 'Education', 'Certificates', 'Contact'],
    hi: "Hi, I'm", roles: ['Shipping Officer', 'Freight Forwarding', 'Export Documentation', 'Warehouse Operations'],
    sum: 'Detail-oriented logistics and shipping professional with hands-on experience in shipment booking, export documentation, freight forwarding, courier shipments, tracking, and warehouse operations. Currently managing shipments from booking and documentation through dispatch and delivery follow-up.',
    cv: 'Download CV', contact: 'Contact Me',
    stats: [['3.80', 'GPA / 4.00'], ['4', 'Systems: SAP, CEISA, INSW, Excel']],
    aboutT: 'About Me', about: 'Applied Bachelor of International Trade Logistics graduate from Batam State Polytechnic. Used to coordinating with customers, vendors, internal teams, couriers, and freight forwarders so every shipment arrives on time and to requirements.',
    expT: 'Professional Experience', now: 'Present',
    exp: [
      { r: 'Shipping Officer', c: 'Stargazer Cable Assembly Pte Ltd', d: '2025 - Present', i: 'Ship', b: [
        'Manage end-to-end shipment coordination: booking, documentation, dispatch, tracking, and delivery follow-up.',
        'Book shipments with international couriers (DHL, FedEx, UPS) based on customer requirements and schedules.',
        'Coordinate sea freight with forwarders: booking, cargo collection, schedules, and delivery status.',
        'Prepare commercial invoices, packing lists, shipping documents, and shipment advice.',
        'Compare courier and forwarder rates and check billing invoices against agreed rates.',
        'Identify shipment risks and communicate proactively to keep shipments on schedule.'] },
      { r: 'Logistics & Warehouse Intern', c: 'PT. Synergy Oil Nusantara', d: 'Apr 2024 - Oct 2025', i: 'Warehouse', b: [
        'Verified and controlled customs documents and tax for all shipments using CEISA PPFTZ Online and INSW.',
        'Performed receiving of incoming goods based on delivery and purchase documents in SAP.',
        'Carried out put away and picking per warehouse orders with SAP Warehouse Management.',
        'Conducted stock opname and ensured system accuracy matched physical stock.'] },
    ],
    skT: 'Skills', sk: [
      ['Truck', 'Logistics & Shipping', ['Shipment Booking', 'Export Documentation', 'Freight Forwarding', 'Courier Shipment', 'Sea Freight Coordination', 'Shipment Tracking', 'Freight Cost Comparison', 'Commercial Invoice & Packing List', 'Customs Documentation', 'Warehouse Operations']],
      ['Container', 'Systems & Software', ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'SAP', 'CEISA PPFTZ Online', 'INSW']],
      ['Globe', 'Professional Skills', ['Communication', 'Coordination', 'Problem-Solving', 'Analytical Thinking', 'Time Management', 'Attention to Detail', 'Teamwork']]],
    edT: 'Education', ed: ['Batam State Polytechnic', 'Applied Bachelor of International Trade Logistics', 'Aug 2021 - Nov 2025', 'GPA 3.80/4.00'],
    cw: 'Coursework: Logistics & Supply Chain Management, Warehouse & Inventory Management, Integrated Logistics System (ERP), Freight Forwarding, Custom Clearance, Distribution & Transportation, Quality & Risk Management, Data Analysis, Contemporary Logistics.',
    ceT: 'Certifications & Achievements', ce: ['SAP for Logistic certification', 'Warehouse Supervisor certification (BNSP)', 'APINDO UMKM Merdeka program certificate, Riau Islands', 'UMKM Management (Batam City) & Package Management, Tower A Polibatam', 'National finalist, Student Creativity Program (PKM)', '2nd Place, campus-level Business Model Competition'],
    ctT: 'Ready to ship your next project?', ctS: 'Get in touch for logistics and shipping opportunities.', crsT: 'Relevant Coursework', trkT: 'Shipment Journey', trk: ['Booked', 'Docs & Pickup', 'In Transit', 'Delivered'],
    hl: [['File', 'Detail-oriented', 'Accurate export documents that match customer requirements.'], ['Truck', 'Proactive', 'Follows up with couriers and forwarders before issues grow.'], ['Globe', 'Cost-aware', 'Compares rates and checks billing against agreed prices.']],
    say: ["Hi! I'm Boxy 📦", 'Click me again!', 'Your parcel is safe with Ummi!', 'Ready to ship worldwide 🌍'], top: 'Top',
    foot: 'Built with React'
  }
}
const IDS = ['about', 'experience', 'skills', 'education', 'certs', 'contact']

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.15 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return ref
}
const Reveal = ({ children, className = '' }) => <div ref={useReveal()} className={`reveal ${className}`}>{children}</div>

function Typer({ words }) {
  const [i, setI] = useState(0), [n, setN] = useState(0), [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i % words.length]
    const t = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1)
      else if (!del) setDel(true)
      else if (n > 0) setN(n - 1)
      else { setDel(false); setI(i + 1) }
    }, !del && n === w.length ? 1400 : del ? 40 : 85)
    return () => clearTimeout(t)
  }, [n, del, i, words])
  return <span className="typer">{words[i % words.length].slice(0, n)}<i /></span>
}

function Stat({ v, l }) {
  const ref = useRef(null), [val, setVal] = useState('0')
  useEffect(() => {
    const end = parseFloat(v), dec = v.includes('.') ? 2 : 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      let s = null
      const step = (t) => { s ??= t; const p = Math.min((t - s) / 1400, 1); setVal((end * (1 - Math.pow(1 - p, 3))).toFixed(dec)); if (p < 1) requestAnimationFrame(step) }
      requestAnimationFrame(step); io.disconnect()
    }); io.observe(ref.current); return () => io.disconnect()
  }, [v])
  return <div ref={ref} className="stat"><b>{val}</b><span>{l}</span></div>
}

function Scene() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="sc-plane"><Ic.Plane size={44} /><span className="trail" /></div>
      <div className="sc-globe"><Ic.Globe size={70} /></div>
      <div className="sc-sea"><div className="sc-ship"><Ic.Ship size={64} /></div>
        <svg className="wave" viewBox="0 0 1200 60" preserveAspectRatio="none"><path d="M0 30 Q 75 0 150 30 T 300 30 T 450 30 T 600 30 T 750 30 T 900 30 T 1050 30 T 1200 30 V60 H0z" /></svg>
        <svg className="wave w2" viewBox="0 0 1200 60" preserveAspectRatio="none"><path d="M0 30 Q 75 0 150 30 T 300 30 T 450 30 T 600 30 T 750 30 T 900 30 T 1050 30 T 1200 30 V60 H0z" /></svg>
      </div>
      <div className="sc-road"><div className="sc-truck"><Ic.Truck size={58} /></div><div className="dash" /></div>
    </div>
  )
}


const CRS = ['Logistics & Supply Chain Management', 'Warehouse & Inventory Management', 'Integrated Logistics System (ERP)', 'Freight Forwarding', 'Custom Clearance', 'Distribution & Transportation', 'Quality & Risk Management']
const WORDS = ['DHL', 'FedEx', 'UPS', 'SAP', 'CEISA PPFTZ', 'INSW', 'Sea Freight', 'Export Docs', 'Warehouse', 'Tracking']
const Marquee = () => (
  <div className="marq" aria-hidden="true"><div className="marq-in">
    {[0, 1].map((r) => WORDS.map((w, k) => <span key={r + w}>{[Ic.Box, Ic.Plane, Ic.Ship, Ic.Truck][k % 4]({ size: 20 })}{w}</span>))}
  </div></div>
)

function Confetti() {
  const [b, setB] = useState([])
  useEffect(() => {
    const f = (e) => {
      const id = Math.random()
      const ps = Array.from({ length: 10 }, (_, k) => ({ k, a: (k / 10) * 6.28 + Math.random() * 0.5, d: 60 + Math.random() * 60 }))
      setB((x) => [...x, { id, x: e.clientX, y: e.clientY, ps }])
      setTimeout(() => setB((x) => x.filter((i) => i.id !== id)), 900)
    }
    addEventListener('click', f); return () => removeEventListener('click', f)
  }, [])
  const L = [Ic.Box, Ic.Plane, Ic.Ship, Ic.Truck]
  return <div className="confetti" aria-hidden="true">{b.map((o) => <div key={o.id} style={{ left: o.x, top: o.y }}>
    {o.ps.map((p) => { const I = L[p.k % 4]; return <span key={p.k} style={{ '--dx': Math.cos(p.a) * p.d + 'px', '--dy': Math.sin(p.a) * p.d + 'px' }}><I size={18} /></span> })}</div>)}</div>
}

function BackTop({ label }) {
  const [v, setV] = useState(false), [fly, setFly] = useState(false)
  useEffect(() => { const f = () => setV(scrollY > 500); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  const go = () => { setFly(true); scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => setFly(false), 900) }
  return <button className={`totop ${v ? 'show' : ''} ${fly ? 'fly' : ''}`} onClick={go} aria-label={label}><Ic.Plane size={22} /></button>
}

function Boxy({ say }) {
  const [i, setI] = useState(0)
  return (
    <button className="boxy" onClick={() => setI((i + 1) % say.length)} aria-label="Boxy">
      <span className="bubble" key={i}>{say[i % say.length]}</span>
      <svg viewBox="0 0 100 100" width="92" height="92">
        <path d="M10 30L50 12l40 18v44L50 92 10 74z" fill="#619DC6" /><path d="M10 30l40 18 40-18" fill="none" stroke="#3F7AA6" strokeWidth="3" />
        <path d="M50 48v44" stroke="#3F7AA6" strokeWidth="3" /><rect x="40" y="20" width="20" height="14" rx="2" fill="#F2A65A" opacity=".9" transform="rotate(-8 50 27)" />
        <g className="eyes"><ellipse cx="34" cy="62" rx="5" ry="6.5" fill="#1B3A5C" /><ellipse cx="66" cy="62" rx="5" ry="6.5" fill="#1B3A5C" /></g>
        <circle cx="25" cy="72" r="5" fill="#FF9DB5" opacity=".7" /><circle cx="75" cy="72" r="5" fill="#FF9DB5" opacity=".7" />
        <path d="M43 72q7 7 14 0" fill="none" stroke="#1B3A5C" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </button>
  )
}

function Tracker({ steps, title }) {
  const ref = useRef(null), [n, setN] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      let i = 0; const tm = setInterval(() => { i++; setN(i); if (i >= 4) clearInterval(tm) }, 750); io.disconnect()
    }); io.observe(ref.current); return () => io.disconnect()
  }, [])
  const L = [Ic.Box, Ic.Truck, Ic.Plane, Ic.Pin]
  return (
    <div ref={ref} className="card trk"><h3>{title}</h3>
      <div className="trk-row"><div className="bar"><i style={{ width: Math.max(0, n - 1) / 3 * 100 + '%' }} /></div>
        {steps.map((s, k) => { const I = L[k]; return <div key={s} className={'st' + (n > k ? ' on' : '') + (n === k + 1 ? ' now' : '')}><span className="st-i"><I size={22} /></span><small>{s}</small></div> })}
      </div>
    </div>
  )
}

const Sec = ({ id, title, icon, children }) => { const I = Ic[icon]; return (
    <section id={id} className="sec"><Reveal><h2 className="h2"><span className="hico"><I size={22} /></span>{title}</h2></Reveal>{children}</section>) }

export default function App() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('lang') || 'id' } catch { return 'id' } })
  const [open, setOpen] = useState(false), [scrolled, setScrolled] = useState(false), [prog, setProg] = useState(0)
  const t = T[lang]
  useEffect(() => { try { localStorage.setItem('lang', lang) } catch {} document.documentElement.lang = lang }, [lang])
  useEffect(() => {
    const f = () => { setScrolled(scrollY > 20); setProg(scrollY / (document.body.scrollHeight - innerHeight) * 100) }
    f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])

  return (
    <>
      <Confetti /><BackTop label={t.top} />
      <div className="progress" style={{ width: prog + '%' }}><Ic.Truck size={22} /></div>
      <header className={`nav ${scrolled ? 'sc' : ''}`}>
        <a href="#top" className="logo"><span className="logo-i"><Ic.Box size={20} /></span>Ummi K.</a>
        <nav className={open ? 'open' : ''}>
          {IDS.map((id, k) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{t.nav[k]}</a>)}
        </nav>
        <div className="lang" role="group" aria-label="Language">
          <span className="pill" style={{ transform: `translateX(${lang === 'id' ? 0 : 100}%)` }} />
          <button className={lang === 'id' ? 'on' : ''} onClick={() => setLang('id')}>ID</button>
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}><Ic.Menu /></button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="floaters" aria-hidden="true">
            {[Ic.Box, Ic.Container, Ic.Plane, Ic.Ship, Ic.Truck, Ic.Globe, Ic.Box, Ic.Container].map((I, k) => <span key={k} className={'fl f' + k}><I size={36 + (k % 3) * 10} /></span>)}
          </div>
          <Boxy say={t.say} />
          <div className="hero-in">
            <div className="hero-txt">
              <p className="hi"><span className="wave-h">👋</span> {t.hi}</p>
              <h1>Ummi Khoiroh</h1>
              <p className="role"><Typer key={lang} words={t.roles} /></p>
              <p className="lead">{t.sum}</p>
              <div className="btns">
                <a className="btn pri" href="/Ummi_Khoiroh_CV.pdf" download><Ic.Download size={18} />{t.cv}</a>
                <a className="btn sec2" href="#contact"><Ic.Mail size={18} />{t.contact}</a>
              </div>
              <div className="stats">{t.stats.map(([v, l]) => <Stat key={lang + l} v={v} l={l} />)}</div>
              <div className="crs"><h4><Ic.Cap size={18} />{t.crsT}</h4>
                <div>{CRS.map((c, k) => <span key={c} style={{ animationDelay: 700 + k * 80 + 'ms' }}>{c}</span>)}</div></div>
            </div>
            <div className="photo-wrap">
              <div className="ring r1" /><div className="ring r2" />
              <div className="orbit"><span><Ic.Plane size={22} /></span><span><Ic.Ship size={22} /></span><span><Ic.Truck size={22} /></span></div>
              <div className="photo"><img src="/ummi.jpg" alt="Ummi Khoiroh" /></div>
              <div className="tag tg1"><Ic.Box size={18} />Shipping</div>
              <div className="tag tg2"><Ic.File size={18} />Export Docs</div>
              <div className="tag tg3"><Ic.Pin size={18} />Tracking</div><div className="tag tg4"><Ic.Globe size={18} />Customs</div>
            </div>
          </div>
        </section>
        <Scene />
        <Marquee />

        <div className="wrap">
          <Sec id="about" title={t.aboutT} icon="Box"><Reveal><p className="about">{t.about}</p></Reveal>
            <div className="hl">{t.hl.map(([ic, h, d]) => { const I = Ic[ic]; return <Reveal key={h} className="card hl-c"><span className="hl-i"><I size={26} /></span><h3>{h}</h3><p>{d}</p></Reveal> })}</div>
            <Reveal><Tracker steps={t.trk} title={t.trkT} /></Reveal></Sec>

          <Sec id="experience" title={t.expT} icon="Truck">
            <div className="tl"><span className="tl-truck"><Ic.Truck size={22} /></span>
              {t.exp.map((e, k) => { const I = Ic[e.i]; return (
                <Reveal key={e.r + lang} className="tl-item">
                  <span className="dot"><I size={20} /></span>
                  <div className="card">
                    <div className="card-h"><div><h3>{e.r}</h3><p className="co">{e.c}</p></div><span className="date">{e.d}</span></div>
                    <ul>{e.b.map((x, j) => <li key={j}>{x}</li>)}</ul>
                  </div>
                </Reveal>) })}
            </div>
          </Sec>

          <Sec id="skills" title={t.skT} icon="Container">
            <div className="sk-grid">
              {t.sk.map(([ic, title, items]) => { const I = Ic[ic]; return (
                <Reveal key={title} className="card sk"><h3><I size={22} />{title}</h3>
                  <div className="chips">{items.map((s, j) => <span key={s} style={{ animationDelay: j * 60 + 'ms' }}>{s}</span>)}</div></Reveal>) })}
            </div>
          </Sec>

          <Sec id="education" title={t.edT} icon="Cap">
            <Reveal className="card edu"><span className="capfly"><Ic.Cap size={46} /></span>
              <div className="card-h"><div><h3>{t.ed[0]}</h3><p className="co">{t.ed[1]}</p></div><span className="date">{t.ed[2]}</span></div>
              <p className="gpa"><Ic.Award size={18} />{t.ed[3]}</p><p className="cw">{t.cw}</p>
            </Reveal>
          </Sec>

          <Sec id="certs" title={t.ceT} icon="Award">
            <div className="cert-grid">
              {t.ce.map((c, k) => <Reveal key={c} className="card cert"><span className="cico">{k < 4 ? <Ic.File size={22} /> : <Ic.Award size={22} />}</span><p>{c}</p></Reveal>)}
            </div>
          </Sec>
        </div>

        <section id="contact" className="contact">
          <div className="cbox"><span className="cplane"><Ic.Plane size={42} /></span><span className="stamp">DELIVERED</span>
            <Reveal><h2>{t.ctT}</h2><p>{t.ctS}</p>
              <div className="clinks">
                <a href="mailto:ummikhoiroh07@gmail.com"><Ic.Mail size={20} />ummikhoiroh07@gmail.com</a>
                <a href="https://wa.me/6282283374619" target="_blank" rel="noreferrer"><Ic.Phone size={20} />+62 822-8337-4619</a>
                <a href="https://www.linkedin.com/in/ummikhoiroh" target="_blank" rel="noreferrer"><Ic.Link size={20} />linkedin.com/in/ummikhoiroh</a>
                <span><Ic.Pin size={20} />Batam, Indonesia</span>
              </div></Reveal>
          </div>
        </section>
      </main>
      <footer className="foot"><span className="ftruck"><Ic.Truck size={20} /></span>© {new Date().getFullYear()} Ummi Khoiroh · {t.foot}</footer>
    </>
  )
}
