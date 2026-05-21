const lenders = [
  {
    id: "atlas-commercial-capital",
    name: "Atlas Commercial Capital",
    type: "Commercial",
    location: "National",
    description:
      "Bridge and permanent debt for stabilized retail, mixed-use, and industrial properties.",
    minAmount: 1000000,
    maxAmount: 25000000,
    rate: 7.1,
    closeDays: 24,
    baseFit: 96,
    loanPurposes: ["Purchase", "Refinance", "Bridge loan"],
    propertyTypes: ["Retail", "Industrial", "Mixed use", "Office"],
    occupancyTypes: ["Non-owner-occupied", "Investment property"],
    documentationTypes: ["Full doc", "DSCR", "Bank statement"],
    borrowerTypes: ["Business entity / LLC", "Investor"],
    productTypes: ["Bridge loan", "Private money"],
    minCreditScore: 660,
    maxLtv: 70,
    strengths: [
      "Comfortable with complex commercial real estate collateral.",
      "National footprint keeps geography from becoming a blocker.",
      "Good fit for larger requests that need institutional execution.",
    ],
    tags: ["Bridge", "Mixed use", "Industrial"],
  },
  {
    id: "harbor-residential-funding",
    name: "Harbor Residential Funding",
    type: "Residential",
    location: "West Coast",
    description:
      "Non-QM and bank-statement residential loans for purchases, refinances, and second homes.",
    minAmount: 250000,
    maxAmount: 3500000,
    rate: 8.4,
    closeDays: 42,
    baseFit: 89,
    loanPurposes: ["Purchase", "Refinance", "Cash-out refinance"],
    propertyTypes: ["Single family 1-4 units", "Condo", "Townhome"],
    occupancyTypes: ["Owner-occupied", "Second home", "Investment property"],
    documentationTypes: ["Full doc", "Bank statement", "DSCR"],
    borrowerTypes: ["Individual borrower", "Self-employed", "Investor"],
    productTypes: ["Non-QM"],
    minCreditScore: 640,
    maxLtv: 80,
    strengths: [
      "Strong Non-QM fit for borrower scenarios that need flexible income review.",
      "Supports owner-occupied, second-home, and investment residential deals.",
      "Useful when bank-statement documentation is part of the intake.",
    ],
    tags: ["Non-QM", "Bank statement", "Owner-occupied"],
  },
  {
    id: "northline-rehab-finance",
    name: "Northline Rehab Finance",
    type: "Residential",
    location: "Midwest",
    description:
      "Hard-money financing for fix-and-flip, renovation, and small residential investor projects.",
    minAmount: 100000,
    maxAmount: 2500000,
    rate: 9.6,
    closeDays: 10,
    baseFit: 93,
    loanPurposes: ["Purchase", "Renovation / rehab", "Bridge loan"],
    propertyTypes: ["Single family 1-4 units", "Condo", "Townhome", "Lots"],
    occupancyTypes: ["Non-owner-occupied", "Investment property"],
    documentationTypes: ["Stated income", "No doc", "DSCR"],
    borrowerTypes: ["Investor", "Business entity / LLC", "Foreign national"],
    productTypes: ["Hard money", "Bridge loan"],
    minCreditScore: 600,
    maxLtv: 75,
    strengths: [
      "Hard-money underwriting supports distressed and time-sensitive purchases.",
      "Fast close profile works well for auction or wholesale flip timelines.",
      "Can evaluate investor scenarios with lighter income documentation.",
    ],
    tags: ["Hard money", "Rehab", "Investor"],
  },
  {
    id: "bluepeak-private-money",
    name: "BluePeak Private Money",
    type: "Residential",
    location: "National",
    description:
      "Asset-based private money for cash-out refinances, bridge loans, and investor rentals.",
    minAmount: 100000,
    maxAmount: 5000000,
    rate: 10.2,
    closeDays: 7,
    baseFit: 85,
    loanPurposes: ["Cash-out refinance", "Bridge loan", "Refinance"],
    propertyTypes: ["Single family 1-4 units", "Condo", "Townhome", "Manufactured housing"],
    occupancyTypes: ["Non-owner-occupied", "Investment property"],
    documentationTypes: ["No doc", "Stated income", "DSCR"],
    borrowerTypes: ["Investor", "Foreign national", "Business entity / LLC"],
    productTypes: ["Private money", "Bridge loan"],
    minCreditScore: null,
    maxLtv: 65,
    strengths: [
      "Asset-based underwriting can work when FICO is not the primary filter.",
      "National coverage supports borrowers outside a single regional footprint.",
      "Fastest sample lender for scenarios where closing speed matters most.",
    ],
    tags: ["Private money", "No doc", "Fast close"],
  },
  {
    id: "summit-development-credit",
    name: "Summit Development Credit",
    type: "Commercial",
    location: "Southeast",
    description:
      "Structured private credit for construction, development, value-add assets, and complex sponsors.",
    minAmount: 5000000,
    maxAmount: 60000000,
    rate: 8.1,
    closeDays: 18,
    baseFit: 91,
    loanPurposes: ["Construction", "Development", "Bridge loan"],
    propertyTypes: ["Office", "Retail", "Industrial", "Hospitality", "Mixed use", "Land / lot"],
    occupancyTypes: ["Non-owner-occupied", "Investment property"],
    documentationTypes: ["Full doc", "Bank statement", "DSCR"],
    borrowerTypes: ["Business entity / LLC", "Investor", "Foreign national"],
    productTypes: ["Construction loan", "Private money", "Bridge loan"],
    minCreditScore: 680,
    maxLtv: 70,
    strengths: [
      "Handles larger and more structured commercial real estate requests.",
      "Private credit profile fits value-add, construction, and development stories.",
      "Can move faster than a traditional bank on complex collateral.",
    ],
    tags: ["Construction", "Development", "Value-add"],
  },
  {
    id: "keystone-investor-bank",
    name: "Keystone Investor Bank",
    type: "Commercial",
    location: "Northeast",
    description:
      "Relationship lender for commercial investors seeking DSCR, refinance, and stabilized property loans.",
    minAmount: 500000,
    maxAmount: 10000000,
    rate: 7.6,
    closeDays: 30,
    baseFit: 88,
    loanPurposes: ["Purchase", "Refinance", "Cash-out refinance"],
    propertyTypes: ["Office", "Retail", "Mixed use", "Church", "Gas station"],
    occupancyTypes: ["Owner-occupied", "Non-owner-occupied", "Investment property"],
    documentationTypes: ["Full doc", "DSCR"],
    borrowerTypes: ["Business entity / LLC", "Investor", "Self-employed"],
    productTypes: ["Private money", "Non-QM"],
    minCreditScore: 650,
    maxLtv: 75,
    strengths: [
      "Relationship-lender profile fits established property operators.",
      "Balances pricing and structure for DSCR or stabilized refinance requests.",
      "Good option when the borrower values lender support over maximum speed.",
    ],
    tags: ["DSCR", "Refinance", "Relationship"],
  },
];

