export const SITE = {
  name: "MANA",
  fullName: "Mentoria AI Navigation Architect Certification",
  tagline: "Clutter to Clarity.",
  parentBrand: "Mentoria",
  parentUrl: "https://www.mentoria.com",
  url: "https://certifications.mentoria.com",
  whatsappNumber: "919152546558",
  whatsappMessage: "Hi, I'd like to know more about the MANA certification.",
  orientationCta: "Register Now",
};

export const CONTACTS = [
  {
    name: "Ketki Sarange",
    role: "Programme Lead",
    email: "ketki.sarange@mentoria.com",
    phone: "+91 91525 46558",
    phoneHref: "+919152546558",
  },
  {
    name: "Amit Gupta",
    role: "Programme Lead",
    email: "amit.gupta@mentoria.com",
    phone: "+91 91525 52856",
    phoneHref: "+919152552856",
  },
];

export const TRUST_STATS = [
  { value: "390+", label: "Partner Schools" },
  { value: "3.75L+", label: "Students Guided" },
  { value: "1,650+", label: "Counsellors Trained" },
  { value: "1,700+", label: "5-Star Reviews" },
];

export const FEES = {
  founder: 55000,
  currency: "₹",
  tms2Monthly: "₹1,500–2,500",
  bridgeMin: 8000,
  bridgeMax: 12000,
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About MANA",
    navLabel: "About",
    href: "/about",
    children: [
      { label: "About MANA", href: "/about", description: "What MANA is and why Mentoria built it" },
      { label: "Why MANA", href: "/why-mana", description: "What sets this apart from generic courses" },
      { label: "Who Should Join", href: "/who-should-join", description: "Is this the right fit for you" },
      { label: "Certification", href: "/certification", description: "How the credential is earned" },
      { label: "Curriculum", href: "/curriculum", description: "The full 8-module, 60-hour syllabus" },
    ],
  },
  { label: "Orientation", href: "/orientation" },
  { label: "Faculty", href: "/faculty" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
];

