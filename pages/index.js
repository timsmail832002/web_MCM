// pages/index.js
import { useState } from "react";
import {
  ArrowRight, CheckCircle2, HeartHandshake, Building2, GraduationCap,
  Handshake, Users, Phone, Mail, MapPin, Star, ShieldCheck, TrendingUp
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    { icon: <GraduationCap className="h-6 w-6" aria-hidden/>, title: "Financial & Life Skills", text: "Budgeting, credit, career readiness, and day-to-day skills for independence." },
    { icon: <Handshake className="h-6 w-6" aria-hidden/>, title: "Mentorship", text: "1:1 mentors and group cohorts that build confidence and accountability." },
    { icon: <Building2 className="h-6 w-6" aria-hidden/>, title: "Housing Navigation", text: "Rental readiness, first-home coaching, and connections to stable housing." },
    { icon: <Users className="h-6 w-6" aria-hidden/>, title: "Job Training & Placement", text: "Employer partnerships, certifications, and pathways into good jobs." },
  ];

  const stats = [
    { label: "Year-1 Cohort", value: "30 men" },
    { label: "Training Completion", value: "80%+" },
    { label: "Employment/Education", value: "60%" },
    { label: "Housing Stability", value: "30–40%" },
  ];

  const faqs = [
    { q: "Who do you serve?", a: "Young men ages 15–30 in Milwaukee seeking stability, opportunity, and leadership growth." },
    { q: "How can I help?", a: "Become a mentor, donate, or hire a participant. We also welcome in-kind gifts and speaking volunteers." },
    { q: "Are donations tax-deductible?", a: "Men Crowning Men, Inc. is a nonprofit. Ask us for a receipt/letter for your records." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-white grid place-items-center shadow-sm overflow-hidden">
              <img src="/logo.png" alt="Men Crowning Men logo" className="h-10 w-10 object-contain" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Men Crowning Men</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="hover:text-slate-900" href="#programs">Programs</a>
            <a className="hover:text-slate-900" href="#impact">Impact</a>
            <a className="hover:text-slate-900" href="#partners">Partners</a>
            <a className="hover:text-slate-900" href="#faq">FAQ</a>
            <a className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary text-brandblack font-medium shadow hover:bg-secondary hover:text-white" href="#donate">
              Donate <HeartHandshake className="h-4 w-4" />
            </a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <div className="h-0.5 w-6 bg-slate-900 mb-1" />
            <div className="h-0.5 w-6 bg-slate-900 mb-1" />
            <div className="h-0.5 w-6 bg-slate-900" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 grid gap-3 text-sm">
              <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
              <a href="#impact" onClick={() => setMenuOpen(false)}>Impact</a>
              <a href="#partners" onClick={() => setMenuOpen(false)}>Partners</a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 bg-primary text-brandblack font-medium shadow hover:bg-secondary hover:text-white" href="#donate" onClick={() => setMenuOpen(false)}>
                Donate <HeartHandshake className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary bg-primary/10 rounded-full px-3 py-1">
              <ShieldCheck className="h-4 w-4" /> Mission-Driven Nonprofit
            </p>
            <h1 className="mt-4 text-4xl/tight sm:text-5xl/tight font-extrabold tracking-tight">
              Empowering young men to rise as leaders.
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              We help men ages 15–30 in Milwaukee achieve stability, independence, and leadership through mentorship,
              housing support, life skills, and job pathways.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#apply" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-slate-900 text-white font-medium shadow hover:bg-slate-800">
                Join a Cohort <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#donate" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-primary text-brandblack font-medium shadow hover:bg-secondary hover:text-white">
                Donate Now <HeartHandshake className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1"><Star className="h-4 w-4 text-primary"/> Community-rooted</div>
              <div className="flex items-center gap-1"><TrendingUp className="h-4 w-4 text-emerald-600"/> Outcome-driven</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner grid place-items-center overflow-hidden">
              {/* Replace with a real image */}
              <svg viewBox="0 0 200 200" className="h-40 w-40 text-slate-400" aria-hidden>
                <circle cx="100" cy="100" r="90" fill="currentColor" opacity="0.15"/>
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="currentColor">Your Photo</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Crowning Pathways Program</h2>
          <p className="mt-3 text-slate-600">
            A 12-month cohort serving <b>30 participants</b> per year with holistic supports. Here’s what we deliver:
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-full bg-slate-50 grid place-items-center text-slate-900 mb-3">
                {f.icon}
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Measured Outcomes</h2>
              <p className="mt-3 text-slate-600">
                We prioritize real progress you can see and verify. Each participant has a personalized plan and
                milestones tracked across housing, work, and finances.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600"/> 80% complete training or financial literacy certification</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600"/> 60% secure employment or post-secondary education</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600"/> 30–40% achieve housing stability</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <div className="text-3xl font-extrabold tracking-tight">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Community Partners</h2>
          <p className="mt-3 text-slate-600">We collaborate with employers, schools, housing providers, and local leaders to open doors.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-14 rounded-xl border border-slate-200 bg-white grid place-items-center text-slate-400">Logo</div>
          ))}
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="bg-gradient-to-br from-primary/5 to-secondary/5 border-y border-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Fuel the Mission</h2>
            <p className="mt-3 text-slate-700">
              Your gift provides mentors, training, and housing navigation for Milwaukee’s young men. Choose a level or enter any amount.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {[50, 100, 250].map((amt) => (
                <button key={amt} className="rounded-xl border border-primary bg-white px-4 py-3 font-medium shadow-sm hover:shadow">
                  ${amt}
                </button>
              ))}
              <button className="rounded-xl border border-primary bg-white px-4 py-3 font-medium shadow-sm hover:shadow">Other</button>
            </div>
            <p className="mt-3 text-xs text-slate-600">Secure processing coming soon. For now, email us to pledge or discuss sponsorships.</p>
          </div>
          <div className="rounded-2xl border border-primary bg-white p-6 shadow-sm">
            <form className="grid gap-3">
              <label className="text-sm font-medium" htmlFor="name">Name</label>
              <input id="name" className="rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="First and last name"/>

              <label className="text-sm font-medium mt-2" htmlFor="email">Email</label>
              <input id="email" type="email" className="rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="you@example.com"/>

              <label className="text-sm font-medium mt-2" htmlFor="msg">Message</label>
              <textarea id="msg" rows={4} className="rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Tell us how you’d like to help"/>

              <button type="button" className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-slate-900 text-white font-medium shadow hover:bg-slate-800">
                <a
  href="mailto:tmitchell@mencrowningmen.com"
  className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-slate-900 text-white font-medium shadow hover:bg-slate-800"