const presets = {
  residential: {
    searchPath: "Residential",
    loanPurpose: "Purchase",
    amount: 2500000,
    propertyType: "Single family 1-4 units",
    occupancy: "Owner-occupied",
    city: "Los Angeles",
    state: "CA",
    creditScore: 700,
    ltv: 75,
    documentation: "Bank statement",
    borrowerType: "Self-employed",
    loanProduct: "Non-QM",
    urgency: "standard",
  },
  commercial: {
    searchPath: "Commercial",
    loanPurpose: "Bridge loan",
    amount: 8500000,
    propertyType: "Mixed use",
    occupancy: "Investment property",
    city: "Atlanta",
    state: "GA",
    creditScore: 690,
    ltv: 68,
    documentation: "DSCR",
    borrowerType: "Business entity / LLC",
    loanProduct: "Bridge loan",
    urgency: "fast",
  },
  rehab: {
    searchPath: "Residential",
    loanPurpose: "Renovation / rehab",
    amount: 650000,
    propertyType: "Single family 1-4 units",
    occupancy: "Investment property",
    city: "Chicago",
    state: "IL",
    creditScore: 620,
    ltv: 72,
    documentation: "Stated income",
    borrowerType: "Investor",
    loanProduct: "Hard money",
    urgency: "fast",
  },
};

