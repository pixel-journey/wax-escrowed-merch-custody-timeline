# Security — merch custody steps

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Order | paid → shipped → delivered → released |
| Skip | refused |
| Cancel | only from **paid** |
| Transfer alone | does **not** advance a step |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Live payment | Sample is unsigned |
| Carrier proof | Not integrated |
| Dispute resolution | Out of scope |

## Attack angles

1. Treating an on-chain transfer as automatic "delivered".  
2. Skipping shipped.  
3. Cancelling after shipped without a new product rule.  
4. Broadcasting the sample payment from unit tests.

## Honesty limits

State machine only. Prefer WharfKit SessionKit for real payments. **PXJ precision is always 8** when PXJ is the payment asset.

[docs.wax.io](https://docs.wax.io/)
