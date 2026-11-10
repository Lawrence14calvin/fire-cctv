export interface PackageItem {
  id: string;
  name: string;
  target: 'residential' | 'commercial';
  category: 'cctv' | 'fire' | 'combined';
  priceKes: number;
  priceFormatted: string;
  highlight?: string;
  description: string;
  features: string[];
  equipment: string[];
  standardCompliance: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'commercial' | 'residential' | 'industrial';
  location: string;
  county: string;
  clientType: string;
  scope: string;
  image: string;
  specs: string[];
  standards: string[];
  completionTime: string;
  status: string;
}

export interface KenyanStandard {
  code: string;
  title: string;
  body: string;
  relevance: string;
  description: string;
}

export const CONTACT_INFO = {
  companyName: "SimbaShield Fire & CCTV Solutions",
  tagline: "Kenya-Standard Fire Alarm & CCTV Surveillance Engineers",
  phones: [
    { display: "0118 742 981", raw: "0118742981", tel: "+254118742981", label: "Direct Operations / Quotes" },
    { display: "0110 356 617", raw: "0110356617", tel: "+254110356617", label: "Technical & Site Surveys" }
  ],
  whatsapp: {
    display: "0113 290 379",
    raw: "0113290379",
    intl: "254113290379",
    url: "https://wa.me/254113290379"
  },
  email: "info@simbashieldkenya.co.ke",
  address: "SimbaShield Plaza, Off Enterprise Road, Industrial Area & Westlands Service Hub, Nairobi",
  serviceAreas: [
    "Nairobi City County (Westlands, Kilimani, Karen, Runda, Industrial Area, CBD, Lang'ata)",
    "Kiambu County (Thika, Ruiru, Kikuyu, Kiambu Town, Ruaka)",
    "Machakos County (Mlolongo, Athi River, Syokimau, Machakos Town)",
    "Kajiado County (Kitengela, Ngong, Ongata Rongai)",
    "Coast Region (Mombasa Island, Nyali, Mtwapa, Diani)",
    "Rift Valley & Western (Nakuru, Eldoret, Naivasha, Kisumu)"
  ],
  operatingHours: "Monday – Saturday: 7:30 AM – 6:30 PM | 24/7 Emergency Dispatch"
};

export const KENYAN_STANDARDS: KenyanStandard[] = [
  {
    code: "KS ISO 7240 / KS 1500",
    title: "KEBS Fire Detection & Alarm Systems",
    body: "Kenya Bureau of Standards",
    relevance: "Mandatory for commercial, residential and industrial premises",
    description: "Governs requirements for smoke detection, control panels, audio-visual sounders, and heat sensor calibration according to Kenyan climatic conditions."
  },
  {
    code: "OSHA 2007 (Fire Prevention)",
    title: "Occupational Safety & Health Act",
    body: "DOSHS Kenya",
    relevance: "Required for commercial workplaces & multi-tenant buildings",
    description: "Mandates annual fire audits, automatic alarms, unobstructed evacuation paths, break glass units, and staff emergency training certifications."
  },
  {
    code: "County Fire Safety By-Laws",
    title: "County Fire Clearance Certification",
    body: "Nairobi & 47 County Governments",
    relevance: "Prerequisite for annual Single Business Permit (SBP) issuance",
    description: "All our installations come complete with technical completion testing dossiers approved for immediate County Fire Inspection sign-off."
  },
  {
    code: "CAK Telecommunications Code",
    title: "Structured Low-Voltage & CCTV Cabling",
    body: "Communications Authority of Kenya",
    relevance: "Standard for RG59/Cat6 shielded conduits & data integrity",
    description: "Ensures tamper-proof conduits, surge protection against Kenya Power surges, and isolated grounding for interference-free feeds."
  },
  {
    code: "PSRA Guidelines 2020",
    title: "Electronic Security System Compliance",
    body: "Private Security Regulatory Authority",
    relevance: "Security camera placement and data privacy standards",
    description: "Compliant camera angles respecting public boundary rights, GDPR/Kenya Data Protection Act privacy notices, and authorized access credentials."
  }
];

