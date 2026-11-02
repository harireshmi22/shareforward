import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImpactCounters from "@/components/ImpactCounters";
import LiveFeed from "@/components/LiveFeed";
import HowItWorks from "@/components/HowItWorks";

export const metadata = {
  title: "ShareForward — Don't Waste, Share Forward",
  description:
    "A community platform connecting donors with verified NGOs and volunteers to reduce waste and distribute surplus food, clothes, and books to people in need.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero" className="sf-hero">
          <div className="sf-container sf-hero-grid">
            <div className="sf-fade-in">
              <p className="sf-label sf-hero-kicker">Good things deserve a second home</p>
              <h1>Your extra can mean everything.</h1>
              <p className="sf-hero-summary">
                Share surplus food, clothes, and books with verified NGOs. Give useful resources a second life and help them reach the people who need them.
              </p>
              <div className="sf-hero-actions">
                <Link href="/register" id="cta-donate" className="sf-button">Share a Resource</Link>
                <Link href="/listings" id="cta-claim" className="sf-button sf-button--quiet">Explore Available Resources</Link>
              </div>
              <p className="sf-label" style={{ marginTop: "24px" }}>Less waste. More sharing. Stronger communities.</p>
            </div>

            <div className="sf-board sf-fade-in" style={{ animationDelay: "120ms" }}>
              <div className="sf-board-head">
                <div>
                  <strong>Available resources</strong>
                  <div className="sf-label">Example listings from the current feed</div>
                </div>
                <span className="sf-label">Today</span>
              </div>
              <ul className="sf-board-list">
                <li className="sf-board-item"><div><strong>Fresh homemade biryani</strong><span>25 servings · Koramangala</span></div><span className="sf-board-status">3 hours left</span></li>
                <li className="sf-board-item"><div><strong>Winter jackets &amp; sweaters</strong><span>30 pieces · Connaught Place</span></div><span className="sf-board-status">2 days left</span></li>
                <li className="sf-board-item"><div><strong>NCERT science textbooks</strong><span>45 books · Anna Nagar</span></div><span className="sf-board-status">5 days left</span></li>
              </ul>
              <div style={{ padding: "16px 20px", borderTop: "1px solid var(--rule)", color: "var(--ink-muted)", fontSize: "0.8rem" }}>
                Every listing has a person waiting on the other side.
              </div>
            </div>
          </div>
        </section>
        <section className="sf-section sf-section--deep" id="categories">
          <div className="sf-container">
            <div className="sf-section-head">
              <h2>Resources that keep moving</h2>
              <p>Browse by what you have to share or what your community needs next.</p>
            </div>
            <div className="sf-category-grid">
              <article className="sf-category">
                <div className="sf-category-icon" aria-hidden="true">F</div>
                <h3>Food &amp; groceries</h3>
                <p>Help surplus food reach community kitchens and people who need it.</p>
                <Link className="sf-link" href="/listings?category=Food">Browse food</Link>
              </article>
              <article className="sf-category">
                <div className="sf-category-icon" aria-hidden="true">C</div>
                <h3>Clothing &amp; essentials</h3>
                <p>Give usable clothes and everyday essentials a second life.</p>
                <Link className="sf-link" href="/listings?category=Clothes">Browse clothing</Link>
              </article>
              <article className="sf-category">
                <div className="sf-category-icon" aria-hidden="true">B</div>
                <h3>Books &amp; education</h3>
                <p>Connect unused books and learning materials with students and educational organisations.</p>
                <Link className="sf-link" href="/listings?category=Books">Browse books</Link>
              </article>
            </div>
          </div>
        </section>
        <ImpactCounters />
        <LiveFeed />
        <HowItWorks />
        <section className="sf-section">
          <div className="sf-container">
            <div className="sf-section-head">
              <h2>Built for a clear handoff.</h2>
              <p>ShareForward keeps resource details, claim status, and collection information visible so each participant knows what happens next.</p>
            </div>
            <div className="sf-steps">
              <div className="sf-step"><span className="sf-step-number">✓</span><h3>Verified participation</h3><p>Receiving organisations join through the platform’s verification flow.</p></div>
              <div className="sf-step"><span className="sf-step-number">→</span><h3>Clear resource information</h3><p>Quantity, location, category, and availability stay attached to every listing.</p></div>
              <div className="sf-step"><span className="sf-step-number">↗</span><h3>Transparent claim status</h3><p>Donors and NGOs can follow the progress from listing to collection.</p></div>
            </div>
          </div>
        </section>
        <section id="cta-section" className="sf-cta">
          <div className="sf-container">
            <h2>Make the next handoff yours.</h2>
            <p>Whether you are sharing a meal, clearing a shelf, or helping with a pickup, there is a useful place for you here.</p>
            <div style={{ marginTop: "28px" }}><Link href="/register" className="sf-button">Join ShareForward free</Link></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