const stateRegions = {
  AK: "West Coast",
  AL: "Southeast",
  AR: "Southeast",
  AZ: "West Coast",
  CA: "West Coast",
  CO: "West Coast",
  CT: "Northeast",
  DE: "Northeast",
  FL: "Southeast",
  GA: "Southeast",
  HI: "West Coast",
  IA: "Midwest",
  ID: "West Coast",
  IL: "Midwest",
  IN: "Midwest",
  KS: "Midwest",
  KY: "Southeast",
  LA: "Southeast",
  MA: "Northeast",
  MD: "Northeast",
  ME: "Northeast",
  MI: "Midwest",
  MN: "Midwest",
  MO: "Midwest",
  MS: "Southeast",
  MT: "West Coast",
  NC: "Southeast",
  ND: "Midwest",
  NE: "Midwest",
  NH: "Northeast",
  NJ: "Northeast",
  NM: "West Coast",
  NV: "West Coast",
  NY: "Northeast",
  OH: "Midwest",
  OK: "Midwest",
  OR: "West Coast",
  PA: "Northeast",
  RI: "Northeast",
  SC: "Southeast",
  SD: "Midwest",
  TN: "Southeast",
  TX: "Southeast",
  UT: "West Coast",
  VA: "Southeast",
  VT: "Northeast",
  WA: "West Coast",
  WI: "Midwest",
  WV: "Southeast",
  WY: "West Coast",
};

const storageKey = "blendercap-demo-shortlist";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const scenarioForm = document.querySelector("#scenario-form");
const searchForm = document.querySelector("#search-form");
const lenderGrid = document.querySelector("#lender-grid");
const template = document.querySelector("#lender-card-template");
const resultCount = document.querySelector("#result-count");
const resultLabel = document.querySelector("#result-label");
const lenderCount = document.querySelector("#lender-count");
const heroBestFit = document.querySelector("#hero-best-fit");
const heroShortlistCount = document.querySelector("#hero-shortlist-count");
const topMatchName = document.querySelector("#top-match-name");
const topMatchSummary = document.querySelector("#top-match-summary");
const topMatchMeter = document.querySelector("#top-match-meter");
const scenarioSummary = document.querySelector("#scenario-summary");
const shortlistList = document.querySelector("#shortlist-list");
const copySummaryButton = document.querySelector("#copy-summary");
const clearShortlistButton = document.querySelector("#clear-shortlist");
const copyStatus = document.querySelector("#copy-status");
const dialog = document.querySelector("#lender-dialog");
const dialogClose = document.querySelector("#dialog-close");

let rankedLenders = [];
let shortlist = loadShortlist();

function formatAmount(amount) {
  return currencyFormatter.format(amount);
}

function formatAmountRange(lender) {
  return `${formatAmount(lender.minAmount)} - ${formatAmount(lender.maxAmount)}`;
}

function getRegionForState(state) {
  return stateRegions[state] || "National";
}

function formatLocation(city, state) {
  const trimmedCity = city.trim();

  if (state === "National") {
    return trimmedCity || "National";
  }

  return trimmedCity ? `${trimmedCity}, ${state}` : state;
}

function getFormValue(form, name, fallback = "") {
  const formData = new FormData(form);
  return String(formData.get(name) || fallback);
}

