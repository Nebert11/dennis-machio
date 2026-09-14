import {
  Clapperboard,
  Compass,
  Radio,
  Share2,
  Sparkles,
} from 'lucide-react';
import type {
  ImageSet,
  JournalArticle,
  ProductionEvent,
  Project,
  Service,
  StatItem,
  TimelineItem,
  Venture,
} from '../types/site';

export const images: ImageSet = {
  hero: '/images/portfolio/WhatsApp_Image_2026-09-11_at_23.05.23.jpeg',
  portrait: '/images/portfolio/WhatsApp_Image_2026-09-11_at_23.05.24_(1).jpeg',
  portraitTwo: '/images/portfolio/WhatsApp_Image_2026-09-11_at_23.05.24_(2).jpeg',
  portraitThree: '/images/portfolio/WhatsApp_Image_2026-09-11_at_23.05.24.jpeg',
  euKenya: '/images/portfolio/eu-kenya.jpg',
  amakove: '/images/portfolio/amakove6.jpg',
  sasiniConference: '/images/portfolio/sasini_conference.jpg',
  elf: '/images/portfolio/elf.png',
  storiesInsights: '/images/portfolio/9.jpg',
  projDencast: '/images/portfolio/proj-dencast.jpg',
};

export const bioSummary = {
  name: 'Dennis Machio',
  title: 'Creative Producer | Storyteller | Media & Content Strategist',
  subtitle: 'Founder of Dencast Global Limited · Lead Editor at Michezo Afrika',
  location: 'Nairobi, Kenya — working across Africa',
  email: 'hello@dennismachio.com',
  secondaryEmail: 'hello@dencastglobal.com',
  phone: '+254 721 710 397',
  heroTagline: 'Capturing Moments. Telling Stories. Building Brands.',
  heroDescription:
    "I'm Dennis Machio — Creative Producer, Director, Storyteller and Media Strategist. For 15+ years, I've helped brands, organisations and communities across Africa turn ideas, experiences and impact into powerful visual stories.",
  philosophy:
    'The most powerful stories do more than document what happened — they reveal why it matters, connect people to purpose, and leave something lasting behind.',
};

export const stats: StatItem[] = [
  { value: '10+', label: 'Years in film & production', subtext: 'Deep industry experience' },
  { value: '2', label: 'Companies founded / led', subtext: 'Dencast Global & Michezo Afrika' },
  { value: '190+', label: 'Satisfied Clients', subtext: '5-Star Google Rating' },
  { value: 'Africa-wide', label: 'Production Footprint', subtext: 'Cross-border assignments' },
];

export const ventures: Venture[] = [
  {
    id: 'dencast-global',
    title: 'Dencast Global',
    url: 'https://www.dencastglobal.co.ke/',
    badge: 'Creative Production & Communications',
    description: 'Your creative production and communications company.',
  },
  {
    id: 'michezo-afrika',
    title: 'Michezo Afrika',
    url: 'https://www.michezoafrika.com/',
    badge: 'Sports Media Platform',
    description: 'Your sports media platform focused on telling authentic African sports stories.',
  },
  {
    id: 'magharibi-michezo-awards',
    title: 'Magharibi Michezo Awards',
    badge: 'Sports Recognition',
    description: 'Celebrating the people and stories shaping African sport.',
  },
  {
    id: 'magharibi-festival',
    title: 'Magharibi Festival',
    badge: 'Mentorship & Creative Development',
    description: 'Mentorship and creative development through culture, media and storytelling.',
  },
];

export const productionEvents: ProductionEvent[] = [
  {
    id: 'amakovewala',
    title: 'The Amakovewala Show',
    role: 'Producer / DOP',
    type: 'TV Show & Studio Production',
    description:
      'Studio and red-carpet production for one of the region\'s prominent talk formats — lighting, multi-camera coverage and full post-production packaging from set to screen.',
    year: '2024 - Present',
    image: images.amakove,
  },
  {
    id: 'eu-kenya-forum',
    title: 'EU–Kenya Business Forum',
    role: 'Media Coverage & Live Production',
    type: 'International Conference',
    description:
      'On-the-ground media coverage and broadcast facilitation for the EU–Kenya Business Forum 2025, a two-day international conference on digitalising trade.',
    year: '2025',
    image: images.euKenya,
  },
  {
    id: 'agm-broadcast',
    title: 'Corporate AGM & Conference Broadcast',
    role: 'Live Broadcast & On-Screen Hosting',
    type: 'Live Stream & Corporate Conference',
    description:
      'Full live broadcast setup, multi-camera coverage, and on-screen hosting for major listed company AGMs and corporate conferences, streamed in real time.',
    year: '2024',
    image: images.sasiniConference,
  },
];