export const FOOTER_LINKS = {
  programme: [
    { label: "About MANA", href: "/about" },
    { label: "Why MANA", href: "/why-mana" },
    { label: "Who Should Join", href: "/who-should-join" },
    { label: "Curriculum", href: "/curriculum" },
    { label: "Certification", href: "/certification" },
    { label: "Faculty", href: "/faculty" },
    { label: "Bridge Programme", href: "/bridge-programme" },
    { label: "Coming Soon Programme", href: "/coming-soon" },
  ],
  engage: [
    { label: "Apply to Join", href: "/orientation" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Fees", href: "/fees" },
    { label: "Downloads", href: "/downloads" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

export const MODULES = [
  {
    id: "foundation-1",
    tag: "Foundation 1",
    title: "AI Literacy & AI Teaching Capability",
    outcome:
      "Build real AI fluency, then teach it, explaining AI's career impact to students and anxious parents without jargon or fear.",
    hours: 8,
    live: 4,
    async: 4,
  },
  {
    id: "foundation-2",
    tag: "Foundation 2",
    title: "Indian Education & Career Ecosystem",
    outcome:
      "Master boards, entrance pathways, and lesser-known routes (NIOS, open schooling, and alternative pathways) for confident, specific advice.",
    hours: 6,
    live: 3,
    async: 3,
  },
  {
    id: "navigator-architecture-1",
    tag: "Navigator Architecture 1",
    title: "TMS 2.0 Platform Mastery & Assessment Suite",
    outcome:
      "Achieve complete command of the TMS 2.0 platform and psychometric assessment suite, from dispatch to report interpretation.",
    hours: 8,
    live: 5,
    async: 3,
  },
  {
    id: "navigator-architecture-2",
    tag: "Navigator Architecture 2",
    title: "Career Discovery Architecture (IX–XII & UG)",
    outcome:
      "Run the full career discovery journey, from first session to an accepted action plan, for school and undergraduate students.",
    hours: 8,
    live: 5,
    async: 3,
  },
  {
    id: "navigator-architecture-3",
    tag: "Navigator Architecture 3",
    title: "Parent Counselling & Communication",
    outcome:
      "Navigate parent anxiety, three-way sessions, and hold the child-first position with a practised, professional close.",
    hours: 5,
    live: 3,
    async: 2,
  },
  {
    id: "navigator-architecture-4",
    tag: "Navigator Architecture 4",
    title: "AI Career Navigator Workshop Certification",
    outcome:
      "Design and deliver school workshops that convert 5–15 paying counselling clients per session: the practice's core revenue engine.",
    hours: 9,
    live: 5,
    async: 4,
  },
  {
    id: "foundation-3",
    tag: "Foundation 3",
    title: "Sales Operating System: School Outreach",
    outcome:
      "Build a confident pricing and school-outreach pitch, then execute a mandatory 90-day practice-building sprint post-certification.",
    hours: 16,
    live: 8,
    async: 8,
  },
  {
    id: "capstone",
    tag: "Capstone",
    title: "Practicum + Workshop",
    outcome:
      "Prove it live: 4 human-evaluated counselling cases plus one video-recorded workshop, double-scored by senior Career Architects.",
    hours: null,
    live: null,
    async: null,
  },
] as const;

export const CERTIFICATION_BADGES = [
  {
    title: "MANA Certificate",
    description: "The core credential: proof of a completed, live-assessed AI-era career architecture practice.",
  },
  {
    title: "Workshop Facilitation Badge",
    description: "Earned on delivery of a video-recorded AI Career Navigator Workshop to a minimum of 10 students.",
  },
  {
    title: "TMS 2.0 Practitioner Endorsement",
    description: "Recognises verified command of the full TMS 2.0 assessment and reporting suite.",
  },
  {
    title: "Active Practice Badge",
    description: "Awarded on completion of the mandatory 90-day post-certification school-outreach sprint.",
  },
];

export const PERSONAS = [
  {
    title: "Counsellors & Psychologists",
    description: "Deepen your practice with an AI-first framework and a second revenue engine through school workshops.",
  },
  {
    title: "Educators",
    description: "Turn subject-matter credibility into a structured, revenue-generating career guidance practice.",
  },
  {
    title: "HR Professionals",
    description: "Apply talent and assessment experience to career architecture for students and young professionals.",
  },
  {
    title: "Army Veterans & Second-Career Professionals",
    description: "Build a purposeful, self-sufficient practice guiding the next generation, on your own schedule.",
  },
];

export const FAQ_CATEGORIES = [
  {
    category: "Eligibility",
    items: [
      {
        q: "Who can enrol in MANA?",
        a: "Graduates from any stream. A background in psychology or education is helpful but not mandatory, and no prior AI experience is required. Foundation 1 builds this from the ground up.",
      },
      {
        q: "Do I need to be a working counsellor already?",
        a: "No. MANA is built for counsellors, psychologists, educators, HR professionals, Army veterans, and second-career professionals alike. If you already hold an active Mentoria certification under the previous model, see the Bridge Programme instead.",
      },
    ],
  },
  {
    category: "Duration & Format",
    items: [
      {
        q: "How long is the programme?",
        a: "60 hours total: 30 hours of live, facilitator-led sessions and 30 hours of structured async work, delivered across 8 modules plus the Capstone.",
      },
      {
        q: "Is this online or in person?",
        a: "The core programme is delivered live online with async coursework between sessions. Contact us for details on any in-person components for your cohort.",
      },
    ],
  },
  {
    category: "Certification",
    items: [
      {
        q: "How is MANA assessed?",
        a: "Entirely through live practice, never a written exam. The Capstone requires 4 human-evaluated TMS 2.0 counselling cases and 1 video-recorded AI Career Navigator Workshop, every case double-scored by senior Career Architects.",
      },
      {
        q: "What do I actually earn on completion?",
        a: "The MANA Certificate, a Workshop Facilitation Badge, a TMS 2.0 Practitioner Endorsement, and (after your 90-day sprint) the Active Practice Badge, plus a listing in Mentoria's verifiable practitioner directory.",
      },
      {
        q: "Can I resit if I don't pass a Capstone case?",
        a: "Any Tier 3 dimension scoring below 3/5 (excluding ethics) is resit-eligible after a 4-week development period. A 1/5 on the ethics or child-first dimension on any case is an automatic fail with no resit for 6 months.",
      },
    ],
  },
  {
    category: "AI Modules",
    items: [
      {
        q: "Do I need to be technical to complete the AI modules?",
        a: "No. Foundation 1 is built for complete beginners. You'll leave with working fluency in 5+ AI tools relevant to career architecture practice, taught in plain language.",
      },
    ],
  },
  {
    category: "Coaching Practice & Income",
    items: [
      {
        q: "How do MANA-certified architects earn?",
        a: "Through two channels: one-to-one TMS 2.0 counselling sessions, and AI Career Navigator Workshops delivered at schools. A single 2-hour workshop typically converts 5–15 paying counselling clients.",
      },
      {
        q: "Is there an ongoing cost after certification?",
        a: `Yes. An active TMS 2.0 subscription (${FEES.tms2Monthly}/month) is required to practise under the Mentoria brand post-certification.`,
      },
    ],
  },
  {
    category: "Payments & EMI",
    items: [
      {
        q: "What does the certification cost?",
        a: `The certification is priced at ₹${FEES.founder.toLocaleString(
          "en-IN"
        )}. Full details, including payment options, are confirmed with our team once you apply.`,
      },
    ],
  },
  {
    category: "Applying",
    items: [
      {
        q: "What happens after I apply?",
        a: "We review your application and get in touch to talk through your goals, answer your questions, and confirm your fit and cohort. Applying is the first step, not a commitment to pay.",
      },
      {
        q: "Does applying commit me to anything?",
        a: "No. Applying costs nothing and commits you to nothing. You only enrol once you're sure it's right for you, after a real conversation with our team.",
      },
    ],
  },
  {
    category: "Bridge Route",
    items: [
      {
        q: "I already hold an older Mentoria counsellor certification. Do I redo everything?",
        a: "No. The Bridge Programme is an 18-hour condensed pathway covering only what's genuinely new: TMS 2.0 mastery, updated AI content, and the entirely new Workshop Certification, for a reduced fee.",
      },
    ],
  },
];
