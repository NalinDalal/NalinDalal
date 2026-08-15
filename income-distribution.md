# Income Distribution

How much goes to savings, expenses, and other buckets — by income bracket.

## Bracket Selector

```mermaid
flowchart TD
    Start["Your income (LPA)?"] --> Decide{Income bracket}
    Decide -->|"< 10 LPA"| B1["Plan C"]
    Decide -->|"10–15 LPA"| B2["Plan B"]
    Decide -->|"16–30 LPA"| B3["Plan A"]
    Decide -->|"> 30 LPA"| B4["Harkirat"]
    B1 --> P1
    B2 --> P2
    B3 --> P3
    B4 --> P4
```

## Plan C — below 10 LPA

Lean survival: fixed costs eat the most, minimum forced savings.

```mermaid
pie title Below 10 LPA
    "Expenses" : 45
    "SIP / funds" : 30
    "Liquid asset" : 20
```

## Plan B — 10–15 LPA

Savings-first: biggest single bucket goes to saving/investing.

```mermaid
pie title 10-15 LPA
    "Home" : 30
    "Expenses" : 25
    "Saving / Investing" : 45
```

## Plan A — 16–30 LPA

Retirement-first: retirement + home dominate, expenses capped at a third.

```mermaid
pie title 16-30 LPA
    "Retirement" : 40
    "Home" : 30
    "Expenses" : 30
```

## Harkirat — above 30 LPA

Asset-allocation heavy: no fixed savings/expense split, everything is capital.

```mermaid
pie title Above 30 LPA
    "Real estate" : 50
    "Crypto (bull or bear no matter)" : 25
    "Cash" : 13
    "Gold" : 5
    "Equity" : 5
    "US equity" : 2
```