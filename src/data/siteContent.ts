import {
  Clapperboard,
  Compass,
  Radio,
  Share2,
  Sparkles,
} from 'lucide-react';
import type {
  ImageSet,
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
};

export const bioSummary = {
  name: 'Dennis Machio',
  title: 'Film Producer, Creative Director & Media Strategist',
  subtitle: 'Founder of Dencast Global Limited · Lead Editor at Michezo Afrika',
  location: 'Nairobi, Kenya — working across Africa',
  email: 'hello@dennismachio.com',
  secondaryEmail: 'hello@dencastglobal.com',
  phone: '+254 721 710 397',
  heroTagline: "Stories that move audiences and build trust",
  heroDescription:
    "I'm Dennis Machio — Film Producer, Creative Director, and Media Strategist. For more than a decade I've helped organizations across Africa turn complex ideas into visual stories that connect.",
  philosophy:
    'The most powerful stories do not simply document what happened — they help people understand why it matters. That is the standard I bring to every production, every organization and every story I am part of.',
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
    title: 'Dencast Global Limited',
    role: 'Founder / Director / Lead Producer',
    url: 'https://www.dencastglobal.co.ke/',
    badge: 'Flagship Studio',
    stats: '190+ Satisfied Clients · 5.0 Rating',
    description:
      'A creative production and communications company built to help organizations tell better stories — documentaries, live event productions, brand films, corporate communications and digital campaigns across Africa, guided by strategy, craft and a deep respect for the story being told.',
  },
  {
    id: 'michezo-afrika',
    title: 'Michezo Afrika',
    role: 'Founder / Lead Editor',
    url: 'https://www.michezoafrika.com/',
    badge: 'Sports Media & Journalism',
    stats: 'Africa-Wide Sports Media Network',
    description:
      'Telling the story of African sport. Beyond corporate and development work, producing sports journalism and multimedia content that connects athletes, teams and communities through stories that go beyond scores and results.',
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
    title: 'EU–Kenya Business Forum',
    type: 'International Summit · Broadcast',
    image: images.euKenya,
    detail: 'On-the-ground media coverage and broadcast facilitation for the EU–Kenya Business Forum on digitalising trade.',
    role: 'Lead Media Coverage & Broadcast',
    tags: ['Summit', 'Live Broadcast', 'International'],
    year: '2025',
  },
  {
    number: '02',
    title: 'The Amakovewala Show',
    type: 'Talk Show · Studio Production',
    image: images.amakove,
    detail: 'Studio lighting, multi-camera direction, red-carpet coverage, and full post-production packaging.',
    role: 'Producer / DOP',
    tags: ['Broadcast', 'TV Show', 'DOP'],
    year: '2024',
  },
  {
    number: '03',
    title: 'Corporate AGM & Conference Broadcast',
    type: 'Corporate Broadcast · AGM',
    image: images.sasiniConference,
    detail: 'Live multi-camera streaming and production infrastructure for shareholder AGMs and executive conferences.',
    role: 'Lead Broadcast Director',
    tags: ['Corporate', 'Live Stream', 'AGM'],
    year: '2024',
  },
  {
    number: '04',
    title: 'Emerging Leaders Foundation',
    type: 'Identity · Impact',
    image: images.elf,
    detail: 'Building a platform for tomorrow\'s voices through human-centered institutional storytelling.',
    role: 'Executive Producer',
    tags: ['Impact', 'Institutional', 'Leadership'],
    year: '2023',
  },
  {
    number: '05',
    title: 'Lewa Safari Marathon',
    type: 'Documentary · Conservation',
    image: images.portraitThree,
    detail: 'Scale, emotion, and a reason to run. Documenting wildlife conservation impact in northern Kenya.',
    role: 'Lead Director & Cinematographer',
    tags: ['Documentary', 'Conservation', 'Cinematography'],
    year: '2023',
  },
  {
    number: '06',
    title: 'Java House Consistency',
    type: 'Brand film · Hospitality',
    image: images.portraitTwo,
    detail: 'The story behind a taste people trust. Visual narrative capturing everyday brand excellence.',
    role: 'Creative Director',
    tags: ['Brand Film', 'Commercial', 'Storytelling'],
    year: '2022',
  },
];

export const services: Service[] = [
  {
    id: 'film-documentary',
    icon: Clapperboard,
    title: 'Film & Documentary Production',
    subtitle: 'Human-interest & impact narratives',
    text: 'Documentaries, impact films, institutional videos and human-interest stories that capture real people, real work and real transformation — strong visual storytelling paired with clear messaging, from first concept through final delivery.',
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
    text: 'Shaping the look, feel, tone and message of a production. From concept development to final delivery, I guide the creative process so every project is purposeful, polished and on-brand.',
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
    text: 'Simplifying complex ideas into clear communication assets for stakeholders, donors, partners, employees and the public — so the message lands the way it was meant to.',
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
    title: 'Live Event Production',
    subtitle: 'Broadcast setups for high-stakes stages',
    text: 'Multi-camera coverage, livestreaming, screen content, interviews and post-event packaging for conferences, AGMs, launches, forums and hybrid events.',
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
    text: 'Helping brands communicate who they are, what they do and why it matters through films, campaigns, testimonials and visual identity-driven content.',
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

