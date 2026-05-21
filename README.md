# BlenderCap Lender Search Demo

A self-contained, usable demo site for matching borrower scenarios with lender
options. The demo is a static web app configured for Vercel hosting.

## What is included

- Guided borrower scenario builder with residential, commercial, and rehab
  investor presets.
- Step 1 borrower-search fields for loan purpose, amount, property type,
  occupancy, location, FICO, LTV, documentation, borrower type, product type,
  and closing speed.
- Scenario-based lender fit scoring with ranked results and match reasons.
- Search, lender path, amount, and sort controls for exploring the lender network.
- Lender detail dialog with underwriting strengths and deal-fit context.
- Persistent shortlist with copyable summary for a borrower or relationship
  manager handoff.
- Responsive styling for desktop and mobile demo walkthroughs.

## Run the demo

Open `index.html` directly in a browser, or serve the folder locally:

```bash
npm start
```

Then visit `http://localhost:8080`.

## Run the demo

Open `index.html` directly in a browser, or serve the folder locally:

```bash
npm run dev
```

Then visit `http://localhost:3000`.

## Validation

To validate the static site:

```bash
npm run verify
```

## Demo flow

1. Choose a scenario preset or edit the borrower search fields from Step 1.
2. Review the recommended next lender and ranked results.
3. Open lender details to inspect why a lender fits the scenario.
4. Save lenders to the shortlist and copy the generated handoff summary.
