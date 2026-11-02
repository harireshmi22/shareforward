import Link from "next/link";

export default function DashboardOverview() {
  const stats = [
    { label: "Active listings", value: "3" },
    { label: "Items claimed", value: "12" },
    { label: "Items delivered", value: "8" },
    { label: "Impact score", value: "340" },
  ];

  const recentActivity = [
    { text: 'Your listing "Fresh Biryani" was claimed by Helping Hands NGO', time: "2 hours ago" },
    { text: 'Volunteer Rahul picked up "Winter Jackets" for delivery', time: "5 hours ago" },
    { text: '"NCERT Textbooks" successfully delivered to ABC Foundation', time: "1 day ago" },
    { text: 'You created a new listing: "Packed Lunch Boxes"', time: "2 days ago" },
  ];

  return (
    <div className="sf-dashboard-overview sf-fade-in">
      <header className="sf-dashboard-intro">
        <div>
          <p className="sf-dashboard-kicker">Your giving desk</p>
          <h1>Dashboard</h1>
          <p>Keep an eye on what you have shared, what is moving, and what happens next.</p>
        </div>
        <Link className="sf-button" href="/dashboard/create">Create listing</Link>
      </header>

      <section className="sf-dashboard-stats" aria-label="Donation summary">
        {stats.map((stat) => (
          <article className="sf-dashboard-stat" key={stat.label}>
            <div className="sf-dashboard-stat-mark" aria-hidden="true" />
            <div className="sf-dashboard-stat-value">{stat.value}</div>
            <div className="sf-dashboard-stat-label">{stat.label}</div>
          </article>
        ))}
      </section>

      <section className="sf-dashboard-panels">
        <article className="sf-dashboard-panel">
          <div className="sf-dashboard-panel-head">
            <h2>Recent activity</h2>
            <Link href="/dashboard/donations">View donations</Link>
          </div>
          <div className="sf-dashboard-activity">
            {recentActivity.map((activity) => (
              <div className="sf-dashboard-activity-item" key={`${activity.text}-${activity.time}`}>
                <span className="sf-dashboard-activity-dot" aria-hidden="true" />
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="sf-dashboard-panel">
          <div className="sf-dashboard-panel-head">
            <h2>Make something useful happen</h2>
          </div>
          <div className="sf-dashboard-actions">
            <Link className="sf-dashboard-action" href="/dashboard/create">
              <span className="sf-dashboard-action-mark" aria-hidden="true">+</span>
              <span>
                <h3>Create a new listing</h3>
                <p>Post surplus food, clothes, or books.</p>
              </span>
            </Link>
            <Link className="sf-dashboard-action" href="/listings">
              <span className="sf-dashboard-action-mark" aria-hidden="true">↗</span>
              <span>
                <h3>Browse and claim</h3>
                <p>Find nearby resources that need a home.</p>
              </span>
            </Link>
          </div>
        </article>
      </section>

      <section className="sf-dashboard-panel">
        <div className="sf-dashboard-panel-head">
          <h2>Donation status tracker</h2>
          <span className="sf-label">Current handoff</span>
        </div>
        <DonationTimeline />
      </section>
    </div>
  );
}

function DonationTimeline() {
  const steps = ["Posted", "Claimed", "Volunteer assigned", "Picked up", "Delivered"];

  return (
    <div className="sf-dashboard-timeline">
      <div className="sf-dashboard-timeline-track">
        {steps.map((step, index) => {
          const status = index < 3 ? "is-done" : index === 3 ? "is-current" : "";
          return (
            <div className="sf-dashboard-timeline-step" key={step}>
              <div>
                <div className={`sf-dashboard-timeline-node ${status}`} aria-label={`${step}: ${status === "is-done" ? "done" : status === "is-current" ? "current" : "pending"}`}>
                  {index < 3 ? "✓" : index + 1}
                </div>
                <div className={`sf-dashboard-timeline-label ${status ? "is-active" : ""}`}>{step}</div>
              </div>
              {index < steps.length - 1 && <div className={`sf-dashboard-timeline-line ${index < 2 ? "is-done" : ""}`} aria-hidden="true" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
