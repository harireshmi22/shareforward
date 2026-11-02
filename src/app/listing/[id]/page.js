import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const instant = false;

export const metadata = {
  title: "Listing Details — ShareForward",
  description: "View and claim surplus items on ShareForward.",
};

const allListings = [
  { id: "1", title: "Fresh Homemade Biryani", category: "Food", description: "25 sealed portions from a wedding reception. Cooked 2 hours ago.", status: "Urgent", location: "Koramangala, Bangalore", quantity: "25 servings", timeLeft: "3 hours left", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80" },
  { id: "2", title: "Winter Jackets & Sweaters", category: "Clothes", description: "Gently used winter wear in great condition. All sizes available.", status: "Fresh", location: "Connaught Place, Delhi", quantity: "30 pieces", timeLeft: "2 days left", image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80" },
  { id: "3", title: "NCERT Science Textbooks", category: "Books", description: "Complete set of Class 8-10 Science textbooks.", status: "Available", location: "Anna Nagar, Chennai", quantity: "45 books", timeLeft: "5 days left", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80" },
  { id: "4", title: "Packed Sandwiches & Juice", category: "Food", description: "Office cafeteria surplus. Vegetarian sandwiches with fruit juice.", status: "Urgent", location: "Bandra, Mumbai", quantity: "40 packs", timeLeft: "1 hour left", image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80" },
  { id: "5", title: "Children's Clothing Bundle", category: "Clothes", description: "New and gently used clothes for ages 2-8. Sorted by size and carefully cleaned.", status: "Claimed", location: "Jubilee Hills, Hyderabad", quantity: "60 items", timeLeft: "Claimed", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&auto=format&fit=crop&q=80" },
  { id: "6", title: "Engineering Reference Books", category: "Books", description: "CS and ECE reference books from a recent graduate.", status: "Available", location: "Kothrud, Pune", quantity: "22 books", timeLeft: "1 week left", image: "https://images.unsplash.com/photo-1532012164546-f432f2e3777a?w=800&auto=format&fit=crop&q=80" },
];

const statusColors = {
  Urgent:    { bg: "#fef2f2", text: "#dc2626", border: "#fecaca" },
  Fresh:     { bg: "#f0fdf4", text: "#16a34a", border: "#bbf7d0" },
  Available: { bg: "#eff6ff", text: "#2563eb", border: "#bfdbfe" },
  Claimed:   { bg: "#f5f3ff", text: "#7c3aed", border: "#ddd6fe" },
};

const categoryIcons = {
  Food:    "🍽️",
  Clothes: "👕",
  Books:   "📚",
};

export default async function ListingPage({ params }) {
  const { id } = await params;
  const listing = allListings.find((l) => l.id === id);

  if (!listing) {
    return (
      <>
        <Navbar />
        {/* Hero banner */}
        <section
          className="relative pt-36 pb-20 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #022c22, #064e3b, #047857)" }}
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
            <h1 className="text-4xl font-extrabold text-white mb-4">Listing not found</h1>
            <p style={{ color: "rgba(203,213,225,0.9)" }}>This listing may have expired or been removed.</p>
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-bold text-white"
              style={{ background: "rgba(16,185,129,0.25)", border: "1px solid rgba(16,185,129,0.4)" }}
            >
              ← Back to listings
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
              <path d="M0 30L60 27C120 24 240 18 360 21C480 24 600 36 720 39C840 42 960 36 1080 30C1200 24 1320 18 1380 15L1440 12V60H0V30Z" style={{ fill: "var(--bg-primary)" }} />
            </svg>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const sc = statusColors[listing.status] ?? statusColors.Available;

  return (
    <>
      <Navbar />

      {/* Hero banner — same style as About page */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #022c22, #064e3b, #047857)" }}
      >
        {/* Ambient blobs */}
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Link
            href="/listings"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-opacity hover:opacity-80"
            style={{ color: "rgba(167,243,208,0.9)", textDecoration: "none" }}
          >
            ← Browse listings
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            {/* Category pill */}
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{
                background: "rgba(16,185,129,0.15)",
                color: "#6ee7b7",
                border: "1px solid rgba(16,185,129,0.3)",
              }}
            >
              {categoryIcons[listing.category]} {listing.category}
            </span>

            {/* Status pill */}
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}
            >
              {listing.status}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            {listing.title}
          </h1>

          <p className="text-lg max-w-2xl" style={{ color: "rgba(203,213,225,0.85)" }}>
            {listing.description}
          </p>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path
              d="M0 30L60 27C120 24 240 18 360 21C480 24 600 36 720 39C840 42 960 36 1080 30C1200 24 1320 18 1380 15L1440 12V60H0V30Z"
              style={{ fill: "var(--bg-primary)" }}
            />
          </svg>
        </div>
      </section>

      {/* Detail body */}
      <main className="py-16" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* Image */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "4/3",
                background: "var(--paper-deep)",
                border: "1px solid var(--rule)",
                boxShadow: "var(--shadow)",
              }}
            >
              {listing.image && (
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  unoptimized
                />
              )}
            </div>

            {/* Info card */}
            <div
              className="rounded-2xl p-7 flex flex-col gap-5"
              style={{
                background: "var(--paper-soft)",
                border: "1px solid var(--rule)",
                boxShadow: "var(--shadow)",
              }}
            >
              {/* Meta rows */}
              <dl className="grid grid-cols-1 gap-4">
                {[
                  { label: "📍 Location", value: listing.location },
                  { label: "📦 Quantity", value: listing.quantity },
                  { label: "⏱ Time left", value: listing.timeLeft },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid var(--rule)" }}>
                    <dt className="text-sm font-semibold" style={{ color: "var(--ink-muted)" }}>{label}</dt>
                    <dd className="text-sm font-bold" style={{ color: "var(--ink)" }}>{value}</dd>
                  </div>
                ))}
              </dl>

              {/* CTA */}
              {listing.status !== "Claimed" ? (
                <button
                  type="button"
                  className="sf-button w-full"
                  style={{
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    border: "none",
                    color: "#fff",
                    borderRadius: "var(--radius-md)",
                    minHeight: "52px",
                    fontSize: "1rem",
                  }}
                >
                  Claim this listing
                </button>
              ) : (
                <div
                  className="w-full py-3 text-center rounded-xl text-sm font-bold"
                  style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}
                >
                  This listing has been claimed
                </div>
              )}

              <p className="text-xs text-center" style={{ color: "var(--ink-muted)" }}>
                Verified listing · ShareForward connects donors with NGOs and volunteers.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
