import Link from "next/link";

const steps = [
  { number: "1", title: "Post your surplus", description: "Take a quick photo, set the portion count and expiry time. Your post is instantly visible to registered local NGOs." },
  { number: "2", title: "An NGO claims it", description: "Vetted NGOs review items matching their immediate shelter or distribution needs and claim with one tap." },
  { number: "3", title: "A volunteer delivers", description: "A nearby volunteer receives the dispatch, picks up the package with secure OTP verification, and completes delivery." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="sf-section">
      <div className="sf-container">
        <div className="sf-section-head">
          <h2>One useful thing, passed on.</h2>
          <p>ShareForward keeps the handoff simple, visible, and close to home.</p>
        </div>
        <ol className="sf-steps">
          {steps.map((step) => (
            <li className="sf-step" key={step.number}>
              <span className="sf-step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="sf-rule" style={{ marginTop: "64px", paddingTop: "24px" }}>
          <Link className="sf-link" href="/about#verification">Learn how we verify receiving organisations</Link>
        </div>
      </div>
    </section>
  );
}