export const PRICING_PACKAGES: PackageItem[] = [
  {
    id: "res-cctv-4",
    name: "HomeShield 4-Camera 5MP Setup",
    target: "residential",
    category: "cctv",
    priceKes: 38500,
    priceFormatted: "KES 38,500",
    highlight: "Most Popular for Bungalows & Apartments",
    description: "Complete full HD crystal-clear CCTV system for perimeter, compound gate, and main entrance monitoring.",
    features: [
      "4x 5MP Weatherproof Day/Night Audio Cameras (Hikvision/Dahua)",
      "4-Channel Smart DVR with 1TB Surveillance Hard Drive (15-20 days storage)",
      "Shielded Coaxial RG59 cable + trunking up to 100 meters",
      "Centralized 12V 5A power supply box with surge protector",
      "Real-time Mobile Phone View (Hik-Connect / DMSS) on Safaricom / Airtel",
      "Full installation, testing & 1-Year on-site warranty"
    ],
    equipment: ["Hikvision/Dahua 5MP", "Seagate SkyHawk 1TB", "Trunking Conduits"],
    standardCompliance: "CAK Low-Voltage & PSRA Guidelines"
  },
  {
    id: "res-cctv-8",
    name: "VillaGuard 8-Camera 4K ColorVu IP Setup",
    target: "residential",
    category: "cctv",
    priceKes: 82000,
    priceFormatted: "KES 82,000",
    highlight: "24/7 Full Color Night Vision + AI Human Detection",
    description: "Enterprise-grade IP surveillance for executive residences in Karen, Runda, Muthaiga, and gated estates.",
    features: [
      "8x 4K ColorVu IP Cameras with built-in warm LED for night color recording",
      "8-Channel PoE Network Video Recorder (NVR) with 2TB Hard Drive",
      "AI AcuSense Human & Vehicle Perimeter Intrusion Filtering (no false alarms)",
      "Two-way audio microphone & siren deterrence trigger",
      "Cat6 100% Copper Ethernet cabling in heavy-duty PVC conduits",
      "Multi-user smartphone viewing with instant push notification alerts"
    ],
    equipment: ["Hikvision ColorVu 4K", "WD Purple 2TB", "Gigabit PoE Switch"],
    standardCompliance: "PSRA Privacy Compliant & CAK Shielded"
  },
  {
    id: "res-fire-basic",
    name: "HomeSafe 4-Zone Conventional Fire Alarm",
    target: "residential",
    category: "fire",
    priceKes: 46000,
    priceFormatted: "KES 46,000",
    highlight: "Essential Kitchen & Bedroom Life Safety",
    description: "Reliable early warning fire and gas leak detection system engineered for Kenyan residential homes.",
    features: [
      "4-Zone Microprocessor Fire Alarm Control Panel with battery backup",
      "4x Optical Smoke Detectors with self-cleaning drift compensation",
      "1x Kitchen Heat Detector (anti-false alarm from cooking fumes)",
      "1x LPG Gas Leak Sensor with audible buzzer alert",
      "2x Red Manual Call Points (Break Glass Units) & 100dB Sounder Strobe",
      "Fire-resistant FP200 cabling up to 80 meters + installation"
    ],
    equipment: ["Apollo/GST Conventional Panel", "Optical Sensors", "FP200 Red Cable"],
    standardCompliance: "KS ISO 7240 / KS 1500 Compliant"
  },
  {
    id: "comm-cctv-16",
    name: "Enterprise 16-Camera 4K IP Surveillance Matrix",
    target: "commercial",
    category: "cctv",
    priceKes: 185000,
    priceFormatted: "KES 185,000",
    highlight: "Offices, Retail, Warehouses & Fuel Stations",
    description: "Robust IP surveillance designed for commercial facilities needing wide coverage, ANPR number plate logging, and staff monitoring.",
    features: [
      "16x 5MP/4K Motorized Varifocal Bullet & Dome IP Cameras",
      "16-Channel 4K NVR with 4TB Enterprise Storage (30+ days continuous loop)",
      "Number Plate Recognition (ANPR) & smart line crossing analytics",
      "16-Port Managed PoE Switch with dual Kenya Power surge suppression",
      "Control room rack mount cabinet with 1.5kVA Online UPS backup",
      "Central monitoring software for PC, iPad, and management smartphones",
      "Certificate of Handover & As-Built Cable Documentation"
    ],
    equipment: ["Uniview / Hikvision Enterprise", "Seagate 4TB", "1.5kVA UPS"],
    standardCompliance: "CAK Certified Cabling & PSRA Approved"
  },
  {
    id: "comm-fire-addr",
    name: "Addressable Commercial Fire Detection System",
    target: "commercial",
    category: "fire",
    priceKes: 245000,
    priceFormatted: "KES 245,000",
    highlight: "County Fire Clearance & DOSHS Compliant",
    description: "Pinpoint addressable fire detection system specifying the exact room location of smoke, mandated for commercial buildings and hotels.",
    features: [
      "2-Loop Addressable Fire Alarm Control Panel with LCD display & printer port",
      "Up to 250 addressable points capacity (Includes 12 initial optical/heat sensors)",
      "4x Resettable Manual Call Points with protective hinged covers",
      "3x High-decibel Addressable Flashing Strobe Sounders",
      "Automatic failover 24-Hour sealed standby battery backup system",
      "Interlock output for elevator grounding, magnetic door release & HVAC shutdown",
      "Complete DOSHS & County Fire Safety Audit Compliance Certificate Dossier"
    ],
    equipment: ["GST / Kentec Addressable Panel", "Apollo XP95 / Discovery", "FP200 Cable"],
    standardCompliance: "BS 5839 Part 1 & KS ISO 7240 Approved"
  },
  {
    id: "comm-fire-audit",
    name: "Annual Maintenance Contract & Fire Safety Audit",
    target: "commercial",
    category: "combined",
    priceKes: 25000,
    priceFormatted: "KES 25,000 / year",
    highlight: "Required for Single Business Permit Renewal",
    description: "Comprehensive quarterly maintenance and legal DOSHS-certified fire audit for commercial premises across Kenya.",
    features: [
      "Quarterly physical servicing of all smoke detectors, panels, and CCTV cameras",
      "Aerosol smoke test canister calibration of all optical and ion sensors",
      "Backup battery load testing and internal resistance check",
      "Lens cleaning, camera angle readjustment & firmware security patches",
      "Official OSHA 2007 Fire Safety Audit Report submitted by certified auditor",
      "Certificate of Compliance ready for Nairobi County Fire Department inspection"
    ],
    equipment: ["Solo Smoke Detector Tester", "Battery Conductance Meter"],
    standardCompliance: "OSHA 2007 Kenya & County Fire By-Laws"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-1",
    title: "Trillium Commercial Tower, Westlands",
    category: "commercial",
    location: "Westlands Commercial Zone, Nairobi",
    county: "Nairobi City County",
    clientType: "Commercial Office Complex (12 Floors)",
    scope: "Full 2-Loop Addressable Fire Alarm Network with 48-Camera 4K IP CCTV matrix & vehicle barrier ANPR camera.",
    image: "/src/assets/images/kenya_nairobi_commercial_cctv_1794310962284.jpg",
    specs: [
      "48x 4K Weatherproof IP Cameras with AcuSense",
      "Automatic Number Plate Recognition (ANPR) at security boom barrier",
      "2-Loop Addressable Panel with 160 optical smoke sensors",
      "Control Room with 24/7 security monitoring matrix"
    ],
    standards: ["BS 5839 Part 1", "KS ISO 7240", "Nairobi County Fire Approval"],
    completionTime: "3 Weeks",
    status: "Active & Certified"
  },
  {
    id: "proj-2",
    title: "Karen Miotoni Executive Residences",
    category: "residential",
    location: "Miotoni Road, Karen, Nairobi",
    county: "Nairobi City County",
    clientType: "Gated Community (16 Luxury Villas)",
    scope: "Perimeter thermal CCTV tripwire system on stone wall with electric fence integration and smart optical fire detection per villa.",
    image: "/src/assets/images/kenya_karen_villa_security_1794310962254.jpg",
    specs: [
      "32x Perimeter 4K PTZ & Bullet Cameras with Siren Deterrence",
      "Electric fence alarm interlink with automated gatehouse alerting",
      "Individual 4-zone fire panels with SMS gateway to estate security",
      "Solar battery backup for 24-hour KPLC power blackout immunity"
    ],
    standards: ["PSRA Residential Security Standard", "KS 1500 Fire Safety"],
    completionTime: "2 Weeks",
    status: "Completed & Maintained"
  },
  {
    id: "proj-3",
    title: "Kenya Logistics Godowns & Distribution Hub",
    category: "industrial",
    location: "Road A, Industrial Area, Nairobi",
    county: "Nairobi City County",
    clientType: "Heavy Freight & Bonded Godowns",
    scope: "High-ceiling optical beam smoke detection (100m range) + 32-Camera high-speed PTZ perimeter surveillance across loading bays.",
    image: "/src/assets/images/kenya_industrial_area_warehouse_1794310963378.jpg",
    specs: [
      "8x Firebeam Reflective Optical Smoke Detectors (12m ceiling clearance)",
      "32x IP67 Weatherproof PTZ Cameras with 300m IR Night Vision",
      "Heavy industrial conduit routing resistant to forklift vibration",
      "DOSHS annual safety audit dossier prepared and cleared"
    ],
    standards: ["DOSHS Industrial Compliance", "OSHA 2007", "KS ISO 7240"],
    completionTime: "4 Weeks",
    status: "Active & Certified"
  },
  {
    id: "proj-4",
    title: "Kilimani Corporate Center & Financial Suites",
    category: "commercial",
    location: "Argwings Kodhek Road, Kilimani, Nairobi",
    county: "Nairobi City County",
    clientType: "Financial & Corporate Office Suites",
    scope: "Addressable fire alarm panel with room-specific LCD annunciator, ceiling optical sensors, and biometric access control.",
    image: "/src/assets/images/kenya_reception_fire_alarm_1794310964251.jpg",
    specs: [
      "Addressable Red Fire Alarm Control Panel with LCD display",
      "Dual optical smoke detectors + heat sensors per office floor",
      "Emergency manual break-glass call points and strobe sounders",
      "Nairobi County Fire Department annual inspection certificate"
    ],
    standards: ["KS ISO 7240", "BS 5839 Part 1", "OSHA 2007 Kenya"],
    completionTime: "10 Days",
    status: "Completed & Audited"
  },
  {
    id: "proj-5",
    title: "Mombasa Road Freight Terminal & Warehousing",
    category: "industrial",
    location: "Mombasa Road corridor, Mlolongo",
    county: "Machakos County",
    clientType: "FMCG Packaging & Depot",
    scope: "Rate-of-Rise heat sensor matrix for machinery floors with addressable break glass network and weighbridge CCTV cameras.",
    image: "/src/assets/images/kenya_industrial_area_warehouse_1794310963378.jpg",
    specs: [
      "Rate-of-Rise heat sensors for manufacturing floor",
      "Weighbridge ANPR CCTV for truck registration plates",
      "Repeater fire alarm panel at the main gate security cabin",
      "Machakos County Fire Department site inspection clearance"
    ],
    standards: ["Machakos County Fire By-Laws", "OSHA 2007", "KEBS KS 1500"],
    completionTime: "18 Days",
    status: "Active & Certified"
  },
  {
    id: "proj-6",
    title: "Runda Grove Diplomatic Residence",
    category: "residential",
    location: "Runda Grove, Runda, Nairobi",
    county: "Nairobi City County",
    clientType: "Expatriate Diplomatic Residence",
    scope: "Discreet high-security 4K perimeter surveillance with smart wireless fire and gas detector interlink and redundant dual UPS.",
    image: "/src/assets/images/kenya_karen_villa_security_1794310962254.jpg",
    specs: [
      "12x 4K vandal-proof mini dome cameras painted to match exterior facade",
      "Wireless smart smoke & CO detectors with zero plaster disturbance",
      "Instant push notification to private security rapid response contractor",
      "48-hour continuous battery reserve"
    ],
    standards: ["Diplomatic Security Hardening", "PSRA Certified", "KS ISO 7240"],
    completionTime: "5 Days",
    status: "Completed & Certified"
  }
];

export const KENYA_COUNTIES = [
  "Nairobi City (Westlands / Kilimani / Karen / Industrial Area)",
  "Kiambu (Ruiru / Thika / Kikuyu / Kiambu Town)",
  "Machakos (Mlolongo / Athi River / Syokimau)",
  "Kajiado (Kitengela / Rongai / Ngong)",
  "Mombasa (Nyali / CBD / Bamburi / Mtwapa)",
  "Nakuru (Nakuru City / Naivasha)",
  "Uasin Gishu (Eldoret / Annex)",
  "Kisumu (Kisumu Central / Milimani)",
  "Kilifi (Diani / Kilifi Town / Malindi)",
  "Other Kenya Counties (Countrywide Deployment)"
];
