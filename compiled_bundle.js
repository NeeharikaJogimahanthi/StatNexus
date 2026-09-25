import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const {
  useState,
  useEffect,
  useMemo
} = React;

// -------------------------------------------------------------------------
// OFFICIAL iGOT KARMAYOGI VECTOR EMBLEM
// -------------------------------------------------------------------------
function KarmayogiLogo({
  size = 42
}) {
  return /*#__PURE__*/_jsxs("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "shrink-0 shadow-sm rounded-xl",
    children: [/*#__PURE__*/_jsxs("defs", {
      children: [/*#__PURE__*/_jsxs("linearGradient", {
        id: "shieldGrad",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%",
        children: [/*#__PURE__*/_jsx("stop", {
          offset: "0%",
          stopColor: "#1E3A8A"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "100%",
          stopColor: "#0F172A"
        })]
      }), /*#__PURE__*/_jsxs("linearGradient", {
        id: "goldGrad",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%",
        children: [/*#__PURE__*/_jsx("stop", {
          offset: "0%",
          stopColor: "#FDE047"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "50%",
          stopColor: "#EAB308"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "100%",
          stopColor: "#CA8A04"
        })]
      }), /*#__PURE__*/_jsxs("linearGradient", {
        id: "tricolor",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%",
        children: [/*#__PURE__*/_jsx("stop", {
          offset: "0%",
          stopColor: "#FF9933"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "50%",
          stopColor: "#FFFFFF"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "100%",
          stopColor: "#138808"
        })]
      })]
    }), /*#__PURE__*/_jsx("rect", {
      width: "100",
      height: "100",
      rx: "22",
      fill: "url(#shieldGrad)"
    }), /*#__PURE__*/_jsx("rect", {
      x: "3",
      y: "3",
      width: "94",
      height: "94",
      rx: "19",
      stroke: "url(#goldGrad)",
      strokeWidth: "2.5",
      fill: "none",
      opacity: "0.85"
    }), /*#__PURE__*/_jsx("circle", {
      cx: "50",
      cy: "48",
      r: "32",
      stroke: "url(#goldGrad)",
      strokeWidth: "1.5",
      strokeDasharray: "3 3"
    }), /*#__PURE__*/_jsx("circle", {
      cx: "50",
      cy: "48",
      r: "26",
      stroke: "#60A5FA",
      strokeWidth: "1.2",
      opacity: "0.6"
    }), /*#__PURE__*/_jsx("path", {
      d: "M50 26 L68 48 L50 70 L32 48 Z",
      fill: "#1D4ED8",
      stroke: "url(#goldGrad)",
      strokeWidth: "2"
    }), /*#__PURE__*/_jsx("circle", {
      cx: "50",
      cy: "48",
      r: "7",
      fill: "url(#goldGrad)"
    }), /*#__PURE__*/_jsx("circle", {
      cx: "50",
      cy: "48",
      r: "3.5",
      fill: "#0F172A"
    }), /*#__PURE__*/_jsx("line", {
      x1: "50",
      y1: "20",
      x2: "50",
      y2: "26",
      stroke: "url(#goldGrad)",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/_jsx("line", {
      x1: "50",
      y1: "70",
      x2: "50",
      y2: "76",
      stroke: "url(#goldGrad)",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/_jsx("line", {
      x1: "22",
      y1: "48",
      x2: "32",
      y2: "48",
      stroke: "url(#goldGrad)",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/_jsx("line", {
      x1: "68",
      y1: "48",
      x2: "78",
      y2: "48",
      stroke: "url(#goldGrad)",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/_jsx("rect", {
      x: "20",
      y: "85",
      width: "60",
      height: "4",
      rx: "2",
      fill: "url(#tricolor)"
    })]
  });
}

// -------------------------------------------------------------------------
// DETERMINISTIC VECTOR SVG CIVIL SERVANT AVATAR GENERATOR
// Works 100% offline, guaranteed unique visual for EVERY email
// -------------------------------------------------------------------------
function generateOfficerSvg(seedStr, isFemale) {
  let hash = 0;
  const str = (seedStr || "official").toLowerCase();
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i) * (i + 1);
    hash |= 0;
  }
  hash = Math.abs(hash);
  const bgPalettes = [["#1e3a8a", "#0f172a"],
  // Deep Navy
  ["#065f46", "#022c22"],
  // Emerald
  ["#581c87", "#2e1065"],
  // Royal Purple
  ["#831843", "#500724"],
  // Maroon
  ["#1e293b", "#0f172a"],
  // Charcoal
  ["#0369a1", "#082f49"] // Sapphire
  ];
  const bg = bgPalettes[hash % bgPalettes.length];
  const skinTones = ["#f8d5b8", "#e6b38a", "#d29054", "#b57138", "#8d5524"];
  const skin = skinTones[hash % skinTones.length];
  const suitColors = ["#1e293b", "#1e3a8a", "#064e3b", "#312e81", "#374151", "#701a75"];
  const suit = suitColors[hash % suitColors.length];
  const shirtColors = ["#ffffff", "#f0f9ff", "#fefce8", "#fdf4ff"];
  const shirt = shirtColors[hash % shirtColors.length];
  const tieColors = ["#dc2626", "#eab308", "#2563eb", "#059669", "#ea580c", "#7c3aed"];
  const tie = tieColors[hash % tieColors.length];
  const hairColors = ["#171717", "#262626", "#3f3f46", "#451a03"];
  const hair = hairColors[hash % hairColors.length];
  const hasGlasses = hash % 3 === 0;
  const gradId = "bgGrad_" + hash;
  return /*#__PURE__*/_jsxs("svg", {
    viewBox: "0 0 100 100",
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("defs", {
      children: /*#__PURE__*/_jsxs("linearGradient", {
        id: gradId,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%",
        children: [/*#__PURE__*/_jsx("stop", {
          offset: "0%",
          stopColor: bg[0]
        }), /*#__PURE__*/_jsx("stop", {
          offset: "100%",
          stopColor: bg[1]
        })]
      })
    }), /*#__PURE__*/_jsx("rect", {
      width: "100",
      height: "100",
      rx: "22",
      fill: `url(#${gradId})`
    }), /*#__PURE__*/_jsx("path", {
      d: "M12 100 C12 76 28 70 50 70 C72 70 88 76 88 100 Z",
      fill: suit
    }), /*#__PURE__*/_jsx("polygon", {
      points: "38,70 50,86 62,70",
      fill: shirt
    }), isFemale ? /*#__PURE__*/_jsx("path", {
      d: "M28 74 Q42 85 50 96 Q58 85 72 74",
      stroke: tie,
      strokeWidth: "3.5",
      fill: "none",
      strokeLinecap: "round"
    }) : /*#__PURE__*/_jsx("polygon", {
      points: "48,74 52,74 53.5,94 50,100 46.5,94",
      fill: tie
    }), /*#__PURE__*/_jsx("path", {
      d: "M28 70 L44 88 L38 100",
      stroke: "#000",
      strokeWidth: "1.2",
      opacity: "0.3",
      fill: "none"
    }), /*#__PURE__*/_jsx("path", {
      d: "M72 70 L56 88 L62 100",
      stroke: "#000",
      strokeWidth: "1.2",
      opacity: "0.3",
      fill: "none"
    }), /*#__PURE__*/_jsx("circle", {
      cx: "27",
      cy: "83",
      r: "3.2",
      fill: "#eab308"
    }), /*#__PURE__*/_jsx("circle", {
      cx: "27",
      cy: "83",
      r: "1.8",
      fill: "#1e3a8a"
    }), /*#__PURE__*/_jsx("rect", {
      x: "44",
      y: "56",
      width: "12",
      height: "16",
      rx: "4",
      fill: skin
    }), /*#__PURE__*/_jsx("ellipse", {
      cx: "50",
      cy: "45",
      rx: "18",
      ry: "21",
      fill: skin
    }), /*#__PURE__*/_jsx("circle", {
      cx: "31",
      cy: "46",
      r: "3.5",
      fill: skin
    }), /*#__PURE__*/_jsx("circle", {
      cx: "69",
      cy: "46",
      r: "3.5",
      fill: skin
    }), isFemale ? /*#__PURE__*/_jsxs("g", {
      children: [/*#__PURE__*/_jsx("path", {
        d: "M30 46 C29 20 71 20 70 46 C66 30 34 30 30 46 Z",
        fill: hair
      }), /*#__PURE__*/_jsx("circle", {
        cx: "50",
        cy: "38",
        r: "1.8",
        fill: "#dc2626"
      })]
    }) : /*#__PURE__*/_jsx("path", {
      d: "M31 40 C31 24 69 24 69 40 C65 28 35 28 31 40 Z",
      fill: hair
    }), /*#__PURE__*/_jsx("circle", {
      cx: "43",
      cy: "45",
      r: "2",
      fill: "#1e293b"
    }), /*#__PURE__*/_jsx("circle", {
      cx: "57",
      cy: "45",
      r: "2",
      fill: "#1e293b"
    }), /*#__PURE__*/_jsx("path", {
      d: "M39 41 Q43 39 47 41",
      stroke: hair,
      strokeWidth: "1.6",
      strokeLinecap: "round",
      fill: "none"
    }), /*#__PURE__*/_jsx("path", {
      d: "M53 41 Q57 39 61 41",
      stroke: hair,
      strokeWidth: "1.6",
      strokeLinecap: "round",
      fill: "none"
    }), /*#__PURE__*/_jsx("path", {
      d: "M45 54 Q50 58 55 54",
      stroke: "#475569",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      fill: "none"
    }), hasGlasses && /*#__PURE__*/_jsxs("g", {
      stroke: "#334155",
      strokeWidth: "1.4",
      fill: "none",
      children: [/*#__PURE__*/_jsx("rect", {
        x: "37",
        y: "41",
        width: "11",
        height: "8",
        rx: "2.5"
      }), /*#__PURE__*/_jsx("rect", {
        x: "52",
        y: "41",
        width: "11",
        height: "8",
        rx: "2.5"
      }), /*#__PURE__*/_jsx("line", {
        x1: "48",
        y1: "45",
        x2: "52",
        y2: "45"
      })]
    })]
  });
}

// -------------------------------------------------------------------------
// DYNAMIC AVATAR COMPONENT
// Generates unique avatar for EVERY mail (Dicebear with bespoke SVG fallback)
// -------------------------------------------------------------------------
function OfficerAvatar({
  email = "",
  name = "",
  gender = "male",
  size = "md",
  className = ""
}) {
  const [useFallback, setUseFallback] = useState(false);
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-11 h-11 text-sm",
    lg: "w-16 h-16 text-lg",
    xl: "w-20 h-20 text-xl"
  };
  const isFemale = gender === "female" || /^(Smt|Priya|Sunita|Anita|Ananya|Meera|Rani|Shweta|Kavita|Deepa|Neha)/i.test(name) || /^(priya|sunita|ananya|anita|meera|shweta|kavita|deepa|neha)/i.test(email.split("@")[0] || "");
  const seed = (email || name || "official_officer").trim().toLowerCase();
  const dicebearUrl = isFemale ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}&gender=female&clothingColor=3c4f76,264e36,6d28d9,047857&hair=straight01,straight02,dreads01&mouth=smile&eyes=happy` : `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}&gender=male&clothingColor=1f2937,1e3a8a,0f172a,1e40af&hair=short01,short02&facialHairProbability=15&mouth=smile&eyes=happy`;
  return /*#__PURE__*/_jsx("div", {
    className: `relative ${sizeClasses[size] || "w-11 h-11"} rounded-2xl overflow-hidden shadow-sm shrink-0 border border-slate-700/30 ${className}`,
    children: useFallback ? generateOfficerSvg(seed, isFemale) : /*#__PURE__*/_jsx("img", {
      src: dicebearUrl,
      alt: name || "Officer",
      onError: () => setUseFallback(true),
      className: "w-full h-full object-cover"
    }, dicebearUrl)
  });
}

// -------------------------------------------------------------------------
// OFFICIAL EMPLOYEE EXAMPLES (1-Click Evaluation)
// -------------------------------------------------------------------------
const OFFICIAL_EXAMPLES = [{
  id: "rajesh_verma",
  name: "Dr. Rajesh Verma, ISS",
  gender: "male",
  email: "rajesh.verma@mospi.gov.in",
  designation: "Director / Regional Operations Head",
  cadre: "ISS (Group A)",
  organization: "Ministry of Statistics & Programme Implementation",
  division: "Data Informatics & Innovation Division (DIID)",
  activeAssignment: "PLFS Round 82 Scrutiny & SNA 2025 Transition",
  domain: "sampling"
}, {
  id: "priya_sharma",
  name: "Smt. Priya Sharma, ISS",
  gender: "female",
  email: "priya.sharma@gov.in",
  designation: "Joint Director (National Accounts)",
  cadre: "ISS (Group A)",
  organization: "Central Statistics Office (CSO NAD)",
  division: "National Accounts Division",
  activeAssignment: "Digital Asset Valuation & Gross Capital Formation Modernization",
  domain: "accounts"
}, {
  id: "amit_kumar",
  name: "Shri Amit Kumar, SSS",
  gender: "male",
  email: "amit.kumar@nic.in",
  designation: "Senior Statistical Officer",
  cadre: "SSS (Group B)",
  organization: "National Informatics Centre & DPD",
  division: "Data Processing Division (DPD)",
  activeAssignment: "Automated Microdata Scrutiny & Imputation Rules",
  domain: "python"
}, {
  id: "vikram_singh",
  name: "Er. Vikram Singh",
  gender: "male",
  email: "vikram.singh@bhel.in",
  designation: "Chief Data Engineer / Industrial Analyst",
  cadre: "PSU Enterprise Officer",
  organization: "Bharat Heavy Electricals Limited (BHEL)",
  division: "Corporate Analytics & Strategic Planning",
  activeAssignment: "Industrial Production & Energy Statistics Reconciliation",
  domain: "psu_ops"
}, {
  id: "sunita_rao",
  name: "Smt. Sunita Rao",
  gender: "female",
  email: "sunita.rao@hpcl.co.in",
  designation: "Senior Statistical Analyst",
  cadre: "PSU Enterprise Officer",
  organization: "Hindustan Petroleum Corporation Limited (HPCL)",
  division: "Petrochemical Market Analytics & Supply Chain",
  activeAssignment: "Refinery Energy Accounting & Demand Forecasting",
  domain: "psu_ops"
}];

// -------------------------------------------------------------------------
// STATISTICAL & ENTERPRISE DOMAINS
// -------------------------------------------------------------------------
const DOMAIN_OPTIONS = [{
  id: "sampling",
  label: "Survey Design & Sampling Theory",
  icon: "📊"
}, {
  id: "accounts",
  label: "National Accounts & Macroeconomics (SNA)",
  icon: "🏛️"
}, {
  id: "labour",
  label: "Labour & Enterprise Surveys (PLFS/ASI)",
  icon: "📋"
}, {
  id: "python",
  label: "Technical: Python, R & Data Scrutiny",
  icon: "🐍"
}, {
  id: "governance",
  label: "Digital Governance, Public Policy & Data Privacy",
  icon: "🛡️"
}, {
  id: "psu_ops",
  label: "PSU Operations, Energy & Supply Chain Analytics",
  icon: "⚡"
}];

// -------------------------------------------------------------------------
// COMPREHENSIVE QUESTION BANK (6 DOMAINS x 3 DIFFICULTY LEVELS x 3 QUESTIONS = 54)
// -------------------------------------------------------------------------
const QUESTION_BANK = {
  // 1. Sampling & Survey Methodology
  sampling: {
    Easy: [{
      id: "s_e_1",
      topic: "Sampling Units",
      competency: "Survey Execution & CAPI",
      question: "In standard multi-stage survey design, what distinguishes a Primary Sampling Unit (PSU) from an Ultimate Sampling Unit (SSU)?",
      options: ["PSUs are the first-stage administrative clusters (e.g. Census villages/urban blocks), while SSUs are the final sampled households.", "PSUs are always individual factories, while SSUs are nationwide industry sectors.", "PSUs and SSUs are interchangeable terms with no methodological difference.", "PSUs are only surveyed once every ten years in decennial population censuses."],
      correct: 0,
      citation: "NSSTA Survey Design Handbook — Section 1.2",
      explanation: "In multi-stage sampling, PSUs represent first-stage clusters (FSUs/PSUs), within which ultimate sample units (households/enterprises) are listed."
    }, {
      id: "s_e_2",
      topic: "Sampling Frames",
      competency: "Frame Validation",
      question: "What is the primary statistical consequence of using an outdated urban frame during household listing?",
      options: ["Coverage error (under-coverage of newly urbanized colonies and over-coverage of demolished dwellings).", "Immediate hardware breakdown of the enumerator's CAPI tablet.", "Automatic doubling of the district population multiplier.", "Zero variance across all survey estimates."],
      correct: 0,
      citation: "NSSO FOD Field Manual — Chapter 1",
      explanation: "An obsolete frame leads to coverage bias, omitting newly constructed settlements and listing non-existent structures."
    }, {
      id: "s_e_3",
      topic: "Doorstep Sample Selection",
      competency: "Probability Sampling",
      question: "Why must enumerators strictly follow circular systematic sampling instead of purposive household selection?",
      options: ["To ensure every listed household has a known, non-zero probability of selection, eliminating subjective investigator bias.", "To minimize the physical walking distance between interviewed households.", "To interview only households that own motorized vehicles.", "To ensure all surveyed households belong to the same income quintile."],
      correct: 0,
      citation: "NSSTA Basic Sampling Guidelines — Module 2",
      explanation: "Probability sampling requires known non-zero selection probabilities to guarantee design-unbiased estimates."
    }],
    Medium: [{
      id: "s_m_1",
      topic: "Hamlet-Group Formation",
      competency: "Field Listing & Sub-sampling",
      question: "Under NSSO FOD listing protocols, when a sampled village exceeds 1,200 households, what procedure is mandatory?",
      options: ["Divide the village into artificial Hamlet-Groups (HGs) of approximately equal population size and randomly select two HGs for detailed listing.", "Survey only the households located within 50 meters of the Gram Panchayat office.", "Drop the village from the sample and substitute with an adjacent smaller village.", "List all 1,200 households in a single continuous schedule on the tablet."],
      correct: 0,
      citation: "NSSO FOD Field Investigators Manual — Chapter 2",
      explanation: "Hamlet-Group formation prevents listing fatigue, ensuring manageable and unbiased second-stage household listing."
    }, {
      id: "s_m_2",
      topic: "Stratified Allocation",
      competency: "Sample Allocation Theory",
      question: "Under Neyman Optimal Allocation, how are sample sizes distributed across sub-strata with unequal variances?",
      options: ["Higher sample size is allocated to strata that are larger and exhibit greater internal variance.", "Equal sample size is distributed to all strata regardless of variance.", "Sample size is allocated purely in inverse proportion to strata population.", "Strata with high variance are completely discarded from the frame."],
      correct: 0,
      citation: "Sampling Theory & Methods — Chapter 4",
      explanation: "Neyman allocation minimizes overall variance for a fixed sample size by weighting both stratum size and standard deviation."
    }, {
      id: "s_m_3",
      topic: "Non-Response Weighting",
      competency: "Multiplier Adjustments",
      question: "When households in a primary sampling unit refuse interview, how is the sampling weight (multiplier) adjusted?",
      options: ["Inflated by the inverse of the response rate within the same socio-economic sub-stratum.", "Multiplied by zero and discarded from population aggregate tables.", "Permanently assigned to the nearest urban district.", "Replaced by the national median household income parameter."],
      correct: 0,
      citation: "DPD Estimation & Weighting Methodology — Section 5",
      explanation: "Non-response adjustment factors scale up the weights of responding units within the same homogeneous sub-stratum."
    }],
    Hard: [{
      id: "s_h_1",
      topic: "Design Effect & Intra-Cluster Correlation",
      competency: "Complex Survey Inference",
      question: "In Two-Stage Stratified Cluster Sampling (PLFS Round 81), how is the design effect (Deff) minimized when intra-class correlation (rho) in Primary Sampling Units is high?",
      options: ["Increase the number of PSUs (FSUs) sampled while reducing the number of Ultimate Sampling Units (SSUs) per cluster.", "Double the sample size of households within existing clusters without changing FSU count.", "Switch entirely to Simple Random Sampling without stratification across frames.", "Exclude all self-weighting sub-strata from the sampling frame."],
      correct: 0,
      citation: "NSSTA Advanced Sampling Manual — Section 4.1",
      explanation: "When intra-cluster correlation is high, units within a cluster duplicate information. Sampling more clusters with fewer elements per cluster minimizes variance."
    }, {
      id: "s_h_2",
      topic: "Small Area Estimation (SAE)",
      competency: "Fay-Herriot Modeling",
      question: "In Fay-Herriot Small Area Estimation models for district-level poverty indicators, how are direct survey estimators combined with synthetic model predictors?",
      options: ["Weighted by the ratio of sampling variance to total model variance (Empirical Best Linear Unbiased Predictor - EBLUP).", "By simple arithmetic averaging without considering design variance.", "By replacing direct survey estimates with national census averages whenever sample size is below 50.", "By applying principal component analysis to eliminate all auxiliary administrative covariates."],
      correct: 0,
      citation: "MoSPI Small Area Estimation Monograph — Chapter 3",
      explanation: "The Fay-Herriot EBLUP borrows strength from auxiliary administrative covariates, shrinking direct estimates toward the model regression line based on sampling reliability."
    }, {
      id: "s_h_3",
      topic: "Replication Variance Estimation",
      competency: "Resampling & Jackknife",
      question: "When estimating the standard error of non-linear ratios (such as Gini coefficient of expenditure), why is Balanced Repeated Replication (BRR) preferred over Taylor Series linearization?",
      options: ["It directly accounts for complex multi-stage stratification and clustering without requiring analytical derivative approximations.", "It eliminates the need for calculating survey design weights.", "It reduces the required survey sample size by 50%.", "It guarantees identical estimates across all computer architectures."],
      correct: 0,
      citation: "Advanced Survey Methodology — Section 8.4",
      explanation: "Replication methods capture design variance directly from pseudo-replicate weights, avoiding tedious analytical derivatives of complex non-linear statistics."
    }]
  },
  // 2. National Accounts & Macroeconomics (SNA)
  accounts: {
    Easy: [{
      id: "a_e_1",
      topic: "GDP Fundamentals",
      competency: "Macroeconomic Aggregates",
      question: "What are the three conceptually equivalent approaches used in national accounts to compile Gross Domestic Product (GDP)?",
      options: ["Production (Output) Approach, Income Approach, and Expenditure Approach.", "Cash Balance Approach, Speculative Approach, and Fiscal Deficit Approach.", "Export-Import Differential, Forex Reserves, and Bank Repo Rate.", "Population Growth Factor, Agricultural Monsoon Index, and Sensex Volume."],
      correct: 0,
      citation: "CSO National Accounts Compilation Guide — Chapter 1",
      explanation: "GDP measures the monetary value of final goods/services via Production (Output), Income generated, and Final Expenditure."
    }, {
      id: "a_e_2",
      topic: "Nominal vs Real GDP",
      competency: "Price Indices & Deflation",
      question: "How is Real GDP derived from Nominal GDP in macroeconomic reporting?",
      options: ["By dividing Nominal GDP by the GDP Deflator (price index) and multiplying by 100 to remove inflation effects.", "By adding current year GST collections directly to Nominal GDP.", "By subtracting foreign direct investment from the trade balance.", "By multiplying Nominal GDP by the annual bank lending rate."],
      correct: 0,
      citation: "CSO Price Statistics & Deflators — Module 2",
      explanation: "Real GDP reflects true volume output evaluated at base year prices by deflating nominal output with the comprehensive GDP deflator."
    }, {
      id: "a_e_3",
      topic: "Capital Formation",
      competency: "GFCF Compilation",
      question: "Which expenditure component constitutes Gross Fixed Capital Formation (GFCF)?",
      options: ["Acquisition of machinery, equipment, intellectual property products, and infrastructure construction minus disposals.", "Total household spending on daily food and consumer perishables.", "Government subsidy payments to public welfare schemes.", "Foreign portfolio investments held in Indian equity mutual funds."],
      correct: 0,
      citation: "System of National Accounts — Chapter 10",
      explanation: "GFCF measures net additions of fixed capital assets (buildings, roads, machinery, R&D) used repeatedly in productive processes."
    }],
    Medium: [{
      id: "a_m_1",
      topic: "FISIM Methodology",
      competency: "Financial Intermediation",
      question: "In SNA 2008/2025, how is Financial Intermediation Services Indirectly Measured (FISIM) calculated?",
      options: ["As the spread between actual interest rates charged/paid and a risk-free reference rate on loans and deposits.", "By totaling the gross dividend payouts of all commercial banks in the financial year.", "As 18% GST charged on digital banking transactions.", "By subtracting non-performing assets from the RBI repo rate."],
      correct: 0,
      citation: "SNA 2008 Framework — Paragraph 6.163",
      explanation: "FISIM quantifies indirect banking service charges through the interest rate differential between loans/deposits and the reference interbank rate."
    }, {
      id: "a_m_2",
      topic: "Valuation of Output",
      competency: "GVA at Basic Prices",
      question: "What is the relationship between Gross Value Added (GVA) at Basic Prices and GDP at Market Prices in Indian National Accounts?",
      options: ["GDP at Market Prices = GVA at Basic Prices + Product Taxes - Product Subsidies.", "GDP at Market Prices = GVA at Basic Prices - Income Tax + Import Tariffs.", "GDP at Market Prices = GVA at Basic Prices multiplied by the Consumer Price Index.", "GVA at Basic Prices and GDP at Market Prices are strictly identical."],
      correct: 0,
      citation: "MoSPI Methodology on GVA at Basic Prices — Section 2",
      explanation: "Under the 2011-12 base revision, GDP at Market Prices equals GVA at Basic Prices plus net product taxes (taxes minus subsidies)."
    }, {
      id: "a_m_3",
      topic: "Double Deflation",
      competency: "Volume Compilation",
      question: "Why is the Double Deflation method required to accurately compile Real Gross Value Added (GVA) for manufacturing?",
      options: ["It independently deflates gross output with output price indices and intermediate inputs with input price indices.", "It applies the deflator twice to compensate for rounding errors.", "It eliminates all indirect tax revenue from corporate balance sheets.", "It matches wholesale prices with international commodities."],
      correct: 0,
      citation: "CSO Double Deflation Working Paper — NAD",
      explanation: "Single deflation creates bias when raw material input prices diverge from final output prices. Double deflation calculates real output minus real inputs."
    }],
    Hard: [{
      id: "a_h_1",
      topic: "SNA 2025 Digital Capitalization",
      competency: "Digital Economy Accounting",
      question: "Under the upcoming SNA 2025 update, how are digital data assets and artificial intelligence models classified in national accounts balance sheets?",
      options: ["As Produced Intellectual Property Assets, capitalized based on the sum of development costs (data acquisition, curation, computing and human capital).", "As zero-value non-produced natural resources excluded from GDP.", "As current intermediate consumption expensed fully in the year of creation.", "As monetary gold reserves stored with the Reserve Bank of India."],
      correct: 0,
      citation: "UN Statistical Commission SNA 2025 Guidance Note — Digitization",
      explanation: "SNA 2025 recognizes data and AI algorithms as produced fixed assets that deliver economic benefits over multiple reporting periods."
    }, {
      id: "a_h_2",
      topic: "Cross-Border Cloud Accounting",
      competency: "External Trade in Services",
      question: "When domestic enterprises utilize cloud computing infrastructure hosted in foreign sovereign data centres, how is this recorded in National Accounts and BoP?",
      options: ["As import of Computer and Information Services under Current Account, deducted from domestic Gross Value Added as intermediate consumption.", "As domestic gross capital formation inside state territory.", "As bilateral foreign aid grant transferred to overseas cloud vendors.", "Ignored because cloud services have zero physical border crossing."],
      correct: 0,
      citation: "RBI Balance of Payments Manual (BPM6) & SNA 2025",
      explanation: "Cross-border digital services represent service imports (Mode 1 supply) reducing domestic GVA unless capitalized as bespoke IP."
    }, {
      id: "a_h_3",
      topic: "Hedonic Price Quality Adjustments",
      competency: "Deflator Construction",
      question: "Why are hedonic regression methods employed when constructing price indices for information and communication technology (ICT) capital assets?",
      options: ["To decouple pure price inflation from rapid quality improvements (e.g. processor speed, memory capacity, energy efficiency).", "To artificially lower inflation figures for annual budget speeches.", "To convert wholesale transactions into retail consumer prices.", "To eliminate seasonal price cycles in agricultural commodities."],
      correct: 0,
      citation: "OECD Handbook on Hedonic Price Indexes — Section 3",
      explanation: "Hedonic pricing decomposes asset prices into constituent characteristics, ensuring quality surges are captured as volume growth rather than price inflation."
    }]
  },
  // 3. Labour & Enterprise Statistics (PLFS/ASI/ASUSE)
  labour: {
    Easy: [{
      id: "l_e_1",
      topic: "Activity Status Concept",
      competency: "PLFS Methodology",
      question: "What is the primary difference between Usual Principal Activity Status (ps) and Current Weekly Status (cws) in the Periodic Labour Force Survey?",
      options: ["Usual Status evaluates reference period of 365 days, whereas Current Weekly Status evaluates reference period of 7 days preceding survey.", "Usual Status is surveyed only for urban males, while Current Weekly Status is only for rural females.", "Usual Status is measured only in decennial censuses.", "There is no difference; both use identical 30-day reference criteria."],
      correct: 0,
      citation: "PLFS Annual Report — Concepts and Definitions",
      explanation: "Usual status captures long-term major activity over the preceding 365 days; CWS evaluates economic activity during the past 7 days."
    }, {
      id: "l_e_2",
      topic: "ASI Registered Factories",
      competency: "Annual Survey of Industries",
      question: "Which industrial establishments are covered under the frame of the Annual Survey of Industries (ASI)?",
      options: ["Factories registered under Sections 2m(i) and 2m(ii) of the Factories Act 1948 and Bidi/Cigar establishments.", "Only unorganized street vendors with turnover below 5 lakhs.", "Multi-national software IT offices in Special Economic Zones.", "Government ministries and district collectorate offices."],
      correct: 0,
      citation: "ASI Instruction Manual — Chapter 1",
      explanation: "ASI covers registered factories employing 10+ workers with power or 20+ workers without power under the Factories Act."
    }, {
      id: "l_e_3",
      topic: "Unincorporated Enterprises",
      competency: "ASUSE Guidelines",
      question: "What defines an unincorporated non-agricultural enterprise under the ASUSE survey frame?",
      options: ["Proprietary or partnership enterprises engaged in non-agricultural activities that are not registered under the Companies Act 2013.", "All public sector undertakings listed on the National Stock Exchange.", "Commercial banks operating national ATM networks.", "State agricultural produce marketing committees (APMC)."],
      correct: 0,
      citation: "ASUSE Survey Methodology — NSSO DPD",
      explanation: "ASUSE covers informal, proprietary, and partnership enterprises outside corporate registration and the Factories Act."
    }],
    Medium: [{
      id: "l_m_1",
      topic: "Labour Market Ratios",
      competency: "Labour Indicators",
      question: "How is the Worker Population Ratio (WPR) calculated from survey aggregates?",
      options: ["Percentage of employed persons in the total population: (Total Employed / Total Population) * 100.", "Percentage of unemployed persons seeking work in the labor force.", "Ratio of government employees to total private sector workers.", "Total wages paid divided by the Consumer Price Index."],
      correct: 0,
      citation: "MoSPI Labour Market Statistics — Technical Note",
      explanation: "WPR expresses the proportion of an economy's population that is actively employed in productive work."
    }, {
      id: "l_m_2",
      topic: "Enterprise Weighting",
      competency: "Multiplier Compilation",
      question: "In the Annual Survey of Unincorporated Sector Enterprises (ASUSE), how is the enterprise schedule multiplier calculated?",
      options: ["Inverse probability of selecting the FSU cluster multiplied by the inverse probability of selecting the enterprise within the hamlet/stratum.", "By dividing the enterprise electricity bill by national average kilowatt tariff.", "As a constant multiplier of 100 applied uniformly across all enterprises.", "By multiplying total enterprise capital by the district literacy rate."],
      correct: 0,
      citation: "ASUSE Estimation Procedure — SDRD Kolkata",
      explanation: "Multi-stage sampling requires compounding inverse selection probabilities at both FSU and enterprise listing stages."
    }, {
      id: "l_m_3",
      topic: "ASI Capital Accounting",
      competency: "Fixed Assets & Depreciation",
      question: "In ASI Schedule Block C (Fixed Assets), how is Gross Addition to Fixed Assets computed?",
      options: ["Value of fixed assets purchased/constructed new during the accounting year plus additions and alterations.", "Annual revenue from manufactured product sales minus corporate taxes.", "Net dividend distributions paid to private equity partners.", "Depreciation allowance claimed under the Income Tax Act."],
      correct: 0,
      citation: "ASI Schedule Instructions — MoSPI CSO IS Wing",
      explanation: "Gross additions encompass all newly acquired, constructed, or installed capital equipment before applying annual depreciation."
    }],
    Hard: [{
      id: "l_h_1",
      topic: "Informal Employment Metrics",
      competency: "ICLS-21 Compliance",
      question: "Under the revised 21st ICLS resolution on work relationships, what criteria determine informal employment in formal sector enterprises?",
      options: ["Employment relationships lacking social security contributions, paid annual leave, or statutory sick leave protections.", "Workers who receive wages in digital bank transfers rather than cash currency.", "Employees who work fewer than 40 hours per week.", "Workers holding permanent civil service gazetted appointments."],
      correct: 0,
      citation: "ILO 21st ICLS Resolution on Work & Employment Statistics",
      explanation: "Informal jobs within formal firms lack basic legal/social protections, such as employer-paid pension or medical benefits."
    }, {
      id: "l_h_2",
      topic: "NIC Industry Code Transition",
      competency: "Industrial Classification",
      question: "When mapping legacy enterprise microdata from NIC-2008 to modern digital classifications, how are multi-activity conglomerates assigned their primary 5-digit code?",
      options: ["Top-down method based on the activity generating the largest Gross Value Added (or turnover/employment if GVA is unobserved).", "Random assignment to the first industrial activity declared in registration forms.", "By averaging the numeric digits of all secondary activities.", "By assigning all multi-activity units exclusively to the retail trade code."],
      correct: 0,
      citation: "National Industrial Classification (NIC) Manual — Principles of Classification",
      explanation: "The top-down principle ensures that dominant contribution to value added determines the principal economic activity code."
    }, {
      id: "l_h_3",
      topic: "Missing Working Capital Imputation",
      competency: "Microdata Imputation",
      question: "In seasonal agro-processing enterprise surveys with intermittent operating cycles, which imputation technique avoids biasing operating surplus?",
      options: ["Predictive Mean Matching (PMM) within donor pools matched on operating months, machine capacity, and raw material throughput.", "Substituting zero for working capital across all off-season months.", "Replacing missing values with the national corporate average working capital.", "Deleting all seasonal enterprises completely from survey tabulation."],
      correct: 0,
      citation: "MoSPI Enterprise Microdata Imputation Protocols — DIID",
      explanation: "Predictive Mean Matching preserves actual observed values from realistic donor enterprises with matching seasonality characteristics."
    }]
  },
  // 4. Python, R & Automated Data Scrutiny
  python: {
    Easy: [{
      id: "p_e_1",
      topic: "Statistical Outlier Detection",
      competency: "Microdata Cleaning",
      question: "When screening household consumption expenditure data in Python, how is the Interquartile Range (IQR) rule applied to identify anomalies?",
      options: ["Values falling below Q1 - 1.5 * IQR or above Q3 + 1.5 * IQR are flagged as potential outliers.", "Values greater than the median multiplied by 10 are deleted automatically.", "All values above the 50th percentile are replaced by zero.", "The standard deviation is added directly to the minimum expenditure."],
      correct: 0,
      citation: "MoSPI Data Scrutiny Guidelines — Chapter 3",
      explanation: "Tukey's IQR filter flags observations outside 1.5 times the spread of the middle 50% of the distribution."
    }, {
      id: "p_e_2",
      topic: "Relational Merging in Pandas",
      competency: "Roster Linking",
      question: "To combine household-level characteristics with individual member schedules in Pandas, which function is appropriate?",
      options: ["pd.merge(hh_df, person_df, on=['FSU', 'Sample_HH_No'], how='inner')", "pd.concat([hh_df, person_df], axis=0)", "hh_df.append(person_df)", "person_df.to_csv('merged.csv')"],
      correct: 0,
      citation: "Official Statistics Python Cookbook — DPD Kolkata",
      explanation: "`pd.merge` performs relational joins on composite keys (FSU, Household ID), linking household attributes to each member."
    }, {
      id: "p_e_3",
      topic: "Boolean Scrutiny Filters",
      competency: "Data Scrutiny Logic",
      question: "In Python, which expression correctly flags impossible records where age is under 12 but marital status is recorded as married?",
      options: ["df[(df['age'] < 12) & (df['marital_status'] == 'Married')]", "df[df['age'] < 12 or df['marital_status'] == 'Married']", "df.filter(age < 12, marital_status == 'Married')", "df['age'].between(0, 12).sum()"],
      correct: 0,
      citation: "DPD CAPI Validation Rules Manual — Section 4",
      explanation: "Pandas uses bitwise `&` for element-wise logical AND evaluation across boolean Series."
    }],
    Medium: [{
      id: "p_m_1",
      topic: "Vectorized Conditional Imputation",
      competency: "Vectorized Operations",
      question: "In large microdata pipelines, why is `numpy.select()` preferred over row-by-row `apply(lambda ...)` for survey code imputation?",
      options: ["It executes in optimized C/SIMD memory loops, running 100x to 500x faster on multi-million row datasets.", "It eliminates the need for allocating random access memory.", "It automatically submits the script to the National Data Warehouse.", "It encrypts all strings with AES-256."],
      correct: 0,
      citation: "High-Performance Data Engineering in Official Statistics",
      explanation: "Vectorized conditional selection avoids Python bytecode interpreter overhead on large national microdata files."
    }, {
      id: "p_m_2",
      topic: "Logical Validation Frameworks",
      competency: "Automated Quality Assurance",
      question: "When designing automated CAPI validation rules in Python, which data structure best represents inter-field cross-validation checks?",
      options: ["Declarative schema rules (e.g. Pydantic models with `@validator` decorators) that enforce type, range, and cross-field predicates.", "Hardcoded nested `if-else` blocks inside text files.", "Global string variables containing raw SQL statements.", "Unordered dictionary keys with no assertion logic."],
      correct: 0,
      citation: "MoSPI DIID Automated Quality Architecture Manual",
      explanation: "Declarative validation models separate business scrutiny rules from ingestion logic, facilitating auditability and error reporting."
    }, {
      id: "p_m_3",
      topic: "Multivariate Missing Value Imputation",
      competency: "Advanced Imputation",
      question: "When enterprise expenditure data contains missing values in correlated fields (e.g. Electricity, Fuel, Raw Materials), which method is statistically sound?",
      options: ["Iterative Imputer (MICE) using chained regressions conditioned on enterprise size and industry code.", "Replacing all missing cells with the overall column mean.", "Forward filling values from the preceding unrelated enterprise.", "Discarding every enterprise that has a single missing item."],
      correct: 0,
      citation: "Scikit-Learn Microdata Imputation Best Practices",
      explanation: "Multivariate Imputation by Chained Equations (MICE) preserves covariance structures across complementary expenditure categories."
    }],
    Hard: [{
      id: "p_h_1",
      topic: "High-Throughput Microdata Processing",
      competency: "Polars & Apache Arrow",
      question: "When aggregating 50 million survey microdata records across multiple rounds, why does Polars outperform Pandas in memory management?",
      options: ["It utilizes Apache Arrow memory format, query optimization plans, and native multi-threaded Rust execution without GIL bottlenecks.", "It converts all numerical data to 8-bit integers.", "It requires no disk storage or swap memory.", "It eliminates the need for grouping keys in aggregation queries."],
      correct: 0,
      citation: "Modern Analytical Engines for Official Statistical Systems",
      explanation: "Polars builds an optimized execution plan over contiguous columnar Arrow buffers, executing in parallel across CPU cores."
    }, {
      id: "p_h_2",
      topic: "Statistical Disclosure Control (SDC)",
      competency: "Microdata Anonymization",
      question: "In statistical disclosure control, how does k-Anonymity combined with Differential Privacy protect public-use microdata (PUMD)?",
      options: ["Ensures each quasi-identifier combination is shared by at least k records, while calibrated noise guarantees provable bounds on individual identification.", "Encrypts the dataset so only gazetted officers can read the numbers.", "Deletes the state and district columns while leaving personal names intact.", "Rounds all reported monetary figures to the nearest crore."],
      correct: 0,
      citation: "MoSPI Microdata Anonymization Framework — Section 6",
      explanation: "k-Anonymity suppresses unique identifiable combinations, while differential privacy limits leakage from repeated cross-tabulations."
    }, {
      id: "p_h_3",
      topic: "Automated Data Quality Pipelines",
      competency: "CI/CD & Microdata QA",
      question: "How does a microdata ingestion pipeline achieve deterministic reproducibility across survey rounds?",
      options: ["By versioning data with cryptographic hashes (e.g. SHA-256), encapsulating transformation DAGs, and validating against immutable test schemas.", "By manually updating cell values in spreadsheet software before saving.", "By regenerating the sample frame randomly each time the pipeline runs.", "By removing all audit logs after data compilation completes."],
      correct: 0,
      citation: "Data Engineering Architecture for National Statistical Offices",
      explanation: "Deterministic pipelines guarantee that identical source microdata and code generate verified, bit-identical statistical aggregates."
    }]
  },
  // 5. Digital Governance, Public Policy & Data Privacy
  governance: {
    Easy: [{
      id: "g_e_1",
      topic: "e-Office Workflows",
      competency: "Government Digitization",
      question: "What is the primary objective of the Central Government e-Office File Management System (FMS)?",
      options: ["To eliminate physical paper file movement, enhance accountability, and provide digital audit trails for ministerial decisions.", "To permanently lock all files so citizens cannot submit grievances.", "To automate the hiring of contractual field enumerators.", "To replace all human administrative officers with automated scripts."],
      correct: 0,
      citation: "DoPT e-Office Implementation Guidelines — Chapter 1",
      explanation: "e-Office secures transparent, auditable digital movement of government files, notes, and ministerial approvals."
    }, {
      id: "g_e_2",
      topic: "National Data Sharing Policy",
      competency: "Public Data Access",
      question: "Under the National Data Sharing and Accessibility Policy (NDSAP), which government data is placed in the 'Open Access' category?",
      options: ["Non-sensitive administrative data, aggregate statistical tables, and spatial datasets produced with public funds.", "Classified defence and intelligence operational files.", "Unredacted personal bank account numbers of welfare recipients.", "Confidential income tax investigation files."],
      correct: 0,
      citation: "NDSAP Policy Framework — MeitY & DST",
      explanation: "NDSAP promotes proactive public access to non-sensitive socio-economic data on data.gov.in for public utility and research."
    }, {
      id: "g_e_3",
      topic: "Citizen Grievance Redressal",
      competency: "Public Service Delivery",
      question: "What is the prescribed maximum timeline for addressing citizen grievances on the CPGRAMS portal under DARPG guidelines?",
      options: ["21 to 30 days from receipt of grievance.", "365 days (one calendar year).", "24 hours with no appeal mechanism.", "There is no timeline; complaints are reviewed on ad-hoc basis."],
      correct: 0,
      citation: "DARPG Citizen Grievance Resolution Guidelines",
      explanation: "DARPG mandates that ministries resolve citizen grievances on CPGRAMS within 21-30 days with a clear speaking order."
    }],
    Medium: [{
      id: "g_m_1",
      topic: "DPDP Act Obligations",
      competency: "Data Protection Law",
      question: "Under the Digital Personal Data Protection (DPDP) Act 2023, what is a Data Fiduciary's obligation regarding consent?",
      options: ["Obtain verifiable, informed, and unconditional consent with an itemized notice available in 22 languages under the 8th Schedule.", "Assume consent if the citizen has ever visited a government website.", "Consent is completely waived for any commercial telemarketing.", "Consent can only be accepted in physical notarized paper form."],
      correct: 0,
      citation: "Digital Personal Data Protection Act 2023 — Section 6",
      explanation: "The DPDP Act requires clear, itemized notice explaining the personal data processed, purpose, and grievance mechanism."
    }, {
      id: "g_m_2",
      topic: "RTI Disclosure Exemptions",
      competency: "Right to Information",
      question: "Under Section 8(1) of the Right to Information Act 2005, which information is exempt from public disclosure?",
      options: ["Information that prejudicially affects national sovereignty, security, strategic scientific interests, or cabinet papers before decisions are taken.", "Any information concerning government expenditure on rural roads.", "Statistical reports published by the Central Statistics Office.", "Minutes of open district developmental review committee meetings."],
      correct: 0,
      citation: "RTI Act 2005 — Section 8(1)",
      explanation: "Section 8 protects sovereign security, foreign relations, commercial confidences, and cabinet deliberations."
    }, {
      id: "g_m_3",
      topic: "Government Cloud Security",
      competency: "MeitY Cloud Architecture",
      question: "What security compliance is mandatory before hosting public sector applications on MeitY-empaneled GI Cloud (MeghRaj)?",
      options: ["CERT-In empaneled third-party security audit and compliance with ISO 27001 data residency standards within India.", "Signing exclusivity contracts with foreign telecom operators.", "Storing all citizen passwords in plaintext for administrative recovery.", "Bypassing TLS certificates to speed up network throughput."],
      correct: 0,
      citation: "MeitY GI Cloud (MeghRaj) Guidelines — Section 5",
      explanation: "MeitY mandates strict onshore data residency, CERT-In audit certification, and continuous vulnerability assessment."
    }],
    Hard: [{
      id: "g_h_1",
      topic: "Sovereign AI Deployment",
      competency: "Public Sector AI Governance",
      question: "What architectural safeguards are necessary when integrating sovereign LLMs into civil service decision workflows?",
      options: ["Air-gapped on-premise inference, deterministic guardrails against hallucinations, and strict human-in-the-loop oversight for official actions.", "Routing government queries through unsecured public web APIs.", "Allowing the model to make autonomous, unreviewable gazetted orders.", "Disabling all system prompt logging to save disk space."],
      correct: 0,
      citation: "National Strategy for Artificial Intelligence — NITI Aayog",
      explanation: "Public sector AI requires sovereignty, deterministic safety filters, verifiable audit trails, and final human responsibility."
    }, {
      id: "g_h_2",
      topic: "Cross-Departmental Interoperability",
      competency: "India Stack Architecture",
      question: "In the National Data Governance Framework Policy (NDGFP), how does the India Datasets Platform ensure secure cross-departmental access?",
      options: ["Through federated API gateways using zero-trust cryptographic authentication and role-based data anonymization layers.", "By emailing unencrypted CSV spreadsheets between ministerial departments.", "By merging all ministry databases into a single open public folder.", "By restricting all inter-ministerial data access entirely."],
      correct: 0,
      citation: "NDGFP Implementation Architecture — MeitY",
      explanation: "Federated API architecture allows secure data exchange without centralizing raw personally identifiable databases."
    }, {
      id: "g_h_3",
      topic: "Algorithmic Transparency & Fairness",
      competency: "Algorithmic Accountability",
      question: "When automated machine learning models score beneficiaries for welfare scheme eligibility, how is algorithmic bias mitigated?",
      options: ["By conducting pre-deployment disparate impact analysis across marginalized demographic groups and publishing algorithmic criteria.", "By training models exclusively on high-income urban population samples.", "By keeping the model weights a total secret from government auditors.", "By removing all eligibility thresholds and accepting everyone automatically."],
      correct: 0,
      citation: "Responsible AI for All — NITI Aayog Policy Paper",
      explanation: "Responsible AI mandates proactive fairness audits, adverse impact monitoring, and transparent administrative criteria."
    }]
  },
  // 6. PSU Operations, Energy & Supply Chain Analytics (BHEL/HPCL/ONGC/CPSEs)
  psu_ops: {
    Easy: [{
      id: "u_e_1",
      topic: "CPSE MoU Performance",
      competency: "Enterprise Management",
      question: "In Central Public Sector Enterprises (CPSEs), what governs annual performance evaluation between the administrative Ministry and the PSU?",
      options: ["The Memorandum of Understanding (MoU) with measurable financial, production, and project execution targets.", "Daily television news coverage and stock broker commentary.", "Informal verbal recommendations from local municipal councillors.", "The total quantity of paper stationary consumed during the year."],
      correct: 0,
      citation: "DPE Guidelines for MoU Formulation in CPSEs — Department of Public Enterprises",
      explanation: "DPE MoUs define binding annual quantitative performance criteria across financial, operational, and capital parameters."
    }, {
      id: "u_e_2",
      topic: "Inventory Turnover in Manufacturing",
      competency: "Supply Chain Analytics",
      question: "How is the Inventory Turnover Ratio calculated in heavy manufacturing enterprises like BHEL?",
      options: ["Cost of Goods Sold (COGS) divided by Average Inventory during the accounting period.", "Total factory land area divided by current raw material weight.", "Number of active employees multiplied by the annual steel quota.", "Gross revenue divided by corporate tax deductions."],
      correct: 0,
      citation: "Operations & Supply Chain Management Handbook — Section 4",
      explanation: "Inventory turnover evaluates how efficiently working capital tied up in materials and inventory is converted into final output."
    }, {
      id: "u_e_3",
      topic: "Specific Energy Consumption",
      competency: "Energy Auditing",
      question: "Under the Bureau of Energy Efficiency (BEE) PAT scheme, what does Specific Energy Consumption (SEC) quantify in industrial plants?",
      options: ["Energy consumed per unit of equivalent product output (e.g. MTOE per metric tonne of steel or refined crude).", "The total cost of solar panels installed on plant administrative buildings.", "The distance traveled by commercial delivery trucks from the plant gate.", "The voltage fluctuations recorded on the regional power grid."],
      correct: 0,
      citation: "BEE Perform, Achieve and Trade (PAT) Rules — Ministry of Power",
      explanation: "SEC measures energy intensity normalized against total product output, establishing benchmark conservation targets."
    }],
    Medium: [{
      id: "u_m_1",
      topic: "Overall Equipment Effectiveness",
      competency: "Plant Operations Analysis",
      question: "In heavy engineering plants, what are the three fundamental components of Overall Equipment Effectiveness (OEE)?",
      options: ["Availability Rate * Performance (Speed) Rate * Quality (Yield) Rate.", "Capital Expenditure * Depreciation * Tax Rate.", "Employee Headcount * Overtime Hours * Union Attendance.", "Steam Pressure * Generator RPM * Ambient Temperature."],
      correct: 0,
      citation: "Total Productive Maintenance & OEE Standards — ISO 22400",
      explanation: "OEE is the international gold standard for measuring manufacturing productivity: Availability x Performance x Quality."
    }, {
      id: "u_m_2",
      topic: "Hydrocarbon Mass Balancing",
      competency: "Refinery Energy Accounting",
      question: "In oil refining operations (HPCL/IOCL), how is transit loss distinguished from internal fuel and loss (F&L)?",
      options: ["Transit loss measures physical shrinkage during pipeline/tanker transport, while F&L represents internal refinery fuel consumption and process loss.", "Transit loss only applies to imported LNG tankers and never to domestic pipelines.", "F&L is an accounting tax rebate granted by state excise departments.", "Transit loss and F&L are identical financial write-offs."],
      correct: 0,
      citation: "Ministry of Petroleum & Natural Gas Energy Audit Handbook",
      explanation: "Mass reconciliation distinguishes transportation volume variances from process energy consumption and refinery flare loss."
    }, {
      id: "u_m_3",
      topic: "GeM Public Procurement",
      competency: "Public Procurement Rules",
      question: "Under the Public Procurement (Preference to Make in India) Order on the GeM portal, what defines a Class-I Local Supplier?",
      options: ["Suppliers whose goods, services or works contain 50% or more local domestic value addition.", "Any supplier with corporate headquarters located outside India.", "Suppliers who offer a minimum 50% cash discount on list price.", "Suppliers that only import finished assemblies from international markets."],
      correct: 0,
      citation: "DPIIT Public Procurement Order — Ministry of Commerce & Industry",
      explanation: "Class-I local suppliers must have at least 50% local domestic content, receiving statutory procurement preferences."
    }],
    Hard: [{
      id: "u_h_1",
      topic: "Industrial IoT Predictive Maintenance",
      competency: "Turbine & Asset Analytics",
      question: "When deploying machine learning models on vibration and thermal telemetry for power turbines, which algorithm best detects early bearing degradation?",
      options: ["Autoencoder Neural Networks or Isolation Forests trained on high-frequency vibration spectral densities to detect abnormal deviations.", "Simple linear regression on weekly fuel invoices.", "K-means clustering on factory employee attendance logs.", "Sorting turbine operating temperatures in an Excel sheet."],
      correct: 0,
      citation: "IEEE Industrial Electronics on Predictive Health Monitoring of Turbomachinery",
      explanation: "Autoencoders learn normal multi-axis spectral patterns, generating reconstruction error anomalies when internal degradation starts."
    }, {
      id: "u_h_2",
      topic: "Strategic Hydrocarbon Valuation",
      competency: "Commodity Risk Modeling",
      question: "Under volatile global energy markets, how do national energy PSUs quantify value-at-risk (VaR) for strategic petroleum reserves?",
      options: ["Monte Carlo simulations modeling geopolitical price shocks, storage carry costs, and crack spread differentials at 99% confidence intervals.", "Fixed historical cost accounting without mark-to-market adjustments.", "Assuming oil prices will remain static at the annual budget estimate.", "Writing off total inventory value at the end of each fiscal quarter."],
      correct: 0,
      citation: "Strategic Energy Reserve Economic Modeling — NITI Aayog & MoPNG",
      explanation: "Stochastic Monte Carlo VaR quantifies potential portfolio losses under severe macro shocks across defined holding periods."
    }, {
      id: "u_h_3",
      topic: "Green Hydrogen Carbon Accounting",
      competency: "Scope 1, 2, 3 ESG Accounting",
      question: "In CPSE clean energy transition pathways, what differentiates Scope 2 emissions from Scope 3 emissions in green hydrogen electrolysis?",
      options: ["Scope 2 covers indirect emissions from grid electricity purchased for electrolysis; Scope 3 covers entire value chain lifecycle emissions (equipment manufacturing and transport).", "Scope 2 is water consumption; Scope 3 is chimney carbon dioxide emissions.", "Scope 2 only applies to private sector firms, while Scope 3 applies to PSUs.", "There is no difference; all emissions are grouped into Scope 1."],
      correct: 0,
      citation: "GHG Protocol Corporate Standard & Bureau of Energy Efficiency",
      explanation: "Scope 2 accounts for purchased electricity used in operations; Scope 3 captures broader upstream and downstream lifecycle impacts."
    }]
  }
};

// -------------------------------------------------------------------------
// PRESCRIBED iGOT & NSSTA COURSES CATALOG
// -------------------------------------------------------------------------
const COURSES_CATALOG = [{
  id: "C-101",
  code: "NSSTA-TPAC-01",
  title: "Multi-Stage Sampling & Field Survey Operations",
  category: "Technical",
  provider: "NSSTA Greater Noida & iGOT Karmayogi",
  duration: "18 Hours (Self-Paced)",
  rating: 4.9,
  enrolled: "2,840 Officers",
  description: "Master listing protocols, Hamlet-Group formation, CAPI validation, and design-unbiased sample weighting.",
  competencyCovered: "Field Sampling & Survey Design"
}, {
  id: "C-102",
  code: "NSSTA-TPAC-04",
  title: "National Accounts Statistics & SNA 2025 Transition",
  category: "Technical",
  provider: "Central Statistics Office (CSO NAD)",
  duration: "24 Hours (6 Modules)",
  rating: 4.85,
  enrolled: "1,620 Officers",
  description: "GVA at Basic Prices, Double Deflation, FISIM estimation, and capitalization of digital data and AI assets.",
  competencyCovered: "National Accounts & Macroeconomics"
}, {
  id: "C-103",
  code: "DPD-TECH-02",
  title: "Python & Apache Arrow for Automated Microdata Scrutiny",
  category: "Technical",
  provider: "Data Processing Division (DPD Kolkata)",
  duration: "30 Hours (Hands-on Labs)",
  rating: 4.95,
  enrolled: "3,150 Officers",
  description: "Vectorized data cleaning, logical scrutiny rules, MICE missing value imputation, and out-of-core microdata pipelines.",
  competencyCovered: "Automated Data Scrutiny"
}, {
  id: "C-104",
  code: "IGOT-BEH-01",
  title: "Ethical Leadership & Citizen Centricity in Public Administration",
  category: "Behavioural",
  provider: "Capacity Building Commission (CBC)",
  duration: "10 Hours (Interactive)",
  rating: 4.9,
  enrolled: "14,200 Civil Servants",
  description: "Principles of ethical governance, empathy in public delivery, workplace collaboration, and stakeholder communication.",
  competencyCovered: "Citizen Centricity & Ethics"
}, {
  id: "C-105",
  code: "IGOT-BEH-02",
  title: "Strategic Problem Solving & Crisis Management for Senior Officers",
  category: "Behavioural",
  provider: "LBSNAA Mussoorie & iGOT Bharat",
  duration: "14 Hours",
  rating: 4.8,
  enrolled: "6,800 Officers",
  description: "Evidence-based policymaking, conflict resolution, inter-departmental consensus building, and adaptive civil leadership.",
  competencyCovered: "Strategic Leadership"
}, {
  id: "C-106",
  code: "IGOT-CORE-01",
  title: "DoPT Digital Governance, e-Office & DPDP Compliance",
  category: "Prescribed iGOT",
  provider: "Department of Personnel & Training & MeitY",
  duration: "16 Hours",
  rating: 4.92,
  enrolled: "22,500 Officers",
  description: "Mandatory compliance module covering e-Files, CPGRAMS grievance SLAs, RTI Section 8 exemptions, and DPDP Act 2023.",
  competencyCovered: "Digital Governance & Privacy"
}, {
  id: "C-107",
  code: "PSU-OPS-01",
  title: "PSU Industrial Analytics, Energy Accounting & OEE Optimization",
  category: "Technical",
  provider: "National Productivity Council & DPE",
  duration: "20 Hours (Case Studies)",
  rating: 4.88,
  enrolled: "1,940 PSU Officers",
  description: "Overall Equipment Effectiveness, hydrocarbon reconciliation, industrial IoT telemetry, and Make in India procurement rules.",
  competencyCovered: "PSU Operations & Analytics"
}];

// Initial Competencies
const INITIAL_COMPETENCIES = [{
  id: "sampling",
  name: "Field Sampling & Survey Design",
  baseline: 85,
  current: 62,
  target: 90,
  status: "Critical Gap"
}, {
  id: "accounts",
  name: "National Accounts & Macroeconomics",
  baseline: 80,
  current: 58,
  target: 85,
  status: "Moderate Gap"
}, {
  id: "python",
  name: "Python & Automated Data Scrutiny",
  baseline: 90,
  current: 48,
  target: 90,
  status: "Priority Need"
}, {
  id: "governance",
  name: "Digital Governance & Data Privacy",
  baseline: 75,
  current: 72,
  target: 85,
  status: "On Track"
}];

// -------------------------------------------------------------------------
// MAIN REACT APPLICATION COMPONENT
// -------------------------------------------------------------------------
function App() {
  // Step Tracking: 1 = Sign In, 2 = Exam, 3 = Courses, 4 = Quizzes, 5 = Skill Gap Report
  const [activeStep, setActiveStep] = useState(1);

  // Step 1: Officer Auth State
  const [inputEmail, setInputEmail] = useState("");
  const [selectedGender, setSelectedGender] = useState("male");
  const [emailError, setEmailError] = useState("");
  const [activeOfficer, setActiveOfficer] = useState(OFFICIAL_EXAMPLES[0]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Step 2: Role-Based Exam State
  const [selectedDomain, setSelectedDomain] = useState("sampling");
  const [difficultyLevel, setDifficultyLevel] = useState("Medium"); // Easy, Medium, Hard
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examScore, setExamScore] = useState(null);

  // Step 3: Courses Filter
  const [courseCategoryFilter, setCourseCategoryFilter] = useState("all");

  // Step 4: Learning Materials & MCQ Generation
  const [selectedPreset, setSelectedPreset] = useState("plfs_sop");
  const [customMaterial, setCustomMaterial] = useState("");
  const [isGeneratingMcq, setIsGeneratingMcq] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(null);

  // Step 5: Competency Gap Report
  const [competencies, setCompetencies] = useState(INITIAL_COMPETENCIES);

  // Load Calibrated Questions whenever domain or difficulty changes
  useEffect(() => {
    loadQuestions(selectedDomain, difficultyLevel);
  }, [selectedDomain, difficultyLevel]);
  const loadQuestions = (domainId, diff) => {
    const domainSet = QUESTION_BANK[domainId] || QUESTION_BANK["sampling"];
    const tier = diff || "Medium";
    const questions = domainSet[tier] || domainSet["Medium"] || [];
    setExamQuestions(questions);
    setExamAnswers({});
    setExamSubmitted(false);
  };

  // Handle Sign In with Domain Evaluation
  const handleLogin = officerData => {
    setEmailError("");
    const emailClean = (officerData?.email || inputEmail).trim().toLowerCase();
    if (!emailClean) {
      setEmailError("Please enter your official email address.");
      return;
    }

    // Evaluate domain: reject free commercial mailboxes
    const commercialDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "rediffmail.com", "icloud.com", "aol.com"];
    const domainPart = emailClean.split("@")[1] || "";
    if (!domainPart || !domainPart.includes(".")) {
      setEmailError("Please provide a valid official email address format.");
      return;
    }
    const isCommercial = commercialDomains.some(d => domainPart === d || domainPart.endsWith("." + d));
    if (isCommercial) {
      setEmailError(`⛔ Access Denied: Commercial email accounts (@${domainPart}) are restricted. Please use your official government, ministry, department, or enterprise work email.`);
      return;
    }

    // Accept ANY official govt/enterprise domain (.hpcl, .bhel, .gov, .nic, etc.)
    let resolvedGender = officerData?.gender || selectedGender;
    const prefix = emailClean.split("@")[0];
    if (!officerData) {
      if (/^(priya|sunita|anita|meera|shweta|kavita|neha|deepa)/i.test(prefix)) {
        resolvedGender = "female";
      }
    }
    let formattedName = officerData?.name;
    if (!formattedName) {
      const raw = prefix.replace(/[._]+/g, " ");
      formattedName = (resolvedGender === "female" ? "Smt. " : "Shri ") + raw.replace(/\b\w/g, l => l.toUpperCase());
    }

    // Determine Domain based on organization/domain
    let derivedDomain = "sampling";
    if (domainPart.includes("hpcl") || domainPart.includes("bhel") || domainPart.includes("ongc") || domainPart.includes("ntpc") || domainPart.includes("iocl") || domainPart.includes("sail")) {
      derivedDomain = "psu_ops";
    } else if (domainPart.includes("cso")) {
      derivedDomain = "accounts";
    } else if (domainPart.includes("nic") || domainPart.includes("tech")) {
      derivedDomain = "python";
    } else if (domainPart.includes("dopt") || domainPart.includes("gov.in")) {
      derivedDomain = "governance";
    }
    const profile = officerData || {
      id: prefix.replace(/[^a-zA-Z0-9_]/g, "_"),
      name: formattedName,
      gender: resolvedGender,
      email: emailClean,
      designation: derivedDomain === "psu_ops" ? "Operations & Analytics Officer" : "Statistical & Policy Officer",
      cadre: domainPart.includes("gov") || domainPart.includes("nic") ? "Official Civil Service" : "Public Enterprise Officer",
      organization: domainPart.includes("mospi") ? "Ministry of Statistics & Programme Implementation" : domainPart.includes("hpcl") ? "HPCL" : domainPart.includes("bhel") ? "BHEL" : domainPart.includes("ongc") ? "ONGC" : "Official Organization",
      division: "Operational Analytics & Planning",
      activeAssignment: "Data Quality Framework & Capacity Building",
      domain: derivedDomain
    };
    setActiveOfficer(profile);
    setIsLoggedIn(true);
    setInputEmail(emailClean);
    setSelectedGender(profile.gender || "male");
    setSelectedDomain(profile.domain || derivedDomain);
  };

  // Submit Exam
  const handleSubmitExam = () => {
    let correct = 0;
    examQuestions.forEach(q => {
      if (examAnswers[q.id] === q.correct) correct++;
    });
    const scorePct = Math.round(correct / Math.max(1, examQuestions.length) * 100);
    setExamScore(scorePct);
    setExamSubmitted(true);

    // Update Competency dynamically
    setCompetencies(prev => prev.map(c => {
      if (c.id === selectedDomain) {
        return {
          ...c,
          current: Math.min(100, Math.max(45, scorePct)),
          status: scorePct >= 70 ? "Proficient" : "Needs Training"
        };
      }
      return c;
    }));
  };

  // Generate AI MCQs from Learning Material
  const handleGenerateMCQ = () => {
    setIsGeneratingMcq(true);
    setQuizSubmitted(false);
    setQuizAnswers({});
    setTimeout(() => {
      setIsGeneratingMcq(false);
      setGeneratedQuiz({
        title: selectedPreset === "plfs_sop" ? "MoSPI CAPI Data Scrutiny & Ingestion Circular (Bloom's Taxonomy Assessment)" : "SNA 2025 National Accounts Capitalization Assessment",
        level: "Bloom's Level: Apply & Analyze (Intermediate to Advanced)",
        questions: [{
          id: "mat_q1",
          bloom: "Analyze",
          text: "According to the uploaded material, how must enumerators verify consistency between household consumer expenditure and declared monthly income in CAPI Schedule 10.4?",
          options: ["Flag the schedule for supervisory scrutiny whenever declared monthly expenditure exceeds three times declared income without liquid asset dis-saving.", "Automatically delete the household from survey tabulation.", "Replace the income field with the district median wage.", "Disregard expenditure variances below 50,000 INR."],
          correct: 0,
          citation: "Uploaded Circular — Section 4.2",
          explanation: "Disproportionate expenditure without corresponding dis-saving or debt indicates listing under-reporting requiring supervisory verification."
        }, {
          id: "mat_q2",
          bloom: "Apply",
          text: "Under the circular's data confidentiality guidelines, what procedure is strictly mandated before submitting CAPI files to DPD central servers?",
          options: ["HMAC-SHA256 hashing of all respondent contact information and geofenced timestamp verification.", "Exporting data into unencrypted CSV files shared over public email.", "Deleting respondent ages to speed up file uploads.", "Printing physical hard copies for district collector sign-off."],
          correct: 0,
          citation: "Uploaded Circular — Section 7.1",
          explanation: "Cryptographic hashing prevents PII exposure while geofencing authenticates that the interview occurred at the designated listing location."
        }, {
          id: "mat_q3",
          bloom: "Evaluate",
          text: "When an FSU contains non-responding households exceeding 10% of listed sample size, what corrective action is prescribed?",
          options: ["Re-visit by the Senior Statistical Officer (SSO) with mandatory casualty schedule documentation before casualty replacement.", "Immediate substitution with any adjacent accessible household without documentation.", "Dropping the entire stratum from national inflation estimates.", "Scaling up household weights arbitrarily."],
          correct: 0,
          citation: "Uploaded Circular — Section 5.3",
          explanation: "Casualty schedules document reasons for non-response and prevent arbitrary investigator substitution bias."
        }]
      });
    }, 800);
  };

  // Step Navigation Items
  const NAV_STEPS = [{
    num: 1,
    title: "Official Authentication",
    subtitle: "PSU & Govt Verification",
    icon: "🔐"
  }, {
    num: 2,
    title: "Role-Based Analysis Exam",
    subtitle: "Calibrated by Domain & Tier",
    icon: "📝"
  }, {
    num: 3,
    title: "Recommend Courses",
    subtitle: "iGOT, Technical & Behavioural",
    icon: "🎓"
  }, {
    num: 4,
    title: "Learning Material & MCQs",
    subtitle: "Bloom's AI Question Engine",
    icon: "⚡"
  }, {
    num: 5,
    title: "Skill Gap Report",
    subtitle: "Pratibha Darpan Audit",
    icon: "📊"
  }];
  return /*#__PURE__*/_jsxs("div", {
    className: "flex min-h-screen bg-slate-100/90 text-slate-800",
    children: [/*#__PURE__*/_jsxs("aside", {
      className: "w-72 glass-nav text-white flex flex-col shrink-0 border-r border-slate-800 select-none",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "p-5 border-b border-slate-800/80 flex items-center gap-3.5",
        children: [/*#__PURE__*/_jsx(KarmayogiLogo, {
          size: 42
        }), /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-1.5",
            children: [/*#__PURE__*/_jsx("span", {
              className: "font-display font-black text-lg tracking-tight text-white",
              children: "iGOT"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60",
              children: "Karmayogi"
            })]
          }), /*#__PURE__*/_jsx("p", {
            className: "text-[11px] text-slate-400 font-medium",
            children: "MoSPI Official Statistical Ecosystem"
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "p-3 flex-1 overflow-y-auto custom-scrollbar space-y-1",
        children: [/*#__PURE__*/_jsx("div", {
          className: "px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold",
          children: "Capacity Building Flow"
        }), NAV_STEPS.map(step => {
          const isActive = activeStep === step.num;
          return /*#__PURE__*/_jsxs("button", {
            onClick: () => setActiveStep(step.num),
            className: `w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 group relative ${isActive ? "bg-blue-600/20 text-white border border-blue-500/40 shadow-sm" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,
            children: [isActive && /*#__PURE__*/_jsx("span", {
              className: "absolute left-0 top-2 bottom-2 w-1 bg-blue-500 rounded-r"
            }), /*#__PURE__*/_jsx("div", {
              className: `w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${isActive ? "bg-blue-600 text-white shadow-xs" : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"}`,
              children: step.icon
            }), /*#__PURE__*/_jsxs("div", {
              className: "overflow-hidden",
              children: [/*#__PURE__*/_jsx("div", {
                className: "flex items-center gap-1.5",
                children: /*#__PURE__*/_jsx("span", {
                  className: "text-xs font-semibold block truncate",
                  children: step.title
                })
              }), /*#__PURE__*/_jsx("span", {
                className: "text-[10px] text-slate-500 block truncate",
                children: step.subtitle
              })]
            })]
          }, step.num);
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "p-4 border-t border-slate-800 bg-slate-950/60",
        children: /*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/_jsx(OfficerAvatar, {
            email: activeOfficer?.email || "officer@mospi.gov.in",
            name: activeOfficer?.name || "Dr. Rajesh Verma",
            gender: activeOfficer?.gender || "male",
            size: "md"
          }), /*#__PURE__*/_jsxs("div", {
            className: "overflow-hidden flex-1 text-xs",
            children: [/*#__PURE__*/_jsx("strong", {
              className: "text-slate-100 font-display block truncate",
              children: activeOfficer?.name || "Dr. Rajesh Verma, ISS"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-slate-400 text-[10px] block truncate",
              children: activeOfficer?.organization || "Ministry of Statistics & PI"
            }), /*#__PURE__*/_jsxs("div", {
              className: "flex items-center gap-1 mt-0.5",
              children: [/*#__PURE__*/_jsx("span", {
                className: `w-2 h-2 rounded-full ${isLoggedIn ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`
              }), /*#__PURE__*/_jsx("span", {
                className: "text-[9px] font-mono text-slate-400",
                children: isLoggedIn ? "Verified Official" : "Evaluation Mode"
              })]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/_jsxs("main", {
      className: "flex-1 flex flex-col min-w-0 h-screen overflow-y-auto custom-scrollbar",
      children: [/*#__PURE__*/_jsxs("header", {
        className: "glass-card sticky top-0 z-20 px-8 py-3.5 border-b border-slate-200/80 flex items-center justify-between shadow-xs",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/_jsxs("span", {
            className: "text-xs font-mono font-bold text-slate-400 uppercase tracking-wider",
            children: ["Workflow Step ", activeStep, " of 5"]
          }), /*#__PURE__*/_jsx("span", {
            className: "text-slate-300",
            children: "/"
          }), /*#__PURE__*/_jsx("span", {
            className: "text-xs font-bold text-slate-800",
            children: NAV_STEPS.find(s => s.num === activeStep)?.title
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex items-center gap-3 text-xs",
          children: [/*#__PURE__*/_jsxs("span", {
            className: "font-mono text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200",
            children: ["Cadre: ", /*#__PURE__*/_jsx("strong", {
              className: "text-slate-800",
              children: activeOfficer?.cadre || "ISS"
            })]
          }), /*#__PURE__*/_jsxs("span", {
            className: "font-mono text-[11px] px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200",
            children: ["Domain: ", /*#__PURE__*/_jsx("strong", {
              className: "text-blue-900",
              children: DOMAIN_OPTIONS.find(d => d.id === selectedDomain)?.label.split(" ")[0]
            })]
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "p-8 max-w-7xl w-full mx-auto space-y-8 flex-1",
        children: [activeStep === 1 && /*#__PURE__*/_jsxs("div", {
          className: "space-y-6",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("span", {
              className: "text-xs font-mono font-bold text-blue-600 uppercase tracking-widest",
              children: "Step 1 of 5"
            }), /*#__PURE__*/_jsx("h1", {
              className: "font-display text-2xl font-bold text-slate-900 mt-0.5",
              children: "Official Employee Authentication"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-slate-500 mt-1",
              children: "Sign in with your official government or public enterprise email."
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "grid lg:grid-cols-3 gap-6",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "lg:col-span-2 glass-card rounded-2xl p-6 space-y-5 border-l-4 border-l-blue-600",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/_jsxs("span", {
                    className: "text-xs font-bold text-slate-800 font-display flex items-center gap-1.5",
                    children: [/*#__PURE__*/_jsx("span", {
                      children: "⭐"
                    }), /*#__PURE__*/_jsx("span", {
                      children: "Official Employee Examples (1-Click Evaluation):"
                    })]
                  }), /*#__PURE__*/_jsx("span", {
                    className: "text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold",
                    children: "Quick Select"
                  })]
                }), /*#__PURE__*/_jsx("div", {
                  className: "grid sm:grid-cols-2 gap-2",
                  children: OFFICIAL_EXAMPLES.map(officer => /*#__PURE__*/_jsxs("div", {
                    onClick: () => handleLogin(officer),
                    className: `p-2.5 rounded-xl border cursor-pointer transition-all flex items-center gap-2.5 ${activeOfficer?.email === officer.email ? "bg-blue-50 border-blue-500 shadow-xs ring-2 ring-blue-500/20" : "bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50"}`,
                    children: [/*#__PURE__*/_jsx(OfficerAvatar, {
                      email: officer.email,
                      name: officer.name,
                      gender: officer.gender,
                      size: "sm"
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "overflow-hidden text-xs",
                      children: [/*#__PURE__*/_jsx("strong", {
                        className: "text-slate-900 block truncate",
                        children: officer.name
                      }), /*#__PURE__*/_jsx("span", {
                        className: "text-blue-700 font-mono text-[10px] block truncate",
                        children: officer.email
                      }), /*#__PURE__*/_jsx("span", {
                        className: "text-slate-500 text-[10px] block truncate",
                        children: officer.organization
                      })]
                    })]
                  }, officer.id))
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-3 pt-2",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/_jsx("label", {
                    className: "block text-xs font-semibold text-slate-700",
                    children: "Or enter any official employee email:"
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "flex items-center gap-1 text-xs",
                    children: [/*#__PURE__*/_jsx("span", {
                      className: "text-[11px] text-slate-500 mr-1",
                      children: "Avatar Gender:"
                    }), /*#__PURE__*/_jsx("button", {
                      type: "button",
                      onClick: () => setSelectedGender("male"),
                      className: `px-2 py-0.5 rounded-md text-[11px] font-medium border ${selectedGender === "male" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-600 border-slate-200"}`,
                      children: "👨 Male"
                    }), /*#__PURE__*/_jsx("button", {
                      type: "button",
                      onClick: () => setSelectedGender("female"),
                      className: `px-2 py-0.5 rounded-md text-[11px] font-medium border ${selectedGender === "female" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-600 border-slate-200"}`,
                      children: "👩 Female"
                    })]
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [/*#__PURE__*/_jsxs("div", {
                    className: "relative shrink-0",
                    children: [/*#__PURE__*/_jsx(OfficerAvatar, {
                      email: inputEmail || "officer@organization.in",
                      name: inputEmail ? inputEmail.split("@")[0] : "Official",
                      gender: selectedGender,
                      size: "lg"
                    }), /*#__PURE__*/_jsx("span", {
                      className: "absolute -bottom-1 -right-1 text-[9px] bg-slate-900 text-white px-1.5 py-0.2 rounded-full font-mono font-bold",
                      children: "Avatar"
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "flex-1 flex gap-2",
                    children: [/*#__PURE__*/_jsx("input", {
                      type: "email",
                      value: inputEmail,
                      onChange: e => setInputEmail(e.target.value),
                      placeholder: "e.g. yourname@domain.gov.in or employee@enterprise.in",
                      className: "flex-1 p-3 rounded-xl border border-slate-300 text-xs font-mono focus:outline-none focus:border-blue-500 bg-slate-50 focus:bg-white"
                    }), /*#__PURE__*/_jsx("button", {
                      onClick: () => handleLogin(),
                      className: "px-5 py-3 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-blue-600 transition-all shrink-0",
                      children: "Verify & Sign In →"
                    })]
                  })]
                }), emailError && /*#__PURE__*/_jsxs("div", {
                  className: "p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-start gap-2",
                  children: [/*#__PURE__*/_jsx("span", {
                    className: "shrink-0 mt-0.5",
                    children: "⚠️"
                  }), /*#__PURE__*/_jsx("span", {
                    children: emailError
                  })]
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "lg:col-span-1 glass-card rounded-2xl p-5 space-y-4 border-l-4 border-l-slate-400 flex flex-col justify-between",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "space-y-3",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex items-center justify-between pb-3 border-b border-slate-100",
                  children: [/*#__PURE__*/_jsx("span", {
                    className: "text-[10px] font-mono uppercase text-slate-400 font-bold",
                    children: "Verified Officer Card"
                  }), /*#__PURE__*/_jsx("span", {
                    className: `w-2.5 h-2.5 rounded-full ${isLoggedIn ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  className: "space-y-3 text-xs",
                  children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [/*#__PURE__*/_jsx(OfficerAvatar, {
                      email: activeOfficer?.email,
                      name: activeOfficer?.name,
                      gender: activeOfficer?.gender,
                      size: "lg"
                    }), /*#__PURE__*/_jsxs("div", {
                      children: [/*#__PURE__*/_jsx("strong", {
                        className: "text-slate-900 text-sm font-display block leading-tight",
                        children: activeOfficer?.name
                      }), /*#__PURE__*/_jsx("span", {
                        className: "text-slate-500 text-[10px] font-mono block",
                        children: activeOfficer?.email
                      }), /*#__PURE__*/_jsx("span", {
                        className: "inline-block mt-1 px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono text-[10px] font-bold",
                        children: activeOfficer?.cadre
                      })]
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "pt-2 border-t border-slate-100 space-y-1.5 text-slate-600 text-[11px]",
                    children: [/*#__PURE__*/_jsxs("div", {
                      children: [/*#__PURE__*/_jsx("strong", {
                        children: "Designation:"
                      }), " ", activeOfficer?.designation]
                    }), /*#__PURE__*/_jsxs("div", {
                      children: [/*#__PURE__*/_jsx("strong", {
                        children: "Organization:"
                      }), " ", activeOfficer?.organization]
                    }), /*#__PURE__*/_jsxs("div", {
                      children: [/*#__PURE__*/_jsx("strong", {
                        children: "Division:"
                      }), " ", activeOfficer?.division]
                    }), /*#__PURE__*/_jsxs("div", {
                      children: [/*#__PURE__*/_jsx("strong", {
                        children: "Assignment:"
                      }), " ", activeOfficer?.activeAssignment]
                    })]
                  })]
                })]
              }), /*#__PURE__*/_jsxs("button", {
                onClick: () => setActiveStep(2),
                className: "w-full py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm",
                children: [/*#__PURE__*/_jsx("span", {
                  children: "Proceed to Role Analysis Exam"
                }), /*#__PURE__*/_jsx("span", {
                  children: "→"
                })]
              })]
            })]
          })]
        }), activeStep === 2 && /*#__PURE__*/_jsxs("div", {
          className: "space-y-6",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("span", {
                className: "text-xs font-mono font-bold text-purple-600 uppercase tracking-widest",
                children: "Step 2 of 5"
              }), /*#__PURE__*/_jsx("h1", {
                className: "font-display text-2xl font-bold text-slate-900 mt-0.5",
                children: "Role-Based Competency Analysis Exam"
              }), /*#__PURE__*/_jsx("p", {
                className: "text-xs text-slate-500 mt-1",
                children: "Separate questions calibrated for each domain and officer across Easy, Medium, and Hard difficulty levels."
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200 shadow-xs shrink-0",
              children: [/*#__PURE__*/_jsx(OfficerAvatar, {
                email: activeOfficer?.email,
                name: activeOfficer?.name,
                gender: activeOfficer?.gender,
                size: "sm"
              }), /*#__PURE__*/_jsxs("div", {
                className: "text-xs",
                children: [/*#__PURE__*/_jsx("strong", {
                  className: "text-slate-900 block leading-tight",
                  children: activeOfficer?.name
                }), /*#__PURE__*/_jsx("span", {
                  className: "text-slate-500 text-[10px] block",
                  children: activeOfficer?.organization
                })]
              })]
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "glass-card rounded-2xl p-5 space-y-4 border-l-4 border-l-purple-600",
            children: /*#__PURE__*/_jsxs("div", {
              className: "grid md:grid-cols-2 gap-5",
              children: [/*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("label", {
                  className: "block text-xs font-semibold text-slate-700 mb-1.5",
                  children: "Select Domain (Separate Question Bank per Domain):"
                }), /*#__PURE__*/_jsx("select", {
                  value: selectedDomain,
                  onChange: e => setSelectedDomain(e.target.value),
                  className: "w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:border-purple-500 bg-white",
                  children: DOMAIN_OPTIONS.map(d => /*#__PURE__*/_jsxs("option", {
                    value: d.id,
                    children: [d.icon, " ", d.label]
                  }, d.id))
                })]
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("label", {
                  className: "block text-xs font-semibold text-slate-700 mb-1.5",
                  children: "Difficulty Level (Separate Questions per Tier):"
                }), /*#__PURE__*/_jsx("div", {
                  className: "grid grid-cols-3 gap-2",
                  children: [{
                    id: "Easy",
                    label: "🟢 Easy",
                    desc: "Foundations & Definitions"
                  }, {
                    id: "Medium",
                    label: "🟡 Medium",
                    desc: "Operational Workflows"
                  }, {
                    id: "Hard",
                    label: "🔴 Hard",
                    desc: "Advanced & Policy"
                  }].map(tier => /*#__PURE__*/_jsxs("button", {
                    onClick: () => setDifficultyLevel(tier.id),
                    className: `py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${difficultyLevel === tier.id ? "bg-purple-600 text-white border-purple-600 shadow-xs ring-2 ring-purple-500/20" : "bg-white text-slate-700 border-slate-200 hover:border-purple-300 hover:bg-slate-50"}`,
                    children: [/*#__PURE__*/_jsx("div", {
                      children: tier.label
                    }), /*#__PURE__*/_jsx("div", {
                      className: `text-[10px] font-normal ${difficultyLevel === tier.id ? "text-purple-100" : "text-slate-400"}`,
                      children: tier.desc.split(" ")[0]
                    })]
                  }, tier.id))
                })]
              })]
            })
          }), /*#__PURE__*/_jsxs("div", {
            className: "glass-card rounded-2xl p-6 space-y-6 border-l-4 border-l-purple-600",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex items-center justify-between pb-3 border-b border-slate-100",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/_jsxs("span", {
                  className: "text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-bold border border-purple-200",
                  children: [difficultyLevel, " Level Tier"]
                }), /*#__PURE__*/_jsxs("span", {
                  className: "text-xs text-slate-500 font-medium",
                  children: ["Domain: ", DOMAIN_OPTIONS.find(d => d.id === selectedDomain)?.label]
                })]
              }), /*#__PURE__*/_jsxs("span", {
                className: "text-xs font-mono text-slate-500",
                children: ["Total Questions: ", examQuestions.length]
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "space-y-6",
              children: examQuestions.map((q, idx) => /*#__PURE__*/_jsxs("div", {
                className: "p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 space-y-3",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [/*#__PURE__*/_jsx("span", {
                      className: "w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center",
                      children: idx + 1
                    }), /*#__PURE__*/_jsx("span", {
                      className: "text-xs font-bold text-slate-800 font-display",
                      children: q.topic
                    })]
                  }), /*#__PURE__*/_jsx("span", {
                    className: "text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold",
                    children: q.competency
                  })]
                }), /*#__PURE__*/_jsx("p", {
                  className: "text-xs text-slate-700 font-medium leading-relaxed",
                  children: q.question
                }), /*#__PURE__*/_jsx("div", {
                  className: "space-y-2 pt-1",
                  children: q.options.map((opt, optIdx) => {
                    const isSelected = examAnswers[q.id] === optIdx;
                    let optStyle = "bg-white border-slate-200 text-slate-700 hover:border-purple-300";
                    if (examSubmitted) {
                      if (optIdx === q.correct) {
                        optStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold ring-1 ring-emerald-500/20";
                      } else if (isSelected && isSelected !== q.correct) {
                        optStyle = "bg-red-50 border-red-500 text-red-900 font-semibold ring-1 ring-red-500/20";
                      }
                    } else if (isSelected) {
                      optStyle = "bg-purple-50 border-purple-500 text-purple-900 font-semibold ring-2 ring-purple-500/20";
                    }
                    return /*#__PURE__*/_jsxs("div", {
                      onClick: () => !examSubmitted && setExamAnswers(prev => ({
                        ...prev,
                        [q.id]: optIdx
                      })),
                      className: `p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${optStyle}`,
                      children: [/*#__PURE__*/_jsxs("span", {
                        className: "font-mono font-bold text-slate-400 mt-0.5",
                        children: [String.fromCharCode(65 + optIdx), "."]
                      }), /*#__PURE__*/_jsx("span", {
                        className: "flex-1",
                        children: opt
                      })]
                    }, optIdx);
                  })
                }), examSubmitted && /*#__PURE__*/_jsxs("div", {
                  className: "p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1 text-slate-600",
                  children: [/*#__PURE__*/_jsxs("div", {
                    className: "font-semibold text-slate-800 flex items-center gap-1.5",
                    children: [/*#__PURE__*/_jsx("span", {
                      children: "📚 Citation:"
                    }), /*#__PURE__*/_jsx("span", {
                      className: "font-mono text-purple-700",
                      children: q.citation
                    })]
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-[11px] leading-relaxed",
                    children: q.explanation
                  })]
                })]
              }, q.id))
            }), /*#__PURE__*/_jsxs("div", {
              className: "pt-4 border-t border-slate-100 flex items-center justify-between",
              children: [/*#__PURE__*/_jsx("div", {
                children: examSubmitted && /*#__PURE__*/_jsxs("div", {
                  className: "text-xs",
                  children: [/*#__PURE__*/_jsxs("span", {
                    className: "font-bold text-slate-900 text-sm",
                    children: ["Score: ", examScore, "%"]
                  }), /*#__PURE__*/_jsxs("span", {
                    className: "text-slate-500 ml-2 font-mono",
                    children: ["(", Object.values(examAnswers).filter((ans, i) => ans === examQuestions[i]?.correct).length, " / ", examQuestions.length, " Correct)"]
                  })]
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "flex items-center gap-3",
                children: !examSubmitted ? /*#__PURE__*/_jsx("button", {
                  onClick: handleSubmitExam,
                  disabled: Object.keys(examAnswers).length === 0,
                  className: "px-6 py-2.5 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-700 disabled:opacity-50 transition-all shadow-sm",
                  children: "Submit Assessment →"
                }) : /*#__PURE__*/_jsxs("button", {
                  onClick: () => setActiveStep(3),
                  className: "px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-all shadow-sm flex items-center gap-2",
                  children: [/*#__PURE__*/_jsx("span", {
                    children: "View Recommended Courses"
                  }), /*#__PURE__*/_jsx("span", {
                    children: "→"
                  })]
                })
              })]
            })]
          })]
        }), activeStep === 3 && /*#__PURE__*/_jsxs("div", {
          className: "space-y-6",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("span", {
              className: "text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest",
              children: "Step 3 of 5"
            }), /*#__PURE__*/_jsx("h1", {
              className: "font-display text-2xl font-bold text-slate-900 mt-0.5",
              children: "Personalized Course Recommendations"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-slate-500 mt-1",
              children: "Categorized training programs mapped to identified competency gaps."
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "flex items-center gap-2 pb-2 overflow-x-auto",
            children: [{
              id: "all",
              label: "All Courses"
            }, {
              id: "Technical",
              label: "Technical Courses"
            }, {
              id: "Behavioural",
              label: "Behavioural Courses"
            }, {
              id: "Prescribed iGOT",
              label: "Prescribed iGOT Courses"
            }].map(tab => /*#__PURE__*/_jsx("button", {
              onClick: () => setCourseCategoryFilter(tab.id),
              className: `px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${courseCategoryFilter === tab.id ? "bg-emerald-600 text-white border-emerald-600 shadow-xs" : "bg-white text-slate-700 border-slate-200 hover:border-emerald-300"}`,
              children: tab.label
            }, tab.id))
          }), /*#__PURE__*/_jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
            children: COURSES_CATALOG.filter(c => courseCategoryFilter === "all" || c.category === courseCategoryFilter).map(course => /*#__PURE__*/_jsxs("div", {
              className: "glass-card rounded-2xl p-5 space-y-4 border-l-4 border-l-emerald-600 flex flex-col justify-between",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "space-y-2.5",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/_jsx("span", {
                    className: "text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold",
                    children: course.category
                  }), /*#__PURE__*/_jsx("span", {
                    className: "text-[10px] font-mono text-slate-400",
                    children: course.code
                  })]
                }), /*#__PURE__*/_jsx("h3", {
                  className: "font-display font-bold text-sm text-slate-900 leading-snug",
                  children: course.title
                }), /*#__PURE__*/_jsx("p", {
                  className: "text-xs text-slate-600 leading-relaxed",
                  children: course.description
                }), /*#__PURE__*/_jsxs("div", {
                  className: "space-y-1 text-[11px] text-slate-500 pt-1",
                  children: [/*#__PURE__*/_jsxs("div", {
                    children: ["🏛️ ", /*#__PURE__*/_jsx("strong", {
                      children: "Provider:"
                    }), " ", course.provider]
                  }), /*#__PURE__*/_jsxs("div", {
                    children: ["⏱️ ", /*#__PURE__*/_jsx("strong", {
                      children: "Duration:"
                    }), " ", course.duration]
                  }), /*#__PURE__*/_jsxs("div", {
                    children: ["👥 ", /*#__PURE__*/_jsx("strong", {
                      children: "Enrolled:"
                    }), " ", course.enrolled]
                  }), /*#__PURE__*/_jsxs("div", {
                    children: ["🎯 ", /*#__PURE__*/_jsx("strong", {
                      children: "Competency:"
                    }), " ", course.competencyCovered]
                  })]
                })]
              }), /*#__PURE__*/_jsx("button", {
                onClick: () => setActiveStep(4),
                className: "w-full py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-emerald-600 transition-all",
                children: "Enroll in iGOT Module →"
              })]
            }, course.id))
          })]
        }), activeStep === 4 && /*#__PURE__*/_jsxs("div", {
          className: "space-y-6",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("span", {
              className: "text-xs font-mono font-bold text-amber-600 uppercase tracking-widest",
              children: "Step 4 of 5"
            }), /*#__PURE__*/_jsx("h1", {
              className: "font-display text-2xl font-bold text-slate-900 mt-0.5",
              children: "Upload Learning Material & Generate Quizzes"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-slate-500 mt-1",
              children: "Bloom's Taxonomy cognitive level questions generated from official training documents."
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "grid lg:grid-cols-3 gap-6",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "lg:col-span-1 glass-card rounded-2xl p-5 space-y-4 border-l-4 border-l-amber-600",
              children: [/*#__PURE__*/_jsx("h3", {
                className: "font-display font-bold text-sm text-slate-900",
                children: "Select or Upload Learning Document"
              }), /*#__PURE__*/_jsx("div", {
                className: "space-y-2",
                children: [{
                  id: "plfs_sop",
                  title: "MoSPI CAPI Data Scrutiny Guidelines (PLFS)",
                  pages: "Circular No. 2025/11"
                }, {
                  id: "sna_guidelines",
                  title: "CSO National Accounts SNA 2025 Framework",
                  pages: "Technical Monograph"
                }].map(doc => /*#__PURE__*/_jsxs("div", {
                  onClick: () => setSelectedPreset(doc.id),
                  className: `p-3 rounded-xl border cursor-pointer text-xs transition-all ${selectedPreset === doc.id ? "bg-amber-50 border-amber-500 font-semibold ring-2 ring-amber-500/20" : "bg-white border-slate-200 hover:border-amber-300"}`,
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "text-slate-900",
                    children: doc.title
                  }), /*#__PURE__*/_jsx("div", {
                    className: "text-[10px] text-slate-400 font-mono mt-0.5",
                    children: doc.pages
                  })]
                }, doc.id))
              }), /*#__PURE__*/_jsxs("div", {
                className: "pt-2",
                children: [/*#__PURE__*/_jsx("label", {
                  className: "block text-xs font-semibold text-slate-700 mb-1",
                  children: "Or Paste Text Circular:"
                }), /*#__PURE__*/_jsx("textarea", {
                  rows: 4,
                  value: customMaterial,
                  onChange: e => setCustomMaterial(e.target.value),
                  placeholder: "Paste circular paragraphs or training guidelines...",
                  className: "w-full p-2.5 rounded-xl border border-slate-300 text-xs font-mono focus:outline-none focus:border-amber-500 bg-slate-50"
                })]
              }), /*#__PURE__*/_jsx("button", {
                onClick: handleGenerateMCQ,
                disabled: isGeneratingMcq,
                className: "w-full py-2.5 rounded-xl bg-amber-600 text-white text-xs font-semibold hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-sm",
                children: isGeneratingMcq ? /*#__PURE__*/_jsxs(_Fragment, {
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  }), /*#__PURE__*/_jsx("span", {
                    children: "Synthesizing Bloom's MCQs..."
                  })]
                }) : /*#__PURE__*/_jsxs(_Fragment, {
                  children: [/*#__PURE__*/_jsx("span", {
                    children: "Generate MCQs from Document"
                  }), /*#__PURE__*/_jsx("span", {
                    children: "→"
                  })]
                })
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "lg:col-span-2 glass-card rounded-2xl p-6 space-y-5 border-l-4 border-l-amber-600",
              children: generatedQuiz ? /*#__PURE__*/_jsxs("div", {
                className: "space-y-5",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "pb-3 border-b border-slate-100 flex items-center justify-between",
                  children: [/*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsx("h3", {
                      className: "font-display font-bold text-sm text-slate-900",
                      children: generatedQuiz.title
                    }), /*#__PURE__*/_jsx("span", {
                      className: "text-[10px] font-mono text-amber-700 font-semibold",
                      children: generatedQuiz.level
                    })]
                  }), /*#__PURE__*/_jsx("span", {
                    className: "text-xs font-mono text-slate-400",
                    children: "3 Questions"
                  })]
                }), /*#__PURE__*/_jsx("div", {
                  className: "space-y-5",
                  children: generatedQuiz.questions.map((q, idx) => /*#__PURE__*/_jsxs("div", {
                    className: "p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5",
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [/*#__PURE__*/_jsxs("span", {
                        className: "text-xs font-bold text-slate-800",
                        children: ["Q", idx + 1, ". ", q.text]
                      }), /*#__PURE__*/_jsx("span", {
                        className: "text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold",
                        children: q.bloom
                      })]
                    }), /*#__PURE__*/_jsx("div", {
                      className: "space-y-1.5 pt-1",
                      children: q.options.map((opt, oIdx) => {
                        const isSel = quizAnswers[q.id] === oIdx;
                        let style = "bg-white border-slate-200 text-slate-700 hover:border-amber-300";
                        if (quizSubmitted) {
                          if (oIdx === q.correct) style = "bg-emerald-50 border-emerald-500 font-semibold text-emerald-900";else if (isSel) style = "bg-red-50 border-red-500 font-semibold text-red-900";
                        } else if (isSel) {
                          style = "bg-amber-50 border-amber-500 font-semibold text-amber-900";
                        }
                        return /*#__PURE__*/_jsxs("div", {
                          onClick: () => !quizSubmitted && setQuizAnswers(prev => ({
                            ...prev,
                            [q.id]: oIdx
                          })),
                          className: `p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2 ${style}`,
                          children: [/*#__PURE__*/_jsxs("span", {
                            className: "font-mono font-bold text-slate-400",
                            children: [String.fromCharCode(65 + oIdx), "."]
                          }), /*#__PURE__*/_jsx("span", {
                            children: opt
                          })]
                        }, oIdx);
                      })
                    }), quizSubmitted && /*#__PURE__*/_jsxs("div", {
                      className: "p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600 space-y-1",
                      children: [/*#__PURE__*/_jsxs("div", {
                        children: [/*#__PURE__*/_jsx("strong", {
                          children: "Citation:"
                        }), " ", q.citation]
                      }), /*#__PURE__*/_jsx("p", {
                        children: q.explanation
                      })]
                    })]
                  }, q.id))
                }), /*#__PURE__*/_jsx("div", {
                  className: "pt-3 border-t border-slate-100 flex items-center justify-between",
                  children: quizSubmitted ? /*#__PURE__*/_jsxs("button", {
                    onClick: () => setActiveStep(5),
                    className: "px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-all flex items-center gap-2",
                    children: [/*#__PURE__*/_jsx("span", {
                      children: "Proceed to Skill Gap Report"
                    }), /*#__PURE__*/_jsx("span", {
                      children: "→"
                    })]
                  }) : /*#__PURE__*/_jsx("button", {
                    onClick: () => {
                      let cor = 0;
                      generatedQuiz.questions.forEach(q => {
                        if (quizAnswers[q.id] === q.correct) cor++;
                      });
                      setQuizScore(Math.round(cor / generatedQuiz.questions.length * 100));
                      setQuizSubmitted(true);
                    },
                    disabled: Object.keys(quizAnswers).length === 0,
                    className: "px-5 py-2.5 rounded-xl bg-amber-600 text-white text-xs font-semibold hover:bg-amber-700 transition-all disabled:opacity-50",
                    children: "Evaluate Document Quiz →"
                  })
                })]
              }) : /*#__PURE__*/_jsxs("div", {
                className: "py-12 text-center text-slate-400 text-xs space-y-2",
                children: [/*#__PURE__*/_jsx("span", {
                  className: "text-3xl block",
                  children: "📄"
                }), /*#__PURE__*/_jsx("span", {
                  children: "Click \"Generate MCQs from Document\" to extract assessment questions."
                })]
              })
            })]
          })]
        }), activeStep === 5 && /*#__PURE__*/_jsxs("div", {
          className: "space-y-6",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("span", {
              className: "text-xs font-mono font-bold text-blue-600 uppercase tracking-widest",
              children: "Step 5 of 5"
            }), /*#__PURE__*/_jsx("h1", {
              className: "font-display text-2xl font-bold text-slate-900 mt-0.5",
              children: "Pratibha Darpan — Competency Gap Analysis Report"
            }), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-slate-500 mt-1",
              children: "Official evaluation audit, competency passport, and recommended interventions."
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "glass-card rounded-2xl p-6 border-l-4 border-l-blue-600 flex flex-col md:flex-row items-center justify-between gap-6",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex items-center gap-4",
              children: [/*#__PURE__*/_jsx(OfficerAvatar, {
                email: activeOfficer?.email,
                name: activeOfficer?.name,
                gender: activeOfficer?.gender,
                size: "xl"
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-1",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [/*#__PURE__*/_jsx("span", {
                    className: "text-xs font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold",
                    children: activeOfficer?.cadre
                  }), /*#__PURE__*/_jsx("span", {
                    className: "text-xs text-slate-500",
                    children: activeOfficer?.organization
                  })]
                }), /*#__PURE__*/_jsx("h2", {
                  className: "font-display font-bold text-xl text-slate-900",
                  children: activeOfficer?.name
                }), /*#__PURE__*/_jsxs("p", {
                  className: "text-xs text-slate-600",
                  children: [activeOfficer?.designation, " — ", activeOfficer?.division]
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "flex items-center gap-4 text-center",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "p-3 rounded-xl bg-slate-50 border border-slate-200",
                children: [/*#__PURE__*/_jsx("span", {
                  className: "text-[10px] font-mono text-slate-500 uppercase block",
                  children: "Assessment Score"
                }), /*#__PURE__*/_jsx("strong", {
                  className: "text-xl font-display font-black text-purple-700",
                  children: examScore !== null ? `${examScore}%` : "Evaluated"
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "p-3 rounded-xl bg-slate-50 border border-slate-200",
                children: [/*#__PURE__*/_jsx("span", {
                  className: "text-[10px] font-mono text-slate-500 uppercase block",
                  children: "Competency Status"
                }), /*#__PURE__*/_jsx("strong", {
                  className: "text-xl font-display font-black text-emerald-700",
                  children: "Audit Ready"
                })]
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "glass-card rounded-2xl p-6 space-y-4 border-l-4 border-l-blue-600",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-display font-bold text-sm text-slate-900",
              children: "Official Statistical Competency Matrix"
            }), /*#__PURE__*/_jsx("div", {
              className: "space-y-3",
              children: competencies.map(c => {
                const gap = c.target - c.current;
                return /*#__PURE__*/_jsxs("div", {
                  className: "p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2",
                  children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex items-center justify-between text-xs",
                    children: [/*#__PURE__*/_jsxs("div", {
                      children: [/*#__PURE__*/_jsx("strong", {
                        className: "text-slate-900",
                        children: c.name
                      }), /*#__PURE__*/_jsx("span", {
                        className: `ml-2 text-[10px] font-mono px-2 py-0.5 rounded ${gap <= 0 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800 font-bold"}`,
                        children: gap <= 0 ? "Target Achieved" : `Gap: -${gap}%`
                      })]
                    }), /*#__PURE__*/_jsxs("span", {
                      className: "font-mono text-slate-500",
                      children: ["Current: ", /*#__PURE__*/_jsxs("strong", {
                        children: [c.current, "%"]
                      }), " / Target: ", c.target, "%"]
                    })]
                  }), /*#__PURE__*/_jsx("div", {
                    className: "w-full bg-slate-200 h-2 rounded-full overflow-hidden",
                    children: /*#__PURE__*/_jsx("div", {
                      className: `h-full transition-all duration-500 ${gap <= 0 ? "bg-emerald-500" : "bg-blue-600"}`,
                      style: {
                        width: `${Math.min(100, c.current)}%`
                      }
                    })
                  })]
                }, c.id);
              })
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex items-center justify-between pt-2",
            children: [/*#__PURE__*/_jsx("button", {
              onClick: () => window.print(),
              className: "px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-all flex items-center gap-2",
              children: /*#__PURE__*/_jsx("span", {
                children: "🖨️ Print Pratibha Darpan Report"
              })
            }), /*#__PURE__*/_jsx("button", {
              onClick: () => setActiveStep(1),
              className: "px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-blue-600 transition-all",
              children: "Sign In Another Officer / Reset Flow →"
            })]
          })]
        })]
      })]
    })]
  });
}

// Mount to Root
ReactDOM.render(/*#__PURE__*/_jsx(App, {}), document.getElementById("root"));