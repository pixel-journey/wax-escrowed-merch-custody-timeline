"use client";

import { walk } from "./custody";

const steps = ["paid", "shipped", "delivered", "released"] as const;

export function Demo() {
  const path = walk(steps);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Paid, then shipped, then delivered</h1>
      <p className="lede">Skipping from paid to delivered is refused. A token transfer does not prove a later step. Nothing is held in escrow by this page.</p>
      <ol>
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      {path.ok ? <p>Ends at {path.state}.</p> : <p>{path.reason}</p>}
    </main>
  );
}