function getScenario() {
  const city = getFormValue(scenarioForm, "city");
  const state = getFormValue(scenarioForm, "state", "National");

  return {
    searchPath: getFormValue(scenarioForm, "searchPath", "Residential"),
    loanPurpose: getFormValue(scenarioForm, "loanPurpose", "Purchase"),
    amount: Number(getFormValue(scenarioForm, "amount", "0")),
    propertyType: getFormValue(
      scenarioForm,
      "propertyType",
      "Single family 1-4 units",
    ),
    occupancy: getFormValue(scenarioForm, "occupancy", "Owner-occupied"),
    city,
    state,
    region: getRegionForState(state),
    creditScore: Number(getFormValue(scenarioForm, "creditScore", "0")),
    ltv: Number(getFormValue(scenarioForm, "ltv", "0")),
    documentation: getFormValue(scenarioForm, "documentation", "Full doc"),
    borrowerType: getFormValue(
      scenarioForm,
      "borrowerType",
      "Individual borrower",
    ),
    loanProduct: getFormValue(scenarioForm, "loanProduct", "Non-QM"),
    urgency: getFormValue(scenarioForm, "urgency", "standard"),
    locationLabel: formatLocation(city, state),
  };
}

function getFilters() {
  return {
    query: getFormValue(searchForm, "query").trim().toLowerCase(),
    product: getFormValue(searchForm, "product", "all"),
    amount: Number(getFormValue(searchForm, "amount", "0")),
    sort: getFormValue(searchForm, "sort", "fit"),
  };
}

function calculateFit(lender, scenario) {
  let score = Math.round(lender.baseFit * 0.08);
  const notes = [];

  if (lender.type === scenario.searchPath) {
    score += 18;
    notes.push(`${lender.type} lender path matches the borrower search.`);
  }

  if (lender.loanPurposes.includes(scenario.loanPurpose)) {
    score += 10;
    notes.push(`Supports ${scenario.loanPurpose.toLowerCase()} requests.`);
  }

  if (lender.productTypes.includes(scenario.loanProduct)) {
    score += 12;
    notes.push(`Offers ${scenario.loanProduct.toLowerCase()} financing.`);
  }

  if (scenario.amount >= lender.minAmount && scenario.amount <= lender.maxAmount) {
    score += 14;
    notes.push(`Loan size fits the ${formatAmountRange(lender)} range.`);
  } else if (scenario.amount < lender.minAmount && lender.minAmount - scenario.amount <= 500000) {
    score += 6;
    notes.push("Requested amount is near this lender's minimum.");
  } else if (scenario.amount <= lender.maxAmount) {
    score += 5;
    notes.push("Lender has enough maximum capacity for the request.");
  }

  if (lender.location === "National" || scenario.region === "National") {
    score += 8;
    notes.push("National coverage supports the selected region.");
  } else if (lender.location === scenario.region) {
    score += 10;
    notes.push(`Regional focus matches ${scenario.region}.`);
  }

  const targetDays = { fast: 14, standard: 29, flexible: 60 }[scenario.urgency];
  if (lender.closeDays <= targetDays) {
    score += 9;
    notes.push(`Estimated ${lender.closeDays}-day close fits the timeline.`);
  } else if (lender.closeDays <= targetDays + 14) {
    score += 4;
    notes.push("Close speed is close to the requested timeline.");
  }

  if (lender.propertyTypes.includes(scenario.propertyType)) {
    score += 10;
    notes.push(`Underwrites ${scenario.propertyType.toLowerCase()} property.`);
  }

  if (lender.occupancyTypes.includes(scenario.occupancy)) {
    score += 7;
  }

  if (lender.documentationTypes.includes(scenario.documentation)) {
    score += 7;
  }

  if (lender.borrowerTypes.includes(scenario.borrowerType)) {
    score += 6;
  }

  if (lender.minCreditScore === null) {
    score += 6;
    notes.push("Asset-based underwriting does not require a minimum FICO.");
  } else if (scenario.creditScore >= lender.minCreditScore) {
    score += 6;
  } else if (lender.minCreditScore - scenario.creditScore <= 40) {
    score += 3;
  }

  if (scenario.ltv > 0 && scenario.ltv <= lender.maxLtv) {
    score += 7;
    notes.push(`Requested ${scenario.ltv}% LTV is within this lender's limit.`);
  } else if (scenario.ltv > 0 && scenario.ltv <= lender.maxLtv + 5) {
    score += 3;
  }

  return {
    score: Math.min(score, 99),
    notes: notes.slice(0, 3),
  };
}

