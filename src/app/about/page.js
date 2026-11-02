import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

export const metadata = {
  title: "About — ShareForward",
  description:
    "Learn about ShareForward's mission to reduce waste and connect donors with NGOs and volunteers.",
};

export default function AboutPage() {
  const values = [
    {
      icon: "🌍",
      title: "Zero Waste Mission",
      description:
        "We believe no usable item should end up in a landfill when someone out there needs it.",
      color: "#10b981",
    },
    {
      icon: "🔒",
      title: "Trust & Verification",
      description:
        "Every NGO on our platform is document-verified. Every donation is tracked end-to-end.",
      color: "#3b82f6",
    },
    {
      icon: "⚡",
      title: "Speed Matters",
      description:
        "Surplus food expires fast. Our real-time matching ensures items reach people before it's too late.",
      color: "#f59e0b",
    },
    {
      icon: "🤝",
      title: "Community First",
      description:
        "We're not just a platform — we're a movement of thousands of compassionate individuals.",
      color: "#8b5cf6",
    },
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Founder & CEO",
      tag: "Leadership",
      bio: "Former UN food relief coordinator passionate about creating zero-waste circular distribution systems in Indian metros.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
      accent: "#10b981",
    },
    {
      name: "Arjun Patel",
      role: "Chief Technology Officer",
      tag: "Engineering",
      bio: "Ex-logistics tech architect building algorithmic dispatch networks and high-concurrency real-time feeds.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
      accent: "#3b82f6",
    },
    {
      name: "Meera Krishnan",
      role: "Head of Operations",
      tag: "Operations",
      bio: "Scales volunteer fleets and oversees multi-city NGO partner verification with stringent compliance safeguards.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
      accent: "#f59e0b",
    },
    {
      name: "Rahul Gupta",
      role: "Community Lead",
      tag: "Outreach",
      bio: "Grassroots organizer connecting university volunteer clubs and youth coalitions to emergency food hubs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
      accent: "#8b5cf6",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #022c22, #064e3b, #047857)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #34d399, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 -left-20 w-64 h-64 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #fbbf24, transparent 70%)" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
            style={{
              background: "rgba(16, 185, 129, 0.15)",
              color: "#6ee7b7",
              border: "1px solid rgba(16, 185, 129, 0.3)",
            }}
          >
            Our Mission &amp; People
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            We&apos;re on a Mission to<br />
            <span
              style={{
                background: "linear-gradient(135deg, #6ee7b7, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              End Surplus Waste
            </span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: "rgba(203, 213, 225, 0.9)" }}>
            ShareForward bridges the divide between surplus and necessity. We connect generous donors with verified NGOs and volunteer runners who make every second count.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path
              d="M0 30L60 27C120 24 240 18 360 21C480 24 600 36 720 39C840 42 960 36 1080 30C1200 24 1320 18 1380 15L1440 12V60H0V30Z"
              style={{ fill: "var(--bg-primary)" }}
            />
          </svg>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              The principles that guide every decision, verification, and match on our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="group p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-primary)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{ background: `${value.color}15`, border: `1px solid ${value.color}25` }}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (reuse) */}
      <div style={{ background: "var(--bg-secondary)" }}>
        <HowItWorks />
      </div>

      {/* Team */}
      <section id="team" className="py-24 relative overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
              style={{
                background: "rgba(16, 185, 129, 0.12)",
                color: "#10b981",
                border: "1px solid rgba(16, 185, 129, 0.25)",
              }}
            >
              The People
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
              Meet the Team
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              The technologists, relief coordinators, and community champions powering ShareForward every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {team.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-primary)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Role Tag Chip */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase backdrop-blur-md"
                      style={{
                        background: "rgba(15, 23, 42, 0.8)",
                        color: member.accent,
                        border: `1px solid ${member.accent}40`,
                      }}
                    >
                      {member.tag}
                    </span>
                  </div>

                  {/* Name overlay at bottom of photo */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-extrabold text-lg text-white leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium" style={{ color: member.accent }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <p
                    className="text-xs leading-relaxed mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {member.bio}
                  </p>

                  {/* Social / Connect icons */}
                  <div
                    className="pt-3 border-t flex items-center justify-between"
                    style={{ borderColor: "var(--border-secondary)" }}
                  >
                    <span className="text-[11px] font-medium" style={{ color: "var(--text-tertiary)" }}>
                      Connect
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href="#linkedin"
                        aria-label={`${member.name} LinkedIn`}
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                        style={{
                          background: "var(--bg-secondary)",
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border-primary)",
                        }}
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a
                        href="#twitter"
                        aria-label={`${member.name} Twitter`}
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                        style={{
                          background: "var(--bg-secondary)",
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border-primary)",
                        }}
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join the Team callout */}
          <div
            className="mt-16 rounded-3xl p-8 sm:p-10 border text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(245, 158, 11, 0.05))",
              borderColor: "rgba(16, 185, 129, 0.25)",
            }}
          >
            <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              Want to join our core team or lead a city chapter?
            </h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              We are actively looking for operations leads, volunteer coordinators, and community ambassadors across India.
            </p>
            <a
              href="mailto:careers@shareforward.org"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5 shadow-md"
              style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
            >
              <span>View Open Roles &amp; Fellowships</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
            Get In Touch
          </h2>
          <p className="text-base mb-8" style={{ color: "var(--text-secondary)" }}>
            Have questions? Want to partner with us or enroll your organization? We&apos;d love to connect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@shareforward.org"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-bold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello@shareforward.org
            </a>
            <a
              href="tel:+918005550199"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-primary)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Helpline: 1800-SHARE-FWD
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
