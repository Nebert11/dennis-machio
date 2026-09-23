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
  GalleryPhoto,
  GalleryVideo,
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
  storyDetail: '/images/portfolio/9.jpg',
  creative: '/images/portfolio/creative.png',
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
    image: '/images/Work%20that%20extends/Dencast%20Global.jpg',
    badge: 'Creative Production & Communications',
    description: 'Your creative production and communications company.',
  },
  {
    id: 'michezo-afrika',
    title: 'Michezo Afrika',
    url: 'https://www.michezoafrika.com/',
    image: '/images/Work%20that%20extends/Michezo%20Afrika.jpg',
    badge: 'Sports Media Platform',
    description: 'Your sports media platform focused on telling authentic African sports stories.',
  },
  {
    id: 'magharibi-michezo-awards',
    title: 'Magharibi Michezo Awards',
    image: '/images/Work%20that%20extends/Magharibi%20Michezo%20Awards.jpg',
    badge: 'Sports Recognition',
    description:
      'The Magharibi Michezo Awards (MMA) is a premier sporting recognition initiative celebrating the talent, achievements, and enduring contributions of athletes, coaches, officials, and sports stakeholders across Western Kenya.',
  },
  {
    id: 'magharibi-festival',
    title: 'Magharibi Festival',
    image: '/images/Work%20that%20extends/Magharibi%20Festival.jpg',
    badge: 'Mentorship & Creative Development',
    description:
      "The Magharibi Festival is a celebration of the rich talent, culture, and creative identity of Western Kenya. The festival brings together music, sports, and cultural experiences from Bungoma, Busia, Kakamega, Vihiga, Trans-Nzoia, parts of Uganda, and the Nyanza region.",
  },
  {
    id: 'music-talent-development',
    title: 'Music & Talent Development',
    image: '/images/MUSIC%20DEVELOPMENT/051A3860.jpg',
    badge: 'Creative Development',
    description:
      'Music has always been part of my creative journey. I support and nurture emerging talent by creating opportunities for artists to develop their craft, tell authentic stories, and build sustainable creative careers.',
  },
  {
    id: 'mentorship',
    title: 'Mentorship',
    image: '/images/Work%20that%20extends/Mentorship%20and%20training.jpg',
    badge: 'Creative Mentorship',
    description:
      'For over 15 years, I have dedicated my journey to supporting, mentoring, and creating opportunities for emerging talent across the creative and sporting industries. From writers and music artists to dancers, sports journalists, creative technical crews, and production teams, I have believed in the power of young people and their ability to transform their passion into purpose.',
  },
  {
    id: 'live-recordings',
    title: 'My Live Recordings',
    image: '/images/MUSIC%20DEVELOPMENT/card_image.jpg',
    badge: 'Live Worship Recordings',
    description:
      "Partnered with the Bungoma-based Holygate Worship team to produce their first live recording, Rehoboth. Filmed and produced at Holygate Church in Bungoma, the project captured the team's worship, musical expression, and passion for sharing inspiring songs through a professionally produced live recording.",
  },
];

