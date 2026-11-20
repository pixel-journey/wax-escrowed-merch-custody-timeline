# Education — steps a transfer does not prove

> **Rung:** `npm test` passes. A list of words. No NFT transfer is read, and none of these steps is implied by one.  
> **The test is the rule.**

## Predict, then run

A timeline must start at `paid`.

| Walk | Locked result |
| --- | --- |
| `paid → shipped → delivered → released` | state `released` |
| `paid → cancelled` | state `cancelled` |
| `paid → delivered` | not ok. Shipped cannot be skipped. |
| `paid → shipped → cancelled` | not ok. Cancel is only from `paid`. |
| `shipped` first | not ok. |

`released` and `cancelled` have no next step. A chain transfer of an NFT is not any of these words.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this machine.
