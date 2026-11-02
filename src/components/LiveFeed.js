"use client";

import ListingCard from "./ListingCard";

const sampleListings = [
  { id: "1", title: "Fresh Homemade Biryani", category: "Food", description: "25 sealed portions from a wedding reception. Cooked 2 hours ago, completely fresh.", status: "Urgent", location: "Koramangala, Bangalore", quantity: "25 servings", timeLeft: "3 hours left", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80" },
  { id: "2", title: "Winter Jackets & Sweaters", category: "Clothes", description: "Gently used winter wear in great condition. All sizes available. Cleaned and packed.", status: "Fresh", location: "Connaught Place, Delhi", quantity: "30 pieces", timeLeft: "2 days left", image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80" },
  { id: "3", title: "NCERT Science Textbooks", category: "Books", description: "Complete set of Class 8-10 Science textbooks. Perfect for underprivileged students.", status: "Available", location: "Anna Nagar, Chennai", quantity: "45 books", timeLeft: "5 days left", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80" },
  { id: "4", title: "Packed Sandwiches & Juice", category: "Food", description: "Office cafeteria surplus. Vegetarian sandwiches with fresh fruit juice boxes.", status: "Urgent", location: "Bandra, Mumbai", quantity: "40 packs", timeLeft: "1 hour left", image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80" },
  { id: "5", title: "Children's Clothing Bundle", category: "Clothes", description: "New and gently used clothes for ages 2-8. Donated by a children's store closing sale.", status: "Claimed", location: "Jubilee Hills, Hyderabad", quantity: "60 items", timeLeft: "Claimed", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&auto=format&fit=crop&q=80" },
  { id: "6", title: "Engineering Reference Books", category: "Books", description: "CS and ECE reference books from a recent graduate. Good condition with clear diagrams.", status: "Available", location: "Kothrud, Pune", quantity: "22 books", timeLeft: "1 week left", image: "https://images.unsplash.com/photo-1532012164546-f432f2e3777a?w=800&auto=format&fit=crop&q=80" },
];

export default function LiveFeed() {
  return (
    <section id="live-feed" className="sf-section sf-section--deep">
      <div className="sf-container">
        <div className="sf-section-head">
          <h2>What is moving today</h2>
          <p>See what is available right now. Browse a listing, claim it for your organisation, and arrange the handoff.</p>
        </div>
        <div className="sf-listing-grid">{sampleListings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div>
        <div style={{ marginTop: "40px" }}>
          <a className="sf-link" href="/listings">Explore all surplus listings</a>
        </div>
      </div>
    </section>
  );
}
