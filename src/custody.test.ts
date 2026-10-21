import { describe, expect, it } from "vitest";
import { walk } from "./custody";

describe("custody steps", () => {
  it("allows the long path and a cancel, and refuses a skip", () => {
    const released = walk(["paid", "shipped", "delivered", "released"]);
    const cancelled = walk(["paid", "cancelled"]);
    expect(released.ok && released.state).toBe("released");
    expect(cancelled.ok && cancelled.state).toBe("cancelled");
    expect(walk(["paid", "delivered"]).ok).toBe(false);
  });
});
