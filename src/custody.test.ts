import { describe, expect, it } from "vitest";
import { advance, walk } from "./custody";

describe("custody steps", () => {
  it("allows the long path and a cancel, and refuses a skip", () => {
    const released = walk(["paid", "shipped", "delivered", "released"]);
    const cancelled = walk(["paid", "cancelled"]);
    expect(released.ok && released.state).toBe("released");
    expect(cancelled.ok && cancelled.state).toBe("cancelled");
    expect(walk(["paid", "delivered"]).ok).toBe(false);
    expect(walk(["paid", "shipped", "cancelled"]).ok).toBe(false);
    expect(walk(["shipped"]).ok).toBe(false);
  });

  it("starts only at paid", () => {
    const bad = walk(["shipped", "delivered"]);
    expect(bad.ok).toBe(false);
    if (bad.ok) return;
    expect(bad.reason).toMatch(/starts at paid/);
  });

  it("cancel is only from paid", () => {
    expect(advance("paid", "cancelled")).toEqual({ ok: true, state: "cancelled" });
    expect(advance("shipped", "cancelled").ok).toBe(false);
    expect(advance("delivered", "cancelled").ok).toBe(false);
  });

  it("terminal states have no next step", () => {
    expect(advance("released", "paid").ok).toBe(false);
    expect(advance("cancelled", "paid").ok).toBe(false);
  });

  it("happy path step by step", () => {
    expect(advance("paid", "shipped")).toEqual({ ok: true, state: "shipped" });
    expect(advance("shipped", "delivered")).toEqual({ ok: true, state: "delivered" });
    expect(advance("delivered", "released")).toEqual({ ok: true, state: "released" });
  });
});
