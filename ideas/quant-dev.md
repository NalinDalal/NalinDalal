# Quant Dev

## Tier 1 (Foundations)

### C++/Python

- **Programming: Principles and Practices Using C++** — Bjarne Stroustrup (a bit old but good fundamental book)
- **Effective Modern C++** — Scott Meyers (my fav)
- **C++ Concurrency in Action** — Anthony Williams (great to learn about multithreading)
- **Fluent Python** — Luciano Ramalho (a bit intermediate, can do it if you have basic python knowledge)
- **Automate the Boring Stuff with Python** — Al Sweigart (perfect for complete beginners to learn syntax)

### Maths: Linear Algebra, Probability, Stats, Calculus (M1, M2 is sufficient)

**Linear Algebra**

- **Linear Algebra Done Right** — Sheldon Axler (perfect book and I feel probably the only book that's enough to get into quant)
- **Introduction to Linear Algebra** — Gilbert Strang (classic MIT theory - can do if you start getting a thing for algebra)
- **Matrix Analysis** — Horn & Johnson (absolutely not necessary for quant but can be used to go in-depth)

**Probability & Statistics**

- **Prob & Stats: The Science of Uncertainty** — University of Toronto (this book is very good - should solve the practice assignments)
- **Probability and Statistics** — Morris H. DeGroot & Mark Schervish (a book that was suggested by a few of my seniors, can have a look at it)
- **NPTEL Prob & Stats course by Somesh Kumar Sir** (IIT KGP) — (indeed a good explanation if you wanna skim through theory via video tutorials - one of my good friends from KGP suggested it)

**Calculus**

- **Calculus** — James Stewart (it is a good beginner book to start with)
- **Calculus** — Thomas & Finney (I did this one for my engineering mathematics, pretty much sufficient for quant)

### Finance basics

- **Zerodha Varsity modules** (ultimate resource, you can't really ask for anything else for beginners for finance & trading)
- **A Beginner's Guide to the Stock Market** — Matthew Kratter (honestly a good book but won't be needed if you cover Varsity)
- **Options Volatility and Pricing** (personal favourite book but a bit advanced)
- **Options, Futures and Other Derivatives** — John C Hull (gold standard book to deep dive into finance & quant)

### DSA (Data Structure and Algorithms)

---

## Tier 2 (Intermediate)

### ML (and its use in trading)

- **Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow** — Aurélien Géron (probably the best book to start ML)
- **100 Days of ML** — Campus X (a great friend of mine on X suggested this in combination with the first book and it's actually a good combination to understand theory in detail)
- **Introduction to Statistical Learning (ISLR)** — (covers a lot of mathematical intuition, not mandatory but very good)

**Specialised ML books for Quant/Finance**

- **Machine Learning for Asset Managers** — Marcos López de Prado (really great book for application of ML for asset management, explore it once you're good with Python, finance and basic ML)
- **Machine Learning for Trading** — Stefan Jansen (practically covers almost all the topics of ML we use in finance - also make use of the official GitHub repo, it has a lot of useful content)
- **Quantitative Portfolio Management** — Michael Isichenko (book for application of ML for portfolio management models)
- **Advances in Financial Machine Learning** — Marcos López de Prado (considered the John C Hull of applicative ML books for finance, heavily adapted and used a lot by quant funds)

### Quant + coding projects

**1) Backtesting engine (multi-strategy + multi-asset class)**

- Build your own backtesting engine (Python preferred) and add good backtesting metrics to it (drawdown, Sharpe/Calmar ratio) and try to cover for multiple strategies working on multiple asset classes

**2) Trading bot (Live or paper trading)**

- Try to at least implement a few trading bots for basic strategies — EMA divergence, RSI crossovers, supertrend channel reversions — can use Binance API to create this for crypto for free as most of the Indian APIs charge for these API keys

**3) Option Chain analytics dashboard**

- Pull NSE/Binance option chain data and analyze option greeks, IV (implied volatility), PCR (put-call ratio), expiry graph and try to create a Streamlit dashboard for users to visualise them
- Adding different option pricing models to this would be a great plus, making the project more detailed and complex

**4) Alpha Signal research engine**

- Create mean reversion/momentum signals using price, volatility, volume and rank them up via Sharpe/hit ratios — extending them as multi-factor models (like Worldquant style) would be a great plus

**5) Live market data handler (multi-timeframe data handler)**

- Create your own market data handler for aggregating ticks into candles — main issue to overcome in this project would be to handle the tick latency and correct database handling, also try to add complexity by calculating real time 10-12+ indicators for these candles

#### CP contests

---

## Tier 3 (Advanced)

### Research & alpha papers

- **SSRN (Social Science Research Network)** — honestly probably the best resource out there for quant/finance research papers
- **arXiv Quantitative Finance Section** — it has a lot of good research papers related to applications of ML for quant finance
- **WorldQuant Brain** — the Brain platform has a lot of good research papers which can be read mostly for alpha research and generation

### Interview Prep

- **Heard on the Street** — Timothy Crack (covers mental math, brainteaser puzzles and quant questions which are asked in interviews)
- **The Puzzle Palace** (by Jane Street alum) — (a great book for puzzle practice for interviews)
- **Quant Job Interview Questions and Answers** — Xinfeng Zhou (has a lot of quant questions which are real-life asked in interviews, definitely should be done)
- **Fifty Challenging Problems in Probability** — Frederick Mosteller (classic set of problem books)