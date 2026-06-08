// ─────────────────────────────────────────────────────────────────────────
//  Single source of truth for all site content.
//  Edit here to update copy across the whole site.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Richard Antablin",
  credential: "EIT",
  roleLine: "Project Engineer · FE-Certified Architectural Engineer",
  location: "Coto de Caza, California",
  // Email is assembled at runtime from these parts to slow down scrapers.
  emailUser: "richardantablin125",
  emailDomain: "gmail.com",
  linkedin: "https://linkedin.com/in/rantablin",
  // Drop a photo at /public/richard.jpg and it will appear automatically;
  // until then the monogram fallback is shown.
  headshot: "/richard.jpg",
  initials: "RA",
  tagline: "From load path to project plan.",
  intro:
    "I build the built environment — bridging the precision of structural engineering with the pace of the jobsite. FE-certified Architectural Engineer out of Cal Poly San Luis Obispo, now driving projects forward as a Project Engineer at Swinerton.",
};

export const stats = [
  { value: 3.67, suffix: "", label: "Minor GPA", sub: "Construction Mgmt", decimals: 2 },
  { value: 3.32, suffix: "", label: "Major GPA", sub: "Architectural Eng.", decimals: 2 },
  { value: 4, suffix: "+", label: "Years SEAOC", sub: "Member since 2019", decimals: 0 },
  { value: 12, suffix: "", label: "Tools & Software", sub: "P6 → Revit → Python", decimals: 0 },
];

export const experience = [
  {
    company: "Swinerton",
    role: "Project Engineer",
    start: "Aug 2024",
    end: "Present",
    current: true,
    location: "California",
    summary:
      "Driving commercial construction projects from preconstruction through closeout — translating design intent into a buildable, scheduled, budgeted reality.",
    points: [
      "Develop and maintain project schedules in Primavera P6 and TouchPlan, coordinating look-ahead planning across trades to keep milestones on track.",
      "Produce quantity takeoffs and estimates with ConstructConnect Takeoff and Bluebeam Revu, supporting bid accuracy and cost control.",
      "Manage RFIs, submittals, and subcontractor coordination, leveraging BIM 360 to surface and resolve clashes before they reach the field.",
      "Bridge the gap between structural design and field execution — applying an engineer's eye to constructability and quality.",
    ],
    tags: ["Scheduling", "Estimating", "BIM 360", "Coordination"],
  },
  {
    company: "Spire Structural Engineering",
    role: "Structural Engineer Intern",
    start: "Jun 2023",
    end: "Aug 2023",
    current: false,
    location: "Southern California",
    summary:
      "A focused three-month internship analyzing the structural impact of heavy medical equipment on existing buildings across Southern California.",
    points: [
      "Developed and executed comprehensive structural calculations in Excel and by hand for heavy medical equipment, ensuring the safety and stability of medical buildings.",
      "Conducted safety analysis in RISA-3D to verify the structural integrity of existing beams and girders during equipment installation, confirming load capacity and code compliance.",
      "Collaborated with drafters and senior structural engineers to bring plans and sections to 100% professional standard, reducing future RFIs.",
    ],
    tags: ["RISA-3D", "Structural Calcs", "Load Capacity", "Code Compliance"],
  },
];

export const projects = [
  {
    title: "Steel Structures Design Laboratory",
    period: "Sep – Dec 2023",
    kind: "Cal Poly · Steel Design",
    blurb:
      "Formulated detailed structural plans, elevations, and sections for a steel building in Revit and Bluebeam — cutting projected construction delays by up to 20%.",
    detail:
      "Designed a full series of structural calculations with a teammate, including a gravity framing system, moment frame, and braced frame, delivering safety and 100% code compliance.",
    glyph: "moment-frame",
    tags: ["Revit", "Bluebeam", "Moment Frame", "Braced Frame"],
  },
  {
    title: "Structural Systems Laboratory",
    period: "Sep – Dec 2022",
    kind: "Cal Poly · Analysis",
    blurb:
      "Led a team of three to design and build a real ¼\"=1' scale model of a two-story building, validating the design against ASCE code.",
    detail:
      "Produced a collection of structural calculations confirming code compliance — and discovered two design flaws that would have caused catastrophic failure, correcting them before construction.",
    glyph: "building",
    tags: ["Team Lead", "ASCE", "Physical Model", "Failure Analysis"],
  },
  {
    title: "Structural CAD for Building Design",
    period: "Jan – Mar 2022",
    kind: "Cal Poly · Drafting",
    blurb:
      "Developed a complete set of structural drawings for a two-story school — plans, elevations, and section details — easing construction breaks by 25%.",
    detail:
      "Maintained 100% of the building's intended aesthetic while resolving the structural detailing required to build it.",
    glyph: "drawing",
    tags: ["AutoCAD", "Detailing", "Sections", "Documentation"],
  },
  {
    title: "Avila Beach Pier Redesign",
    period: "Jan – Mar 2020",
    kind: "Design & Visual Communication",
    blurb:
      "Modernized and elevated the Avila Beach Pier to professional standard, leading a group of two architects through redesign and modeling.",
    detail:
      "Mediated and united the wider studio on a single design language for the pier — saving a full day of the design process.",
    glyph: "pier",
    tags: ["Design Lead", "3D Modeling", "Concept", "Collaboration"],
  },
];

export const skillGroups = [
  {
    title: "Construction Management",
    icon: "hard-hat",
    skills: ["Scheduling", "Estimating", "Quantity Takeoffs", "Engineering Surveying", "Statistics"],
  },
  {
    title: "Structural Engineering",
    icon: "structure",
    skills: [
      "Structural Analysis",
      "Steel Design",
      "Reinforced Concrete Design",
      "Timber Design",
      "Masonry Design",
      "Soil Mechanics",
      "Seismic Analysis & Design",
      "Foundation Design",
    ],
  },
];

export const tools = [
  "Primavera P6",
  "TouchPlan",
  "ConstructConnect Takeoff",
  "Revit",
  "AutoCAD",
  "RISA-3D",
  "ETABS",
  "Bluebeam Revu",
  "BIM 360",
  "Microsoft Excel",
  "Python",
  "MATLAB",
];

export const languages = [
  { name: "English", level: "Native", pct: 100 },
  { name: "Spanish", level: "Fluent", pct: 90 },
  { name: "German", level: "Limited Working", pct: 35 },
];

export const credentials = [
  {
    title: "EIT — Engineer in Training",
    org: "Passed the FE Exam · Architectural Engineering",
    note: "Fundamentals of Engineering certified, the first step toward professional licensure.",
  },
  {
    title: "B.S. Architectural Engineering",
    org: "California Polytechnic State University, San Luis Obispo · 2024",
    note: "Minor in Construction Management. Major GPA 3.32 · Minor GPA 3.67.",
  },
  {
    title: "Structural Engineers Association of California",
    org: "Member since 2019 · 4+ years",
    note: "Active member of SEAOC, staying current with California's structural practice and seismic code.",
  },
];

export const involvement = [
  {
    title: "All-American — Track & Field",
    period: "2018 – 2019",
    note: "Earned All-American status with a top-4 finish at New Balance Nationals — discipline that carries straight to the jobsite.",
  },
  {
    title: "Emerging Leadership Series — Graduate",
    period: "Jan – Mar 2020",
    note: "Completed a structured leadership development program.",
  },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Credentials" },
  { id: "contact", label: "Contact" },
];
