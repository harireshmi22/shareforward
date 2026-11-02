"use client";

import { useState } from "react";
import { StatusBadge } from "@/components/ListingCard";

const donationHistory = [
  {
    id: "1",
    title: "Fresh Homemade Biryani",
    category: "Food",
    status: "Delivered",
    claimedBy: "Helping Hands NGO",
    volunteer: "Rahul Verma",
    date: "Oct 10, 2026",
    quantity: "25 servings",
  },
  {
    id: "2",
    title: "Winter Jackets & Sweaters",
    category: "Clothes",
    status: "In Transit",
    claimedBy: "Warm Hearts Foundation",
    volunteer: "Priya Singh",
    date: "Oct 11, 2026",
    quantity: "30 pieces",
  },
  {
    id: "3",
    title: "NCERT Science Textbooks",
    category: "Books",
    status: "Claimed",
    claimedBy: "ABC Education Trust",
    volunteer: "Pending",
    date: "Oct 12, 2026",
    quantity: "45 books",
  },
  {
    id: "4",
    title: "Packed Lunch Boxes",
    category: "Food",
    status: "Posted",
    claimedBy: "—",
    volunteer: "—",
    date: "Oct 13, 2026",
    quantity: "40 packs",
  },
];

const statusMap = {
  Posted: { label: "Available", badge: "Available" },
  Claimed: { label: "Claimed", badge: "Claimed" },
  "In Transit": { label: "Fresh", badge: "Fresh" },
  Delivered: { label: "Fresh", badge: "Fresh" },
};

const categoryIcons = { Food: "F", Clothes: "C", Books: "B" };

export default function DonationsPage() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Posted", "Claimed", "In Transit", "Delivered"];

  const filtered = donationHistory.filter(
    (d) => filter === "All" || d.status === filter
  );

  return (
    <div className="sf-dashboard-donations animate-fade-in">
      <div className="sf-page-intro">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: "var(--text-primary)" }}>
          My Donations
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Track all your donations and their current status.
        </p>
      </div>

      {/* Filter pills */}
      <div className="sf-donation-filters flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
              filter === f ? "text-white shadow-md" : ""
            }`}
            style={
              filter === f
                ? { background: "linear-gradient(135deg, #10b981, #059669)" }
                : {
                    color: "var(--text-secondary)",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-primary)",
                  }
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Donation Cards */}
      <div className="space-y-4">
        {filtered.map((donation) => (
          <div
            key={donation.id}
            className="group p-5 rounded-2xl transition-all duration-300 hover:shadow-md"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-primary)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Icon */}
                <div className="sf-donation-category" aria-hidden="true">
                  {categoryIcons[donation.category]}
                </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-sm truncate" style={{ color: "var(--text-primary)" }}>
                    {donation.title}
                  </h3>
                  <StatusBadge status={donation.status === "Delivered" || donation.status === "In Transit" ? "Fresh" : donation.status === "Claimed" ? "Claimed" : "Available"} />
                </div>
                <div className="sf-donation-meta flex flex-wrap gap-x-4 gap-y-1 text-xs" style={{ color: "var(--text-tertiary)" }}>
                  <span><b>Date</b> {donation.date}</span>
                  <span><b>Quantity</b> {donation.quantity}</span>
                  <span><b>Claimed by</b> {donation.claimedBy}</span>
                  <span><b>Volunteer</b> {donation.volunteer}</span>
                </div>
              </div>

              {/* Status pill */}
              <div
                className="px-3 py-1.5 rounded-lg text-xs font-semibold flex-shrink-0"
                style={{
                  background:
                    donation.status === "Delivered"
                      ? "rgba(34,197,94,0.1)"
                      : donation.status === "In Transit"
                      ? "rgba(245,158,11,0.1)"
                      : donation.status === "Claimed"
                      ? "rgba(59,130,246,0.1)"
                      : "rgba(148,163,184,0.1)",
                  color:
                    donation.status === "Delivered"
                      ? "#22c55e"
                      : donation.status === "In Transit"
                      ? "#f59e0b"
                      : donation.status === "Claimed"
                      ? "#3b82f6"
                      : "var(--text-tertiary)",
                }}
              >
                {donation.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <span className="text-5xl mb-4 block">📭</span>
          <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>
            No donations found
          </h3>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Try changing the filter or create a new listing.
          </p>
        </div>
      )}
    </div>
  );
}
