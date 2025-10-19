import React from "react";
import { ArrowRight, BookOpen, Calculator, ClipboardList, Shield, CheckCircle2, Sparkles, GraduationCap, Users, BadgeCheck } from "lucide-react";

// Tailwind-first, responsive, clean aesthetic. One-file site.
// Replace hrefs with real links to Stripe/Calendly/Zoom/etc when ready.

export default function EchelonInstituteLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-slate-950 to-zinc-900 text-zinc-100">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 bg-zinc-900/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-teal-400 to-emerald-500 grid place-items-center shadow-lg shadow-emerald-500/20">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold tracking-tight text-white text-lg">Echelon Institute</p>
              <p className="text-xs text-zinc-400 -mt-0.5">Water & Wastewater Operator Training</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#why" className="hover:text-white text-zinc-300">Why Echelon</a>
            <a href="#program" className="hover:text-white text-zinc-300">Program</a>
            <a href="#pricing" className="hover:text-white text-zinc-300">Pricing</a>
            <a href="#faq" className="hover:text-white text-zinc-300">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#enroll" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-900 px-4 py-2 font-semibold transition shadow-lg shadow-emerald-500/25">
              Enroll Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_50%_0%,rgba(16,185,129,0.18),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-300 mb-5">
              <Sparkles className="h-3.5 w-3.5" /> New cohort forming now
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              From <span className="text-emerald-400">OIT</span> to <span className="text-emerald-400">Class 4</span> —
              <span className="block">Confident. Certified. Career‑Ready.</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-300 max-w-xl">
              Canada’s most practical <span className="font-semibold text-white">water & wastewater</span> operator program.
              Built by engineers, designed for operators, aligned to <span className="text-white">MECP / OWWCO</span>.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#enroll" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-900 px-6 py-3 font-semibold transition shadow-lg shadow-emerald-500/25">
                Enroll in OIT + Level 1 <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#syllabus" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 hover:border-white/20 px-6 py-3 font-semibold text-white/90">
                View Curriculum
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-400"/> Mock exams included</span>
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-emerald-400"/> Live weekly study halls</span>
              <span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4 text-emerald-400"/> Career & interview prep</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-emerald-400/10 to-sky-400/10 grid place-items-center border border-white/10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-white/90 text-zinc-900 shadow">
                    <ArrowRight className="h-6 w-6 -rotate-45" />
                  </div>
                  <p className="mt-3 text-sm text-zinc-300">Intro Lesson Preview</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                {[
                  "Aligned to Ontario regulations (O. Reg 128/04 & 170/03)",
                  "Applied operator math with step‑by‑step walkthroughs",
                  "Drinking water & wastewater covered side‑by‑side",
                  "Career toolkit: résumé, ATS, and interview prep",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0"/><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Echelon */}
      <section id="why" className="border-t border-white/5 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why choose Echelon over manuals & random videos?</h2>
          <p className="mt-3 text-zinc-300 max-w-3xl">We replace confusion with a guided path: modern lessons, auto‑graded math, realistic mock exams, and real human coaching — plus résumé and interview prep so you actually get hired.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "MECP‑aligned lessons", desc: "Up‑to‑date Canadian content for OIT → Class 4 + WQA." },
              { icon: Calculator, title: "Operator math mastery", desc: "Flows, dosing, pressure, head loss — explained step by step." },
              { icon: ClipboardList, title: "Mock exams & analytics", desc: "Timed simulation + weak‑area reports so you focus where it matters." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <f.icon className="h-6 w-6 text-emerald-400" />
                <h3 className="mt-4 font-semibold text-white text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">The Complete Operator Accelerator</h2>
              <p className="mt-3 text-zinc-300 max-w-2xl">OIT + Level 1 in 6 weeks, with optional bundles for Level 2–4 & WQA. Drinking water and wastewater are taught side‑by‑side so you think like a real operator.</p>
            </div>
            <a href="#syllabus" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm">Download syllabus PDF</a>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {[
              { title: "OIT + Level 1 Accelerator", bullets: ["6‑week guided path", "20+ video lessons", "3 live study halls", "3 full mock exams"], cta: "Enroll Now", tag: "Most Popular" },
              { title: "Level 2–3 Prep", bullets: ["Hydraulics, SCADA, troubleshooting", "Advanced math labs", "Compliance & asset mgmt"], cta: "Join Waitlist", tag: "Coming Soon" },
              { title: "WQA Certification", bullets: ["Sampling, CoC, QA/QC", "Microbiology basics (MPN/CFU)", "LIMS‑lite reporting"], cta: "Join Waitlist", tag: "New" },
            ].map((card) => (
              <div key={card.title} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
                {card.tag && (
                  <span className="absolute -top-3 right-4 text-xs bg-emerald-500 text-zinc-900 font-semibold rounded-full px-3 py-1 shadow">{card.tag}</span>
                )}
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0"/><span>{b}</span></li>
                  ))}
                </ul>
                <a href="#enroll" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-4 py-2 text-sm font-semibold">{card.cta} <ArrowRight className="h-4 w-4"/></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-white/5 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-3 text-zinc-300 max-w-2xl">Everything you need to pass and get hired — without hidden upsells. Payment plans available. Employer invoices on request.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { name: "OIT + L1 Accelerator", price: "$997", desc: "Core 6‑week program + 3 live study halls", items: ["MECP‑aligned curriculum", "Auto‑graded math drills", "3 mock exams", "Résumé & interview kit", "VaultQR certificate"], featured: true },
              { name: "Accelerator + Math Masterclass", price: "$1,497", desc: "Everything in core + 50‑Q intensive & 1:1 coaching", items: ["All core features", "50‑Q math intensive", "30‑min 1:1 coaching"], featured: false },
              { name: "Corporate Cohort", price: "Custom", desc: "Teams of 5–25 operators with reporting", items: ["Branded certificates", "Attendance & progress reports", "Manager dashboard"], featured: false },
            ].map((tier) => (
              <div key={tier.name} className={`rounded-2xl border ${tier.featured ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-white/10 bg-white/5'} p-6 flex flex-col`}>
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="mt-1 text-zinc-300 text-sm">{tier.desc}</p>
                <div className="mt-4 text-4xl font-extrabold tracking-tight">{tier.price}<span className="text-base font-medium text-zinc-400"> CAD</span></div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {tier.items.map((i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400"/><span>{i}</span></li>
                  ))}
                </ul>
                <a href="#enroll" className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-semibold ${tier.featured ? 'bg-emerald-500 text-zinc-900 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25' : 'bg-white/10 hover:bg-white/15'}`}>Select <ArrowRight className="h-4 w-4"/></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">What students are saying</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              { quote: "I failed my OIT twice before this. The math finally clicked and I passed.", name: "Jonathan D.", role: "Class 1 Operator, Region of Peel" },
              { quote: "The résumé + interview prep landed me two interviews in a week.", name: "Amanda T.", role: "OIT Graduate" },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-lg leading-relaxed">“{t.quote}”</p>
                <p className="mt-4 text-sm text-zinc-400">{t.name} · {t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/5 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently asked questions</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              { q: "Is this recognized by OWWCO/MECP?", a: "The curriculum is aligned to MECP/OWWCO exam frameworks. We also issue a QR‑verified completion certificate for employers." },
              { q: "Do you cover drinking water and wastewater?", a: "Yes. We teach both side‑by‑side so you think like a real operator across systems." },
              { q: "Can I pay in installments?", a: "Yes — payment plans are available at checkout, and we can invoice employers directly for groups." },
              { q: "What happens if I don’t pass?", a: "Complete all modules and mock exams and you’ll get a free retake of the next cohort." },
            ].map((f) => (
              <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold text-white">{f.q}</h3>
                <p className="mt-2 text-sm text-zinc-300">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold">Meet your instructor</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">Ay Bello, M.Eng, PMP, CSPO — environmental engineer & transformation leader who has worked across City of Toronto, OCWA, Mississauga, and the Regions of Durham & Peel. Ay translates complex theory into practical steps that help you pass exams and get hired.</p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-300">
              {[
                "Process & compliance experience inside real municipalities",
                "Career toolkit: résumé, interview, and job‑search strategy",
                "Mentorship beyond the exam — onboarding & CEU tracking",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400"/><span>{i}</span></li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-emerald-400/10 to-sky-400/10 border border-white/10 grid place-items-center">
              <div className="text-center text-zinc-300">
                <div className="h-16 w-16 rounded-full bg-white/90 text-zinc-900 grid place-items-center mx-auto shadow">
                  <Shield className="h-7 w-7"/>
                </div>
                <p className="mt-3 text-sm">Instructor photo / brand image placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section id="enroll" className="border-t border-white/5 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to start your career in water & wastewater?</h2>
          <p className="mt-3 text-zinc-300 max-w-2xl mx-auto">Join the next Echelon cohort. Pass your exam with confidence, then use our résumé and interview system to land your first role.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-900 px-6 py-3 font-semibold transition shadow-lg shadow-emerald-500/25">Enroll Now <ArrowRight className="h-5 w-5"/></a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 hover:border-white/20 px-6 py-3 font-semibold text-white/90">Join Waitlist</a>
          </div>
          <p className="mt-4 text-xs text-zinc-500">Payment plans available · Employer invoicing on request · QR‑verified certificate</p>
        </div>
      </section>

      <footer className="border-t border-white/5 text-sm text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Echelon Institute. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
