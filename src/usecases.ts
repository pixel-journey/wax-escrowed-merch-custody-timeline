import { CHAIN_ORIGIN, active, currencyBalance } from "./api";
import { walk } from "./custody";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const path = walk(["paid", "shipped", "delivered", "released"]);
if (!path.ok) throw new Error(path.reason);
const done = path;

export const USE_CASES: UseCase[] = [
  {
    title: "The balance beside a merch payment",
    detail: `The local timeline ends at ${done.state}. A balance is not a shipment. The request is not sent.`,
    request: currencyBalance(CHAIN_ORIGIN, "alice"),
    transaction: null,
  },
  {
    title: "Unsigned payment. Later steps are not in the memo.",
    detail: "paid to delivered in one jump is refused. This transfer does not hold escrow and it is not broadcast.",
    request: currencyBalance(CHAIN_ORIGIN, "bob"),
    transaction: {
      note: "Not broadcast. shipped, delivered, and released are not fields of this action.",
      actions: [
        active("alice", {
          account: "eosio.token",
          name: "transfer",
          data: { from: "alice", to: "bob", quantity: "1.00000000 WAX", memo: "merch" },
        }),
      ],
    },
  },
];

export function assertUseCases(): void {
  if (done.state !== "released") throw new Error(done.state);
  if (walk(["paid", "delivered"]).ok) throw new Error("skip");
}