export const productionEvents: ProductionEvent[] = [
  {
    id: 'sasini-corporate-storytelling',
    title: 'Sasini',
    role: 'Corporate Storytelling',
    type: 'Corporate Storytelling',
    description:
      'Helping Sasini translate its legacy, people, operations and sustainability work into compelling visual stories that strengthen its corporate identity and connect its impact with wider audiences.',
    image: '/images/PrODUCTION%20AND%20EVENTS/Sasini.jpg',
  },
  {
    id: 'elf-africa-impact-storytelling',
    title: 'ELF- Africa',
    role: 'Impact Storytelling',
    type: 'Impact Storytelling',
    description:
      'Helping ELF- Africa document and communicate its programmes, people and impact through authentic visual stories that bring its work closer to communities, partners and audiences.',
    image: images.elf,
  },
  {
    id: 'rhnk-conference-production',
    title: 'RHNK',
    role: 'Conference Production & Management',
    type: 'Conference Production & Management',
    description:
      'Providing end-to-end production and conference management support, from planning and technical coordination to multi-camera coverage, livestreaming, photography and post-production—ensuring the conference runs smoothly and its key moments and conversations are captured professionally.',
    image: '/images/PrODUCTION%20AND%20EVENTS/RHNK.jpeg',
  },
  {
    id: 'eu-kenya-forum',
    title: 'EU–Kenya Business Forum',
    role: 'Media Coverage',
    type: 'International Conference',
    description:
      'On-the-ground media coverage for the EU–Kenya Business Forum 2025, a two-day international conference on digitalising trade',
    year: '2025',
    image: '/images/PrODUCTION%20AND%20EVENTS/European%20Union.jpeg',
  },
  {
    id: 'corporate-live-broadcasts',
    title: 'Corporate LIVE Broadcasts',
    role: 'Live Broadcast & On-Screen Hosting',
    type: 'Corporate Live Broadcasts',
    description: 'Full live broadcast setup and on-screen hosting for a variety of different clients drawn from across Africa.',
    image: images.sasiniConference,
  },
  {
    id: 'amakovewala',
    title: 'The Amakove Wala Show',
    role: 'Producer / DOP',
    type: 'Studio & Red-Carpet Production',
    description:
      'Studio and red-carpet production for one of the region\'s prominent talk formats — lighting, multi-camera coverage and full post-production packaging from set to screen.',
    year: '2024 - Present',
    image: images.amakove,
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
    id: 'why-strong-visual-stories-begin-with-listening',
    title: 'Why Strong Visual Stories Begin With Listening',
    byline: 'By Dennis Machio',
    image: images.portraitThree,
    content: [
      'The strongest visual work does not begin when the camera starts rolling. It begins with listening, understanding context and finding the human truth behind the story.',
      'A brief may ask for a corporate film, documentary or campaign video. But beneath that request is often something deeper,  a story of resilience, ambition, transformation, struggle or hope.',
      'Listening helps us discover that story.',
      'Context gives the images meaning. A beautiful shot can capture attention, but understanding the people, place and circumstances behind it is what makes an audience care.',
      'And at the centre of every powerful story is a human truth.',
      'It may be found in a farmer describing what a harvest means to their family and community , an athlete reflecting on years of sacrifice, or an employee looking back on decades of building something bigger than themselves.',
      'These moments cannot always be scripted. They have to be observed, respected and captured honestly.',
      'Technology will continue to evolve, but great storytelling will always require curiosity, empathy and judgment.',
      'For me, the question is not simply “What should we shoot?”',
      'It is:',
      '“What are we trying to make people understand, feel and remember?”',
      'When we listen first, understand the context and find the human truth, the camera becomes more than a recording tool.',
      'It becomes a way of seeing, understanding and telling stories that matter.',
    ],
  },
  {
    id: 'great-video-begins-with-great-sound',
    title: 'Great Video Begins With Great Sound',
    byline: 'By Dennis Machio',
    image: images.projDencast,
    content: [
      'When we talk about video production, we often focus on cameras, lenses, lighting, colour grading and beautiful images. But there is one element that is frequently underestimated: Sound.',
      'I often tell clients that great pictures alone do not necessarily make a great video. Sound is what gives pictures meaning, emotion and clarity.',
      'Poor audio can undermine otherwise excellent visuals, while clear, well-recorded sound can make even simple footage feel professional. Research and production guidance consistently emphasise the importance of good audio in video.',
      "When investing in a video production and hiring a crew to tell your story, therefore, don't only ask about the cameras they will use.",
      'Ask how they will capture your sound.',
      'Will they use proper microphones?',
      'How will they handle background noise?',
      'Will interviews be recorded separately?',
      'How will they capture the natural sounds of the environment?',
      'These questions matter.',
      'A beautiful interview with poor, muffled or noisy audio can quickly lose its impact. But a strong voice, authentic ambience and carefully designed sound can draw an audience deeper into a story.',
      'Think about radio.',
      "You don't need to see the presenter to connect with what they are saying. The voice itself carries the story.",
      "And radio remains one of Kenya's most important media platforms. The Communications Authority of Kenya says sound broadcasting reaches about 98% of Kenyan homes, demonstrating the extraordinary reach of audio in our everyday lives.",
      'That should remind us of something important:',
      "We don't only watch stories. We listen to them.",
      'So the next time you commission a documentary, corporate film, interview or campaign video, look beyond the camera specifications.',
      'Ask about the sound.',
      'Because great visuals may make people stop scrolling — but great sound can make them stay, listen and feel.',
      'Now you know.',
    ],
  },
  {
    id: 'what-makes-a-story-last',
    title: 'What Makes a Story Last',
    subtitle: 'A reflection on resilience, creative discipline and building work with a life beyond delivery.',
    byline: 'By Dennis Machio',
    image: images.euKenya,
    content: [
      'A story should be more than something completed, delivered and forgotten.',
      'For me, the real measure of creative work is what remains after the production is over. Does it still communicate? Does it still move people? Does it still have meaning years later?',
      'Creating work that lasts requires more than technical ability. It requires resilience, discipline and patience.',
      'Every production comes with challenges, changing briefs, tight deadlines, limited resources and unexpected moments. The discipline is learning to keep creating, solving problems and protecting the quality of the story despite those pressures.',
      'Resilience keeps you moving. Creative discipline keeps you focused. But purpose is what gives the work longevity.',
      'I have learned that the strongest stories are often built around something human: a struggle, a dream, a journey, a lesson or a moment of transformation.',
      'When that truth is captured honestly, the work can outlive the campaign, the event or the original brief.',
      'That is what I continue to pursue in every production, not simply content that is delivered, but stories that have a life beyond delivery.',
      'Because ultimately, the work we create becomes part of our legacy.',
      'And the best stories are the ones people continue to remember.',
    ],
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
    year: '2001–2006',
    title: 'Moi University',
    tag: 'Bachelor of Arts in Creative Arts & Film Studies',
    description: 'Built the academic foundation in creative arts, film, storytelling and visual communication.',
  },
  {
    year: '2008–2009',
    title: 'Mohammed Amin Foundation, Nairobi',
    tag: 'Postgraduate Diploma in Television & Film Production',
    description: 'Moved from theory into hands-on television and film production, developing practical skills in production, camera work and editing.',
  },
  {
    year: '2009',
    title: 'Al Jazeera Africa Bureau',
    tag: 'Internship — Nairobi',
    description: 'Gained newsroom and broadcast experience within an international media environment, strengthening my understanding of journalism, production and African storytelling.',
  },
  {
    year: '2010 – Present',
    title: 'Michezo Afrika',
    tag: 'The Beginning of a Digital Sports Storytelling Journey',
    description: 'Helped build Michezo Afrika into an award-winning sports media platform, combining journalism, photography, video and digital storytelling to connect African sport with its audiences.',
  },
  {
    year: '2015–2020',
    title: 'Bungoma Pictures',
    tag: 'Building a Production Identity',
    description: 'Founded Bungoma Pictures with a vision to tell stories from Africa and share them with the world. This period expanded my experience across documentary production, corporate storytelling, events and creative content.',
  },
  {
    year: '2020–Present',
    title: 'Dencast Global',
    tag: 'From Production to Creative Enterprise',
    description: 'Founded Dencast Global Limited, a production and creative media agency working with organisations, brands and institutions across Kenya and the region. The work spans documentaries, brand films, corporate storytelling, live events, livestreaming and digital campaigns.',
  },
  {
    year: '2020–Present',
    title: 'Expanding the Production Footprint',
    tag: 'Studio, Entertainment & Red-Carpet Production',
    description: 'Produced and directed studio, entertainment and red-carpet content for regional formats, including The Amakove Wala Show, with a strong focus on visual production, lighting, editing and broadcast-quality presentation.',
  },
  {
    year: 'Today',
    title: 'More than a decade of storytelling.',
    tag: 'A Continuing Storytelling Journey',
    description: 'From the university classroom to newsrooms, sports media, independent production and building a creative agency, the journey has always been about one thing: using visual storytelling to make ideas matter.',
  },
];

