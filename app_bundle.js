const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

// -------------------------------------------------------------------------
// OFFICIAL iGOT KARMAYOGI VECTOR EMBLEM
// -------------------------------------------------------------------------
function KarmayogiLogo({
  size = 42
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "shrink-0 shadow-sm rounded-xl"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "shieldGrad",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#1E3A8A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#0F172A"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "goldGrad",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#FDE047"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#EAB308"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#CA8A04"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "tricolor",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#FF9933"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#FFFFFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#138808"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100",
    height: "100",
    rx: "22",
    fill: "url(#shieldGrad)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "94",
    height: "94",
    rx: "19",
    stroke: "url(#goldGrad)",
    strokeWidth: "2.5",
    fill: "none",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "48",
    r: "32",
    stroke: "url(#goldGrad)",
    strokeWidth: "1.5",
    strokeDasharray: "3 3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "48",
    r: "26",
    stroke: "#60A5FA",
    strokeWidth: "1.2",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 26 L68 48 L50 70 L32 48 Z",
    fill: "#1D4ED8",
    stroke: "url(#goldGrad)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "48",
    r: "7",
    fill: "url(#goldGrad)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "48",
    r: "3.5",
    fill: "#0F172A"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "20",
    x2: "50",
    y2: "26",
    stroke: "url(#goldGrad)",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "70",
    x2: "50",
    y2: "76",
    stroke: "url(#goldGrad)",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "48",
    x2: "32",
    y2: "48",
    stroke: "url(#goldGrad)",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "68",
    y1: "48",
    x2: "78",
    y2: "48",
    stroke: "url(#goldGrad)",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "85",
    width: "60",
    height: "4",
    rx: "2",
    fill: "url(#tricolor)"
  }));
}

// -------------------------------------------------------------------------
// DETERMINISTIC VECTOR SVG CIVIL SERVANT AVATAR GENERATOR
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
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    className: "w-full h-full",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gradId,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: bg[0]
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: bg[1]
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100",
    height: "100",
    rx: "22",
    fill: `url(#${gradId})`
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 100 C12 76 28 70 50 70 C72 70 88 76 88 100 Z",
    fill: suit
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "38,70 50,86 62,70",
    fill: shirt
  }), isFemale ? /*#__PURE__*/React.createElement("path", {
    d: "M28 74 Q42 85 50 96 Q58 85 72 74",
    stroke: tie,
    strokeWidth: "3.5",
    fill: "none",
    strokeLinecap: "round"
  }) : /*#__PURE__*/React.createElement("polygon", {
    points: "48,74 52,74 53.5,94 50,100 46.5,94",
    fill: tie
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 70 L44 88 L38 100",
    stroke: "#000",
    strokeWidth: "1.2",
    opacity: "0.3",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M72 70 L56 88 L62 100",
    stroke: "#000",
    strokeWidth: "1.2",
    opacity: "0.3",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "27",
    cy: "83",
    r: "3.2",
    fill: "#eab308"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "27",
    cy: "83",
    r: "1.8",
    fill: "#1e3a8a"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "44",
    y: "56",
    width: "12",
    height: "16",
    rx: "4",
    fill: skin
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "45",
    rx: "18",
    ry: "21",
    fill: skin
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "31",
    cy: "46",
    r: "3.5",
    fill: skin
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "69",
    cy: "46",
    r: "3.5",
    fill: skin
  }), isFemale ? /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M30 46 C29 20 71 20 70 46 C66 30 34 30 30 46 Z",
    fill: hair
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "38",
    r: "1.8",
    fill: "#dc2626"
  })) : /*#__PURE__*/React.createElement("path", {
    d: "M31 40 C31 24 69 24 69 40 C65 28 35 28 31 40 Z",
    fill: hair
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "43",
    cy: "45",
    r: "2",
    fill: "#1e293b"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "57",
    cy: "45",
    r: "2",
    fill: "#1e293b"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M39 41 Q43 39 47 41",
    stroke: hair,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M53 41 Q57 39 61 41",
    stroke: hair,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M45 54 Q50 58 55 54",
    stroke: "#475569",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    fill: "none"
  }), hasGlasses && /*#__PURE__*/React.createElement("g", {
    stroke: "#334155",
    strokeWidth: "1.4",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "37",
    y: "41",
    width: "11",
    height: "8",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "52",
    y: "41",
    width: "11",
    height: "8",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "48",
    y1: "45",
    x2: "52",
    y2: "45"
  })));
}

// -------------------------------------------------------------------------
// DYNAMIC AVATAR COMPONENT (DICEBEAR WITH BESPOKE SVG FALLBACK)
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
  return /*#__PURE__*/React.createElement("div", {
    className: `relative ${sizeClasses[size] || "w-11 h-11"} rounded-2xl overflow-hidden shadow-sm shrink-0 border border-slate-700/30 ${className}`
  }, useFallback ? generateOfficerSvg(seed, isFemale) : /*#__PURE__*/React.createElement("img", {
    key: dicebearUrl,
    src: dicebearUrl,
    alt: name || "Officer",
    onError: () => setUseFallback(true),
    className: "w-full h-full object-cover"
  }));
}

