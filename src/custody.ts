/**
 * Allowed merch steps. A transfer does not prove any of these.
 */

export type Step = "paid" | "shipped" | "delivered" | "released" | "cancelled";

const NEXT: Record<Step, readonly Step[]> = {
  paid: ["shipped", "cancelled"],
  shipped: ["delivered"],
  delivered: ["released"],
  released: [],
  cancelled: [],
};

export function advance(from: Step, to: Step): { ok: true; state: Step } | { ok: false; reason: string } {
  if (!NEXT[from]) return { ok: false, reason: "unknown state" };
  if (!NEXT[from].includes(to)) return { ok: false, reason: `${from} cannot go to ${to}` };
  return { ok: true, state: to };
}

export function walk(steps: readonly Step[]): { ok: true; state: Step } | { ok: false; reason: string } {
  if (steps[0] !== "paid") return { ok: false, reason: "a timeline starts at paid" };
  let state: Step = "paid";
  for (const step of steps.slice(1)) {
    const moved = advance(state, step);
    if (!moved.ok) return moved;
    state = moved.state;
  }
  return { ok: true, state };
}