export const galleryVideos: GalleryVideo[] = [
  {
    id: 'gallery-video-1',
    title: 'Sasini PLC 2025 Sustainability Report Launch',
    poster: images.sasiniConference,
    url: 'https://www.youtube.com/watch?v=QnnVSv48PIM&t=120s',
  },
  {
    id: 'gallery-video-2',
    title: 'HARRY RICHIE OFFICIAL - CONFIRM OFFICIAL VIDEO',
    poster: images.portrait,
    url: 'https://www.youtube.com/watch?v=Rloz0hZFd-o&list=RDRloz0hZFd-o&start_radio=1',
  },
  {
    id: 'gallery-video-3',
    title: 'Vanissy Uwase - Gharama Ya Wokovu (Official Music Video)',
    poster: images.portraitTwo,
    url: 'https://www.youtube.com/watch?v=LOL6DHHFLmE&list=RDLOL6DHHFLmE&start_radio=1',
  },
  {
    id: 'gallery-video-4',
    title: 'STEVE KAY - Mbe Omukhasi (Official Video)',
    poster: images.portraitThree,
    url: 'https://www.youtube.com/watch?v=PJ4HC7318h4&list=RDPJ4HC7318h4&start_radio=1',
  },
  {
    id: 'gallery-video-5',
    title: 'Sasini PLC Sustainability Documentary 2023',
    poster: images.sasiniConference,
    url: 'https://www.youtube.com/watch?v=WDHIUaR6i-c&t=12s',
  },
  {
    id: 'gallery-video-6',
    title: 'ELF-Africa in 60 Seconds',
    poster: images.elf,
    url: 'https://www.youtube.com/watch?v=A9BIICFfEL4',
  },
  {
    id: 'gallery-video-7',
    title: 'What Leadership Looked Like in 2025 | ELF-Africa Annual Report',
    poster: images.elf,
    url: 'https://www.youtube.com/watch?v=EgTs8_Bm_RQ&t=23s',
  },
  {
    id: 'gallery-video-8',
    title: 'EU Business Forum Promo Video',
    poster: images.euKenya,
    url: 'https://www.youtube.com/watch?v=WIWK8EugC1c&t=4s',
  },
  {
    id: 'gallery-video-9',
    title: 'RHNK Pan-African Conference 2025 Highlights',
    poster: images.euKenya,
    url: 'https://www.youtube.com/watch?v=_0hFwZtRoqU',
  },
  {
    id: 'gallery-video-10',
    title: 'THE AMAKOVE WALA SHOW 1 - Divorce and Separation',
    poster: images.amakove,
    url: 'https://www.youtube.com/watch?v=D1QvoiMpK-Q',
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  { id: 'gallery-photo-1', title: 'Production portrait', image: images.portrait },
  { id: 'gallery-photo-2', title: 'Creative direction', image: images.creative },
  { id: 'gallery-photo-3', title: 'Studio production', image: images.amakove },
  { id: 'gallery-photo-4', title: 'Conference production', image: images.euKenya },
  { id: 'gallery-photo-5', title: 'Corporate storytelling', image: images.sasiniConference },
  { id: 'gallery-photo-6', title: 'Impact storytelling', image: images.elf },
];

