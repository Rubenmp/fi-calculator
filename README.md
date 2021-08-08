# Financial Independence calculator

[Web](https://rubenmp.github.io/fi-calculator/) representing statistics about the possibility to reach financial independence.

**If you have any suggestion please create an [issue](https://github.com/Rubenmp/fi-calculator/issues)!**

## Input
Sorted by priority:

- [TODO] Net salary per month
  - Fixed
  - [TODO] Use salary distribution from a country (data scraping from somewhere)
  - [TODO] Different net salary per month each year
- Expenses per month
  - This number will be used to compute life costs (passive income required for Financial Independence)
- Years to compute
- [TODO] Investment strategy
  - [TODO] Fixed percentage 
  - [TODO] List of percentages per year
  - [TODO] Attached to an index found (MSCI World, S&P 500)
  - [TODO] T/F use Permanent Portfolio strategy (initially or after X years)
  - [TODO] Human mistakes
    - [TODO] Configure sell of X% of stocks (and next buy) after Y% of stocks downfall
- [TODO] Initial amount of money
- [TODO] Safety net: amount of money that it's not invested. If more money is available it will automatically considered invested.
- [TODO] Taxes when you take money out (default: 0%)
- [TODO] Randomness
  - [TODO] Configure X months without salary (will be assigned randomly)
- Inflation rate: It will automatically increase (or decrease) your expenses per month due to the change in the value of money.
  - Fixed
  - [TODO] Per year
- [TODO] Extra money (or expenses) specified per year
  - This field can be used in two ways
    - Positive money: it will allow to simulate salary raises.
    - Negative money: it can be used to simulate yearly money withdrawal
- [TODO] Financial independence (When does a person achieve financial independence?)
  - [TODO] Margin of error in percentage


## Output
Sorted by priority:

- [TODO] Saved money
  - At the end
  - [TODO] Year per year plot
- [TODO] Monthly passive income
- [TODO] (If distribution of net salary per month is used) Percentage of people reachng financial independence after *Years to compute* in provided country


## Deploy
This page is stored in github pages. We must run this command
```
$ ng deploy --base-href=https://rubenmp.github.io/fi-calculator/
```
if we want to have the new code available in the web. This command will update branch *gh-pages* with the index.html, css and javascript files.


## Way of working
If you want to help please follow these steps:
- Assign any [issue](https://github.com/Rubenmp/fi-calculator/issues) to you
- [Create feature branch](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- Do the issue in that branch
- Create a [pull request](https://github.com/Rubenmp/fi-calculator/pulls)

If I don't see your issues/pull request(s) please send me an email to *ruben.morales.perez@gmail.com*.
