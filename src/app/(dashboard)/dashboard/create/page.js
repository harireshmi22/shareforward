"use client";

import { useState } from "react";

export default function CreateListingPage() {
  const [category, setCategory] = useState("Food");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    quantity: "",
    location: "",
    availableUntil: "",
    // Food extras
    vegNonVeg: "veg",
    hoursCooked: "",
    safetyCertified: false,
    // Clothes extras
    size: "M",
    condition: "Good",
    ageGroup: "Adult",
    // Books extras
    subject: "",
    gradeLevel: "",
    language: "English",
  });
  const [dragOver, setDragOver] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const categories = [
    { value: "Food", icon: "F", color: "var(--dashboard-accent)", bg: "var(--dashboard-accent-soft)" },
    { value: "Clothes", icon: "C", color: "var(--dashboard-accent)", bg: "var(--dashboard-accent-soft)" },
    { value: "Books", icon: "B", color: "var(--dashboard-warm)", bg: "color-mix(in oklch, var(--dashboard-warm) 14%, var(--paper))" },
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer?.files?.[0] || e.target?.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => setImagePreview(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const inputStyle = {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border-primary)",
    color: "var(--text-primary)",
  };

  return (
    <div className="sf-dashboard-form-page animate-fade-in max-w-3xl">
      <div className="sf-page-intro">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: "var(--text-primary)" }}>
          Create New Listing
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Share your surplus with those who need it.
        </p>
      </div>

      {success && (
        <div
          className="flex items-center gap-2 p-4 rounded-xl text-sm mb-6 animate-bounce-in"
          style={{
            background: "rgba(34, 197, 94, 0.1)",
            color: "#22c55e",
            border: "1px solid rgba(34, 197, 94, 0.2)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Listing created successfully! It&apos;s now live for NGOs to claim.
        </div>
      )}

      <form onSubmit={handleSubmit} className="sf-form-stack space-y-6">
        {/* Category Selector */}
        <div
          className="p-6 rounded-2xl"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-primary)",
          }}
        >
          <label className="block text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
            Category
          </label>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setCategory(cat.value)}
                className={`p-4 rounded-xl text-center transition-all duration-200 cursor-pointer ${
                  category === cat.value ? "ring-2 ring-emerald-500 -translate-y-0.5 shadow-md" : ""
                }`}
                style={{
                  background: category === cat.value ? cat.bg : "var(--bg-secondary)",
                  border: `1px solid ${category === cat.value ? cat.color + "40" : "var(--border-primary)"}`,
                }}
              >
                <span className="text-3xl block mb-2">{cat.icon}</span>
                <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  {cat.value}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Common Fields */}
        <div
          className="p-6 rounded-2xl space-y-5"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-primary)",
          }}
        >
          <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
            Basic Information
          </h3>

          {/* Title */}
          <div>
            <label htmlFor="listing-title" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
              Title
            </label>
            <input
              id="listing-title"
              type="text"
              required
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="e.g., Fresh Homemade Biryani"
              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
              style={inputStyle}
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="listing-desc" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
              Description
            </label>
            <textarea
              id="listing-desc"
              required
              rows={3}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Describe your items, condition, and any important details..."
              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none"
              style={inputStyle}
            />
          </div>

          {/* Image Upload Dropzone */}
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
              Photo (optional)
            </label>
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleImageDrop}
              className={`relative rounded-xl border-2 border-dashed p-8 text-center transition-all duration-200 cursor-pointer ${
                dragOver ? "border-emerald-500 bg-emerald-500/5" : ""
              }`}
              style={{
                borderColor: dragOver ? "#10b981" : "var(--border-primary)",
              }}
            >
              {imagePreview ? (
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-h-40 mx-auto rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setImagePreview(null)}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div>
                  <svg
                    className="mx-auto mb-3"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p className="text-sm mb-1" style={{ color: "var(--text-secondary)" }}>
                    Drag & drop an image or{" "}
                    <label className="text-emerald-500 font-medium cursor-pointer hover:underline">
                      browse
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageDrop}
                      />
                    </label>
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                    PNG, JPG up to 5MB
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Quantity + Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="listing-qty" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                Quantity
              </label>
              <input
                id="listing-qty"
                type="text"
                required
                value={formData.quantity}
                onChange={(e) => handleChange("quantity", e.target.value)}
                placeholder="e.g., 25 servings"
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                style={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="listing-location" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                Location
              </label>
              <input
                id="listing-location"
                type="text"
                required
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="e.g., Koramangala, Bangalore"
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Available Until */}
          <div>
            <label htmlFor="listing-expiry" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
              Available Until
            </label>
            <input
              id="listing-expiry"
              type="datetime-local"
              required
              value={formData.availableUntil}
              onChange={(e) => handleChange("availableUntil", e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Category-specific Fields */}
        {category === "Food" && (
          <div
            className="p-6 rounded-2xl space-y-5 animate-fade-in"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(16,185,129,0.2)",
            }}
          >
            <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
              🍲 Food Details
            </h3>

            {/* Veg/Non-Veg Toggle */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>
                Type
              </label>
              <div className="flex gap-2">
                {["veg", "non-veg"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleChange("vegNonVeg", type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                      formData.vegNonVeg === type ? "shadow-md -translate-y-0.5" : ""
                    }`}
                    style={{
                      background:
                        formData.vegNonVeg === type
                          ? type === "veg"
                            ? "rgba(34,197,94,0.15)"
                            : "rgba(239,68,68,0.15)"
                          : "var(--bg-secondary)",
                      color:
                        formData.vegNonVeg === type
                          ? type === "veg"
                            ? "#22c55e"
                            : "#ef4444"
                          : "var(--text-secondary)",
                      border: `1px solid ${
                        formData.vegNonVeg === type
                          ? type === "veg"
                            ? "rgba(34,197,94,0.3)"
                            : "rgba(239,68,68,0.3)"
                          : "var(--border-primary)"
                      }`,
                    }}
                  >
                    {type === "veg" ? "🟢 Vegetarian" : "🔴 Non-Vegetarian"}
                  </button>
                ))}
              </div>
            </div>

            {/* Hours since cooked */}
            <div>
              <label htmlFor="hours-cooked" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                Hours since cooked
              </label>
              <input
                id="hours-cooked"
                type="number"
                min="0"
                value={formData.hoursCooked}
                onChange={(e) => handleChange("hoursCooked", e.target.value)}
                placeholder="e.g., 2"
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                style={inputStyle}
              />
            </div>

            {/* Safety Disclaimer */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.safetyCertified}
                onChange={(e) => handleChange("safetyCertified", e.target.checked)}
                className="mt-0.5 w-5 h-5 rounded accent-emerald-500 cursor-pointer"
              />
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                I certify that this food is fresh, safely prepared, and fit for consumption. I accept responsibility for food quality.
              </span>
            </label>
          </div>
        )}

        {category === "Clothes" && (
          <div
            className="p-6 rounded-2xl space-y-5 animate-fade-in"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
              👕 Clothing Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="clothes-size" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                  Size
                </label>
                <select
                  id="clothes-size"
                  value={formData.size}
                  onChange={(e) => handleChange("size", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none cursor-pointer"
                  style={inputStyle}
                >
                  {["XS", "S", "M", "L", "XL", "XXL", "Mixed"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="clothes-condition" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                  Condition
                </label>
                <select
                  id="clothes-condition"
                  value={formData.condition}
                  onChange={(e) => handleChange("condition", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none cursor-pointer"
                  style={inputStyle}
                >
                  {["New", "Good", "Gently Used"].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="clothes-age" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                  Age Group
                </label>
                <select
                  id="clothes-age"
                  value={formData.ageGroup}
                  onChange={(e) => handleChange("ageGroup", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none cursor-pointer"
                  style={inputStyle}
                >
                  {["Infant", "Kids", "Teen", "Adult", "Senior"].map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {category === "Books" && (
          <div
            className="p-6 rounded-2xl space-y-5 animate-fade-in"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(245,158,11,0.2)",
            }}
          >
            <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
              📚 Book Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="book-subject" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                  Subject / Genre
                </label>
                <input
                  id="book-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  placeholder="e.g., Science, Fiction"
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="book-grade" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                  Class / Grade Level
                </label>
                <input
                  id="book-grade"
                  type="text"
                  value={formData.gradeLevel}
                  onChange={(e) => handleChange("gradeLevel", e.target.value)}
                  placeholder="e.g., Class 8-10"
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="book-lang" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                  Language
                </label>
                <select
                  id="book-lang"
                  value={formData.language}
                  onChange={(e) => handleChange("language", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none cursor-pointer"
                  style={inputStyle}
                >
                  {["English", "Hindi", "Tamil", "Telugu", "Kannada", "Bengali", "Marathi", "Other"].map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          id="create-listing-submit"
          disabled={submitting || (category === "Food" && !formData.safetyCertified)}
          className="w-full py-4 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 cursor-pointer"
          style={{
            background: submitting ? "var(--text-tertiary)" : "linear-gradient(135deg, #10b981, #059669)",
          }}
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" style={{ animation: "spin-slow 1s linear infinite" }}>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="31.4" strokeLinecap="round" />
              </svg>
              Publishing listing...
            </span>
          ) : (
            "Publish Listing"
          )}
        </button>
        {category === "Food" && !formData.safetyCertified && (
          <p className="text-xs text-center" style={{ color: "var(--text-tertiary)" }}>
            Please certify food safety before publishing.
          </p>
        )}
      </form>
    </div>
  );
}