export const projects: Project[] = [
  {
    number: '01',
    slug: 'eu-kenya-business-forum',
    title: 'EU–Kenya Business Forum',
    category: 'Live Events & Broadcasts',
    type: 'International Summit · Broadcast',
    image: images.euKenya,
    detail: 'On-the-ground media coverage and broadcast facilitation for the EU–Kenya Business Forum on digitalising trade.',
    role: 'Lead Media Coverage & Broadcast',
    tags: ['Summit', 'Live Broadcast', 'International'],
    year: '2025',
  },
  {
    number: '02',
    slug: 'the-amakovewala-show',
    title: 'The Amakovewala Show',
    category: 'Creative Productions',
    type: 'Talk Show · Studio Production',
    image: images.amakove,
    detail: 'Studio lighting, multi-camera direction, red-carpet coverage, and full post-production packaging.',
    role: 'Producer / DOP',
    tags: ['Broadcast', 'TV Show', 'DOP'],
    year: '2024',
  },
  {
    number: '03',
    slug: 'corporate-agm-conference-broadcast',
    title: 'Corporate AGM & Conference Broadcast',
    category: 'Corporate & Institutional Films',
    type: 'Corporate Broadcast · AGM',
    image: images.sasiniConference,
    detail: 'Live multi-camera streaming and production infrastructure for shareholder AGMs and executive conferences.',
    role: 'Lead Broadcast Director',
    tags: ['Corporate', 'Live Stream', 'AGM'],
    year: '2024',
  },
  {
    number: '04',
    slug: 'emerging-leaders-foundation',
    title: 'Emerging Leaders Foundation',
    category: 'Corporate & Institutional Films',
    type: 'Identity · Impact',
    image: images.elf,
    detail: 'Building a platform for tomorrow\'s voices through human-centered institutional storytelling.',
    role: 'Executive Producer',
    tags: ['Impact', 'Institutional', 'Leadership'],
    year: '2023',
  },
  {
    number: '05',
    slug: 'lewa-safari-marathon',
    title: 'Lewa Safari Marathon',
    category: 'Documentary & Impact Films',
    type: 'Documentary · Conservation',
    image: images.portraitThree,
    detail: 'Scale, emotion, and a reason to run. Documenting wildlife conservation impact in northern Kenya.',
    role: 'Lead Director & Cinematographer',
    tags: ['Documentary', 'Conservation', 'Cinematography'],
    year: '2023',
  },
  {
    number: '06',
    slug: 'java-house-consistency',
    title: 'Java House Consistency',
    category: 'Brand Campaigns',
    type: 'Brand film · Hospitality',
    image: images.portraitTwo,
    detail: 'The story behind a taste people trust. Visual narrative capturing everyday brand excellence.',
    role: 'Creative Director',
    tags: ['Brand Film', 'Commercial', 'Storytelling'],
    year: '2022',
  },
];

export const workCategories = [
  'Documentary & Impact Films',
  'Corporate & Institutional Films',
  'Live Events & Broadcasts',
  'Brand Campaigns',
  'Sports & Media',
  'Creative Productions',
];

export const journalArticles: JournalArticle[] = [
  {
    id: 'story-before-the-camera',
    title: 'The Story Before the Camera',
    excerpt: 'Why the strongest visual work begins with listening, context and a clear human truth.',
    date: 'September 2026',
    image: images.portraitThree,
  },
  {
    id: 'purposeful-brand-storytelling',
    title: 'Purposeful Brand Storytelling',
    excerpt: 'Moving beyond polished images to create stories that help people understand why a brand matters.',
    date: 'August 2026',
    image: images.projDencast,
  },
  {
    id: 'production-across-africa',
    title: 'Production Across Africa',
    excerpt: 'The craft, collaboration and care behind meaningful work across different places and communities.',
    date: 'July 2026',
    image: images.euKenya,
  },
  {
    id: 'what-makes-a-story-last',
    title: 'What Makes a Story Last',
    excerpt: 'A reflection on resilience, creative discipline and building work with a life beyond delivery.',
    date: 'June 2026',
    image: images.portraitTwo,
  },
];