>
  Send Inquiry <ArrowRight className="h-4 w-4" />
</a>
              </button>
              <p className="text-xs text-slate-600">Or email us directly at <a href="mailto:mencrowningmen@gmail.com" className="underline">mencrowningmen@gmail.com</a>.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Apply / Volunteer */}
      <section id="apply" className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Apply or Volunteer</h2>
          <p className="mt-3 text-slate-600">Prospective participants and mentors can register interest below. We’ll follow up with next steps.</p>
        </div>
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Join a Participant Cohort</h3>
            <p className="mt-2 text-sm text-slate-600">For young men (15–30). Share a few details to help us prepare.</p>
            <form className="mt-4 grid gap-3">
              <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Full name"/>
              <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Email"/>
              <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Phone"/>
              <textarea rows={3} className="rounded-xl border border-slate-300 px-3 py-2" placeholder="What support are you seeking?"/>
              <button type="button" className="mt-2 inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-900 text-white hover:bg-slate-800">
                Submit Interest <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Become a Mentor or Partner</h3>
            <p className="mt-2 text-sm text-slate-600">We welcome professionals, employers, and organizations.
            </p>
            <form className="mt-4 grid gap-3">
              <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Organization / Name"/>
              <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Email"/>
              <textarea rows={3} className="rounded-xl border border-slate-300 px-3 py-2" placeholder="How would you like to help?"/>
              <button type="button" className="mt-2 inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-900 text-white hover:bg-slate-800">
                Submit <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-primary grid place-items-center overflow-hidden">
                <img src="/logo.png" alt="Men Crowning Men logo" className="h-9 w-9 object-contain" />
              </div>
              <span className="font-semibold">Men Crowning Men</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Empowering young men to move from struggle to stability—and from stability to leadership.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> 414-460-1227</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a href="mailto:mencrowningmen@gmail.com" className="underline">mencrowningmen@gmail.com</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> TBD</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:underline" href="#programs">Programs</a></li>
              <li><a className="hover:underline" href="#donate">Donate</a></li>
              <li><a className="hover:underline" href="#apply">Apply</a></li>
              <li><a className="hover:underline" href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Men Crowning Men, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
