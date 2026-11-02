import Link from "next/link";
import Image from "next/image";

const categoryLabels = { Food: "Food", Clothes: "Clothes", Books: "Books" };

export function StatusBadge({ status }) {
  return <span className="sf-label sf-status">{status}</span>;
}

export default function ListingCard({ listing }) {
  const {
    id = "1",
    title = "Fresh Homemade Meals",
    category = "Food",
    description = "Leftover from a community event. Sealed and safe.",
    status = "Fresh",
    location = "Koramangala, Bangalore",
    quantity = "15 servings",
    timeLeft = "3 hours left",
    image = null,
  } = listing || {};

  return (
    <Link href={`/listing/${id}`} id={`listing-card-${id}`} className="sf-card">
      <div className="sf-card-image">
        {image ? <Image src={image} alt={title} fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" unoptimized /> : null}
      </div>
      <div className="sf-card-body">
        <div className="sf-card-meta" style={{ borderTop: 0, paddingTop: 0, paddingBottom: "12px" }}>
          <span>{categoryLabels[category] || category}</span>
          <StatusBadge status={status} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="sf-card-meta">
          <span>{location}</span>
          <span>{timeLeft}</span>
        </div>
        <span className="sf-card-link">{status === "Claimed" ? "View claim status" : `View details · ${quantity}`}</span>
      </div>
    </Link>
  );
}