export const services: Service[] = [
  {
    id: 'film-documentary',
    icon: Clapperboard,
    title: 'Film & Documentary Production',
    subtitle: 'Human-interest & impact narratives',
    text: 'Documentaries, impact films, institutional videos and human-interest stories.',
    deliverables: [
      'Documentary Features & Shorts',
      'Impact & Donor Case Studies',
      'Corporate & Institutional Films',
      'Field Filming Across Africa',
    ],
  },
  {
    id: 'creative-direction',
    icon: Compass,
    title: 'Creative Direction',
    subtitle: 'Shaping tone, vision & visual identity',
    text: 'Shaping the visual language, tone and creative direction from concept to final delivery.',
    deliverables: [
      'Creative Treatment & Storyboarding',
      'Visual Identity for Video',
      'On-Set Directing & DOP Oversight',
      'Brand Cohesion & Quality Assurance',
    ],
  },
  {
    id: 'strategic-communications',
    icon: Share2,
    title: 'Strategic Communications',
    subtitle: 'Making complex messages land with clarity',
    text: 'Turning complex ideas into clear, purposeful communication that connects with stakeholders and audiences.',
    deliverables: [
      'Stakeholder Communication Assets',
      'Policy & Advocacy Briefs in Video',
      'Annual Report & Results Summaries',
      'Media Distribution Strategy',
    ],
  },
  {
    id: 'live-event-production',
    icon: Radio,
    title: 'Live Event Production and Management',
    subtitle: 'Broadcast setups for high-stakes stages',
    text: 'Multi-camera productions, livestreaming, screen content and complete event media coverage.',
    deliverables: [
      'Multi-Camera Live Broadcasts',
      'AGM & Corporate Livestreams',
      'International Forum Media Coverage',
      'Same-Day Highlight Packages',
    ],
  },
  {
    id: 'brand-storytelling',
    icon: Sparkles,
    title: 'Brand Storytelling',
    subtitle: 'Films that connect and convert',
    text: 'Helping brands communicate who they are, what they do and why it matters.',
    deliverables: [
      'Brand Origin & Philosophy Films',
      'Multi-Channel Digital Campaigns',
      'Customer & Partner Testimonials',
      'Social Video Assets',
    ],
  },
];

export const processStages = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    desc: 'Understanding the core human truth, target audience, and precise business or impact objective.',
  },
  {
    step: '02',
    title: 'Concept & Scripting',
    desc: 'Developing narrative treatments, interview guides, and visual storyboards designed to resonate.',
  },
  {
    step: '03',
    title: 'Cinematic Production',
    desc: 'Deploying high-end camera packages, lighting, sound capture, and experienced on-ground crew.',
  },
  {
    step: '04',
    title: 'Post-Production & Sound',
    desc: 'Editorial precision, color grading, sound design, original composition, and motion graphics.',
  },
  {
    step: '05',
    title: 'Delivery & Impact',
    desc: 'Format-optimized deliverables ready for broadcast, theatre, social distribution, or boardrooms.',
  },
];

export const journeyTimeline: TimelineItem[] = [
  {
    year: '2021',
    title: 'Early Production Work',
    tag: 'Foundation',
    description:
      'Built a solid foundation in camera operation, non-linear editing, and live multi-camera broadcast across corporate, sports, and media assignments.',
  },
  {
    year: '2022',
    title: 'Founded Dencast Global Limited',
    tag: 'Studio Launch',
    description:
      'Built a creative production and communications company serving organizations across Kenya and the wider region — documentaries, brand films, live event coverage and campaigns.',
  },
  {
    year: '2022+',
    title: 'International & Institutional Productions',
    tag: 'Global Reach',
    description:
      'Led production and live coverage for high-level summits including the EU–Kenya Business Forum, corporate AGMs, and multi-day conferences requiring full broadcast setups.',
  },
  {
    year: '2023+',
    title: 'Entertainment & Talk Formats',
    tag: 'Broadcast',
    description:
      'Produced and directed studio and red-carpet coverage for regional talk show formats, including The Amakovewala Show, setting new benchmarks in lighting and post-production packaging.',
  },
  {
    year: '2024+',
    title: 'Lead Editor, Michezo Afrika',
    tag: 'Sports Journalism',
    description:
      'Expanded sports journalism and multimedia storytelling, connecting athletes, teams, and communities across Africa through narratives that go beyond final scores.',
  },
];

