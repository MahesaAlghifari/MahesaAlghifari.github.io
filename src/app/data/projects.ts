import { Images } from "./Image/image";

export type ProjectCategory = "social" | "uiux" | "print" | "other";
export const TABS = ["Social Media", "UI/UX", "Media Print", "Other"] as const;
export type Tab = typeof TABS[number];
export interface Metric { label: string; value: string }
export interface PrintAsset { name: string; size: string; img: string }
export interface GalleryItem { label: string; img: string; aspect?: string; }
export interface CaseStudyPhase { title: string; desc: string; items: string[]; images: string[]; }

export interface Project {
  id: number; title: string; year: string; category: ProjectCategory;
  accent: string; role: string; description: string; tags: string[];
  mockupBg: string; heroImage: string; detailImages: string[];
  challenge: string; solution: string; impact: string;
  metrics?: Metric[]; printAssets?: PrintAsset[];
  research?: string; userFlow?: string; wireframes?: string; testing?: string;
  caseStudy?: {
    research: CaseStudyPhase;
    userFlow: CaseStudyPhase;
    wireframes: CaseStudyPhase;
    hifi: CaseStudyPhase;
    testing: CaseStudyPhase;
  };
  gallery?: GalleryItem[];
}

export const projects: Project[] = [
  // {
  //   id: 1, title: "E-Learning Management System Lavogan", year: "2026", category: "uiux",
  //   accent: "#00d4ff", role: "UI/UX Designer",
  //   description: "Aplikasi UI/UX platform Learning Management System yang intuitif bagi alumni program pemagangan nasional untuk memfasilitasi media pelatihan dan sertifikasi lanjutan.",
  //   tags: ["E-Learning", "Web Design", "Figma", "Research"],
  //   mockupBg: "linear-gradient(135deg, #001428 0%, #003366 100%)",
  //   heroImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
  //   detailImages: ["https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"],
  //   challenge: "Farmers had no centralized way to monitor multiple fields simultaneously, leading to reactive rather than preventive crop management.",
  //   solution: "Designed a sensor-integrated dashboard with live alerts, predictive analytics, and a mobile-first field inspection flow.",
  //   impact: "Pilot farmers reported 30% reduction in water usage and 18% yield improvement after 3 months of use.",
  //   research: "Conducted 15 contextual inquiry sessions with smallholder farmers across 3 districts in West Java.",
  //   userFlow: "Mapped 12 critical user journeys from first login through daily monitoring and emergency alert response.",
  //   wireframes: "Produced 45 wireframe screens across 3 iteration cycles before moving to high-fidelity design.",
  //   testing: "Ran 3 rounds of usability testing with 8 participants each; improved task success rate from 62% to 91%.",
  //   caseStudy: {
  //     research: {
  //       title: "Discovery & Research",
  //       desc: "Deep contextual research with actual farmers to understand pain points in daily agricultural monitoring.",
  //       items: [
  //         "15 contextual inquiry sessions with smallholder farmers across West Java",
  //         "Competitor analysis of 6 existing farm management tools",
  //         "User persona development: Pak Budi (smallholder), Dini (agronomist)",
  //         "Pain point mapping: reactive monitoring, data silos, mobile connectivity issues",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  //         "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&q=80",
  //       ],
  //     },
  //     userFlow: {
  //       title: "User Flow & Architecture",
  //       desc: "Mapping critical journeys from first login through emergency alert response across all device types.",
  //       items: [
  //         "12 user journeys mapped across 3 personas",
  //         "Information architecture restructured around field-first navigation",
  //         "Alert escalation flow: sensor trigger → push notification → dashboard view",
  //         "Offline mode flow for low connectivity rural environments",
  //         "Admin and farmer role differentiation across all primary flows",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
  //       ],
  //     },
  //     wireframes: {
  //       title: "Wireframes & Iteration",
  //       desc: "45 wireframe screens across 3 iteration cycles, refined through stakeholder feedback sessions.",
  //       items: [
  //         "Low-fidelity sketches for 8 core screens",
  //         "Mid-fidelity wireframes with component annotations",
  //         "3 full iteration cycles based on farmer feedback",
  //         "Mobile-first responsive grid system definition",
  //         "Interaction states: empty, loading, error, success mapped for each screen",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
  //         "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
  //       ],
  //     },
  //     hifi: {
  //       title: "High-Fidelity Design",
  //       desc: "Final polished interfaces with the complete design system applied across all screens.",
  //       items: [
  //         "Full design system: 60+ components, 8 color tokens, 4 type scales",
  //         "Dark and light mode variants for outdoor/indoor use",
  //         "Data visualization components: line charts, soil gauges, irrigation maps",
  //         "Micro-interaction specifications for key actions",
  //         "Developer handoff with Figma annotations and specs",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  //         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  //       ],
  //     },
  //     testing: {
  //       title: "Usability Testing & Launch",
  //       desc: "Three rounds of moderated testing improved task success rate from 62% to 91% before launch.",
  //       items: [
  //         "Round 1: 8 participants, 62% task success rate — major navigation issues identified",
  //         "Round 2: 8 participants, 79% task success — alert flow improved",
  //         "Round 3: 8 participants, 91% task success — ready for pilot launch",
  //         "Accessibility audit: contrast ratios, touch targets, screen reader support",
  //         "Pilot with 12 farmers: 30% water reduction, 18% yield improvement reported",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80",
  //       ],
  //     },
  //   },
  // },
  // {
  //   id: 2, title: "LandingPage SunBiroJasa 89", year: "2025", category: "uiux",
  //   accent: "#a855f7", role: "Product Designer",
  //   description: "Complete UX overhaul of Indonesia's national workforce learning management system used by government employees nationwide.",
  //   tags: ["Figma", "Design System", "Accessibility", "Research"],
  //   mockupBg: "linear-gradient(135deg, #100028 0%, #280050 100%)",
  //   heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
  //   detailImages: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"],
  //   challenge: "The legacy system had a 68% drop-off rate on course enrollment due to confusing navigation and inaccessible design.",
  //   solution: "Built a WCAG 2.1 AA-compliant design system and redesigned the learner journey from onboarding through certification.",
  //   impact: "Course completion rates rose 22%, learner satisfaction NPS improved from 31 to 67 post-launch.",
  //   research: "Surveyed 500+ employees and interviewed 20 learning coordinators across 8 ministry departments.",
  //   userFlow: "Redesigned 8 primary user journeys, reducing average steps-to-completion by 40%.",
  //   wireframes: "Created 80+ component library elements and 60+ annotated screen specifications.",
  //   testing: "3 moderated usability test rounds with government employees; accessibility audit with assistive technology users.",
  //   caseStudy: {
  //     research: {
  //       title: "Discovery & Research",
  //       desc: "Extensive survey and interview program across government ministries to uncover systemic learning barriers.",
  //       items: [
  //         "Survey of 500+ government employees across 8 ministry departments",
  //         "20 in-depth interviews with learning coordinators and HR managers",
  //         "Heuristic evaluation of legacy LMS: 14 critical usability issues identified",
  //         "Accessibility audit: 0 of 8 WCAG 2.1 AA criteria met by existing system",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  //         "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&q=80",
  //       ],
  //     },
  //     userFlow: {
  //       title: "User Flow Redesign",
  //       desc: "Comprehensive journey mapping for learners, coordinators, and admins — reducing steps and cognitive load at every stage.",
  //       items: [
  //         "8 primary journeys redesigned: onboarding, course enrollment, learning, certification, reporting",
  //         "Average steps-to-completion reduced by 40% across all journeys",
  //         "New progressive onboarding flow reducing first-session abandonment",
  //         "Role-based navigation: learner, coordinator, admin paths clearly separated",
  //         "Mobile-responsive flow specifications for field employees",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
  //       ],
  //     },
  //     wireframes: {
  //       title: "Design System & Wireframes",
  //       desc: "80+ reusable components and 60+ annotated screens building a scalable, accessible design language.",
  //       items: [
  //         "80+ Figma component library: buttons, forms, navigation, data tables, cards",
  //         "4 semantic color scales with WCAG AA contrast compliance",
  //         "60+ annotated wireframe screens across web and tablet breakpoints",
  //         "Interaction states documented: default, hover, focus, disabled, error, success",
  //         "Typography system: 5 type roles with line-height and spacing specs",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
  //         "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
  //       ],
  //     },
  //     hifi: {
  //       title: "High-Fidelity Interfaces",
  //       desc: "Polished WCAG 2.1 AA compliant screens ready for developer handoff, covering all user personas.",
  //       items: [
  //         "Full learner dashboard with progress tracking and recommended courses",
  //         "Course player redesign: video, quiz, document, and SCORM module support",
  //         "Certification flow with digital certificate generation",
  //         "Admin analytics dashboard with completion and engagement metrics",
  //         "All screens annotated in Figma with spacing, component, and state specs",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  //         "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
  //       ],
  //     },
  //     testing: {
  //       title: "Testing & Outcomes",
  //       desc: "Three rounds of moderated testing with real government employees, plus formal assistive technology audit.",
  //       items: [
  //         "Round 1: 10 government employees — navigation confusion reduced significantly",
  //         "Round 2: 10 participants with diverse digital literacy levels — onboarding flow improved",
  //         "Round 3: 10 participants — 91% task success rate, system ready for launch",
  //         "Assistive technology audit with screen reader users: all critical paths verified",
  //         "Post-launch: course completion +22%, NPS improved from 31 to 67",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80",
  //       ],
  //     },
  //   },
  // },
  // {
  //   id: 3, title: "Admin BackOffice SunBiroJasa 89", year: "2023", category: "uiux",
  //   accent: "#00ff88", role: "Product Designer",
  //   description: "Internship marketplace connecting 15,000+ students with verified companies through smart matching and real-time communication.",
  //   tags: ["Figma", "Mobile", "Marketplace", "Motion"],
  //   mockupBg: "linear-gradient(135deg, #001a0f 0%, #003322 100%)",
  //   heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
  //   detailImages: ["https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"],
  //   challenge: "Students struggled to find legitimate internships while companies lacked efficient tools to screen and communicate with applicants.",
  //   solution: "Designed a two-sided marketplace with smart matching algorithms, in-app messaging, and application tracking for both personas.",
  //   impact: "Platform reached 15,000+ users within 6 months; 4,200+ successful internship placements in the first year.",
  //   research: "Dual-track research with 25 student interviews and 15 HR manager sessions to map both sides of the marketplace.",
  //   userFlow: "Mapped 18 flows across student, company, and admin personas with 6 critical intersection points.",
  //   wireframes: "Produced 70+ screens across web and mobile surfaces with interaction specifications.",
  //   testing: "Beta tested with 50 students and 10 companies; iterated 4 times before public launch.",
  //   caseStudy: {
  //     research: {
  //       title: "Dual-Track Research",
  //       desc: "Parallel research streams for both students and employers to understand the full marketplace dynamic.",
  //       items: [
  //         "25 student interviews: pain points in finding verified, quality internships",
  //         "15 HR manager sessions: recruitment bottlenecks, screening inefficiency",
  //         "Affinity mapping of 200+ research insights into 8 core themes",
  //         "Competitive analysis: Glints, Kalibrr, LinkedIn — feature gap identification",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  //         "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&q=80",
  //       ],
  //     },
  //     userFlow: {
  //       title: "Two-Sided Marketplace Flows",
  //       desc: "18 flows mapped across student, company, and admin personas with intersection points for matching and messaging.",
  //       items: [
  //         "Student journey: discover → apply → track → accept → onboard",
  //         "Company journey: post → review → shortlist → interview → hire",
  //         "Smart matching flow: algorithm parameters, match card, accept/reject",
  //         "Real-time in-app messaging with notification architecture",
  //         "Admin moderation flow for company verification and report handling",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
  //       ],
  //     },
  //     wireframes: {
  //       title: "Cross-Platform Wireframes",
  //       desc: "70+ screens covering web and mobile surfaces with detailed interaction and animation specifications.",
  //       items: [
  //         "70+ wireframe screens: student app, company dashboard, admin panel",
  //         "Mobile-first design system with 4 breakpoints",
  //         "Interaction specifications for match animation, message transitions",
  //         "Empty state, loading, and error state designs for all screens",
  //         "Onboarding sequence: 5-step student profile builder with progress indicator",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
  //         "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
  //       ],
  //     },
  //     hifi: {
  //       title: "High-Fidelity Design",
  //       desc: "Polished final interfaces with motion design specs for key interactions across student and employer experiences.",
  //       items: [
  //         "Full student mobile app: match feed, application tracker, chat, profile",
  //         "Company web dashboard: job posting, applicant review, analytics",
  //         "Motion design: match card swipe, message bubble, notification pop-in",
  //         "Design system: 50+ components, green-accented brand language",
  //         "Figma prototype with all major flows linked and interactive",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  //         "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  //       ],
  //     },
  //     testing: {
  //       title: "Beta Testing & Launch",
  //       desc: "4 iteration cycles with 50 students and 10 companies before public launch reaching 15,000+ users.",
  //       items: [
  //         "Beta round 1: 20 students — matching algorithm too aggressive, refined filters",
  //         "Beta round 2: 30 students + 5 companies — messaging UX improved",
  //         "Beta round 3: full beta cohort — task success 88%, ready for soft launch",
  //         "Beta round 4: load testing and edge case fixes before public launch",
  //         "Public launch: 15,000+ users in 6 months, 4,200+ placements year 1",
  //       ],
  //       images: [
  //         "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80",
  //       ],
  //     },
  //   },
  // },
  {
    id: 4, title: "Maganghub.kemnaker", year: "Nov'2025 - Mei'2026", category: "social",
    accent: "#e040fb", role: "Graphic Designer",
    description: "Brand-aligned social media visual system for a creative design studio targeting creative industry professionals.",
    tags: ["Instagram", "Branding", "Motion", "Canva"],
    mockupBg: "linear-gradient(135deg, #1a0028 0%, #3a004d 100%)",
    heroImage: Images.maganghubhero,
    detailImages: ["https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"],
    challenge: "Studio needed a cohesive visual identity for social media that felt premium yet approachable to SME clients.",
    solution: "Designed a modular template system with 24 post formats, story templates, and highlight covers unified by brand tokens.",
    impact: "Follower growth: +340% in 3 months. Average post engagement tripled from 1.2% to 4.1%.",
    metrics: [
      { label: "Follower Growth", value: "+340%" },
      { label: "Engagement Rate", value: "4.1%" },
      { label: "Templates Created", value: "24" },
      { label: "Monthly Reach", value: "28K" },
    ],
    gallery: [
      { label: "Instagram Feed", img: Images.maganghub1, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.maganghub2, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.maganghub3, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.maganghub4, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.maganghub5, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.maganghub6, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.maganghub7, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.maganghub8, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.maganghub9, aspect: "4/5" },
    ],
  },
  {
    id: 5, title: "Antuisi Studio", year: "Feb'2025 - Mei'2025", category: "social",
    accent: "#00ff88", role: "Graphic Designer",
    description: "Environmental advocacy social media campaign series for a sustainability-focused NGO operating across West Java.",
    tags: ["Infographic", "Motion", "Advocacy", "Illustrator"],
    mockupBg: "linear-gradient(135deg, #001a14 0%, #00331e 100%)",
    heroImage: Images.antuisihero,
    detailImages: ["https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"],
    challenge: "Complex environmental data needed to be communicated accessibly to a general public audience without losing scientific accuracy.",
    solution: "Created an illustrated infographic series with consistent visual metaphors and a nature-inspired color palette.",
    impact: "Campaign series reached 40,000+ organic impressions across Instagram and Facebook with 8.2% average engagement.",
    metrics: [
      { label: "Total Impressions", value: "40K+" },
      { label: "Engagement Rate", value: "8.2%" },
      { label: "Posts Published", value: "18" },
      { label: "Shares", value: "1,200+" },
    ],
    gallery: [

      { label: "Instagram Feed", img: Images.antuisifeed4, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.antuisifeed5, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.antuisifeed6, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.antuisistory7, aspect: "9/16" },
      { label: "Instagram Feed", img: Images.antuisistory8, aspect: "9/16" },
      { label: "Instagram Feed", img: Images.antuisistory9, aspect: "9/16" },
      { label: "Instagram Feed", img: Images.antuisistory1, aspect: "9/16" },
      { label: "Instagram Feed", img: Images.antuisistory2, aspect: "9/16" },
      { label: "Instagram Feed", img: Images.antuisistory3, aspect: "9/16" },
      { label: "Instagram Feed", img: Images.antuisistory4, aspect: "9/16" },
      { label: "Instagram Feed", img: Images.antuisistory5, aspect: "9/16" },
      { label: "Instagram Feed", img: Images.antuisistory6, aspect: "9/16" },
      { label: "Instagram Feed", img: Images.antuisifeed1, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.antuisifeed3, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.antuisifeed2, aspect: "4/5" },
    ],
  },
  {
    id: 6, title: "Greenleaf Jagakarsa Residence", year: "Freelancer", category: "social",
    accent: "#00ff88", role: "Graphic Designer",
    description: "Environmental advocacy social media campaign series for a sustainability-focused NGO operating across West Java.",
    tags: ["Infographic", "Motion", "Advocacy", "Illustrator"],
    mockupBg: "linear-gradient(135deg, #001a14 0%, #00331e 100%)",
    heroImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
    detailImages: ["https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"],
    challenge: "Complex environmental data needed to be communicated accessibly to a general public audience without losing scientific accuracy.",
    solution: "Created an illustrated infographic series with consistent visual metaphors and a nature-inspired color palette.",
    impact: "Campaign series reached 40,000+ organic impressions across Instagram and Facebook with 8.2% average engagement.",
    metrics: [
      { label: "Total Impressions", value: "40K+" },
      { label: "Engagement Rate", value: "8.2%" },
      { label: "Posts Published", value: "18" },
      { label: "Shares", value: "1,200+" },
    ],
    gallery: [

      { label: "Instagram Feed", img: Images.greenleaffeeds4, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.greenleaffeeds5, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.greenleaffeeds6, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.greenleafstory1, aspect: "9/16" },
      { label: "Instagram Feed", img: Images.greenleafstory2, aspect: "9/16" },
      { label: "Instagram Feed", img: Images.greenleafstory3, aspect: "9/16" },
      { label: "Instagram Feed", img: Images.greenleaffeeds2, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.greenleaffeeds1, aspect: "4/5" },
      { label: "Instagram Feed", img: Images.greenleaffeeds3, aspect: "4/5" },
    ],
  },
  // {
  //   id: 12, title: "ThinkitIDN", year: "Freelancer", category: "social",
  //   accent: "#00ff88", role: "Graphic Designer",
  //   description: "Environmental advocacy social media campaign series for a sustainability-focused NGO operating across West Java.",
  //   tags: ["Infographic", "Motion", "Advocacy", "Illustrator"],
  //   mockupBg: "linear-gradient(135deg, #001a14 0%, #00331e 100%)",
  //   heroImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
  //   detailImages: ["https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"],
  //   challenge: "Complex environmental data needed to be communicated accessibly to a general public audience without losing scientific accuracy.",
  //   solution: "Created an illustrated infographic series with consistent visual metaphors and a nature-inspired color palette.",
  //   impact: "Campaign series reached 40,000+ organic impressions across Instagram and Facebook with 8.2% average engagement.",
  //   metrics: [
  //     { label: "Total Impressions", value: "40K+" },
  //     { label: "Engagement Rate", value: "8.2%" },
  //     { label: "Posts Published", value: "18" },
  //     { label: "Shares", value: "1,200+" },
  //   ],
  //   gallery: [
  //     { label: "Instagram Feed", img: Images.maganghub1, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub2, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub3, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub4, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub5, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub6, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub7, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub8, aspect: "4/5" },
  //   ],
  // },
  // {
  //   id: 13, title: "Saudagar property syariah", year: "oct'2021 - apr", category: "social",
  //   accent: "#00ff88", role: "Graphic Designer",
  //   description: "Environmental advocacy social media campaign series for a sustainability-focused NGO operating across West Java.",
  //   tags: ["Infographic", "Motion", "Advocacy", "Illustrator"],
  //   mockupBg: "linear-gradient(135deg, #001a14 0%, #00331e 100%)",
  //   heroImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
  //   detailImages: ["https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"],
  //   challenge: "Complex environmental data needed to be communicated accessibly to a general public audience without losing scientific accuracy.",
  //   solution: "Created an illustrated infographic series with consistent visual metaphors and a nature-inspired color palette.",
  //   impact: "Campaign series reached 40,000+ organic impressions across Instagram and Facebook with 8.2% average engagement.",
  //   metrics: [
  //     { label: "Total Impressions", value: "40K+" },
  //     { label: "Engagement Rate", value: "8.2%" },
  //     { label: "Posts Published", value: "18" },
  //     { label: "Shares", value: "1,200+" },
  //   ],
  //   gallery: [
  //     { label: "Instagram Feed", img: Images.maganghub1, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub2, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub3, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub4, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub5, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub6, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub7, aspect: "4/5" },
  //     { label: "Instagram Feed", img: Images.maganghub8, aspect: "4/5" },
  //   ],
  // },

  // {
  //   id: 6, title: "Greenleaf Brand Identity", year: "2023", category: "print",
  //   accent: "#00ff88", role: "Graphic Designer",
  //   description: "Complete brand identity package for a sustainable packaging company including logo system, stationery, and packaging templates.",
  //   tags: ["Brand Identity", "Packaging", "Illustrator", "Print"],
  //   mockupBg: "linear-gradient(135deg, #001a0c 0%, #002a14 100%)",
  //   heroImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80",
  //   detailImages: ["https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80", "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=800&q=80"],
  //   challenge: "Brand needed to communicate eco-credentials authentically while remaining commercially competitive in retail shelf presence.",
  //   solution: "Developed a logo system, typography scale, and earthy-premium color palette applied across product packaging and collateral.",
  //   impact: "Brand launched to 5 retail chains; packaging redesign attributed to 25% sales increase per client report.",
  //   printAssets: [
  //     { name: "Logo System (Primary, Secondary, Icon)", size: "A4 / Vector", img: "https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=400&q=80" },
  //     { name: "Business Card Set", size: "90×55mm", img: "https://images.unsplash.com/photo-1589561253831-b8421dd58261?w=400&q=80" },
  //     { name: "Product Packaging Template", size: "Custom die-cut", img: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&q=80" },
  //     { name: "Brand Guidelines Book", size: "A5 / 32pp", img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400&q=80" },
  //   ],
  //   gallery: [
  //     { label: "Banner", img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80", aspect: "16/9" },
  //     { label: "Packaging", img: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&q=80", aspect: "3/4" },
  //     { label: "Business Card", img: "https://images.unsplash.com/photo-1589561253831-b8421dd58261?w=600&q=80", aspect: "3/2" },
  //     { label: "Brand Guideline", img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&q=80", aspect: "4/3" },
  //     { label: "Logo System", img: "https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=600&q=80", aspect: "4/3" },
  //     { label: "Brochure", img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&q=80", aspect: "3/4" },
  //   ],
  // },
  // {
  //   id: 7, title: "Sunbiro Event Collateral", year: "2023", category: "print",
  //   accent: "#ffb347", role: "Graphic Designer",
  //   description: "Full print collateral suite for a regional business forum including banners, programs, nametags, and premium invitations.",
  //   tags: ["Event", "Print", "Layout", "InDesign"],
  //   mockupBg: "linear-gradient(135deg, #1a0e00 0%, #331e00 100%)",
  //   heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
  //   detailImages: ["https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80", "https://images.unsplash.com/photo-1578836537282-3171d77f8632?w=800&q=80"],
  //   challenge: "Multi-day forum required consistent premium print materials across 12 asset types with tight production deadlines.",
  //   solution: "Created a master brand template system in InDesign allowing rapid asset generation while maintaining print-ready quality.",
  //   impact: "All 12 asset types delivered print-ready 5 days ahead of schedule; client reordered the system for 2 subsequent events.",
  //   printAssets: [
  //     { name: "Event Banner (3×6m)", size: "300×600cm / 150dpi", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80" },
  //     { name: "Event Program Booklet", size: "A5 / 24pp", img: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=400&q=80" },
  //     { name: "Premium Invitation Card", size: "A5 Folded", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&q=80" },
  //     { name: "Nametag & Lanyard Design", size: "9×13cm", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80" },
  //   ],
  //   gallery: [
  //     { label: "Event Banner", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", aspect: "16/9" },
  //     { label: "Program Booklet", img: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=600&q=80", aspect: "3/4" },
  //     { label: "Invitation", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80", aspect: "4/3" },
  //     { label: "Nametag", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80", aspect: "3/4" },
  //     { label: "Roll Banner", img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80", aspect: "9/16" },
  //     { label: "X-Banner", img: "https://images.unsplash.com/photo-1578836537282-3171d77f8632?w=400&q=80", aspect: "9/16" },
  //   ],
  // },
  // {
  //   id: 8, title: "Yayasan Infographic Series", year: "2022", category: "other",
  //   accent: "#a855f7", role: "Visual Communication Designer",
  //   description: "Annual report infographics and data visualization for a social welfare foundation documenting program impact.",
  //   tags: ["Infographic", "Data Viz", "Illustrator", "Report"],
  //   mockupBg: "linear-gradient(135deg, #0f0028 0%, #1e0040 100%)",
  //   heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  //   detailImages: ["https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80", "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80"],
  //   challenge: "Dense program statistics needed clear visual communication for donor reports and public stakeholder presentations.",
  //   solution: "Designed a 20-page illustrated infographic report with custom icons, data charts, and narrative visual flows.",
  //   impact: "Foundation used the report to secure 3 new institutional donors representing 40% increased annual funding.",
  //   gallery: [
  //     { label: "Annual Report Cover", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", aspect: "3/4" },
  //     { label: "Data Visualization", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80", aspect: "4/3" },
  //     { label: "Program Chart", img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&q=80", aspect: "4/3" },
  //     { label: "Infographic Spread", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80", aspect: "16/9" },
  //     { label: "Icon Set", img: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=600&q=80", aspect: "1/1" },
  //     { label: "Presentation", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80", aspect: "16/9" },
  //   ],
  // },
];