function getRankedLenders() {
  const scenario = getScenario();
  return lenders
    .map((lender) => ({
      ...lender,
      fit: calculateFit(lender, scenario),
    }))
    .sort((a, b) => b.fit.score - a.fit.score);
}

function lenderMatchesSearch(lender, filters) {
  const searchableText = [
    lender.name,
    lender.type,
    lender.location,
    lender.description,
    ...lender.loanPurposes,
    ...lender.propertyTypes,
    ...lender.occupancyTypes,
    ...lender.documentationTypes,
    ...lender.borrowerTypes,
    ...lender.productTypes,
    ...lender.tags,
    ...lender.strengths,
  ]
    .join(" ")
    .toLowerCase();

  const matchesQuery =
    filters.query.length === 0 || searchableText.includes(filters.query);
  const matchesProduct = filters.product === "all" || lender.type === filters.product;
  const matchesAmount = lender.maxAmount >= filters.amount;

  return matchesQuery && matchesProduct && matchesAmount;
}

function sortLenders(lenderList, sortBy) {
  return [...lenderList].sort((a, b) => {
    if (sortBy === "rate") {
      return a.rate - b.rate;
    }

    if (sortBy === "speed") {
      return a.closeDays - b.closeDays;
    }

    if (sortBy === "amount") {
      return b.maxAmount - a.maxAmount;
    }

    return b.fit.score - a.fit.score;
  });
}

function createDefinition(label, value) {
  const wrapper = document.createElement("div");
  const term = document.createElement("dt");
  const description = document.createElement("dd");

  term.textContent = label;
  description.textContent = value;
  wrapper.append(term, description);

  return wrapper;
}

function renderScenarioSummary() {
  const scenario = getScenario();
  scenarioSummary.replaceChildren(
    createDefinition("Search", scenario.searchPath),
    createDefinition("Purpose", scenario.loanPurpose),
    createDefinition("Amount", formatAmount(scenario.amount)),
    createDefinition("Property", scenario.propertyType),
    createDefinition("Occupancy", scenario.occupancy),
    createDefinition("Location", scenario.locationLabel),
    createDefinition("FICO / LTV", `${scenario.creditScore} / ${scenario.ltv}%`),
    createDefinition("Docs", scenario.documentation),
    createDefinition("Borrower", scenario.borrowerType),
    createDefinition("Product", scenario.loanProduct),
    createDefinition(
      "Close speed",
      {
        fast: "7-14 days",
        standard: "14-29 days",
        flexible: "30+ days",
      }[scenario.urgency],
    ),
  );
}

function renderTopMatch() {
  const topMatch = rankedLenders[0];
  if (!topMatch) {
    return;
  }

  heroBestFit.textContent = `${topMatch.fit.score}%`;
  topMatchName.textContent = topMatch.name;
  topMatchSummary.textContent =
    topMatch.fit.notes[0] || "This lender is currently the best fit for the request.";
  topMatchMeter.style.width = `${topMatch.fit.score}%`;
}

