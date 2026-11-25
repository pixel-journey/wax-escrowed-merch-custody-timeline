# Education — steps a transfer does not prove

> **Rung:** `npm test` passes. A list of words. No NFT transfer is read, and none of these steps is implied by one.  
> **The test is the rule.** Static milestone titles (no skip rule): [wax-phygital-redemption-milestone-stepper](https://github.com/pixel-journey/wax-phygital-redemption-milestone-stepper).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Walk paid → shipped → delivered → released |
| Intermediate | Cancel only from paid; refuse skips |
| Masterclass | Separate the state machine from an AtomicAssets transfer |

---

## Beginner — one scene

A timeline must start at `paid`.

| Walk | Locked result |
| --- | --- |
| `paid → shipped → delivered → released` | state `released` |
| `paid → cancelled` | state `cancelled` |
| `paid → delivered` | not ok — shipped cannot be skipped |
| `paid → shipped → cancelled` | not ok — cancel only from `paid` |
| `shipped` first | not ok |

`released` and `cancelled` have no next step.

```bash
npm test
```

---

## Intermediate

| Rule | Detail |
| --- | --- |
| Start | must be `paid` |
| Cancel | only from `paid` |
| Skip | refused (no paid→delivered) |
| Terminal | `released`, `cancelled` |

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Skip shipped | refused |
| Cancel after ship | refused |
| NFT transfer as proof of shipped | not this machine |

### Exercises

1. Can you cancel after shipped? (**No**.)  
2. paid → delivered ok? (**No**.)  
3. Does a transfer prove a step? (**No**.)

---

## Masterclass

Phygital products need real logistics evidence. This lab only enforces word order on a pure state machine. An `atomicassets::transfer` is never any of these steps by itself.

---

## What this course will not teach

- Carrier APIs
- On-chain escrow balances
- That `released` is a burn or unlock transaction
