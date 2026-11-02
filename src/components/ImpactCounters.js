"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ end, label, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || animated.current) return;
      animated.current = true;
      const start = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - start) / 1400, 1);
        setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <div ref={ref} className="sf-stat"><strong>{count.toLocaleString()}{suffix}</strong><span>{label}</span></div>;
}

export default function ImpactCounters() {
  const stats = [
    { end: 12500, label: "Kg food saved", suffix: "+" },
    { end: 8200, label: "People clothed", suffix: "+" },
    { end: 3400, label: "Books donated", suffix: "+" },
    { end: 150, label: "Partner NGOs", suffix: "+" },
  ];

  return (
    <section id="impact-counters" className="sf-section">
      <div className="sf-container">
        <div className="sf-section-head">
          <h2>Small handoffs. Real change.</h2>
          <p>Every listing is a practical bridge between what one person has and what a neighbour needs.</p>
        </div>
        <div className="sf-stat-row">{stats.map((stat) => <Counter key={stat.label} {...stat} />)}</div>
      </div>
    </section>
  );
}