function createLenderCard(lender) {
  const card = template.content.firstElementChild.cloneNode(true);
  const isShortlisted = shortlist.includes(lender.id);

  card.dataset.lenderId = lender.id;
  card.classList.toggle("is-shortlisted", isShortlisted);
  card.querySelector(".lender-type").textContent = `${lender.type} | ${lender.location}`;
  card.querySelector("h3").textContent = lender.name;
  card.querySelector(".match-score").textContent = `${lender.fit.score}% fit`;
  card.querySelector(".description").textContent = lender.description;
  card.querySelector(".amount").textContent = formatAmountRange(lender);
  card.querySelector(".rate").textContent = `${lender.rate.toFixed(1)}%`;
  card.querySelector(".speed").textContent = `${lender.closeDays} days`;
  card.querySelector(".detail-button").dataset.lenderId = lender.id;
  card.querySelector(".shortlist-button").dataset.lenderId = lender.id;
  card.querySelector(".shortlist-button").textContent = isShortlisted ? "Saved" : "Save";

  const fitNotes = card.querySelector(".fit-notes");
  lender.fit.notes.forEach((note) => {
    const item = document.createElement("li");
    item.textContent = note;
    fitNotes.append(item);
  });

  const tags = card.querySelector(".tags");
  lender.tags.forEach((tag) => {
    const pill = document.createElement("span");
    pill.className = "tag";
    pill.textContent = tag;
    tags.append(pill);
  });

  return card;
}

function renderEmptyState() {
  const empty = document.createElement("div");
  empty.className = "empty-state";
  empty.textContent =
    "No lenders match those filters yet. Try a broader product, amount, or keyword.";
  lenderGrid.append(empty);
}

function renderLenders() {
  const filters = getFilters();
  const filteredLenders = sortLenders(
    rankedLenders.filter((lender) => lenderMatchesSearch(lender, filters)),
    filters.sort,
  );

  lenderGrid.replaceChildren();
  resultCount.textContent = filteredLenders.length;
  resultLabel.textContent = filteredLenders.length === 1 ? "match" : "matches";

  if (filteredLenders.length === 0) {
    renderEmptyState();
    return;
  }

  filteredLenders.forEach((lender) => {
    lenderGrid.append(createLenderCard(lender));
  });
}

function loadShortlist() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(parsed)
      ? parsed.filter((id) => lenders.some((lender) => lender.id === id))
      : [];
  } catch {
    return [];
  }
}

function saveShortlist() {
  localStorage.setItem(storageKey, JSON.stringify(shortlist));
}

function toggleShortlist(lenderId) {
  if (shortlist.includes(lenderId)) {
    shortlist = shortlist.filter((id) => id !== lenderId);
  } else {
    shortlist = [...shortlist, lenderId];
  }

  saveShortlist();
  renderAll();
}

function renderShortlist() {
  heroShortlistCount.textContent = `${shortlist.length} saved`;
  shortlistList.replaceChildren();

  if (shortlist.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No lenders saved yet. Add lenders from the ranked results.";
    shortlistList.append(empty);
    return;
  }

  shortlist
    .map((id) => rankedLenders.find((lender) => lender.id === id))
    .filter(Boolean)
    .forEach((lender) => {
      const item = document.createElement("article");
      item.className = "shortlist-item";

      const copy = document.createElement("div");
      const title = document.createElement("h3");
      const detail = document.createElement("p");
      title.textContent = lender.name;
      detail.textContent = `${lender.fit.score}% fit | ${formatAmountRange(
        lender,
      )} | ${lender.rate.toFixed(1)}% from`;
      copy.append(title, detail);

      const remove = document.createElement("button");
      remove.className = "button button-ghost";
      remove.type = "button";
      remove.dataset.lenderId = lender.id;
      remove.textContent = "Remove";

      item.append(copy, remove);
      shortlistList.append(item);
    });
}

function setPreset(presetName) {
  const preset = presets[presetName];
  if (!preset) {
    return;
  }

  Object.entries(preset).forEach(([name, value]) => {
    const field = scenarioForm.elements[name];
    if (field) {
      field.value = value;
    }
  });

  document.querySelectorAll("[data-preset]").forEach((button) => {
    button.classList.toggle("active", button.dataset.preset === presetName);
  });

  renderAll();
}

