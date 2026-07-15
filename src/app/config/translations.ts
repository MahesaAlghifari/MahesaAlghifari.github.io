// src/config/translations.ts

export type Lang = "EN" | "ID";
export type ProjectCategory = "uiux" | "social" | "print" | "other";

export const TRANSLATIONS = {
  EN: {
    nav: { home: "Home", about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact", cta: "Let's Talk" },
    hero: {
      badge: "WELCOME TO MY UNIVERSE",
      role: "UI/UX Designer · Graphic Designer",
      desc: "I design digital experiences that feel like they were built in another universe — intuitive, beautiful, and purposeful.",
      cta1: "View My Work", cta2: "Contact Me",
    },
    about: {
      tag: "// ABOUT_ME",
      h1: "Im ", hAccent: "Mahesa Alghifari",
      p1: "I'm a UI/UX and Graphic Designer based in Bogor, Indonesia. I believe great design is the balance of aesthetics, functionality, and user experience—creating solutions that are both engaging and meaningful.",
      p2: "Over the past three years, I've worked on UI/UX, branding, social media, and digital platform projects with government institutions, companies, and creative teams. I bring a structured, creative, and adaptive approach to every project, ensuring each design delivers value for both users and business goals.",
      stat1: "Projects", stat2: "Happy Clients",
      info3: "UI/UX · Graphic Design", info4: "Open to Opportunities",
    },
    experience: { tag: "// EXPERIENCE", h1: "Missions ", hAccent: "completed", prev: "Prev", next: "Next", of: "of" },
    projects: {
      tag: "// SELECTED_PROJECTS", h1: "Work from the ", hAccent: "cosmos",
      tabs: ["UI/UX", "Social Media", "Media Print", "Other"] as string[],
      viewCaseStudy: "View Case Study",
      caseStudyTabs: ["Research", "User Flow", "Wireframes", "Hi-Fi", "Testing"] as string[],
      catLabels: { uiux: "Case Study", social: "Social Media", print: "Print Design", other: "Visual Design" } as Record<ProjectCategory, string>,
    },
    skills: {
      tag: "// TOOLS_&_EXPERTISE", h1: "My design ", hAccent: "constellation",
      sub: "Each tool is a star in my craft — mapped by proficiency, glowing with purpose.",
      proficiency: "PROFICIENCY",
    },
    contact: {
      tag: "// CONTACT", h1: "Let's build something ", hAccent: "stellar",
      sub: "Whether you have a product to design, a brand to build, or just want to explore ideas — I'm open to new missions. Let's connect.",
      lEmail: "Email", lPhone: "Phone", lLoc: "Location",
      fName: "Your Name", fNamePh: "Astronaut Smith",
      fEmail: "Email Address", fEmailPh: "smith@space.com",
      fMsg: "Message", fMsgPh: "Tell me about your mission...",
      submit: "Launch Message",
      okTitle: "Message sent into orbit!", okSub: "I'll get back to you within 24 hours.",
    },
    modal: { back: "Back", close: "Close" },
    footer: { copy: "©2026 · Mahesa Portfolio", rights: "All rights reserved." },
  },
  ID: {
    nav: { home: "Beranda", about: "Tentang", experience: "Pengalaman", projects: "Proyek", skills: "Keahlian", contact: "Kontak", cta: "Mari Bicara" },
    hero: {
      badge: "SELAMAT DATANG DI UNIVERSEKU",
      role: "Desainer UI/UX · Desainer Grafis",
      desc: "Saya mendesain pengalaman digital yang terasa seperti dibangun di alam semesta lain — intuitif, indah, dan penuh makna. Berdomisili di Bogor, Indonesia.",
      cta1: "Lihat Karya Saya", cta2: "Hubungi Saya",
    },
    about: {
      tag: "// TENTANG_SAYA",
      h1: "Saya ", hAccent: "Mahesa Alghifari",
      p1: "seorang UI/UX dan Graphic Designer yang berdomisili di Bogor, Indonesia. Saya percaya bahwa desain yang baik adalah perpaduan antara estetika, fungsionalitas, dan pengalaman pengguna untuk menciptakan solusi yang menarik sekaligus bermakna.",
      p2: "Selama lebih dari tiga tahun, saya telah mengerjakan berbagai proyek di bidang UI/UX, branding, media sosial, dan platform digital bersama instansi pemerintah, perusahaan, serta tim kreatif. Saya selalu mengedepankan pendekatan yang terstruktur, kreatif, dan adaptif agar setiap desain mampu memberikan nilai bagi pengguna maupun tujuan bisnis.",
      stat1: "Proyek", stat2: "Klien Puas",
      info3: "UI/UX · Desain Grafis", info4: "Terbuka untuk Peluang",
    },
    experience: { tag: "// PENGALAMAN", h1: "Misi yang ", hAccent: "diselesaikan", prev: "Sebelum", next: "Berikut", of: "dari" },
    projects: {
      tag: "// PROYEK_PILIHAN", h1: "Karya dari ", hAccent: "kosmos",
      tabs: ["UI/UX", "Media Sosial", "Media Cetak", "Lainnya"] as string[],
      viewCaseStudy: "Lihat Studi Kasus",
      caseStudyTabs: ["Riset", "Alur Pengguna", "Wireframe", "Hi-Fi", "Pengujian"] as string[],
      catLabels: { uiux: "Studi Kasus", social: "Media Sosial", print: "Desain Cetak", other: "Desain Visual" } as Record<ProjectCategory, string>,
    },
    skills: {
      tag: "// ALAT_&_KEAHLIAN", h1: "Konstelasi desain ", hAccent: "saya",
      sub: "Setiap alat adalah bintang dalam keahlian saya — dipetakan berdasarkan kemahiran, bersinar dengan tujuan.",
      proficiency: "KEMAHIRAN",
    },
    contact: {
      tag: "// KONTAK", h1: "Mari bangun sesuatu yang ", hAccent: "luar biasa",
      sub: "Apakah Anda memiliki produk untuk didesain, merek untuk dibangun, atau sekadar ingin menjelajahi ide — saya terbuka untuk misi baru. Mari terhubung.",
      lEmail: "Email", lPhone: "Telepon", lLoc: "Lokasi",
      fName: "Nama Anda", fNamePh: "Astronaut Budi",
      fEmail: "Alamat Email", fEmailPh: "budi@luar-angkasa.com",
      fMsg: "Pesan", fMsgPh: "Ceritakan tentang misi Anda...",
      submit: "Kirim Pesan",
      okTitle: "Pesan terkirim ke orbit!", okSub: "Saya akan membalas dalam 24 jam.",
    },
    modal: { back: "Kembali", close: "Tutup" },
    footer: { copy: "© 2024 · Dirancang dari kosmos", rights: "Semua hak dilindungi." },
  },
} as const;