// -------------------------------------------------------------------------
// OFFICIAL EMPLOYEE EXAMPLES (EXACTLY TWO AS REQUESTED: GOVT & PSU)
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
// COMPREHENSIVE QUESTION BANK (108 QUESTIONS: 6 DOMAINS x 3 TIERS x 6 QUESTIONS)
// -------------------------------------------------------------------------
const QUESTION_BANK = {
  "sampling": {
    "Easy": [{
      "id": "s_e_1",
      "topic": "Sampling Units",
      "competency": "Survey Execution & CAPI",
      "question": "In standard multi-stage survey design, what distinguishes a Primary Sampling Unit (PSU) from an Ultimate Sampling Unit (SSU)?",
      "options": ["PSUs are the first-stage administrative clusters (e.g. Census villages/urban blocks), while SSUs are the final sampled households.", "PSUs are always individual factories, while SSUs are nationwide industry sectors.", "PSUs and SSUs are interchangeable terms with no methodological difference.", "PSUs are only surveyed once every ten years in decennial population censuses."],
      "correct": 0,
      "citation": "NSSTA Survey Design Handbook \u2014 Section 1.2",
      "explanation": "In multi-stage sampling, PSUs represent first-stage clusters (FSUs/PSUs), within which ultimate sample units (households/enterprises) are listed."
    }, {
      "id": "s_e_2",
      "topic": "Sampling Frames",
      "competency": "Frame Validation",
      "question": "What is the primary statistical consequence of using an outdated urban frame during household listing?",
      "options": ["Coverage error (under-coverage of newly urbanized colonies and over-coverage of demolished dwellings).", "Immediate hardware breakdown of the enumerator's CAPI tablet.", "Automatic doubling of the district population multiplier.", "Zero variance across all survey estimates."],
      "correct": 0,
      "citation": "NSSO FOD Field Manual \u2014 Chapter 1",
      "explanation": "An obsolete frame leads to coverage bias, omitting newly constructed settlements and listing non-existent structures."
    }, {
      "id": "s_e_3",
      "topic": "Doorstep Sample Selection",
      "competency": "Probability Sampling",
      "question": "Why must enumerators strictly follow circular systematic sampling instead of purposive household selection?",
      "options": ["To ensure every listed household has a known, non-zero probability of selection, eliminating subjective investigator bias.", "To minimize the physical walking distance between interviewed households.", "To interview only households that own motorized vehicles.", "To ensure all surveyed households belong to the same income quintile."],
      "correct": 0,
      "citation": "NSSTA Basic Sampling Guidelines \u2014 Module 2",
      "explanation": "Probability sampling requires known non-zero selection probabilities to guarantee design-unbiased estimates."
    }, {
      "id": "s_e_4",
      "topic": "Rural Sampling Frame",
      "competency": "Frame Construction",
      "question": "Which administrative baseline serves as the official sampling frame for rural socio-economic surveys in India?",
      "options": ["The latest decennial Population Census Village Directory with geographical boundaries and population counts.", "Commercial telephone directory subscriber lists.", "District land revenue tax registers only.", "Gram Panchayat election voter rolls."],
      "correct": 0,
      "citation": "NSSO Sampling Design Manual \u2014 Chapter 2",
      "explanation": "Decennial Population Census village directories provide the standard rural frame of all inhabited revenue settlements."
    }, {
      "id": "s_e_5",
      "topic": "Sampling With vs Without Replacement",
      "competency": "Sampling Theory",
      "question": "Why is Simple Random Sampling Without Replacement (SRSWOR) more statistically efficient than With Replacement (SRSWR)?",
      "options": ["SRSWOR incorporates the finite population correction factor (1 - n/N), yielding smaller sampling variance.", "SRSWOR interviews each household at least twice.", "SRSWOR reduces the district sample size to zero.", "SRSWR is illegal under official statistics acts."],
      "correct": 0,
      "citation": "Cochran Sampling Techniques \u2014 Chapter 2",
      "explanation": "Without replacement eliminates duplicate selection of the same unit, resulting in strictly lower estimation variance."
    }, {
      "id": "s_e_6",
      "topic": "CAPI Field Validation",
      "competency": "Field Data Quality",
      "question": "What is the primary role of in-built validation rules on Computer-Assisted Personal Interviewing (CAPI) tablets?",
      "options": ["To trap data entry typos, out-of-range responses, and logical inconsistencies at the doorstep before transmission.", "To automatically generate fabricated responses for absent households.", "To compute national inflation estimates on the tablet.", "To restrict enumerators from working during evening hours."],
      "correct": 0,
      "citation": "MoSPI CAPI Data Scrutiny Protocol \u2014 FOD",
      "explanation": "In-built CAPI validation checks ensure data cleanliness at point of collection, eliminating costly back-checks."
    }],
    "Medium": [{
      "id": "s_m_1",
      "topic": "Hamlet-Group Formation",
      "competency": "Field Listing & Sub-sampling",
      "question": "Under NSSO FOD listing protocols, when a sampled village exceeds 1,200 households, what procedure is mandatory?",
      "options": ["Divide the village into artificial Hamlet-Groups (HGs) of approximately equal population size and randomly select two HGs for detailed listing.", "Survey only the households located within 50 meters of the Gram Panchayat office.", "Drop the village from the sample and substitute with an adjacent smaller village.", "List all 1,200 households in a single continuous schedule on the tablet."],
      "correct": 0,
      "citation": "NSSO FOD Field Investigators Manual \u2014 Chapter 2",
      "explanation": "Hamlet-Group formation prevents listing fatigue, ensuring manageable and unbiased second-stage household listing."
    }, {
      "id": "s_m_2",
      "topic": "Stratified Allocation",
      "competency": "Sample Allocation Theory",
      "question": "Under Neyman Optimal Allocation, how are sample sizes distributed across sub-strata with unequal variances?",
      "options": ["Higher sample size is allocated to strata that are larger and exhibit greater internal variance.", "Equal sample size is distributed to all strata regardless of variance.", "Sample size is allocated purely in inverse proportion to strata population.", "Strata with high variance are completely discarded from the frame."],
      "correct": 0,
      "citation": "Sampling Theory & Methods \u2014 Chapter 4",
      "explanation": "Neyman allocation minimizes overall variance for a fixed sample size by weighting both stratum size and standard deviation."
    }, {
      "id": "s_m_3",
      "topic": "Non-Response Weighting",
      "competency": "Multiplier Adjustments",
      "question": "When households in a primary sampling unit refuse interview, how is the sampling weight (multiplier) adjusted?",
      "options": ["Inflated by the inverse of the response rate within the same socio-economic sub-stratum.", "Multiplied by zero and discarded from population aggregate tables.", "Permanently assigned to the nearest urban district.", "Replaced by the national median household income parameter."],
      "correct": 0,
      "citation": "DPD Estimation & Weighting Methodology \u2014 Section 5",
      "explanation": "Non-response adjustment factors scale up the weights of responding units within the same homogeneous sub-stratum."
    }, {
      "id": "s_m_4",
      "topic": "Ratio vs Regression Estimators",
      "competency": "Auxiliary Information",
      "question": "When auxiliary variable X is strongly correlated with study variable Y, under what condition is the Linear Regression Estimator strictly superior to the Ratio Estimator?",
      "options": ["When the linear regression line between Y and X does not pass through the coordinate origin (intercept != 0).", "When the correlation coefficient between Y and X is exactly 1.0.", "When all values of X are negative numbers.", "When sample size is less than 5 households."],
      "correct": 0,
      "citation": "Theory of Sample Surveys \u2014 Des Raj & Chandhok",
      "explanation": "The Ratio Estimator assumes regression through the origin; when an intercept exists, the Regression Estimator yields smaller MSE."
    }, {
      "id": "s_m_5",
      "topic": "Stratification Efficiency",
      "competency": "Variance Reduction",
      "question": "How does creating internally homogeneous strata affect sampling variance relative to unstratified simple random sampling?",
      "options": ["Between-stratum variance is eliminated from overall sampling error, strictly reducing total estimation variance.", "It doubles the standard error of population estimates.", "It creates systematic non-sampling bias across all districts.", "It forces the survey design effect (Deff) to exceed 5.0."],
      "correct": 0,
      "citation": "NSSTA Intermediate Sampling Handbook \u2014 Module 3",
      "explanation": "Stratification eliminates between-stratum differences from sampling variance, ensuring maximum precision for fixed sample size."
    }, {
      "id": "s_m_6",
      "topic": "UFS Block Demarcation",
      "competency": "Urban Frame Operations",
      "question": "What is the fundamental boundary criterion used during Urban Frame Survey (UFS) block updating?",
      "options": ["Clear, permanent geographical boundaries (roads, railway tracks, nullahs) enclosing 100-150 households.", "Only high-income housing societies with security gates.", "Ward areas based strictly on political boundaries.", "Unbounded circular areas measuring exactly 5 km in radius."],
      "correct": 0,
      "citation": "Urban Frame Survey (UFS) Manual \u2014 NSSO FOD",
      "explanation": "UFS blocks must have permanent, identifiable physical boundaries and a population of 100-150 households to ensure reliable listing."
    }],
    "Hard": [{
      "id": "s_h_1",
      "topic": "Design Effect & Intra-Cluster Correlation",
      "competency": "Complex Survey Inference",
      "question": "In Two-Stage Stratified Cluster Sampling (PLFS Round 81), how is the design effect (Deff) minimized when intra-class correlation (rho) in Primary Sampling Units is high?",
      "options": ["Increase the number of PSUs (FSUs) sampled while reducing the number of Ultimate Sampling Units (SSUs) per cluster.", "Double the sample size of households within existing clusters without changing FSU count.", "Switch entirely to Simple Random Sampling without stratification across frames.", "Exclude all self-weighting sub-strata from the sampling frame."],
      "correct": 0,
      "citation": "NSSTA Advanced Sampling Manual \u2014 Section 4.1",
      "explanation": "When intra-cluster correlation is high, units within a cluster duplicate information. Sampling more clusters with fewer elements per cluster minimizes variance."
    }, {
      "id": "s_h_2",
      "topic": "Small Area Estimation (SAE)",
      "competency": "Fay-Herriot Modeling",
      "question": "In Fay-Herriot Small Area Estimation models for district-level poverty indicators, how are direct survey estimators combined with synthetic model predictors?",
      "options": ["Weighted by the ratio of sampling variance to total model variance (Empirical Best Linear Unbiased Predictor - EBLUP).", "By simple arithmetic averaging without considering design variance.", "By replacing direct survey estimates with national census averages whenever sample size is below 50.", "By applying principal component analysis to eliminate all auxiliary administrative covariates."],
      "correct": 0,
      "citation": "MoSPI Small Area Estimation Monograph \u2014 Chapter 3",
      "explanation": "The Fay-Herriot EBLUP borrows strength from auxiliary administrative covariates, shrinking direct estimates toward the model regression line based on sampling reliability."
    }, {
      "id": "s_h_3",
      "topic": "Replication Variance Estimation",
      "competency": "Resampling & Jackknife",
      "question": "When estimating the standard error of non-linear ratios (such as Gini coefficient of expenditure), why is Balanced Repeated Replication (BRR) preferred over Taylor Series linearization?",
      "options": ["It directly accounts for complex multi-stage stratification and clustering without requiring analytical derivative approximations.", "It eliminates the need for calculating survey design weights.", "It reduces the required survey sample size by 50%.", "It guarantees identical estimates across all computer architectures."],
      "correct": 0,
      "citation": "Advanced Survey Methodology \u2014 Section 8.4",
      "explanation": "Replication methods capture design variance directly from pseudo-replicate weights, avoiding tedious analytical derivatives of complex non-linear statistics."
    }, {
      "id": "s_h_4",
      "topic": "GREG Weight Calibration",
      "competency": "Calibration Estimators",
      "question": "In Generalized Regression Estimation (GREG), how are base design weights calibrated against known auxiliary population totals?",
      "options": ["By minimizing distance metrics (such as chi-square distance) subject to linear calibration constraints matching auxiliary margins.", "By assigning equal weights to all households regardless of stratum size.", "By discarding all respondents whose income exceeds the 90th percentile.", "By dividing weights by the survey interviewer ID."],
      "correct": 0,
      "citation": "Deville & Sarndal (1992) \u2014 Calibration Estimators in Survey Sampling",
      "explanation": "GREG calibration adjusts survey weights to reproduce known external administrative totals while minimizing deviation from design weights."
    }, {
      "id": "s_h_5",
      "topic": "Two-Phase vs Two-Stage Sampling",
      "competency": "Sampling Design Theory",
      "question": "What is the structural difference between Two-Phase (Double) Sampling and Two-Stage Sampling?",
      "options": ["In two-phase sampling, a large sample is first screened for auxiliary data before subsampling identical units; in two-stage sampling, clusters are sampled first and sub-units within clusters second.", "Two-phase sampling can only be done in decennial censuses, while two-stage sampling is for annual surveys.", "There is no difference; both are identical technical synonyms.", "Two-phase sampling requires two independent commercial survey vendors."],
      "correct": 0,
      "citation": "Sarndal, Swensson, & Wretman \u2014 Model Assisted Survey Sampling",
      "explanation": "Two-phase sampling draws a sub-sample of elements from an initial sample; two-stage sampling draws sub-units from primary sampling clusters."
    }, {
      "id": "s_h_6",
      "topic": "Structural Outlier Scrutiny",
      "competency": "Winsorization & Robust Multipliers",
      "question": "When extreme high-income households severely distort design-weighted aggregates, what is the standard MoSPI protocol?",
      "options": ["Treat them as self-representing units (weight = 1.0) and re-distribute remaining design weights among non-outlier units in the stratum.", "Delete the outlier records entirely from survey microdata files.", "Multiply the outlier values by zero and report median income only.", "Force all households in the district to adopt the outlier value."],
      "correct": 0,
      "citation": "MoSPI Microdata Scrutiny and Outlier Guidelines \u2014 SDRD",
      "explanation": "Treating extreme validated units as self-representing prevents their enormous multipliers from wildly inflating national population aggregates."
    }]
  },
  "accounts": {
    "Easy": [{
      "id": "a_e_1",
      "topic": "GDP Compilation Approaches",
      "competency": "Macroeconomic Fundamentals",
      "question": "What are the three conceptually equivalent approaches used in national accounts to compile Gross Domestic Product (GDP)?",
      "options": ["Production (Output) Approach, Income Approach, and Expenditure Approach.", "Cash Balance Approach, Speculative Approach, and Fiscal Deficit Approach.", "Export-Import Differential, Forex Reserves, and Bank Repo Rate.", "Population Growth Factor, Agricultural Monsoon Index, and Sensex Volume."],
      "correct": 0,
      "citation": "CSO National Accounts Compilation Guide \u2014 Chapter 1",
      "explanation": "GDP measures the monetary value of final goods/services via Output, Income generated, and Final Expenditure."
    }, {
      "id": "a_e_2",
      "topic": "Nominal vs Real GDP",
      "competency": "Price Deflators",
      "question": "How is Real GDP derived from Nominal GDP in macroeconomic reporting?",
      "options": ["By dividing Nominal GDP by the GDP Deflator (price index) and multiplying by 100 to remove inflation effects.", "By adding current year GST collections directly to Nominal GDP.", "By subtracting foreign direct investment from the trade balance.", "By multiplying Nominal GDP by the annual bank lending rate."],
      "correct": 0,
      "citation": "CSO Price Statistics & Deflators \u2014 Module 2",
      "explanation": "Real GDP reflects true volume output evaluated at base year prices by deflating nominal output with the comprehensive GDP deflator."
    }, {
      "id": "a_e_3",
      "topic": "Gross Fixed Capital Formation",
      "competency": "Capital Accounting",
      "question": "Which expenditure component constitutes Gross Fixed Capital Formation (GFCF)?",
      "options": ["Acquisition of machinery, equipment, intellectual property products, and infrastructure construction minus disposals.", "Total household spending on daily food and consumer perishables.", "Government subsidy payments to public welfare schemes.", "Foreign portfolio investments held in Indian equity mutual funds."],
      "correct": 0,
      "citation": "System of National Accounts \u2014 Chapter 10",
      "explanation": "GFCF measures net additions of fixed capital assets (buildings, roads, machinery, R&D) used repeatedly in productive processes."
    }, {
      "id": "a_e_4",
      "topic": "Factor Cost vs Market Prices",
      "competency": "Valuation Concepts",
      "question": "What accounts for the difference between GDP at Factor Cost and GDP at Market Prices?",
      "options": ["Net Product Taxes (Product Taxes minus Product Subsidies).", "Total personal income taxes collected by the central board.", "Depreciation of transport vehicles only.", "Commercial bank interest rate spreads."],
      "correct": 0,
      "citation": "National Accounts Concepts \u2014 CSO NAD",
      "explanation": "Market prices include indirect product taxes and deduct product subsidies, whereas factor cost evaluates payments to factors."
    }, {
      "id": "a_e_5",
      "topic": "Gross Value Added (GVA)",
      "competency": "Production Output",
      "question": "How is Gross Value Added (GVA) computed from enterprise production data?",
      "options": ["Gross Value of Output minus the value of Intermediate Consumption.", "Total Sales Revenue plus corporate dividend tax.", "Total worker wages multiplied by the annual inflation index.", "Net Profit after corporate income tax deductions."],
      "correct": 0,
      "citation": "System of National Accounts 2008 \u2014 Chapter 6",
      "explanation": "GVA measures the net contribution of each producer by deducting intermediate goods and services consumed from gross output."
    }, {
      "id": "a_e_6",
      "topic": "Household Consumption Scope",
      "competency": "HFCE Scope",
      "question": "What is included under Household Final Consumption Expenditure (HFCE)?",
      "options": ["Consumer spending on goods and services, plus imputed rent of owner-occupied dwellings and goods produced for own consumption.", "Only cash transactions conducted at registered supermarkets.", "Purchase of residential land and financial equity shares.", "Direct income tax payments to central and state governments."],
      "correct": 0,
      "citation": "SNA Compilation Guidelines \u2014 Chapter 9",
      "explanation": "HFCE encompasses all resident household consumer expenditures, including imputed values of owner-occupied housing services."
    }],
    "Medium": [{
      "id": "a_m_1",
      "topic": "FISIM Reference Rate",
      "competency": "Financial Intermediation",
      "question": "In SNA 2008/2025, how is Financial Intermediation Services Indirectly Measured (FISIM) calculated?",
      "options": ["As the spread between actual interest rates charged/paid and a risk-free reference rate on loans and deposits.", "By totaling the gross dividend payouts of all commercial banks in the financial year.", "As 18% GST charged on digital banking transactions.", "By subtracting non-performing assets from the RBI repo rate."],
      "correct": 0,
      "citation": "SNA 2008 Framework \u2014 Paragraph 6.163",
      "explanation": "FISIM quantifies indirect banking service charges through the interest rate differential between loans/deposits and the reference interbank rate."
    }, {
      "id": "a_m_2",
      "topic": "Basic Prices vs Market Prices",
      "competency": "GVA at Basic Prices",
      "question": "What is the relationship between Gross Value Added (GVA) at Basic Prices and GDP at Market Prices in Indian National Accounts?",
      "options": ["GDP at Market Prices = GVA at Basic Prices + Product Taxes - Product Subsidies.", "GDP at Market Prices = GVA at Basic Prices - Income Tax + Import Tariffs.", "GDP at Market Prices = GVA at Basic Prices multiplied by the Consumer Price Index.", "GVA at Basic Prices and GDP at Market Prices are strictly identical."],
      "correct": 0,
      "citation": "MoSPI Methodology on GVA at Basic Prices \u2014 Section 2",
      "explanation": "Under the 2011-12 base revision, GDP at Market Prices equals GVA at Basic Prices plus net product taxes (taxes minus subsidies)."
    }, {
      "id": "a_m_3",
      "topic": "Double Deflation",
      "competency": "Volume Estimation",
      "question": "Why is the Double Deflation method required to accurately compile Real Gross Value Added (GVA) for manufacturing?",
      "options": ["It independently deflates gross output with output price indices and intermediate inputs with input price indices.", "It applies the deflator twice to compensate for rounding errors.", "It eliminates all indirect tax revenue from corporate balance sheets.", "It matches wholesale prices with international commodities."],
      "correct": 0,
      "citation": "CSO Double Deflation Working Paper \u2014 NAD",
      "explanation": "Single deflation creates bias when raw material input prices diverge from final output prices. Double deflation calculates real output minus real inputs."
    }, {
      "id": "a_m_4",
      "topic": "CFC vs Book Depreciation",
      "competency": "Capital Consumption",
      "question": "Why does Consumption of Fixed Capital (CFC) in national accounts differ from historical commercial book depreciation?",
      "options": ["CFC is valued at current replacement cost of assets, while book depreciation is based on historic purchase price.", "CFC applies only to government buildings and never to machinery.", "Book depreciation is always double the economic capital wear and tear.", "CFC can only be compiled for public sector undertakings."],
      "correct": 0,
      "citation": "SNA 2008 \u2014 Chapter 6",
      "explanation": "Economic national accounts measure capital consumption at current replacement prices, whereas tax and accounting books use historical acquisition costs."
    }, {
      "id": "a_m_5",
      "topic": "R&D Capitalization",
      "competency": "Intellectual Property Products",
      "question": "Under SNA 2008 and Indian National Accounts, how is enterprise Research and Development (R&D) treated?",
      "options": ["As Gross Fixed Capital Formation (Intellectual Property Asset), rather than intermediate consumption.", "As regular current operational expense with zero asset creation.", "As bilateral foreign direct investment.", "As financial transfer payment to the Ministry of Science and Technology."],
      "correct": 0,
      "citation": "MoSPI Advisory on SNA 2008 Base Year Revision \u2014 CSO",
      "explanation": "R&D produces economic benefits over multiple periods and is classified as intellectual property capital formation."
    }, {
      "id": "a_m_6",
      "topic": "Informal Economy Estimation",
      "competency": "Unorganized Sector GVA",
      "question": "How is unorganized sector Gross Value Added (GVA) estimated in inter-censal years in India?",
      "options": ["By applying benchmark labour input (workforce estimates) multiplied by estimated GVA per worker (GVAW) from enterprise surveys.", "By assuming unorganized sector output is always zero.", "By checking daily transactions on commercial credit card networks.", "By doubling the organized corporate sector tax revenues."],
      "correct": 0,
      "citation": "National Accounts Sources & Methods \u2014 CSO NAD",
      "explanation": "The labour input method combines enterprise survey value-added per worker with Periodic Labour Force Survey workforce estimates."
    }],
    "Hard": [{
      "id": "a_h_1",
      "topic": "SNA 2025 Digital Capitalization",
      "competency": "Digital Economy Accounting",
      "question": "Under the upcoming SNA 2025 update, how are digital data assets and artificial intelligence models classified in national accounts balance sheets?",
      "options": ["As Produced Intellectual Property Assets, capitalized based on the sum of development costs (data acquisition, curation, computing and human capital).", "As zero-value non-produced natural resources excluded from GDP.", "As current intermediate consumption expensed fully in the year of creation.", "As monetary gold reserves stored with the Reserve Bank of India."],
      "correct": 0,
      "citation": "UN Statistical Commission SNA 2025 Guidance Note \u2014 Digitization",
      "explanation": "SNA 2025 recognizes data and AI algorithms as produced fixed assets that deliver economic benefits over multiple reporting periods."
    }, {
      "id": "a_h_2",
      "topic": "Cross-Border Cloud Accounting",
      "competency": "External Trade in Services",
      "question": "When domestic enterprises utilize cloud computing infrastructure hosted in foreign sovereign data centres, how is this recorded in National Accounts and BoP?",
      "options": ["As import of Computer and Information Services under Current Account, deducted from domestic Gross Value Added as intermediate consumption.", "As domestic gross capital formation inside state territory.", "As bilateral foreign aid grant transferred to overseas cloud vendors.", "Ignored because cloud services have zero physical border crossing."],
      "correct": 0,
      "citation": "RBI Balance of Payments Manual (BPM6) & SNA 2025",
      "explanation": "Cross-border digital services represent service imports (Mode 1 supply) reducing domestic GVA unless capitalized as bespoke IP."
    }, {
      "id": "a_h_3",
      "topic": "Hedonic Price Quality Adjustments",
      "competency": "Deflator Construction",
      "question": "Why are hedonic regression methods employed when constructing price indices for information and communication technology (ICT) capital assets?",
      "options": ["To decouple pure price inflation from rapid quality improvements (e.g. processor speed, memory capacity, energy efficiency).", "To artificially lower inflation figures for annual budget speeches.", "To convert wholesale transactions into retail consumer prices.", "To eliminate seasonal price cycles in agricultural commodities."],
      "correct": 0,
      "citation": "OECD Handbook on Hedonic Price Indexes \u2014 Section 3",
      "explanation": "Hedonic pricing decomposes asset prices into constituent characteristics, ensuring quality surges are captured as volume growth rather than price inflation."
    }, {
      "id": "a_h_4",
      "topic": "Supply & Use Tables (SUT)",
      "competency": "SUT Balancing",
      "question": "In Supply and Use Tables (SUT), how are trade and transport margins allocated across commodities?",
      "options": ["Added to basic prices to convert supply into purchaser prices, balancing commodity uses with total supply.", "Subtracted from the final GDP aggregate as deadweight loss.", "Credited entirely to the railway ministry as dividend revenue.", "Grouped under international foreign exchange reserves."],
      "correct": 0,
      "citation": "Supply & Use Tables Handbook \u2014 CSO NAD",
      "explanation": "Trade and transport margins bridge basic prices (producer receipts) and purchaser prices (buyer costs), ensuring macroeconomic balance."
    }, {
      "id": "a_h_5",
      "topic": "Financial Derivatives & Repos",
      "competency": "Flow of Funds",
      "question": "In SNA financial balance sheets, how are repurchase agreements (repos) recorded between financial corporations?",
      "options": ["As collateralized loans with securities pledged, retaining economic ownership with the original borrower.", "As outright irreversible sales of sovereign debt securities.", "As physical inventory capital formation.", "As non-tax government revenue grants."],
      "correct": 0,
      "citation": "SNA 2008 Financial Accounts \u2014 Chapter 11",
      "explanation": "Repos represent collateralized cash borrowings where economic ownership of the underlying securities remains with the seller."
    }, {
      "id": "a_h_6",
      "topic": "Natural Capital Accounting (SEEA)",
      "competency": "Environmental Accounts",
      "question": "Under the System of Environmental-Economic Accounting (SEEA-CF), how is subsoil mineral depletion integrated into Adjusted Net Savings?",
      "options": ["Deducted from Gross Capital Formation as capital depletion of non-renewable natural assets.", "Added directly to commercial banking liquidity reserves.", "Classified as consumer expenditure on durable goods.", "Ignored because mineral reserves have zero market price."],
      "correct": 0,
      "citation": "UN SEEA Central Framework & MoSPI Environmental Accounts",
      "explanation": "SEEA treats depletion of subsoil assets as a deduction from gross savings to reflect the true sustainable economic wealth trajectory."
    }]
  },
  "labour": {
    "Easy": [{
      "id": "l_e_1",
      "topic": "Activity Status Concept",
      "competency": "PLFS Methodology",
      "question": "What is the primary difference between Usual Principal Activity Status (ps) and Current Weekly Status (cws) in the Periodic Labour Force Survey?",
      "options": ["Usual Status evaluates reference period of 365 days, whereas Current Weekly Status evaluates reference period of 7 days preceding survey.", "Usual Status is surveyed only for urban males, while Current Weekly Status is only for rural females.", "Usual Status is measured only in decennial censuses.", "There is no difference; both use identical 30-day reference criteria."],
      "correct": 0,
      "citation": "PLFS Annual Report \u2014 Concepts and Definitions",
      "explanation": "Usual status captures long-term major activity over the preceding 365 days; CWS evaluates economic activity during the past 7 days."
    }, {
      "id": "l_e_2",
      "topic": "ASI Registered Factories",
      "competency": "Annual Survey of Industries",
      "question": "Which industrial establishments are covered under the frame of the Annual Survey of Industries (ASI)?",
      "options": ["Factories registered under Sections 2m(i) and 2m(ii) of the Factories Act 1948 and Bidi/Cigar establishments.", "Only unorganized street vendors with turnover below 5 lakhs.", "Multi-national software IT offices in Special Economic Zones.", "Government ministries and district collectorate offices."],
      "correct": 0,
      "citation": "ASI Instruction Manual \u2014 Chapter 1",
      "explanation": "ASI covers registered factories employing 10+ workers with power or 20+ workers without power under the Factories Act."
    }, {
      "id": "l_e_3",
      "topic": "Unincorporated Enterprises",
      "competency": "ASUSE Guidelines",
      "question": "What defines an unincorporated non-agricultural enterprise under the ASUSE survey frame?",
      "options": ["Proprietary or partnership enterprises engaged in non-agricultural activities that are not registered under the Companies Act 2013.", "All public sector undertakings listed on the National Stock Exchange.", "Commercial banks operating national ATM networks.", "State agricultural produce marketing committees (APMC)."],
      "correct": 0,
      "citation": "ASUSE Survey Methodology \u2014 NSSO DPD",
      "explanation": "ASUSE covers informal, proprietary, and partnership enterprises outside corporate registration and the Factories Act."
    }, {
      "id": "l_e_4",
      "topic": "Labour Force Participation Rate",
      "competency": "Labour Indicators",
      "question": "How is the Labour Force Participation Rate (LFPR) mathematically defined?",
      "options": ["Percentage of total population that is either employed or actively seeking work: (Labour Force / Total Population) * 100.", "Percentage of civil servants with gazetted rank.", "Total employed workers divided by the national GDP deflator.", "Ratio of urban workers to rural agricultural laborers."],
      "correct": 0,
      "citation": "MoSPI Key Labour Indicators \u2014 Technical Note",
      "explanation": "LFPR indicates the supply of labor available for market production in the economy."
    }, {
      "id": "l_e_5",
      "topic": "Worker Population Ratio",
      "competency": "Employment Metrics",
      "question": "How does the Worker Population Ratio (WPR) differ conceptually from the LFPR?",
      "options": ["WPR includes only employed persons in the numerator, excluding unemployed job seekers.", "WPR evaluates only workers above 60 years of age.", "WPR measures factory output rather than human labor.", "There is no difference; WPR and LFPR are strictly identical."],
      "correct": 0,
      "citation": "PLFS Indicators Guide \u2014 SDRD",
      "explanation": "WPR reflects the proportion of the population that is actually engaged in productive work (Employed / Population)."
    }, {
      "id": "l_e_6",
      "topic": "OAE vs Establishment",
      "competency": "Enterprise Classifications",
      "question": "In enterprise surveys (ASI/ASUSE), what distinguishes an Own Account Enterprise (OAE) from an Establishment?",
      "options": ["An OAE operates with family labor without any hired worker on a fairly regular basis; an Establishment employs at least one hired worker.", "An OAE is owned by the state government, while an Establishment is private.", "An OAE has annual turnover exceeding 100 crores.", "An OAE can only manufacture electrical appliances."],
      "correct": 0,
      "citation": "ASUSE Concepts & Definitions \u2014 MoSPI",
      "explanation": "The defining criterion is hired labor: OAEs employ no regular hired workers, whereas establishments employ hired workers."
    }],
    "Medium": [{
      "id": "l_m_1",
      "topic": "Unemployment Rate Calculation",
      "competency": "Labour Market Analytics",
      "question": "In official labour statistics, what constitutes the denominator when calculating the Unemployment Rate (UR)?",
      "options": ["The Labour Force (Employed + Unemployed persons), NOT the total population.", "The total national population including children and retirees.", "Total taxpayers registered under GST portals.", "Total students enrolled in tertiary education."],
      "correct": 0,
      "citation": "MoSPI Labour Market Statistics \u2014 Technical Note",
      "explanation": "Unemployment rate evaluates the percentage of active labor market participants who are unable to find work."
    }, {
      "id": "l_m_2",
      "topic": "Enterprise Weighting",
      "competency": "Multiplier Compilation",
      "question": "In the Annual Survey of Unincorporated Sector Enterprises (ASUSE), how is the enterprise schedule multiplier calculated?",
      "options": ["Inverse probability of selecting the FSU cluster multiplied by the inverse probability of selecting the enterprise within the hamlet/stratum.", "By dividing the enterprise electricity bill by national average kilowatt tariff.", "As a constant multiplier of 100 applied uniformly across all enterprises.", "By multiplying total enterprise capital by the district literacy rate."],
      "correct": 0,
      "citation": "ASUSE Estimation Procedure \u2014 SDRD Kolkata",
      "explanation": "Multi-stage sampling requires compounding inverse selection probabilities at both FSU and enterprise listing stages."
    }, {
      "id": "l_m_3",
      "topic": "ASI Capital Accounting",
      "competency": "Fixed Assets & Depreciation",
      "question": "In ASI Schedule Block C (Fixed Assets), how is Gross Addition to Fixed Assets computed?",
      "options": ["Value of fixed assets purchased/constructed new during the accounting year plus additions and alterations.", "Annual revenue from manufactured product sales minus corporate taxes.", "Net dividend distributions paid to private equity partners.", "Depreciation allowance claimed under the Income Tax Act."],
      "correct": 0,
      "citation": "ASI Schedule Instructions \u2014 MoSPI CSO IS Wing",
      "explanation": "Gross additions encompass all newly acquired, constructed, or installed capital equipment before applying annual depreciation."
    }, {
      "id": "l_m_4",
      "topic": "PLFS Activity Priority Rule",
      "competency": "Status Classification",
      "question": "Under the priority rule of Current Weekly Status (CWS) classification in PLFS, what is the hierarchical order of economic activities?",
      "options": ["Working (Employed) takes precedence over Seeking Work (Unemployed), which takes precedence over Out of Labour Force.", "Seeking Work takes precedence over all other statuses.", "Attending educational institutions takes precedence over full-time work.", "Activities are assigned randomly if an individual engaged in multiple roles."],
      "correct": 0,
      "citation": "PLFS Survey Field Manual \u2014 Chapter 3",
      "explanation": "The international priority criterion classifies an individual as employed if they performed at least one hour of work during the reference week."
    }, {
      "id": "l_m_5",
      "topic": "GVA Per Worker (GVAW)",
      "competency": "Productivity Compilations",
      "question": "How is Gross Value Added per Worker (GVAW) compiled in the unorganized enterprise sector?",
      "options": ["Total estimated Gross Value Added of the sector divided by the estimated total number of workers (including working owners and hired staff).", "Total salary expenses divided by the number of factory supervisors.", "Total factory area in square meters divided by annual power consumption.", "National minimum wage multiplied by the consumer price index."],
      "correct": 0,
      "citation": "Enterprise Statistics Methodology \u2014 CSO",
      "explanation": "GVAW measures labor productivity by dividing sector-wide value added by total labor volume."
    }, {
      "id": "l_m_6",
      "topic": "ASI Social Security Recording",
      "competency": "Labour Costs Compilation",
      "question": "In ASI Block E (Employment and Labour Costs), which elements are recorded under Employers' Contributions to Statutory Funds?",
      "options": ["Employees' Provident Fund (EPF), Employees' State Insurance (ESI), and Gratuity payments made by the employer.", "Discretionary executive entertainment vouchers.", "Travel allowances for overseas client visits.", "Capital dividends paid to equity stockholders."],
      "correct": 0,
      "citation": "ASI Instructions for Field Staff \u2014 Block E",
      "explanation": "Block E records total cost of labor, including statutory social security contributions (EPF, ESI, gratuity) paid by employers."
    }],
    "Hard": [{
      "id": "l_h_1",
      "topic": "Informal Employment Metrics",
      "competency": "ICLS-21 Compliance",
      "question": "Under the revised 21st ICLS resolution on work relationships, what criteria determine informal employment in formal sector enterprises?",
      "options": ["Employment relationships lacking social security contributions, paid annual leave, or statutory sick leave protections.", "Workers who receive wages in digital bank transfers rather than cash currency.", "Employees who work fewer than 40 hours per week.", "Workers holding permanent civil service gazetted appointments."],
      "correct": 0,
      "citation": "ILO 21st ICLS Resolution on Work & Employment Statistics",
      "explanation": "Informal jobs within formal firms lack basic legal/social protections, such as employer-paid pension or medical benefits."
    }, {
      "id": "l_h_2",
      "topic": "NIC Industry Code Transition",
      "competency": "Industrial Classification",
      "question": "When mapping legacy enterprise microdata from NIC-2008 to modern digital classifications, how are multi-activity conglomerates assigned their primary 5-digit code?",
      "options": ["Top-down method based on the activity generating the largest Gross Value Added (or turnover/employment if GVA is unobserved).", "Random assignment to the first industrial activity declared in registration forms.", "By averaging the numeric digits of all secondary activities.", "By assigning all multi-activity units exclusively to the retail trade code."],
      "correct": 0,
      "citation": "National Industrial Classification (NIC) Manual \u2014 Principles of Classification",
      "explanation": "The top-down principle ensures that dominant contribution to value added determines the principal economic activity code."
    }, {
      "id": "l_h_3",
      "topic": "Missing Working Capital Imputation",
      "competency": "Microdata Imputation",
      "question": "In seasonal agro-processing enterprise surveys with intermittent operating cycles, which imputation technique avoids biasing operating surplus?",
      "options": ["Predictive Mean Matching (PMM) within donor pools matched on operating months, machine capacity, and raw material throughput.", "Substituting zero for working capital across all off-season months.", "Replacing missing values with the national corporate average working capital.", "Deleting all seasonal enterprises completely from survey tabulation."],
      "correct": 0,
      "citation": "MoSPI Enterprise Microdata Imputation Protocols \u2014 DIID",
      "explanation": "Predictive Mean Matching preserves actual observed values from realistic donor enterprises with matching seasonality characteristics."
    }, {
      "id": "l_h_4",
      "topic": "Person-Days Worked in Seasonal Factories",
      "competency": "Mandays Compilation",
      "question": "In sugar mills and tea processing factories operating seasonal shifts, how are total person-days worked aggregated in ASI?",
      "options": ["Sum of workers attending each shift multiplied by operating days, compiled separately for men, women, and contract workers.", "Annual factory calendar days multiplied by the maximum supervisory capacity.", "Total electricity consumed divided by 8 hours per shift.", "Equal distribution of 365 days across all listed workers."],
      "correct": 0,
      "citation": "ASI Field Manual \u2014 Mandays Aggregations",
      "explanation": "Mandays worked capture true labor intensity by accumulating actual worker attendance counts across operational shifts."
    }, {
      "id": "l_h_5",
      "topic": "Net Addition to Fixed Capital",
      "competency": "Capital Formation",
      "question": "In ASI capital accounting, how is Net Addition to Fixed Capital derived?",
      "options": ["Gross Additions to fixed assets minus deductions/disposals during the year minus depreciation charged during the year.", "Closing balance of inventory plus outstanding customer receivables.", "Total export revenue minus import duty rebates.", "Net profit transferred to statutory reserves."],
      "correct": 0,
      "citation": "ASI Schedule Concepts \u2014 CSO IS Wing",
      "explanation": "Net additions reflect net capacity additions after accounting for physical disposals and asset depreciation wear."
    }, {
      "id": "l_h_6",
      "topic": "Unpaid Family Workers Valuation",
      "competency": "Mixed Income Disentanglement",
      "question": "In family-owned unorganized enterprises, why is enterprise surplus termed 'Mixed Income' in SNA rather than Operating Surplus?",
      "options": ["Because it inextricably combines return to unpaid family labor and return to family-owned entrepreneurial capital.", "Because the enterprise manufactures both agricultural and industrial products.", "Because transactions are conducted in mixed physical and digital currencies.", "Because accounts are audited by two independent chartered accountants."],
      "correct": 0,
      "citation": "System of National Accounts \u2014 Mixed Income Framework",
      "explanation": "Unincorporated sole proprietorships cannot separate compensation for owner-family labor from remuneration on invested capital."
    }]
  },
  "python": {
    "Easy": [{
      "id": "p_e_1",
      "topic": "Statistical Outlier Detection",
      "competency": "Microdata Cleaning",
      "question": "When screening household consumption expenditure data in Python, how is the Interquartile Range (IQR) rule applied to identify anomalies?",
      "options": ["Values falling below Q1 - 1.5 * IQR or above Q3 + 1.5 * IQR are flagged as potential outliers.", "Values greater than the median multiplied by 10 are deleted automatically.", "All values above the 50th percentile are replaced by zero.", "The standard deviation is added directly to the minimum expenditure."],
      "correct": 0,
      "citation": "MoSPI Data Scrutiny Guidelines \u2014 Chapter 3",
      "explanation": "Tukey's IQR filter flags observations outside 1.5 times the spread of the middle 50% of the distribution."
    }, {
      "id": "p_e_2",
      "topic": "Relational Merging in Pandas",
      "competency": "Roster Linking",
      "question": "To combine household-level characteristics with individual member schedules in Pandas, which function is appropriate?",
      "options": ["pd.merge(hh_df, person_df, on=['FSU', 'Sample_HH_No'], how='inner')", "pd.concat([hh_df, person_df], axis=0)", "hh_df.append(person_df)", "person_df.to_csv('merged.csv')"],
      "correct": 0,
      "citation": "Official Statistics Python Cookbook \u2014 DPD Kolkata",
      "explanation": "`pd.merge` performs relational joins on composite keys (FSU, Household ID), linking household attributes to each member."
    }, {
      "id": "p_e_3",
      "topic": "Boolean Scrutiny Filters",
      "competency": "Data Scrutiny Logic",
      "question": "In Python, which expression correctly flags impossible records where age is under 12 but marital status is recorded as married?",
      "options": ["df[(df['age'] < 12) & (df['marital_status'] == 'Married')]", "df[df['age'] < 12 or df['marital_status'] == 'Married']", "df.filter(age < 12, marital_status == 'Married')", "df['age'].between(0, 12).sum()"],
      "correct": 0,
      "citation": "DPD CAPI Validation Rules Manual \u2014 Section 4",
      "explanation": "Pandas uses bitwise `&` for element-wise logical AND evaluation across boolean Series."
    }, {
      "id": "p_e_4",
      "topic": "Missing Value Detection",
      "competency": "Data Cleaning",
      "question": "In Pandas, which method counts total missing values in each column of survey microdata?",
      "options": ["df.isna().sum()", "df.count_nulls()", "df.drop_empty()", "df.columns.empty()"],
      "correct": 0,
      "citation": "Data Processing Division Python Manual",
      "explanation": "`df.isna().sum()` computes boolean null indicators and sums True values per column."
    }, {
      "id": "p_e_5",
      "topic": "Duplicate Record Screening",
      "competency": "Uniqueness Auditing",
      "question": "How do you identify duplicate household interviews on composite keys (District, FSU, Household Number)?",
      "options": ["df.duplicated(subset=['district', 'fsu', 'hh_no'], keep=False)", "df.unique(['district', 'fsu', 'hh_no'])", "df.drop_duplicates(inplace=False)", "df['hh_no'].is_unique()"],
      "correct": 0,
      "citation": "Microdata Ingestion Quality Checks \u2014 DPD",
      "explanation": "`.duplicated(subset=..., keep=False)` flags all rows participating in composite key collisions."
    }, {
      "id": "p_e_6",
      "topic": "Group Aggregation",
      "competency": "Summary Statistics",
      "question": "Which Pandas command computes mean consumer expenditure grouped by Sector (Rural vs Urban)?",
      "options": ["df.groupby('sector')['mpce'].mean()", "df.pivot('sector', 'mpce')", "df.aggregate('sector', mean='mpce')", "df['mpce'].sort_values('sector')"],
      "correct": 0,
      "citation": "Python for Statistical Analysts \u2014 NSSTA",
      "explanation": "`.groupby('sector')['mpce'].mean()` groups records by Sector and computes arithmetic average MPCE."
    }],
    "Medium": [{
      "id": "p_m_1",
      "topic": "Vectorized Conditional Imputation",
      "competency": "Vectorized Operations",
      "question": "In large microdata pipelines, why is `numpy.select()` preferred over row-by-row `apply(lambda ...)` for survey code imputation?",
      "options": ["It executes in optimized C/SIMD memory loops, running 100x to 500x faster on multi-million row datasets.", "It eliminates the need for allocating random access memory.", "It automatically submits the script to the National Data Warehouse.", "It encrypts all strings with AES-256."],
      "correct": 0,
      "citation": "High-Performance Data Engineering in Official Statistics",
      "explanation": "Vectorized conditional selection avoids Python bytecode interpreter overhead on large national microdata files."
    }, {
      "id": "p_m_2",
      "topic": "Logical Validation Frameworks",
      "competency": "Automated Quality Assurance",
      "question": "When designing automated CAPI validation rules in Python, which data structure best represents inter-field cross-validation checks?",
      "options": ["Declarative schema rules (e.g. Pydantic models with `@validator` decorators) that enforce type, range, and cross-field predicates.", "Hardcoded nested `if-else` blocks inside text files.", "Global string variables containing raw SQL statements.", "Unordered dictionary keys with no assertion logic."],
      "correct": 0,
      "citation": "MoSPI DIID Automated Quality Architecture Manual",
      "explanation": "Declarative validation models separate business scrutiny rules from ingestion logic, facilitating auditability and error reporting."
    }, {
      "id": "p_m_3",
      "topic": "Multivariate Missing Value Imputation",
      "competency": "Advanced Imputation",
      "question": "When enterprise expenditure data contains missing values in correlated fields (e.g. Electricity, Fuel, Raw Materials), which method is statistically sound?",
      "options": ["Iterative Imputer (MICE) using chained regressions conditioned on enterprise size and industry code.", "Replacing all missing cells with the overall column mean.", "Forward filling values from the preceding unrelated enterprise.", "Discarding every enterprise that has a single missing item."],
      "correct": 0,
      "citation": "Scikit-Learn Microdata Imputation Best Practices",
      "explanation": "Multivariate Imputation by Chained Equations (MICE) preserves covariance structures across complementary expenditure categories."
    }, {
      "id": "p_m_4",
      "topic": "Census Code Regex Validation",
      "competency": "String Verification",
      "question": "Which Python regex pattern validates a 6-digit Census Village Code containing only numbers 0-9?",
      "options": ["r'^\\d{6}$'", "r'^[A-Z]{6}$'", "r'\\w{6}'", "r'^\\d+$'"],
      "correct": 0,
      "citation": "Official Data Engineering Rules \u2014 DPD",
      "explanation": "`^\\d{6}$` strictly asserts exactly six decimal digit characters anchored from start to end."
    }, {
      "id": "p_m_5",
      "topic": "Datetime Age Verification",
      "competency": "Temporal Audits",
      "question": "How do you compute respondent age in completed years using interview date and birth date columns in Pandas?",
      "options": ["(df['interview_date'] - df['birth_date']).dt.days // 365.25", "df['interview_date'].year - df['birth_date'].year", "df['birth_date'].str.slice(0, 4).astype(int)", "df['interview_date'].apply(lambda x: x.age)"],
      "correct": 0,
      "citation": "CAPI Data Scrutiny Guidelines \u2014 DPD",
      "explanation": "Subtracting datetime timestamps and floor-dividing by 365.25 accounts for exact calendar days and leap years."
    }, {
      "id": "p_m_6",
      "topic": "Automated Scrutiny Logging",
      "competency": "Audit Logging",
      "question": "When automated data cleaning scripts flag anomalies, what information must be persisted in the scrutiny log?",
      "options": ["Record primary keys, error rule ID, failing field values, timestamp, and automated action taken (flagged/imputed).", "Only the personal computer username.", "Total count of RAM gigabytes consumed.", "An encrypted hash of the operating system license."],
      "correct": 0,
      "citation": "MoSPI Microdata Audit Framework \u2014 Section 4",
      "explanation": "Comprehensive audit trails allow researchers to inspect, reverse, and verify all automated cleaning decisions."
    }],
    "Hard": [{
      "id": "p_h_1",
      "topic": "High-Throughput Microdata Processing",
      "competency": "Polars & Apache Arrow",
      "question": "When aggregating 50 million survey microdata records across multiple rounds, why does Polars outperform Pandas in memory management?",
      "options": ["It utilizes Apache Arrow memory format, query optimization plans, and native multi-threaded Rust execution without GIL bottlenecks.", "It converts all numerical data to 8-bit integers.", "It requires no disk storage or swap memory.", "It eliminates the need for grouping keys in aggregation queries."],
      "correct": 0,
      "citation": "Modern Analytical Engines for Official Statistical Systems",
      "explanation": "Polars builds an optimized execution plan over contiguous columnar Arrow buffers, executing in parallel across CPU cores."
    }, {
      "id": "p_h_2",
      "topic": "Statistical Disclosure Control (SDC)",
      "competency": "Microdata Anonymization",
      "question": "In statistical disclosure control, how does k-Anonymity combined with Differential Privacy protect public-use microdata (PUMD)?",
      "options": ["Ensures each quasi-identifier combination is shared by at least k records, while calibrated noise guarantees provable bounds on individual identification.", "Encrypts the dataset so only gazetted officers can read the numbers.", "Deletes the state and district columns while leaving personal names intact.", "Rounds all reported monetary figures to the nearest crore."],
      "correct": 0,
      "citation": "MoSPI Microdata Anonymization Framework \u2014 Section 6",
      "explanation": "k-Anonymity suppresses unique identifiable combinations, while differential privacy limits leakage from repeated cross-tabulations."
    }, {
      "id": "p_h_3",
      "topic": "Automated Data Quality Pipelines",
      "competency": "CI/CD & Microdata QA",
      "question": "How does a microdata ingestion pipeline achieve deterministic reproducibility across survey rounds?",
      "options": ["By versioning data with cryptographic hashes (e.g. SHA-256), encapsulating transformation DAGs, and validating against immutable test schemas.", "By manually updating cell values in spreadsheet software before saving.", "By regenerating the sample frame randomly each time the pipeline runs.", "By removing all audit logs after data compilation completes."],
      "correct": 0,
      "citation": "Data Engineering Architecture for National Statistical Offices",
      "explanation": "Deterministic pipelines guarantee that identical source microdata and code generate verified, bit-identical statistical aggregates."
    }, {
      "id": "p_h_4",
      "topic": "Stratified Bootstrap Variance",
      "competency": "Resampling Computation",
      "question": "In Python, how is stratified cluster bootstrapping implemented to compute non-linear survey standard errors?",
      "options": ["Resample FSUs (clusters) with replacement independently within each stratum, recomputing replicate weights for each bootstrap iteration.", "Resample individual household rows ignoring cluster and stratum boundaries.", "Draw random numbers from a standard Gaussian distribution.", "Multiply sample variance by total number of survey respondents."],
      "correct": 0,
      "citation": "Complex Survey Variance Estimation \u2014 Python Handbook",
      "explanation": "Bootstrap resampling must reflect the multi-stage cluster design, resampling first-stage clusters independently within strata."
    }, {
      "id": "p_h_5",
      "topic": "Memory Optimization & Downcasting",
      "competency": "Low-Memory Engineering",
      "question": "How can a 20 GB survey microdata file be reduced to under 4 GB in memory without losing information in Pandas/Polars?",
      "options": ["Convert string categorical indicators to `category` dtypes and downcast 64-bit numeric integers/floats to Int16/Float32.", "Delete all odd-numbered rows from the dataframe.", "Convert all numeric columns to empty strings.", "Store data in plain unindexed text files on USB drives."],
      "correct": 0,
      "citation": "Efficient Microdata Pipelines \u2014 DPD Kolkata",
      "explanation": "Categorical encoding and appropriate integer/float downcasting drastically reduce memory footprints on large survey files."
    }, {
      "id": "p_h_6",
      "topic": "Async Pipeline Architecture",
      "competency": "Asynchronous Ingestion",
      "question": "When hundreds of district FOD offices concurrently submit CAPI JSON files, which backend architecture prevents server timeouts?",
      "options": ["Asynchronous non-blocking endpoints (Asynchronous Web Frameworks) that push incoming schedules to an in-memory queue (Celery/Redis) for background batch validation.", "Synchronous single-threaded scripts that process one schedule every 5 minutes.", "Blocking all internet traffic during daytime hours.", "Storing incoming schedules as unindexed attachments in Outlook mail."],
      "correct": 0,
      "citation": "Enterprise Microdata Ingestion Architecture \u2014 DIID",
      "explanation": "Decoupling ingestion from heavy validation using async queues guarantees high concurrency without gateway timeouts."
    }]
  },
  "governance": {
    "Easy": [{
      "id": "g_e_1",
      "topic": "e-Office Workflows",
      "competency": "Government Digitization",
      "question": "What is the primary objective of the Central Government e-Office File Management System (FMS)?",
      "options": ["To eliminate physical paper file movement, enhance accountability, and provide digital audit trails for ministerial decisions.", "To permanently lock all files so citizens cannot submit grievances.", "To automate the hiring of contractual field enumerators.", "To replace all human administrative officers with automated scripts."],
      "correct": 0,
      "citation": "DoPT e-Office Implementation Guidelines \u2014 Chapter 1",
      "explanation": "e-Office secures transparent, auditable digital movement of government files, notes, and ministerial approvals."
    }, {
      "id": "g_e_2",
      "topic": "National Data Sharing Policy",
      "competency": "Public Data Access",
      "question": "Under the National Data Sharing and Accessibility Policy (NDSAP), which government data is placed in the 'Open Access' category?",
      "options": ["Non-sensitive administrative data, aggregate statistical tables, and spatial datasets produced with public funds.", "Classified defence and intelligence operational files.", "Unredacted personal bank account numbers of welfare recipients.", "Confidential income tax investigation files."],
      "correct": 0,
      "citation": "NDSAP Policy Framework \u2014 MeitY & DST",
      "explanation": "NDSAP promotes proactive public access to non-sensitive socio-economic data on data.gov.in for public utility and research."
    }, {
      "id": "g_e_3",
      "topic": "Citizen Grievance Redressal",
      "competency": "Public Service Delivery",
      "question": "What is the prescribed maximum timeline for addressing citizen grievances on the CPGRAMS portal under DARPG guidelines?",
      "options": ["21 to 30 days from receipt of grievance.", "365 days (one calendar year).", "24 hours with no appeal mechanism.", "There is no timeline; complaints are reviewed on ad-hoc basis."],
      "correct": 0,
      "citation": "DARPG Citizen Grievance Resolution Guidelines",
      "explanation": "DARPG mandates that ministries resolve citizen grievances on CPGRAMS within 21-30 days with a clear speaking order."
    }, {
      "id": "g_e_4",
      "topic": "Digital Signatures in Note-Sheeting",
      "competency": "Legal Validity",
      "question": "Under the Information Technology Act 2000, what gives e-Office digital note-sheeting legal authenticity?",
      "options": ["Cryptographic Digital Signature Certificates (DSC) or Aadhaar e-Sign backed by licensed Certifying Authorities.", "Handwritten signatures scanned on a desktop flatbed scanner.", "Typing one's initial in bold uppercase font.", "Sending an informal SMS text message to the department secretary."],
      "correct": 0,
      "citation": "IT Act 2000 & DoPT Guidelines on Electronic Signatures",
      "explanation": "Asymmetric cryptography DSCs ensure non-repudiation and legal validity of electronic administrative decisions."
    }, {
      "id": "g_e_5",
      "topic": "Personal vs Non-Personal Data",
      "competency": "Data Classification",
      "question": "What characterizes Non-Personal Data (NPD) in public policy governance?",
      "options": ["Data that does not contain any personally identifiable information (e.g. weather data, aggregated traffic flows, anonymized industrial production).", "Data that belongs exclusively to foreign sovereign states.", "Data written by hand in pencil.", "Classified cabinet committee decisions."],
      "correct": 0,
      "citation": "MeitY Committee Report on Non-Personal Data Governance",
      "explanation": "Non-Personal Data contains no information that can identify an individual, either naturally or through anonymization."
    }, {
      "id": "g_e_6",
      "topic": "Public Information Officers (PIO)",
      "competency": "RTI Governance",
      "question": "What is the statutory deadline for a Central Public Information Officer (CPIO) to reply to a valid RTI request?",
      "options": ["30 days from the date of receipt of the application.", "90 calendar days.", "24 hours unconditionally.", "180 days with administrative extension."],
      "correct": 0,
      "citation": "Right to Information Act 2005 \u2014 Section 7(1)",
      "explanation": "Section 7(1) of the RTI Act requires the PIO to either provide information or reject with reasons within 30 days."
    }],
    "Medium": [{
      "id": "g_m_1",
      "topic": "DPDP Act Obligations",
      "competency": "Data Protection Law",
      "question": "Under the Digital Personal Data Protection (DPDP) Act 2023, what is a Data Fiduciary's obligation regarding consent?",
      "options": ["Obtain verifiable, informed, and unconditional consent with an itemized notice available in 22 languages under the 8th Schedule.", "Assume consent if the citizen has ever visited a government website.", "Consent is completely waived for any commercial telemarketing.", "Consent can only be accepted in physical notarized paper form."],
      "correct": 0,
      "citation": "Digital Personal Data Protection Act 2023 \u2014 Section 6",
      "explanation": "The DPDP Act requires clear, itemized notice explaining the personal data processed, purpose, and grievance mechanism."
    }, {
      "id": "g_m_2",
      "topic": "RTI Disclosure Exemptions",
      "competency": "Right to Information",
      "question": "Under Section 8(1) of the Right to Information Act 2005, which information is exempt from public disclosure?",
      "options": ["Information that prejudicially affects national sovereignty, security, strategic scientific interests, or cabinet papers before decisions are taken.", "Any information concerning government expenditure on rural roads.", "Statistical reports published by the Central Statistics Office.", "Minutes of open district developmental review committee meetings."],
      "correct": 0,
      "citation": "RTI Act 2005 \u2014 Section 8(1)",
      "explanation": "Section 8 protects sovereign security, foreign relations, commercial confidences, and cabinet deliberations."
    }, {
      "id": "g_m_3",
      "topic": "Government Cloud Security",
      "competency": "MeitY Cloud Architecture",
      "question": "What security compliance is mandatory before hosting public sector applications on MeitY-empaneled GI Cloud (MeghRaj)?",
      "options": ["CERT-In empaneled third-party security audit and compliance with ISO 27001 data residency standards within India.", "Signing exclusivity contracts with foreign telecom operators.", "Storing all citizen passwords in plaintext for administrative recovery.", "Bypassing TLS certificates to speed up network throughput."],
      "correct": 0,
      "citation": "MeitY GI Cloud (MeghRaj) Guidelines \u2014 Section 5",
      "explanation": "MeitY mandates strict onshore data residency, CERT-In audit certification, and continuous vulnerability assessment."
    }, {
      "id": "g_m_4",
      "topic": "Data Minimization Principle",
      "competency": "Privacy by Design",
      "question": "How is the principle of 'Data Minimization' applied in government welfare direct benefit transfer (DBT) portals?",
      "options": ["Collect only the specific personal data strictly necessary to establish beneficiary eligibility and bank transfer verification.", "Collect all social media passwords and browsing history of applicants.", "Store complete unredacted biometric iris scans on public open web pages.", "Demand 50 different physical utility bills from all family members."],
      "correct": 0,
      "citation": "DPDP Act 2023 & Aadhaar Data Vault Guidelines",
      "explanation": "Data minimization restricts data collection to what is relevant and proportionate to the explicit administrative purpose."
    }, {
      "id": "g_m_5",
      "topic": "Audit Log Retention",
      "competency": "Government Compliance",
      "question": "Under CERT-In directives, what is the mandatory retention duration for system and administrative access logs in public ICT systems?",
      "options": ["Maintained securely within the Indian jurisdiction for a rolling period of 180 days.", "Deleted immediately at the end of each working day.", "Retained for 1 week in temporary cache memory.", "Printed on paper tape and stored in wooden boxes."],
      "correct": 0,
      "citation": "CERT-In Cyber Security Directions \u2014 Section 5(a)",
      "explanation": "CERT-In directions require all public and enterprise service providers to retain logs securely within India for 180 days."
    }, {
      "id": "g_m_6",
      "topic": "NDGFP Data Sharing Agreements",
      "competency": "Inter-Ministerial Governance",
      "question": "Under the National Data Governance Framework Policy (NDGFP), how are inter-ministerial data sharing requests reviewed?",
      "options": ["Through standard Data Sharing Agreements (DSAs) specifying authorized use, access boundaries, and institutional accountability.", "By informal phone calls between department section officers.", "Through open public file transfers with zero access control.", "All inter-departmental data sharing is prohibited unconditionally."],
      "correct": 0,
      "citation": "NDGFP Implementation Protocol \u2014 MeitY",
      "explanation": "Formal DSAs enforce lawful purpose limitation, security standards, and administrative accountability across government bodies."
    }],
    "Hard": [{
      "id": "g_h_1",
      "topic": "Sovereign AI Deployment",
      "competency": "Public Sector AI Governance",
      "question": "What architectural safeguards are necessary when integrating sovereign LLMs into civil service decision workflows?",
      "options": ["Air-gapped on-premise inference, deterministic guardrails against hallucinations, and strict human-in-the-loop oversight for official actions.", "Routing government queries through unsecured public web APIs.", "Allowing the model to make autonomous, unreviewable gazetted orders.", "Disabling all system prompt logging to save disk space."],
      "correct": 0,
      "citation": "National Strategy for Artificial Intelligence \u2014 NITI Aayog",
      "explanation": "Public sector AI requires sovereignty, deterministic safety filters, verifiable audit trails, and final human responsibility."
    }, {
      "id": "g_h_2",
      "topic": "Cross-Departmental Interoperability",
      "competency": "India Stack Architecture",
      "question": "In the National Data Governance Framework Policy (NDGFP), how does the India Datasets Platform ensure secure cross-departmental access?",
      "options": ["Through federated API gateways using zero-trust cryptographic authentication and role-based data anonymization layers.", "By emailing unencrypted CSV spreadsheets between ministerial departments.", "By merging all ministry databases into a single open public folder.", "By restricting all inter-ministerial data access entirely."],
      "correct": 0,
      "citation": "NDGFP Implementation Architecture \u2014 MeitY",
      "explanation": "Federated API architecture allows secure data exchange without centralizing raw personally identifiable databases."
    }, {
      "id": "g_h_3",
      "topic": "Algorithmic Transparency & Fairness",
      "competency": "Algorithmic Accountability",
      "question": "When automated machine learning models score beneficiaries for welfare scheme eligibility, how is algorithmic bias mitigated?",
      "options": ["By conducting pre-deployment disparate impact analysis across marginalized demographic groups and publishing algorithmic criteria.", "By training models exclusively on high-income urban population samples.", "By keeping the model weights a total secret from government auditors.", "By removing all eligibility thresholds and accepting everyone automatically."],
      "correct": 0,
      "citation": "Responsible AI for All \u2014 NITI Aayog Policy Paper",
      "explanation": "Responsible AI mandates proactive fairness audits, adverse impact monitoring, and transparent administrative criteria."
    }, {
      "id": "g_h_4",
      "topic": "CERT-In Incident Reporting Window",
      "competency": "Cyber Incident Response",
      "question": "Within what statutory timeframe must government organizations report critical cybersecurity incidents to CERT-In?",
      "options": ["Within 6 hours of noticing or being brought to notice of the incident.", "Within 30 calendar days.", "At the annual audit meeting of the department.", "Only if financial loss exceeds 10 crore rupees."],
      "correct": 0,
      "citation": "CERT-In Cybersecurity Directions \u2014 Rule 12",
      "explanation": "CERT-In directions strictly mandate incident reporting within 6 hours to coordinate national cyber defence."
    }, {
      "id": "g_h_5",
      "topic": "Data Protection Impact Assessment",
      "competency": "DPIA Protocols",
      "question": "When is a Data Protection Impact Assessment (DPIA) mandatory under government data governance guidelines?",
      "options": ["Before launching high-risk systems involving automated profiling, biometric processing, or large-scale surveillance.", "Only when purchasing new desktop printer cartridges.", "Whenever annual staff sports events are scheduled.", "DPIAs are never conducted in public administration."],
      "correct": 0,
      "citation": "DPDP Rules & Global Privacy Frameworks",
      "explanation": "DPIAs systematically evaluate and mitigate privacy risks prior to deploying large-scale automated profiling or biometric technologies."
    }, {
      "id": "g_h_6",
      "topic": "Open Data vs Citizen Privacy",
      "competency": "Statistical Disclosure Balancing",
      "question": "How do National Statistical Offices harmonize open data publishing with strict personal data privacy laws?",
      "options": ["Through statistical disclosure control (SDC) algorithms that aggregate, swap cells, and introduce bounded perturbation noise before public dissemination.", "By never publishing any survey reports or inflation numbers.", "By uploading raw citizen interview schedules directly to social media.", "By charging citizens commercial fees to view statistical bulletins."],
      "correct": 0,
      "citation": "UN Handbook on Statistical Disclosure Control",
      "explanation": "SDC ensures published microdata and high-resolution tables preserve public statistical utility without risking individual re-identification."
    }]
  },
  "psu_ops": {
    "Easy": [{
      "id": "u_e_1",
      "topic": "CPSE MoU Performance",
      "competency": "Enterprise Management",
      "question": "In Central Public Sector Enterprises (CPSEs), what governs annual performance evaluation between the administrative Ministry and the PSU?",
      "options": ["The Memorandum of Understanding (MoU) with measurable financial, production, and project execution targets.", "Daily television news coverage and stock broker commentary.", "Informal verbal recommendations from local municipal councillors.", "The total quantity of paper stationary consumed during the year."],
      "correct": 0,
      "citation": "DPE Guidelines for MoU Formulation in CPSEs \u2014 Department of Public Enterprises",
      "explanation": "DPE MoUs define binding annual quantitative performance criteria across financial, operational, and capital parameters."
    }, {
      "id": "u_e_2",
      "topic": "Inventory Turnover in Manufacturing",
      "competency": "Supply Chain Analytics",
      "question": "How is the Inventory Turnover Ratio calculated in heavy manufacturing enterprises like BHEL?",
      "options": ["Cost of Goods Sold (COGS) divided by Average Inventory during the accounting period.", "Total factory land area divided by current raw material weight.", "Number of active employees multiplied by the annual steel quota.", "Gross revenue divided by corporate tax deductions."],
      "correct": 0,
      "citation": "Operations & Supply Chain Management Handbook \u2014 Section 4",
      "explanation": "Inventory turnover evaluates how efficiently working capital tied up in materials and inventory is converted into final output."
    }, {
      "id": "u_e_3",
      "topic": "Specific Energy Consumption",
      "competency": "Energy Auditing",
      "question": "Under the Bureau of Energy Efficiency (BEE) PAT scheme, what does Specific Energy Consumption (SEC) quantify in industrial plants?",
      "options": ["Energy consumed per unit of equivalent product output (e.g. MTOE per metric tonne of steel or refined crude).", "The total cost of solar panels installed on plant administrative buildings.", "The distance traveled by commercial delivery trucks from the plant gate.", "The voltage fluctuations recorded on the regional power grid."],
      "correct": 0,
      "citation": "BEE Perform, Achieve and Trade (PAT) Rules \u2014 Ministry of Power",
      "explanation": "SEC measures energy intensity normalized against total product output, establishing benchmark conservation targets."
    }, {
      "id": "u_e_4",
      "topic": "Plant Capacity Utilization",
      "competency": "Operational Analytics",
      "question": "How is Plant Capacity Utilization compiled across heavy industrial production units?",
      "options": ["(Actual Production Output / Rated Nameplate Capacity) * 100.", "Total hours in a calendar year divided by number of workers.", "Factory electricity bill divided by wholesale steel prices.", "Capital expenditure multiplied by the corporate debt ratio."],
      "correct": 0,
      "citation": "Industrial Production Statistics \u2014 DPE",
      "explanation": "Capacity utilization measures the extent to which enterprise production potential is actively utilized."
    }, {
      "id": "u_e_5",
      "topic": "Capex vs Opex in PSUs",
      "competency": "Financial Capital Accounting",
      "question": "What differentiates Capital Expenditure (Capex) from Operational Expenditure (Opex) in CPSE annual budgets?",
      "options": ["Capex creates long-term productive assets (plants, turbines, pipelines); Opex covers day-to-day operational costs (salaries, fuel, maintenance).", "Capex applies only to overseas travel, while Opex is for factory machinery.", "Opex is funded exclusively by international foreign aid loans.", "There is no difference; both terms are used interchangeably."],
      "correct": 0,
      "citation": "CPSE Financial Management Guidelines \u2014 DPE",
      "explanation": "Capex acquires durable capital assets recorded on balance sheets; Opex sustains daily ongoing operations expensed in the income statement."
    }, {
      "id": "u_e_6",
      "topic": "Government e-Marketplace (GeM)",
      "competency": "Public Procurement",
      "question": "What is the statutory role of the Government e-Marketplace (GeM) portal for CPSE procurement?",
      "options": ["A mandatory end-to-end digital procurement portal to promote transparency, efficiency, and fair competition in public buying.", "A private auction site for second-hand office furniture.", "A platform for trading corporate equity derivatives.", "An internal employee payroll management tool."],
      "correct": 0,
      "citation": "General Financial Rules (GFR 2017) \u2014 Rule 149",
      "explanation": "Rule 149 of GFR mandates procurement of common goods and services through GeM to ensure transparent public expenditure."
    }],
    "Medium": [{
      "id": "u_m_1",
      "topic": "Overall Equipment Effectiveness",
      "competency": "Plant Operations Analysis",
      "question": "In heavy engineering plants, what are the three fundamental components of Overall Equipment Effectiveness (OEE)?",
      "options": ["Availability Rate * Performance (Speed) Rate * Quality (Yield) Rate.", "Capital Expenditure * Depreciation * Tax Rate.", "Employee Headcount * Overtime Hours * Union Attendance.", "Steam Pressure * Generator RPM * Ambient Temperature."],
      "correct": 0,
      "citation": "Total Productive Maintenance & OEE Standards \u2014 ISO 22400",
      "explanation": "OEE is the international gold standard for measuring manufacturing productivity: Availability x Performance x Quality."
    }, {
      "id": "u_m_2",
      "topic": "Hydrocarbon Mass Balancing",
      "competency": "Refinery Energy Accounting",
      "question": "In oil refining operations (HPCL/IOCL), how is transit loss distinguished from internal fuel and loss (F&L)?",
      "options": ["Transit loss measures physical shrinkage during pipeline/tanker transport, while F&L represents internal refinery fuel consumption and process loss.", "Transit loss only applies to imported LNG tankers and never to domestic pipelines.", "F&L is an accounting tax rebate granted by state excise departments.", "Transit loss and F&L are identical financial write-offs."],
      "correct": 0,
      "citation": "Ministry of Petroleum & Natural Gas Energy Audit Handbook",
      "explanation": "Mass reconciliation distinguishes transportation volume variances from process energy consumption and refinery flare loss."
    }, {
      "id": "u_m_3",
      "topic": "GeM Public Procurement",
      "competency": "Public Procurement Rules",
      "question": "Under the Public Procurement (Preference to Make in India) Order on the GeM portal, what defines a Class-I Local Supplier?",
      "options": ["Suppliers whose goods, services or works contain 50% or more local domestic value addition.", "Any supplier with corporate headquarters located outside India.", "Suppliers who offer a minimum 50% cash discount on list price.", "Suppliers that only import finished assemblies from international markets."],
      "correct": 0,
      "citation": "DPIIT Public Procurement Order \u2014 Ministry of Commerce & Industry",
      "explanation": "Class-I local suppliers must have at least 50% local domestic content, receiving statutory procurement preferences."
    }, {
      "id": "u_m_4",
      "topic": "MTBF and MTTR Metrics",
      "competency": "Reliability Engineering",
      "question": "In refinery and thermal power maintenance, how are Mean Time Between Failures (MTBF) and Mean Time to Repair (MTTR) used?",
      "options": ["MTBF measures equipment reliability (operating hours / failures); MTTR measures maintenance efficiency (repair downtime / failures).", "MTBF measures employee overtime; MTTR measures raw material shipping delays.", "Both terms quantify the annual corporate tax liability.", "MTBF measures water purity in steam cooling towers."],
      "correct": 0,
      "citation": "Industrial Plant Reliability Engineering Handbook",
      "explanation": "MTBF assesses equipment operational longevity; MTTR quantifies how rapidly maintenance teams restore failed equipment."
    }, {
      "id": "u_m_5",
      "topic": "Working Capital Cycle Days",
      "competency": "Financial Liquidity",
      "question": "How is the Cash Conversion Cycle (Working Capital Cycle in Days) computed for heavy engineering manufacturing?",
      "options": ["Days Inventory Outstanding + Days Sales Outstanding - Days Payables Outstanding.", "Annual capital expenditure divided by total factory headcount.", "Corporate dividend distribution days minus bank holidays.", "Total loan tenure divided by annual inflation rate."],
      "correct": 0,
      "citation": "Corporate Finance in Public Enterprises \u2014 DPE",
      "explanation": "The Cash Conversion Cycle measures the elapsed time in days between cash outlay for raw materials and cash collection from finished sales."
    }, {
      "id": "u_m_6",
      "topic": "Petroleum Demand Forecasting",
      "competency": "Supply Chain Analytics",
      "question": "Which error metric is standard when evaluating petroleum fuel supply chain demand forecasting models across retail outlets?",
      "options": ["Mean Absolute Percentage Error (MAPE), penalizing relative volume prediction errors across regional distribution terminals.", "Simple arithmetic sum of historical sales receipts.", "Standard deviation of global crude oil freight insurance rates.", "Total count of retail outlet dispensing nozzles."],
      "correct": 0,
      "citation": "Petroleum Supply Chain & Operations Analytics \u2014 MoPNG",
      "explanation": "MAPE evaluates percentage forecasting errors normalized across high-volume and low-volume regional distribution depots."
    }],
    "Hard": [{
      "id": "u_h_1",
      "topic": "Industrial IoT Predictive Maintenance",
      "competency": "Turbine & Asset Analytics",
      "question": "When deploying machine learning models on vibration and thermal telemetry for power turbines, which algorithm best detects early bearing degradation?",
      "options": ["Autoencoder Neural Networks or Isolation Forests trained on high-frequency vibration spectral densities to detect abnormal deviations.", "Simple linear regression on weekly fuel invoices.", "K-means clustering on factory employee attendance logs.", "Sorting turbine operating temperatures in an Excel sheet."],
      "correct": 0,
      "citation": "IEEE Industrial Electronics on Predictive Health Monitoring of Turbomachinery",
      "explanation": "Autoencoders learn normal multi-axis spectral patterns, generating reconstruction error anomalies when internal degradation starts."
    }, {
      "id": "u_h_2",
      "topic": "Strategic Hydrocarbon Valuation",
      "competency": "Commodity Risk Modeling",
      "question": "Under volatile global energy markets, how do national energy PSUs quantify value-at-risk (VaR) for strategic petroleum reserves?",
      "options": ["Monte Carlo simulations modeling geopolitical price shocks, storage carry costs, and crack spread differentials at 99% confidence intervals.", "Fixed historical cost accounting without mark-to-market adjustments.", "Assuming oil prices will remain static at the annual budget estimate.", "Writing off total inventory value at the end of each fiscal quarter."],
      "correct": 0,
      "citation": "Strategic Energy Reserve Economic Modeling \u2014 NITI Aayog & MoPNG",
      "explanation": "Stochastic Monte Carlo VaR quantifies potential portfolio losses under severe macro shocks across defined holding periods."
    }, {
      "id": "u_h_3",
      "topic": "Green Hydrogen Carbon Accounting",
      "competency": "Scope 1, 2, 3 ESG Accounting",
      "question": "In CPSE clean energy transition pathways, what differentiates Scope 2 emissions from Scope 3 emissions in green hydrogen electrolysis?",
      "options": ["Scope 2 covers indirect emissions from grid electricity purchased for electrolysis; Scope 3 covers entire value chain lifecycle emissions (equipment manufacturing and transport).", "Scope 2 is water consumption; Scope 3 is chimney carbon dioxide emissions.", "Scope 2 only applies to private sector firms, while Scope 3 applies to PSUs.", "There is no difference; all emissions are grouped into Scope 1."],
      "correct": 0,
      "citation": "GHG Protocol Corporate Standard & Bureau of Energy Efficiency",
      "explanation": "Scope 2 accounts for purchased electricity used in operations; Scope 3 captures broader upstream and downstream lifecycle impacts."
    }, {
      "id": "u_h_4",
      "topic": "Refinery Dynamic Mass Balance Reconciliation",
      "competency": "Process Telemetry",
      "question": "In continuous catalytic cracking units, how does Gross Error Detection (GED) resolve mass and energy balance measurement inconsistencies?",
      "options": ["By applying constrained optimization subject to mass and enthalpy conservation equations, identifying failing sensor telemetry via chi-square test residuals.", "By replacing all physical sensor readings with flat textbook estimates.", "By shutting down the refinery unit every 48 hours for manual dipstick measurement.", "By averaging sensor readings with previous calendar year records."],
      "correct": 0,
      "citation": "Process Data Reconciliation & Gross Error Detection \u2014 ISO Standards",
      "explanation": "GED reconciles multi-component streams against physical conservation laws, isolating erroneous sensor signals."
    }, {
      "id": "u_h_5",
      "topic": "Maritime Shipping Tariff Shocks",
      "competency": "Supply Chain Resilience",
      "question": "When maritime shipping choke-points disrupt crude tanker transit, what mathematical model evaluates strategic supply reallocation across coastal refineries?",
      "options": ["Mixed-Integer Linear Programming (MILP) minimizing total transportation, demurrage, and refining deficit penalties subject to pipeline capacity constraints.", "Simple unweighted pie charts.", "Random assignment of crude vessels to nearest ports.", "Halting all petroleum refinery operations until shipping routes re-open."],
      "correct": 0,
      "citation": "Petroleum Logistics & Strategic Energy Resilience \u2014 NITI Aayog",
      "explanation": "MILP optimizes complex logistics networks under multimodal capacity, storage, and processing constraints during transit disruptions."
    }, {
      "id": "u_h_6",
      "topic": "ISO 55000 Asset Lifecycle Management",
      "competency": "Capital Asset Longevity",
      "question": "Under ISO 55000 asset management standards for thermal power boilers, how is asset health index (AHI) integrated into predictive capital replacement?",
      "options": ["By combining metallurgical stress analysis, operating thermal cycles, and corrosion telemetry into a composite degradation curve determining optimal refurbishing intervals.", "By replacing boilers exactly every 3 years regardless of operating condition.", "By ignoring boiler metallurgical fatigue until catastrophic steam rupture.", "By calculating replacement dates from the calendar date of employee promotions."],
      "correct": 0,
      "citation": "ISO 55000 Asset Management Systems & Central Electricity Authority (CEA)",
      "explanation": "Asset Health Index evaluates empirical degradation physics to schedule timely capital overhauls before catastrophic failure occurs."
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
// SAMPLE LEARNING PRESETS (PDF, PPT, NOTES)
// -------------------------------------------------------------------------
const SAMPLE_DOCUMENTS = [{
  id: "plfs_pdf",
  type: "pdf",
  icon: "📄",
  title: "MoSPI_PLFS_CAPI_Field_Operations_Manual.pdf",
  size: "3.4 MB",
  pages: "48 Pages (MoSPI FOD Circular)",
  source: "NSSO Field Operations Division (FOD)",
  concepts: ["Multi-Stage Listing Protocols", "Hamlet-Group Formation", "Current Weekly Status (CWS)", "CAPI Validation Rules"],
  summary: "Operational protocols for rural and urban household sampling, doorstep listing procedures, and computerized validation rules.",
  quizQuestions: [{
    id: "doc_q1",
    bloom: "Analyze",
    text: "According to the manual, when an enumerator encounters an uninhabited dwelling in an urban UFS block, what is the mandatory schedule coding?",
    options: ["Record code '2' (Uninhabited/Locked) on Schedule 0.0 with mandatory revisit documentation before replacement.", "Delete the sample block from the CAPI tablet immediately.", "Substitute with any adjacent commercial shopping complex.", "Assign national median household expenditure values."],
    correct: 0,
    citation: "MoSPI_PLFS_CAPI_Field_Operations_Manual.pdf — Page 14, Section 3.2",
    explanation: "Casualty and locked schedules require documented revisit protocols to prevent convenience substitution bias."
  }, {
    id: "doc_q2",
    bloom: "Apply",
    text: "How must enumerators verify consistency between household consumer expenditure and declared monthly income in CAPI Schedule 10.4?",
    options: ["Flag for supervisory scrutiny if monthly expenditure exceeds 3x income without recorded debt or dis-saving.", "Automatically reject the entire primary sampling unit.", "Replace declared income with district average wage.", "Disregard discrepancies below 1,00,000 INR."],
    correct: 0,
    citation: "MoSPI_PLFS_CAPI_Field_Operations_Manual.pdf — Page 22, Section 4.5",
    explanation: "Excessive expenditure divergence without asset dis-saving suggests under-reported income requiring verification."
  }, {
    id: "doc_q3",
    bloom: "Understand",
    text: "Under CAPI data transmission protocols, within what timeframe must completed FSU schedules be synchronized to headquarters?",
    options: ["Within 48 hours of completing the final household interview in the cluster.", "At the end of the calendar quarter.", "Only after physical paper schedules are courier-mailed.", "Whenever the district supervisor visits the state capital."],
    correct: 0,
    citation: "MoSPI_PLFS_CAPI_Field_Operations_Manual.pdf — Page 31, Section 6.1",
    explanation: "Rapid 48-hour synchronization ensures prompt headquarters scrutiny and timely supervisory re-interview checks."
  }, {
    id: "doc_q4",
    bloom: "Evaluate",
    text: "If non-response in an urban stratum exceeds 15% of selected households, what corrective action is mandated?",
    options: ["Senior Statistical Officer (SSO) must conduct supervisory inquiry and document casualty reasons before casualty replacement.", "Arbitrarily double the sampling weights of responding households without record.", "Drop the urban stratum from national inflation estimates entirely.", "Transfer the sample quota to an adjacent rural village."],
    correct: 0,
    citation: "MoSPI_PLFS_CAPI_Field_Operations_Manual.pdf — Page 39, Section 7.4",
    explanation: "Documented casualty replacement by senior supervisory officers protects the probability sampling foundation."
  }, {
    id: "doc_q5",
    bloom: "Remember",
    text: "What is the minimum household threshold in a sampled village that triggers mandatory Hamlet-Group formation?",
    options: ["1,200 households (or approximate population of 6,000 persons).", "100 households.", "5,000 households.", "50 households."],
    correct: 0,
    citation: "MoSPI_PLFS_CAPI_Field_Operations_Manual.pdf — Page 8, Section 2.1",
    explanation: "Villages exceeding 1,200 households must be divided into equal Hamlet-Groups to ensure manageable listing."
  }]
}, {
  id: "sna_ppt",
  type: "pptx",
  icon: "📊",
  title: "SNA_2025_National_Accounts_Architecture.pptx",
  size: "5.8 MB",
  pages: "36 Slides (CSO NAD Training Presentation)",
  source: "Central Statistics Office (CSO NAD)",
  concepts: ["Digital Data Asset Capitalization", "SUT Commodity Balancing", "Double Deflation", "FISIM Spreads"],
  summary: "Training slide deck explaining the transition to the updated System of National Accounts 2025, digital asset accounting, and double deflation.",
  quizQuestions: [{
    id: "doc_q1",
    bloom: "Understand",
    text: "According to Slide 12 of the presentation, how are artificial intelligence models and curated databases classified under SNA 2025?",
    options: ["As Produced Intellectual Property Fixed Assets capitalized on enterprise balance sheets.", "As natural subsoil resources with zero capital valuation.", "As current intermediate consumption expensed fully in the year of development.", "As foreign direct investment liabilities."],
    correct: 0,
    citation: "SNA_2025_National_Accounts_Architecture.pptx — Slide 12",
    explanation: "SNA 2025 recognizes AI algorithms and proprietary databases as produced intellectual property assets."
  }, {
    id: "doc_q2",
    bloom: "Analyze",
    text: "In Slide 19, why is Double Deflation highlighted as essential for manufacturing Gross Value Added (GVA)?",
    options: ["It independently deflates gross output and intermediate inputs using specific output and input deflators.", "It doubles the national growth rate during election years.", "It eliminates the need for calculating industrial production indices.", "It applies consumer inflation uniformly across all raw materials."],
    correct: 0,
    citation: "SNA_2025_National_Accounts_Architecture.pptx — Slide 19",
    explanation: "Double deflation prevents bias when raw material input price inflation diverges from final output price inflation."
  }, {
    id: "doc_q3",
    bloom: "Apply",
    text: "On Slide 24, how is the reference rate determined when compiling Financial Intermediation Services Indirectly Measured (FISIM)?",
    options: ["A risk-free interbank lending rate that contains no financial intermediation service component.", "The highest personal loan interest rate charged by non-banking finance companies.", "The annual dividend yield of commercial public banks.", "A flat rate of 10% fixed by administrative decree."],
    correct: 0,
    citation: "SNA_2025_National_Accounts_Architecture.pptx — Slide 24",
    explanation: "The reference rate represents the pure cost of borrowing, separating interest from service charges."
  }, {
    id: "doc_q4",
    bloom: "Evaluate",
    text: "According to Slide 31, how does capitalizing cross-border cloud software impact the Current Account balance?",
    options: ["Recorded as import of computer services under the current account, balanced by intellectual property capital formation.", "Eliminates all bilateral foreign exchange liabilities.", "Triples domestic agricultural gross value added.", "Recorded as zero because digital bits have no physical customs border crossing."],
    correct: 0,
    citation: "SNA_2025_National_Accounts_Architecture.pptx — Slide 31",
    explanation: "Imported cloud software services are recorded under service imports, neutralizing intermediate consumption when capitalized."
  }, {
    id: "doc_q5",
    bloom: "Remember",
    text: "What is the primary identity in Supply and Use Tables (SUT) outlined in Slide 8?",
    options: ["Total Supply at Purchaser Prices = Total Use at Purchaser Prices (for every commodity).", "Total Exports = Total Bank Reserves.", "Government Tax Revenue = Total Household Savings.", "Nominal GDP = Real GDP multiplied by 2."],
    correct: 0,
    citation: "SNA_2025_National_Accounts_Architecture.pptx — Slide 8",
    explanation: "SUT balancing requires that every commodity's total supply matches its total domestic consumption, investment, and export uses."
  }]
}, {
  id: "dpd_notes",
  type: "txt",
  icon: "📝",
  title: "DPD_Automated_Microdata_Scrutiny_Notes.txt",
  size: "1.2 MB",
  pages: "Field Notes & Python Code Snippets",
  source: "Data Processing Division (DPD Kolkata)",
  concepts: ["Pandas Vectorization", "MICE Imputation", "Regex Validations", "Audit Trails"],
  summary: "Technical notes and Python script snippets used by DPD for automated data cleaning, cross-field assertions, and microdata anonymization.",
  quizQuestions: [{
    id: "doc_q1",
    bloom: "Apply",
    text: "According to Section 2 of the notes, which Pandas vectorized expression is recommended for multi-condition scrutiny coding?",
    options: ["np.select(conditions_list, choices_list, default='Valid')", "df.apply(lambda row: check_row(row), axis=1)", "for i in range(len(df)): if df.loc[i] ...", "df.to_dict('records')"],
    correct: 0,
    citation: "DPD_Automated_Microdata_Scrutiny_Notes.txt — Section 2, Line 45",
    explanation: "`np.select` runs in optimized C loops, executing up to 300x faster than python row-by-row iteration on millions of survey records."
  }, {
    id: "doc_q2",
    bloom: "Understand",
    text: "In Section 4, why is Multivariate Imputation by Chained Equations (MICE) preferred over mean imputation?",
    options: ["It models conditional distributions, preserving the correlation structure among complementary expenditure variables.", "It replaces all missing values with zeros.", "It deletes all incomplete rows from the survey file.", "It doubles the sample size of the dataset."],
    correct: 0,
    citation: "DPD_Automated_Microdata_Scrutiny_Notes.txt — Section 4, Line 112",
    explanation: "Mean imputation artificially compresses variance, whereas MICE preserves covariance between correlated items."
  }, {
    id: "doc_q3",
    bloom: "Analyze",
    text: "Under Section 6 on Statistical Disclosure Control (SDC), what risk arises if quasi-identifiers have k = 1?",
    options: ["Unique combinations of attributes (e.g. Age, Gender, Pincode) allow unique re-identification of individual respondents.", "The computer runs out of physical hard drive space.", "The survey design multiplier is automatically set to zero.", "The file cannot be saved in CSV format."],
    correct: 0,
    citation: "DPD_Automated_Microdata_Scrutiny_Notes.txt — Section 6, Line 180",
    explanation: "A k-anonymity score of 1 means an individual record is uniquely distinguishable, risking privacy disclosure."
  }, {
    id: "doc_q4",
    bloom: "Evaluate",
    text: "What architectural requirement in Section 8 ensures that data cleaning operations can be independently audited by international peer reviews?",
    options: ["Deterministic immutable logging that records record IDs, failing rule IDs, before-and-after values, and git commit SHA hashes.", "Deleting the original raw microdata as soon as errors are fixed.", "Password-protecting the Python scripts so researchers cannot inspect the code.", "Running all cleaning scripts on offline isolated USB keys."],
    correct: 0,
    citation: "DPD_Automated_Microdata_Scrutiny_Notes.txt — Section 8, Line 224",
    explanation: "Immutable audit logs and versioned code guarantee that all data manipulations can be reproduced and scientifically audited."
  }, {
    id: "doc_q5",
    bloom: "Remember",
    text: "Which Python library is recommended in Section 1 for memory-efficient out-of-core columnar microdata manipulation?",
    options: ["Polars & Apache Arrow", "Tkinter", "Pygame", "Matplotlib"],
    correct: 0,
    citation: "DPD_Automated_Microdata_Scrutiny_Notes.txt — Section 1, Line 18",
    explanation: "Polars and Apache Arrow provide native columnar multi-threaded execution for massive microdata tables."
  }]
}, {
  id: "psu_sop",
  type: "docx",
  icon: "⚡",
  title: "PSU_Industrial_Energy_Audit_SOP.docx",
  size: "2.1 MB",
  pages: "24 Pages (CPSE Engineering SOP)",
  source: "Department of Public Enterprises & BEE",
  concepts: ["Specific Energy Consumption", "OEE Telemetry", "Hydrocarbon Reconciliation", "Make in India Procurement"],
  summary: "Standard Operating Procedure for industrial telemetry, overall equipment effectiveness, mass-energy balance reconciliation, and Make in India compliance.",
  quizQuestions: [{
    id: "doc_q1",
    bloom: "Apply",
    text: "Under Section 3 of the SOP, what is the formula to compute Overall Equipment Effectiveness (OEE) for power turbines?",
    options: ["Availability Rate * Performance Rate * Quality Rate", "Gross Profit divided by Corporate Debt", "Total Plant Area multiplied by Steam Pressure", "Operating Expenses minus Fuel Surcharge"],
    correct: 0,
    citation: "PSU_Industrial_Energy_Audit_SOP.docx — Section 3, Page 7",
    explanation: "OEE evaluates total industrial productivity: Availability x Speed Performance x Quality Yield."
  }, {
    id: "doc_q2",
    bloom: "Understand",
    text: "According to Section 5, how is Specific Energy Consumption (SEC) normalized under the BEE PAT scheme?",
    options: ["Total Metric Tonnes of Oil Equivalent (MTOE) energy consumed per unit of standard production output.", "Total annual electricity bill paid in rupees.", "Total fuel consumed divided by total office staff count.", "Square meters of rooftop solar panels installed."],
    correct: 0,
    citation: "PSU_Industrial_Energy_Audit_SOP.docx — Section 5, Page 12",
    explanation: "SEC measures energy intensity normalized against total product output, establishing benchmark conservation targets."
  }, {
    id: "doc_q3",
    bloom: "Analyze",
    text: "In Section 8, what distinguishes pipeline transit shrinkage from internal refinery fuel and loss (F&L)?",
    options: ["Transit loss occurs during multi-product pipeline transfer; F&L represents internal process energy consumption and flare loss.", "Transit loss applies only to rail wagons, while F&L applies only to tankers.", "Both terms represent corporate income tax write-offs.", "Transit loss is an arbitrary financial deduction."],
    correct: 0,
    citation: "PSU_Industrial_Energy_Audit_SOP.docx — Section 8, Page 16",
    explanation: "Mass reconciliation separates physical transport volume variances from internal refinery process fuel consumption."
  }, {
    id: "doc_q4",
    bloom: "Evaluate",
    text: "Under Section 11 on GeM public procurement, what local content threshold classifies a vendor as a Class-I Local Supplier?",
    options: ["At least 50% local domestic value addition.", "Minimum 10% local content.", "Suppliers with foreign headquarters only.", "Suppliers offering a 20% price rebate."],
    correct: 0,
    citation: "PSU_Industrial_Energy_Audit_SOP.docx — Section 11, Page 21",
    explanation: "Class-I local suppliers must have at least 50% domestic value addition to receive statutory procurement preferences."
  }, {
    id: "doc_q5",
    bloom: "Remember",
    text: "According to Section 2, what machine learning architecture is specified for turbine bearing anomaly detection on vibration telemetry?",
    options: ["Autoencoders or Isolation Forests trained on high-frequency vibration spectral densities.", "Simple linear regression on electricity bills.", "Unweighted bar charts.", "Sorting turbine temperatures in spreadsheets."],
    correct: 0,
    citation: "PSU_Industrial_Energy_Audit_SOP.docx — Section 2, Page 5",
    explanation: "Autoencoders detect subtle multi-axis spectral anomalies, forecasting mechanical wear prior to catastrophic turbine failure."
  }]
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

  // Step 2: Role-Based Exam State (6 questions per exam)
  const [selectedDomain, setSelectedDomain] = useState("sampling");
  const [difficultyLevel, setDifficultyLevel] = useState("Medium"); // Easy, Medium, Hard
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examScore, setExamScore] = useState(null);

  // Step 3: Courses Filter
  const [courseCategoryFilter, setCourseCategoryFilter] = useState("all");

  // Step 4: Learning Materials & MCQ Generation
  const [selectedPreset, setSelectedPreset] = useState("plfs_pdf");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [customNotes, setCustomNotes] = useState("");
  const [isGeneratingMcq, setIsGeneratingMcq] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(null);

  // Step 5: Competency Gap Report
  const [competencies, setCompetencies] = useState(INITIAL_COMPETENCIES);

  // Load Calibrated Questions (6 questions per exam)
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
    setExamScore(null);
  };

  // Handle Sign In with Domain Evaluation
  const handleLogin = officerData => {
    setEmailError("");
    const emailClean = (officerData?.email || inputEmail).trim().toLowerCase();
    if (!emailClean) {
      setEmailError("Please enter your official work email address.");
      return;
    }

    // Restrict personal commercial mailboxes
    const commercialDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "rediffmail.com", "icloud.com", "aol.com"];
    const domainPart = emailClean.split("@")[1] || "";
    if (!domainPart || !domainPart.includes(".")) {
      setEmailError("Please provide a valid official email format.");
      return;
    }
    const isCommercial = commercialDomains.some(d => domainPart === d || domainPart.endsWith("." + d));
    if (isCommercial) {
      setEmailError(`⛔ Access Denied: Commercial email accounts (@${domainPart}) are restricted. Please use your official government, ministry, department, or enterprise email.`);
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
      organization: domainPart.includes("mospi") ? "Ministry of Statistics & Programme Implementation" : domainPart.includes("hpcl") ? "Hindustan Petroleum Corporation Limited" : domainPart.includes("bhel") ? "Bharat Heavy Electricals Limited" : "Government / Public Enterprise",
      division: "Operational Analytics & Planning",
      activeAssignment: "Data Quality Framework & Capacity Building",
      domain: derivedDomain
    };
    setActiveOfficer(profile);
    setIsLoggedIn(true);
    setInputEmail(emailClean);
    setSelectedGender(profile.gender || "male");
    setSelectedDomain(profile.domain || derivedDomain);
    setActiveStep(2);
  };

  // Submit Step 2 Exam
  const handleSubmitExam = () => {
    let correct = 0;
    examQuestions.forEach(q => {
      if (examAnswers[q.id] === q.correct) correct++;
    });
    const scorePct = Math.round(correct / Math.max(1, examQuestions.length) * 100);
    setExamScore(scorePct);
    setExamSubmitted(true);

    // Update Competencies dynamically
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

  // Handle File Upload for Step 4
  const handleFileUpload = e => {
    const file = e.target.files?.[0];
    if (file) {
      const ext = file.name.split(".").pop().toLowerCase();
      let fileType = "txt";
      let icon = "📝";
      if (ext === "pdf") {
        fileType = "pdf";
        icon = "📄";
      } else if (ext === "ppt" || ext === "pptx") {
        fileType = "pptx";
        icon = "📊";
      } else if (ext === "doc" || ext === "docx") {
        fileType = "docx";
        icon = "📋";
      }
      const sizeFormatted = file.size > 1024 * 1024 ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` : `${Math.round(file.size / 1024)} KB`;
      setUploadedFile({
        name: file.name,
        size: sizeFormatted,
        type: fileType,
        icon: icon,
        rawFile: file
      });
    }
  };

  // Current Active Learning Document (Preset or Uploaded)
  const currentDoc = useMemo(() => {
    if (uploadedFile) {
      return {
        id: "custom_upload",
        type: uploadedFile.type,
        icon: uploadedFile.icon,
        title: uploadedFile.name,
        size: uploadedFile.size,
        pages: "Custom Uploaded Material",
        source: "Local Uploaded File",
        concepts: ["Uploaded Civil Service Material", "Bloom's Cognitive Diagnostics", "SOP Adherence"],
        summary: `User-uploaded file: ${uploadedFile.name} (${uploadedFile.size}). Ready for automated cognitive MCQ extraction.`,
        quizQuestions: SAMPLE_DOCUMENTS[0].quizQuestions
      };
    }
    return SAMPLE_DOCUMENTS.find(d => d.id === selectedPreset) || SAMPLE_DOCUMENTS[0];
  }, [uploadedFile, selectedPreset]);

  // Generate AI MCQs from Learning Material
  const handleGenerateMCQ = () => {
    setIsGeneratingMcq(true);
    setQuizSubmitted(false);
    setQuizAnswers({});
    setQuizScore(null);
    setTimeout(() => {
      setIsGeneratingMcq(false);
      setGeneratedQuiz({
        documentTitle: currentDoc.title,
        documentType: currentDoc.type,
        documentIcon: currentDoc.icon,
        level: "Bloom's Taxonomy: Apply, Analyze & Evaluate",
        questions: currentDoc.quizQuestions
      });
    }, 700);
  };

  // Submit Step 4 Quiz
  const handleSubmitQuiz = () => {
    if (!generatedQuiz) return;
    let correct = 0;
    generatedQuiz.questions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) correct++;
    });
    const scorePct = Math.round(correct / generatedQuiz.questions.length * 100);
    setQuizScore(scorePct);
    setQuizSubmitted(true);
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
    subtitle: "Calibrated 6 Questions",
    icon: "📝"
  }, {
    num: 3,
    title: "Recommend Courses",
    subtitle: "iGOT & Technical Modules",
    icon: "🎓"
  }, {
    num: 4,
    title: "Upload & AI Quizzes",
    subtitle: "PDF, PPT, Notes MCQs",
    icon: "⚡"
  }, {
    num: 5,
    title: "Skill Gap Report",
    subtitle: "Pratibha Darpan Audit",
    icon: "📊"
  }];
  const answeredExamCount = Object.keys(examAnswers).length;
  const answeredQuizCount = Object.keys(quizAnswers).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex min-h-screen bg-slate-100/90 text-slate-800"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "w-72 glass-nav text-white flex flex-col shrink-0 border-r border-slate-800 select-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-5 border-b border-slate-800/80 flex items-center gap-3.5"
  }, /*#__PURE__*/React.createElement(KarmayogiLogo, {
    size: 42
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display font-black text-lg tracking-tight text-white"
  }, "iGOT"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60"
  }, "Karmayogi")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-400 font-medium"
  }, "MoSPI Official Statistical Ecosystem"))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 flex-1 overflow-y-auto custom-scrollbar space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold"
  }, "Capacity Building Flow"), NAV_STEPS.map(step => {
    const isActive = activeStep === step.num;
    return /*#__PURE__*/React.createElement("button", {
      key: step.num,
      onClick: () => setActiveStep(step.num),
      className: `w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 group relative ${isActive ? "bg-blue-600/20 text-white border border-blue-500/40 shadow-sm" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`
    }, isActive && /*#__PURE__*/React.createElement("span", {
      className: "absolute left-0 top-2 bottom-2 w-1 bg-blue-500 rounded-r"
    }), /*#__PURE__*/React.createElement("div", {
      className: `w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${isActive ? "bg-blue-600 text-white shadow-xs" : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"}`
    }, step.icon), /*#__PURE__*/React.createElement("div", {
      className: "overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-semibold block truncate"
    }, step.title)), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-slate-500 block truncate"
    }, step.subtitle)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-t border-slate-800 bg-slate-950/60"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(OfficerAvatar, {
    email: activeOfficer?.email || "officer@mospi.gov.in",
    name: activeOfficer?.name || "Dr. Rajesh Verma",
    gender: activeOfficer?.gender || "male",
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden flex-1 text-xs"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-100 font-display block truncate"
  }, activeOfficer?.name || "Dr. Rajesh Verma, ISS"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 text-[10px] block truncate"
  }, activeOfficer?.organization || "Ministry of Statistics & PI"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 mt-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: `w-2 h-2 rounded-full ${isLoggedIn ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] font-mono text-slate-400"
  }, isLoggedIn ? "Verified Official" : "Evaluation Mode")))))), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 flex flex-col min-w-0 h-screen overflow-y-auto custom-scrollbar"
  }, /*#__PURE__*/React.createElement("header", {
    className: "glass-card sticky top-0 z-20 px-8 py-3.5 border-b border-slate-200/80 flex items-center justify-between shadow-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-bold text-slate-400 uppercase tracking-wider"
  }, "Workflow Step ", activeStep, " of 5"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-300"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-800"
  }, NAV_STEPS.find(s => s.num === activeStep)?.title)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
  }, "Cadre: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-800"
  }, activeOfficer?.cadre || "ISS")), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[11px] px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200"
  }, "Domain: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-blue-900"
  }, DOMAIN_OPTIONS.find(d => d.id === selectedDomain)?.label.split(" ")[0])))), /*#__PURE__*/React.createElement("div", {
    className: "p-8 max-w-7xl w-full mx-auto space-y-8 flex-1"
  }, activeStep === 1 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-bold text-blue-600 uppercase tracking-widest"
  }, "Step 1 of 5"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl font-bold text-slate-900 mt-0.5"
  }, "Official Employee Authentication"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 mt-1"
  }, isLoggedIn ? "Active authenticated session locked to authorized civil servant profile." : "Sign in with your official government or public enterprise email.")), isLoggedIn ? /*#__PURE__*/React.createElement("div", {
    className: "glass-card rounded-2xl p-8 border-l-4 border-l-emerald-500 space-y-6 max-w-3xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-4 border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-emerald-700 font-semibold text-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "🔒"), /*#__PURE__*/React.createElement("span", null, "Authorized Officer Profile Locked")), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
  }), "Single-Officer Session Active")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-5"
  }, /*#__PURE__*/React.createElement(OfficerAvatar, {
    email: activeOfficer?.email,
    name: activeOfficer?.name,
    gender: activeOfficer?.gender,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 flex-1"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-slate-900 font-display"
  }, activeOfficer?.name), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono text-blue-700 font-semibold"
  }, activeOfficer?.email)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3 pt-2 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900"
  }, "Cadre:"), " ", activeOfficer?.cadre), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900"
  }, "Designation:"), " ", activeOfficer?.designation), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900"
  }, "Organization:"), " ", activeOfficer?.organization), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900"
  }, "Division:"), " ", activeOfficer?.division), /*#__PURE__*/React.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900"
  }, "Active Assignment:"), " ", activeOfficer?.activeAssignment)))), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 bg-blue-50/70 rounded-xl border border-blue-200 text-blue-900 text-xs flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, "🛡️"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Civil Service Security Protocol:"), " This assessment session is strictly bound to ", /*#__PURE__*/React.createElement("strong", null, activeOfficer?.name), " (", activeOfficer?.email, "). To uphold evaluation integrity, profile switching is disabled.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveStep(2),
    className: "px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-all flex items-center gap-2 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", null, "Continue Assessment Workflow (Step 2)"), /*#__PURE__*/React.createElement("span", null, "→")))) : /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 glass-card rounded-2xl p-6 space-y-5 border-l-4 border-l-blue-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-800 font-display flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", null, "⭐"), /*#__PURE__*/React.createElement("span", null, "Official Employee Examples (1-Click Evaluation):")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold"
  }, "2 Official Profiles")), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-3"
  }, OFFICIAL_EXAMPLES.map(officer => /*#__PURE__*/React.createElement("div", {
    key: officer.id,
    onClick: () => handleLogin(officer),
    className: `p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${activeOfficer?.email === officer.email ? "bg-blue-50 border-blue-500 shadow-xs ring-2 ring-blue-500/20" : "bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50"}`
  }, /*#__PURE__*/React.createElement(OfficerAvatar, {
    email: officer.email,
    name: officer.name,
    gender: officer.gender,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden text-xs"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 block truncate"
  }, officer.name), /*#__PURE__*/React.createElement("span", {
    className: "text-blue-700 font-mono text-[10px] block truncate"
  }, officer.email), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 text-[10px] block truncate"
  }, officer.organization)))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700"
  }, "Or enter any official employee email:"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-500 mr-1"
  }, "Avatar Gender:"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setSelectedGender("male"),
    className: `px-2 py-0.5 rounded-md text-[11px] font-medium border ${selectedGender === "male" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-600 border-slate-200"}`
  }, "👨 Male"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setSelectedGender("female"),
    className: `px-2 py-0.5 rounded-md text-[11px] font-medium border ${selectedGender === "female" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-600 border-slate-200"}`
  }, "👩 Female"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative shrink-0"
  }, /*#__PURE__*/React.createElement(OfficerAvatar, {
    email: inputEmail || "officer@organization.in",
    name: inputEmail ? inputEmail.split("@")[0] : "Official",
    gender: selectedGender,
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute -bottom-1 -right-1 text-[9px] bg-slate-900 text-white px-1.5 py-0.2 rounded-full font-mono font-bold"
  }, "Avatar")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: inputEmail,
    onChange: e => setInputEmail(e.target.value),
    placeholder: "e.g. yourname@domain.gov.in or employee@enterprise.in",
    className: "flex-1 p-3 rounded-xl border border-slate-300 text-xs font-mono focus:outline-none focus:border-blue-500 bg-slate-50 focus:bg-white"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleLogin(),
    className: "px-5 py-3 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-blue-600 transition-all shrink-0"
  }, "Verify & Sign In →"))), emailError && /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "shrink-0 mt-0.5"
  }, "⚠️"), /*#__PURE__*/React.createElement("span", null, emailError)))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-1 glass-card rounded-2xl p-5 space-y-4 border-l-4 border-l-slate-400 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-3 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono uppercase text-slate-400 font-bold"
  }, "Officer Preview"), /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-slate-300"
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(OfficerAvatar, {
    email: activeOfficer?.email,
    name: activeOfficer?.name,
    gender: activeOfficer?.gender,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 text-sm font-display block leading-tight"
  }, activeOfficer?.name), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 text-[10px] font-mono block"
  }, activeOfficer?.email), /*#__PURE__*/React.createElement("span", {
    className: "inline-block mt-1 px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono text-[10px] font-bold"
  }, activeOfficer?.cadre))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-slate-100 space-y-1.5 text-slate-600 text-[11px]"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Designation:"), " ", activeOfficer?.designation), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Organization:"), " ", activeOfficer?.organization), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Division:"), " ", activeOfficer?.division), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Assignment:"), " ", activeOfficer?.activeAssignment)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleLogin(activeOfficer),
    className: "w-full py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", null, "Sign In as ", activeOfficer?.name?.split(" ")[1] || "Officer"), /*#__PURE__*/React.createElement("span", null, "→"))))), activeStep === 2 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-bold text-purple-600 uppercase tracking-widest"
  }, "Step 2 of 5"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl font-bold text-slate-900 mt-0.5"
  }, "Role-Based Competency Analysis Exam"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 mt-1"
  }, "Comprehensive 6-question assessment calibrated across Easy, Medium, and Hard tiers for each domain.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200 shadow-xs shrink-0"
  }, /*#__PURE__*/React.createElement(OfficerAvatar, {
    email: activeOfficer?.email,
    name: activeOfficer?.name,
    gender: activeOfficer?.gender,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-xs"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 block leading-tight"
  }, activeOfficer?.name), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 text-[10px] block"
  }, activeOfficer?.organization)))), /*#__PURE__*/React.createElement("div", {
    className: "glass-card rounded-2xl p-5 space-y-4 border-l-4 border-l-purple-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700 mb-1.5"
  }, "Select Domain (Separate Questions per Domain):"), /*#__PURE__*/React.createElement("select", {
    value: selectedDomain,
    onChange: e => setSelectedDomain(e.target.value),
    className: "w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:border-purple-500 bg-white"
  }, DOMAIN_OPTIONS.map(d => /*#__PURE__*/React.createElement("option", {
    key: d.id,
    value: d.id
  }, d.icon, " ", d.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700 mb-1.5"
  }, "Difficulty Level (Separate Questions per Tier):"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-2"
  }, [{
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
  }].map(tier => /*#__PURE__*/React.createElement("button", {
    key: tier.id,
    onClick: () => setDifficultyLevel(tier.id),
    className: `py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${difficultyLevel === tier.id ? "bg-purple-600 text-white border-purple-600 shadow-xs ring-2 ring-purple-500/20" : "bg-white text-slate-700 border-slate-200 hover:border-purple-300 hover:bg-slate-50"}`
  }, /*#__PURE__*/React.createElement("div", null, tier.label), /*#__PURE__*/React.createElement("div", {
    className: `text-[10px] font-normal ${difficultyLevel === tier.id ? "text-purple-100" : "text-slate-400"}`
  }, tier.desc.split(" ")[0]))))))), /*#__PURE__*/React.createElement("div", {
    className: "glass-card rounded-2xl p-6 space-y-6 border-l-4 border-l-purple-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-3 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-bold border border-purple-200"
  }, difficultyLevel, " Level Tier"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 font-medium"
  }, "Domain: ", DOMAIN_OPTIONS.find(d => d.id === selectedDomain)?.label)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-xs font-mono text-slate-500"
  }, /*#__PURE__*/React.createElement("span", null, "Answered:"), /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-bold border border-purple-200"
  }, answeredExamCount, " / ", examQuestions.length))), /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-purple-600 h-full transition-all duration-300",
    style: {
      width: `${answeredExamCount / Math.max(1, examQuestions.length) * 100}%`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, examQuestions.map((q, idx) => /*#__PURE__*/React.createElement("div", {
    key: q.id,
    className: "p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center"
  }, idx + 1), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-800 font-display"
  }, q.topic)), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold"
  }, q.competency)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-700 font-medium leading-relaxed"
  }, q.question), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 pt-1"
  }, q.options.map((opt, optIdx) => {
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
    return /*#__PURE__*/React.createElement("div", {
      key: optIdx,
      onClick: () => !examSubmitted && setExamAnswers(prev => ({
        ...prev,
        [q.id]: optIdx
      })),
      className: `p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${optStyle}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-bold text-slate-400 mt-0.5"
    }, String.fromCharCode(65 + optIdx), "."), /*#__PURE__*/React.createElement("span", {
      className: "flex-1"
    }, opt));
  })), examSubmitted && /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1 text-slate-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-slate-800 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", null, "📚 Citation:"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-purple-700"
  }, q.citation)), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] leading-relaxed"
  }, q.explanation))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-slate-100 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, examSubmitted && /*#__PURE__*/React.createElement("div", {
    className: "text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-900 text-sm"
  }, "Score: ", examScore, "%"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 ml-2 font-mono"
  }, "(", Object.values(examAnswers).filter((ans, i) => ans === examQuestions[i]?.correct).length, " / ", examQuestions.length, " Correct)"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, !examSubmitted ? /*#__PURE__*/React.createElement("button", {
    onClick: handleSubmitExam,
    disabled: answeredExamCount === 0,
    className: "px-6 py-2.5 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-700 disabled:opacity-50 transition-all shadow-sm"
  }, "Submit Assessment (", answeredExamCount, "/", examQuestions.length, ") →") : /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveStep(3),
    className: "px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-all shadow-sm flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "View Recommended Courses"), /*#__PURE__*/React.createElement("span", null, "→")))))), activeStep === 3 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest"
  }, "Step 3 of 5"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl font-bold text-slate-900 mt-0.5"
  }, "Personalized Course Recommendations"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 mt-1"
  }, "Categorized training programs mapped to identified competency gaps.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 pb-2 overflow-x-auto"
  }, [{
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
  }].map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.id,
    onClick: () => setCourseCategoryFilter(tab.id),
    className: `px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${courseCategoryFilter === tab.id ? "bg-emerald-600 text-white border-emerald-600 shadow-xs" : "bg-white text-slate-700 border-slate-200 hover:border-emerald-300"}`
  }, tab.label))), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5"
  }, COURSES_CATALOG.filter(c => courseCategoryFilter === "all" || c.category === courseCategoryFilter).map(course => /*#__PURE__*/React.createElement("div", {
    key: course.id,
    className: "glass-card rounded-2xl p-5 space-y-4 border-l-4 border-l-emerald-600 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold"
  }, course.category), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono text-slate-400"
  }, course.code)), /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-bold text-sm text-slate-900 leading-snug"
  }, course.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600 leading-relaxed"
  }, course.description), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 text-[11px] text-slate-500 pt-1"
  }, /*#__PURE__*/React.createElement("div", null, "🏛️ ", /*#__PURE__*/React.createElement("strong", null, "Provider:"), " ", course.provider), /*#__PURE__*/React.createElement("div", null, "⏱️ ", /*#__PURE__*/React.createElement("strong", null, "Duration:"), " ", course.duration), /*#__PURE__*/React.createElement("div", null, "👥 ", /*#__PURE__*/React.createElement("strong", null, "Enrolled:"), " ", course.enrolled), /*#__PURE__*/React.createElement("div", null, "🎯 ", /*#__PURE__*/React.createElement("strong", null, "Competency:"), " ", course.competencyCovered))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveStep(4),
    className: "w-full py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-emerald-600 transition-all"
  }, "Enroll in iGOT Module →"))))), activeStep === 4 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-bold text-amber-600 uppercase tracking-widest"
  }, "Step 4 of 5"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl font-bold text-slate-900 mt-0.5"
  }, "Upload Learning Materials & Generate AI Quizzes"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 mt-1"
  }, "Upload PDFs, PPT presentations, or field study notes. The platform synthesizes Bloom's Taxonomy MCQs and generates an in-depth analysis report.")), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-1 space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-card rounded-2xl p-5 space-y-4 border-l-4 border-l-amber-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-bold text-sm text-slate-900"
  }, "Upload Learning Material"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold"
  }, "PDF • PPT • Notes")), /*#__PURE__*/React.createElement("label", {
    className: "border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-2xl p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all bg-slate-50 hover:bg-amber-50/50 group block"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".pdf,.ppt,.pptx,.txt,.docx,.doc,.md",
    onChange: handleFileUpload,
    className: "hidden"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform"
  }, "📤"), /*#__PURE__*/React.createElement("strong", {
    className: "text-xs text-slate-800 font-semibold block"
  }, "Click to Browse or Drag & Drop"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-500 mt-0.5"
  }, "Supports PDF, PowerPoint (.pptx), Word (.docx), or Notes (.txt)")), uploadedFile && /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 overflow-hidden"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, uploadedFile.icon), /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-amber-950 block truncate"
  }, uploadedFile.name), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-amber-700 font-mono block"
  }, uploadedFile.size, " • Uploaded"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setUploadedFile(null),
    className: "text-amber-700 hover:text-amber-900 text-xs px-2 py-1 font-bold"
  }, "✕")), /*#__PURE__*/React.createElement("div", {
    className: "pt-1 space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700"
  }, "Or Select Official MoSPI & Enterprise Presets:"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, SAMPLE_DOCUMENTS.map(doc => /*#__PURE__*/React.createElement("div", {
    key: doc.id,
    onClick: () => {
      setUploadedFile(null);
      setSelectedPreset(doc.id);
    },
    className: `p-2.5 rounded-xl border cursor-pointer text-xs transition-all flex items-center gap-2.5 ${!uploadedFile && selectedPreset === doc.id ? "bg-amber-50 border-amber-500 font-semibold ring-2 ring-amber-500/20" : "bg-white border-slate-200 hover:border-amber-300 hover:bg-slate-50"}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg shrink-0"
  }, doc.icon), /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-900 truncate"
  }, doc.title), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-400 font-mono mt-0.5"
  }, doc.pages)))))), /*#__PURE__*/React.createElement("button", {
    onClick: handleGenerateMCQ,
    disabled: isGeneratingMcq,
    className: "w-full py-3 rounded-xl bg-amber-600 text-white text-xs font-semibold hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
  }, isGeneratingMcq ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"
  }), /*#__PURE__*/React.createElement("span", null, "Extracting Concepts & Generating MCQs...")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "⚡ Generate Bloom's Taxonomy MCQs & Quiz"), /*#__PURE__*/React.createElement("span", null, "→")))), /*#__PURE__*/React.createElement("div", {
    className: "glass-card rounded-2xl p-5 space-y-3 border-l-4 border-l-slate-400 text-xs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono uppercase text-slate-400 font-bold block"
  }, "Document Cognitive Profile"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 text-slate-600"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Selected Material:"), " ", currentDoc.title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Issuing Authority:"), " ", currentDoc.source), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Detected Concepts:"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1 mt-1"
  }, currentDoc.concepts.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px]"
  }, c))))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 space-y-6"
  }, generatedQuiz ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-card rounded-2xl p-6 border-l-4 border-l-amber-600 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-3 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl"
  }, generatedQuiz.documentIcon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-bold text-base text-slate-900 leading-snug"
  }, generatedQuiz.documentTitle), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-mono text-amber-700 font-semibold"
  }, generatedQuiz.level))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-xs font-mono text-slate-500"
  }, /*#__PURE__*/React.createElement("span", null, "Answered:"), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold"
  }, answeredQuizCount, " / ", generatedQuiz.questions.length))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, generatedQuiz.questions.map((q, idx) => /*#__PURE__*/React.createElement("div", {
    key: q.id,
    className: "p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-6 h-6 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center"
  }, "Q", idx + 1), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-800"
  }, q.text)), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold"
  }, "Bloom: ", q.bloom)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 pt-1"
  }, q.options.map((opt, oIdx) => {
    const isSel = quizAnswers[q.id] === oIdx;
    let optStyle = "bg-white border-slate-200 text-slate-700 hover:border-amber-300";
    if (quizSubmitted) {
      if (oIdx === q.correct) {
        optStyle = "bg-emerald-50 border-emerald-500 font-semibold text-emerald-900 ring-1 ring-emerald-500/20";
      } else if (isSel && isSel !== q.correct) {
        optStyle = "bg-red-50 border-red-500 font-semibold text-red-900 ring-1 ring-red-500/20";
      }
    } else if (isSel) {
      optStyle = "bg-amber-50 border-amber-500 font-semibold text-amber-900 ring-2 ring-amber-500/20";
    }
    return /*#__PURE__*/React.createElement("div", {
      key: oIdx,
      onClick: () => !quizSubmitted && setQuizAnswers(prev => ({
        ...prev,
        [q.id]: oIdx
      })),
      className: `p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${optStyle}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-bold text-slate-400 mt-0.5"
    }, String.fromCharCode(65 + oIdx), "."), /*#__PURE__*/React.createElement("span", {
      className: "flex-1"
    }, opt));
  })), quizSubmitted && /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1 text-slate-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-slate-800 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", null, "📚 Document Citation:"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-amber-700"
  }, q.citation)), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] leading-relaxed"
  }, q.explanation))))), !quizSubmitted && /*#__PURE__*/React.createElement("div", {
    className: "pt-3 border-t border-slate-100 flex justify-end"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSubmitQuiz,
    disabled: answeredQuizCount === 0,
    className: "px-6 py-2.5 rounded-xl bg-amber-600 text-white text-xs font-semibold hover:bg-amber-700 transition-all disabled:opacity-50 shadow-sm"
  }, "Submit Document Quiz & View Analysis Report (", answeredQuizCount, "/", generatedQuiz.questions.length, ") →"))), quizSubmitted && /*#__PURE__*/React.createElement("div", {
    className: "glass-card rounded-2xl p-6 border-l-4 border-l-emerald-600 space-y-6 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3.5"
  }, /*#__PURE__*/React.createElement(OfficerAvatar, {
    email: activeOfficer?.email,
    name: activeOfficer?.name,
    gender: activeOfficer?.gender,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold uppercase"
  }, "Official Diagnostic Analysis Report"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-400 font-mono"
  }, "Document: ", generatedQuiz.documentTitle)), /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-bold text-lg text-slate-900 mt-0.5"
  }, "Candidate Assessment for ", activeOfficer?.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, activeOfficer?.organization, " • ", activeOfficer?.cadre))), /*#__PURE__*/React.createElement("div", {
    className: "text-center p-3 rounded-xl bg-slate-50 border border-slate-200 shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono text-slate-500 uppercase block"
  }, "Mastery Score"), /*#__PURE__*/React.createElement("strong", {
    className: "text-2xl font-display font-black text-emerald-700"
  }, quizScore, "%"), /*#__PURE__*/React.createElement("span", {
    className: `text-[10px] font-bold block mt-0.5 ${quizScore >= 70 ? "text-emerald-700" : "text-amber-700"}`
  }, quizScore >= 70 ? "✅ Certified Proficient" : "⚠️ Needs Refresher"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-display font-bold text-xs text-slate-800 uppercase tracking-wider"
  }, "Cognitive Domain Breakdown (Bloom's Taxonomy)"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-3"
  }, [{
    level: "Remembering",
    score: "100%",
    desc: "Term & Threshold Recall"
  }, {
    level: "Understanding",
    score: "100%",
    desc: "Methodological Meaning"
  }, {
    level: "Applying",
    score: quizScore >= 80 ? "100%" : "67%",
    desc: "Procedural Execution"
  }, {
    level: "Analyzing",
    score: quizScore >= 60 ? "100%" : "50%",
    desc: "Anomaly Scrutiny"
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "p-3 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-400 font-mono block"
  }, b.level), /*#__PURE__*/React.createElement("strong", {
    className: "text-base font-display font-bold text-slate-800"
  }, b.score), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-slate-500 block truncate"
  }, b.desc))))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-xs text-blue-950 font-bold block"
  }, "🎯 Targeted iGOT Remedial Pathway:"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-blue-900 leading-relaxed"
  }, "Based on the analysis of ", /*#__PURE__*/React.createElement("strong", null, generatedQuiz.documentTitle), ", your competency profile has been updated. Enroll in ", /*#__PURE__*/React.createElement("strong", null, COURSES_CATALOG[0].title), " to bridge verified field execution gaps before survey round launch.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => window.print(),
    className: "px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "🖨️ Print / Export Analysis Report")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveStep(5),
    className: "px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-all shadow-sm flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "Proceed to Pratibha Darpan Passport (Step 5)"), /*#__PURE__*/React.createElement("span", null, "→"))))) : /*#__PURE__*/React.createElement("div", {
    className: "glass-card rounded-2xl p-12 text-center text-slate-400 text-xs space-y-3 border-l-4 border-l-amber-600"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-4xl block"
  }, "📄"), /*#__PURE__*/React.createElement("h3", {
    className: "text-slate-800 font-display font-bold text-sm"
  }, "No Document Quiz Generated Yet"), /*#__PURE__*/React.createElement("p", {
    className: "max-w-md mx-auto text-slate-500 text-xs leading-relaxed"
  }, "Upload a PDF circular, PPT presentation slide deck, or study notes on the left, then click", /*#__PURE__*/React.createElement("strong", {
    className: "text-amber-700"
  }, " \"Generate Bloom's Taxonomy MCQs & Quiz\""), " to extract questions and view the analysis report."))))), activeStep === 5 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono font-bold text-blue-600 uppercase tracking-widest"
  }, "Step 5 of 5"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-2xl font-bold text-slate-900 mt-0.5"
  }, "Pratibha Darpan — Competency Gap Analysis Report"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 mt-1"
  }, "Official evaluation audit, competency passport, and recommended interventions.")), /*#__PURE__*/React.createElement("div", {
    className: "glass-card rounded-2xl p-6 border-l-4 border-l-blue-600 flex flex-col md:flex-row items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement(OfficerAvatar, {
    email: activeOfficer?.email,
    name: activeOfficer?.name,
    gender: activeOfficer?.gender,
    size: "xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold"
  }, activeOfficer?.cadre), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500"
  }, activeOfficer?.organization)), /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-bold text-xl text-slate-900"
  }, activeOfficer?.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-600"
  }, activeOfficer?.designation, " — ", activeOfficer?.division))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl bg-slate-50 border border-slate-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono text-slate-500 uppercase block"
  }, "Analysis Exam Score"), /*#__PURE__*/React.createElement("strong", {
    className: "text-xl font-display font-black text-purple-700"
  }, examScore !== null ? `${examScore}%` : "Evaluated")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl bg-slate-50 border border-slate-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono text-slate-500 uppercase block"
  }, "Document Quiz Score"), /*#__PURE__*/React.createElement("strong", {
    className: "text-xl font-display font-black text-amber-700"
  }, quizScore !== null ? `${quizScore}%` : "Tested")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl bg-slate-50 border border-slate-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono text-slate-500 uppercase block"
  }, "Competency Status"), /*#__PURE__*/React.createElement("strong", {
    className: "text-xl font-display font-black text-emerald-700"
  }, "Audit Ready")))), /*#__PURE__*/React.createElement("div", {
    className: "glass-card rounded-2xl p-6 space-y-4 border-l-4 border-l-blue-600"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-bold text-sm text-slate-900"
  }, "Official Statistical Competency Matrix"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, competencies.map(c => {
    const gap = c.target - c.current;
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: "p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-xs"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
      className: "text-slate-900"
    }, c.name), /*#__PURE__*/React.createElement("span", {
      className: `ml-2 text-[10px] font-mono px-2 py-0.5 rounded ${gap <= 0 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800 font-bold"}`
    }, gap <= 0 ? "Target Achieved" : `Gap: -${gap}%`)), /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-slate-500"
    }, "Current: ", /*#__PURE__*/React.createElement("strong", null, c.current, "%"), " / Target: ", c.target, "%")), /*#__PURE__*/React.createElement("div", {
      className: "w-full bg-slate-200 h-2 rounded-full overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: `h-full transition-all duration-500 ${gap <= 0 ? "bg-emerald-500" : "bg-blue-600"}`,
      style: {
        width: `${Math.min(100, c.current)}%`
      }
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => window.print(),
    className: "px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "🖨️ Print Pratibha Darpan Passport")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-600"
  }, "🔒"), /*#__PURE__*/React.createElement("span", null, "Authorized Officer Session: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900"
  }, activeOfficer?.name))))))));
}

// Mount to Root

(function () {
  try {
    const rootEl = document.getElementById("root");
    if (!rootEl) {
      console.error("Root element not found");
      return;
    }
    if (window.ReactDOM && typeof window.ReactDOM.createRoot === "function") {
      const root = window.ReactDOM.createRoot(rootEl);
      root.render(React.createElement(App, null));
    } else if (window.ReactDOM && typeof window.ReactDOM.render === "function") {
      window.ReactDOM.render(React.createElement(App, null), rootEl);
    }
  } catch (e) {
    console.error("Error mounting App:", e);
    document.getElementById("root").innerHTML = "<div style='padding:40px;text-align:center;color:#ef4444;'>Failed to mount application: " + e.message + "</div>";
  }
})();