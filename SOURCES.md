# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | Token / escrow patterns |
| [eosio.token](https://github.com/eosio/eosio.contracts) | Transfer shape (sample unsent) |
| [wharfkit/skill](https://github.com/wharfkit/skill) | SessionKit if a host later pays |

```bash
git clone https://github.com/wharfkit/skill.git ~/.claude/skills/wharfkit
```

## Product facts locked by tests

- Ordered steps: **paid → shipped → delivered → released**. Skip refused.
- Cancel only from **paid** (product rule).
- A **transfer does not prove** any step.
- Sample payment unsigned; `executed: false`.

## Portability

State-machine ordering ports. Token contract, symbol, and precision (**PXJ always 8** when PXJ is the payment) are local.

## Suggested topics

`antelope` `education` `pixel-journey` `nft` `wax`