function updateActivePreset() {
  const scenario = getScenario();
  const activePreset = Object.entries(presets).find(([, preset]) =>
    Object.entries(preset).every(([name, value]) => scenario[name] === value),
  );

  document.querySelectorAll("[data-preset]").forEach((button) => {
    button.classList.toggle("active", activePreset?.[0] === button.dataset.preset);
  });
}

function openLenderDialog(lenderId) {
  const lender = rankedLenders.find((item) => item.id === lenderId);
  if (!lender) {
    return;
  }

  document.querySelector("#dialog-type").textContent = `${lender.type} | ${lender.location}`;
  document.querySelector("#dialog-name").textContent = lender.name;
  document.querySelector("#dialog-description").textContent = lender.description;
  document.querySelector("#dialog-amount").textContent = formatAmountRange(lender);
  document.querySelector("#dialog-rate").textContent = `${lender.rate.toFixed(1)}%`;
  document.querySelector("#dialog-speed").textContent = `${lender.closeDays} days`;

  const strengths = document.querySelector("#dialog-strengths");
  strengths.replaceChildren();
  lender.strengths.forEach((strength) => {
    const item = document.createElement("li");
    item.textContent = strength;
    strengths.append(item);
  });

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog() {
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function buildShortlistSummary() {
  const scenario = getScenario();
  const savedLenders = shortlist
    .map((id) => rankedLenders.find((lender) => lender.id === id))
    .filter(Boolean);

  if (savedLenders.length === 0) {
    return "No lenders have been shortlisted yet.";
  }

  const lines = [
    "BlenderCap demo shortlist",
    `Scenario: ${scenario.searchPath}, ${scenario.loanPurpose}, ${formatAmount(
      scenario.amount,
    )}, ${scenario.locationLabel}`,
    `Property: ${scenario.propertyType}, ${scenario.occupancy}, ${scenario.ltv}% LTV`,
    `Borrower: ${scenario.borrowerType}, ${scenario.creditScore} FICO, ${scenario.documentation}`,
    `Product: ${scenario.loanProduct}`,
    "",
    ...savedLenders.map(
      (lender) =>
        `${lender.name}: ${lender.fit.score}% fit, ${formatAmountRange(lender)}, ${lender.rate.toFixed(
          1,
        )}% from, ${lender.closeDays}-day close`,
    ),
  ];

  return lines.join("\n");
}

async function copyShortlistSummary() {
  const summary = buildShortlistSummary();

  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(summary);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = summary;
      document.body.append(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }
    copyStatus.textContent = "Shortlist summary copied.";
  } catch {
    copyStatus.textContent = summary;
  }
}

function renderAll() {
  rankedLenders = getRankedLenders();
  renderScenarioSummary();
  renderTopMatch();
  renderLenders();
  renderShortlist();
}

lenderCount.textContent = lenders.length;

scenarioForm.addEventListener("input", () => {
  updateActivePreset();
  renderAll();
});

scenarioForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

searchForm.addEventListener("input", renderLenders);
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

document.querySelectorAll("[data-preset]").forEach((button) => {
  button.addEventListener("click", () => setPreset(button.dataset.preset));
});

lenderGrid.addEventListener("click", (event) => {
  const detailButton = event.target.closest(".detail-button");
  const shortlistButton = event.target.closest(".shortlist-button");

  if (detailButton) {
    openLenderDialog(detailButton.dataset.lenderId);
  }

  if (shortlistButton) {
    toggleShortlist(shortlistButton.dataset.lenderId);
  }
});

shortlistList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("button[data-lender-id]");
  if (removeButton) {
    toggleShortlist(removeButton.dataset.lenderId);
  }
});

copySummaryButton.addEventListener("click", copyShortlistSummary);
clearShortlistButton.addEventListener("click", () => {
  shortlist = [];
  saveShortlist();
  copyStatus.textContent = "";
  renderAll();
});
dialogClose.addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeDialog();
  }
});

renderAll();
