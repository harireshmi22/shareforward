import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    Platform: [
      { label: "How it works", href: "/about#how-it-works" },
      { label: "Browse listings", href: "/listings" },
      { label: "Donate surplus", href: "/dashboard/create" },
      { label: "Partner NGOs", href: "/about#partners" },
    ],
    Community: [
      { label: "About us", href: "/about" },
      { label: "Impact report", href: "/about#impact" },
      { label: "Volunteer", href: "/register" },
      { label: "Contact", href: "/about#contact" },
    ],
    Legal: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
      { label: "Cookie policy", href: "#" },
    ],
  };

  return (
    <footer className="sf-footer">
      <div className="sf-container">
        <div className="sf-footer-grid">
          <div>
            <Link href="/" className="sf-wordmark">ShareForward</Link>
            <p>Connecting generous hearts with those in need. Reduce waste, spread kindness — one donation at a time.</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4>{title}</h4>
              <ul>{links.map((link) => <li key={link.label}><Link href={link.href}>{link.label}</Link></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="sf-footer-bottom">
          <span>ShareForward · community resource sharing.</span>
          <span>Reducing waste. Spreading kindness. Building community.</span>
        </div>
      </div>
    </footer>
  );
}
