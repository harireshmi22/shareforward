"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";

const allListings = [
  { id: "1", title: "Fresh Homemade Biryani", category: "Food", description: "25 sealed portions from a wedding reception. Cooked 2 hours ago.", status: "Urgent", location: "Koramangala, Bangalore", quantity: "25 servings", timeLeft: "3 hours left", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80" },
  { id: "2", title: "Winter Jackets & Sweaters", category: "Clothes", description: "Gently used winter wear in great condition. All sizes available.", status: "Fresh", location: "Connaught Place, Delhi", quantity: "30 pieces", timeLeft: "2 days left", image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80" },
  { id: "3", title: "NCERT Science Textbooks", category: "Books", description: "Complete set of Class 8-10 Science textbooks.", status: "Available", location: "Anna Nagar, Chennai", quantity: "45 books", timeLeft: "5 days left", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80" },
  { id: "4", title: "Packed Sandwiches & Juice", category: "Food", description: "Office cafeteria surplus. Vegetarian sandwiches with fruit juice.", status: "Urgent", location: "Bandra, Mumbai", quantity: "40 packs", timeLeft: "1 hour left", image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80" },
  { id: "5", title: "Children's Clothing Bundle", category: "Clothes", description: "New and gently used clothes for ages 2-8.", status: "Claimed", location: "Jubilee Hills, Hyderabad", quantity: "60 items", timeLeft: "Claimed", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&auto=format&fit=crop&q=80" },
  { id: "6", title: "Engineering Reference Books", category: "Books", description: "CS and ECE reference books from a recent graduate.", status: "Available", location: "Kothrud, Pune", quantity: "22 books", timeLeft: "1 week left", image: "https://images.unsplash.com/photo-1532012164546-f432f2e3777a?w=800&auto=format&fit=crop&q=80" },
];

const categories = ["All", "Food", "Clothes", "Books"];

export default function ListingsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("urgent");

  const filtered = useMemo(() => allListings
    .filter((listing) => activeCategory === "All" || listing.category === activeCategory)
    .filter((listing) => `${listing.title} ${listing.location} ${listing.description}`.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortBy === "urgent"
      ? ({ Urgent: 0, Fresh: 1, Available: 2, Claimed: 3 }[a.status] ?? 4) - ({ Urgent: 0, Fresh: 1, Available: 2, Claimed: 3 }[b.status] ?? 4)
      : 0), [activeCategory, search, sortBy]);

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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
            style={{
              background: "rgba(16, 185, 129, 0.15)",
              color: "#6ee7b7",
              border: "1px solid rgba(16, 185, 129, 0.3)",
            }}
          >
            Live Resources
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Browse Listings
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: "rgba(203, 213, 225, 0.9)" }}>
            Find surplus items near you and claim them for your community.
          </p>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path
              d="M0 30L60 27C120 24 240 18 360 21C480 24 600 36 720 39C840 42 960 36 1080 30C1200 24 1320 18 1380 15L1440 12V60H0V30Z"
              style={{ fill: "var(--bg-primary)" }}
            />
          </svg>
        </div>
      </section>

      <main className="sf-section" style={{ minHeight: "60svh" }}>
        <div className="sf-container">
          <div className="sf-listing-tools">
            <label className="sf-search">
              <span className="sf-label">Search resources</span>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by resource or location" />
            </label>
            <label className="sf-search">
              <span className="sf-label">Sort by</span>
              <select id="sort-select" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                <option value="urgent">Urgency first</option>
                <option value="recent">Most recent</option>
              </select>
            </label>
          </div>
          <div className="sf-filter-row" aria-label="Filter by category">
            {categories.map((category) => <button key={category} className={`sf-filter ${activeCategory === category ? "is-active" : ""}`} onClick={() => setActiveCategory(category)}>{category}</button>)}
          </div>
          <p className="sf-label" style={{ margin: "24px 0" }}>Showing {filtered.length} listings</p>
          {filtered.length ? <div className="sf-listing-grid">{filtered.map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div> : <div className="sf-empty"><h2>No listings found</h2><p>Try changing the search or category filter.</p></div>}
        </div>
      </main>
      <Footer />
    </>
  );
}
