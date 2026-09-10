export type Project = {
  id: string;
  index: string;
  title: string;
  client: string;
  year: string;
  services: string[];
  image: string;
  brief: string;
  approach: string;
  production: string;
  result: string;
  role: string;
};

export const projects: Project[] = [
  {
    id: 'eu-kenya',
    index: '01',
    title: 'EU–Kenya Business Forum',
    client: 'European Union – Kenya',
    year: '2025',
    services: ['Media Production', 'Multi-camera Coverage', 'Post-production'],
    image:
      'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=1920',
    brief:
      'A two-day international conference on digitalising trade between the European Union and Kenya, requiring on-the-ground media coverage that could capture both the scale of the forum and the substance of the conversations.',
    approach:
      'Strategy first — mapping the key moments, speakers and bilateral sessions before a single camera rolled, so coverage served both live dissemination and a lasting record of the dialogue.',
    production:
      'Multi-camera coverage across plenary and breakout sessions, interviews with delegates, and real-time editing to turn around same-day highlight packages from the venue floor.',
    result:
      'A complete visual record of the forum — from opening remarks to closing communiqué — delivered as shareable packages that extended the conversation far beyond the room.',
    role: 'Media Coverage',
  },
  {
    id: 'amakovewala',
    index: '02',
    title: 'The Amakovewala Show',
    client: 'Regional Talk Format',
    year: '2024',
    services: ['TV Production', 'Multi-camera', 'Post-production'],
    image:
      'https://images.pexels.com/photos/18357250/pexels-photo-18357250.jpeg?auto=compress&cs=tinysrgb&w=1920',
    brief:
      'Studio and red-carpet production for one of the region\'s talk formats — a format that lives or dies on the quality of its lighting, coverage and pacing.',
    approach:
      'Designing the look and feel of the set and red-carpet moments as one continuous visual language, so the transition from arrival to interview felt seamless to the viewer.',
    production:
      'Full multi-camera coverage in studio and on the red carpet, lighting design, and complete post-production packaging — from set to screen, every frame art-directed.',
    result:
      'A polished, broadcast-ready package that elevated the format and gave the show a distinct visual identity audiences could recognise instantly.',
    role: 'Producer / DOP',
  },
  {
    id: 'agm',
    index: '03',
    title: 'Corporate AGM Broadcast',
    client: 'Listed Company',
    year: '2024',
    services: ['Live Production', 'Broadcast', 'Streaming'],
    image:
      'https://images.pexels.com/photos/22669860/pexels-photo-22669860.jpeg?auto=compress&cs=tinysrgb&w=1920',
    brief:
      'A listed company\'s Annual General Meeting, streamed to shareholders in real time — a production where reliability, clarity and precision are non-negotiable.',
    approach:
      'Engineering the broadcast as a single uninterrupted experience — every camera, screen and audio source planned and rehearsed so the live stream felt effortless to the viewer.',
    production:
      'Full live broadcast setup with on-screen hosting, multi-camera coverage of the floor and stage, real-time graphics, and redundant streaming to ensure zero downtime.',
    result:
      'Shareholders joined the AGM from anywhere, saw and heard every resolution clearly, and experienced the meeting as if they were in the room.',
    role: 'Live Broadcast',
  },
];

export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    id: 'film',
    index: '01',
    title: 'Film & Documentary Production',
    description:
      'Documentaries, impact films, institutional videos and human-interest stories that capture real people, real work and real transformation — strong visual storytelling paired with clear messaging, from first concept through final delivery.',
    image:
      'https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'creative',
    index: '02',
    title: 'Creative Direction',
    description:
      'Shaping the look, feel, tone and message of a production. From concept development to final delivery, guiding the creative process so every project is purposeful, polished and on-brand.',
    image:
      'https://images.pexels.com/photos/4123586/pexels-photo-4123586.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'comms',
    index: '03',
    title: 'Strategic Communications',
    description:
      'Simplifying complex ideas into clear communication assets for stakeholders, donors, partners, employees and the public — so the message lands the way it was meant to.',
    image:
      'https://images.pexels.com/photos/8345975/pexels-photo-8345975.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'live',
    index: '04',
    title: 'Live Event Production',
    description:
      'Multi-camera coverage, livestreaming, screen content, interviews and post-event packaging for conferences, AGMs, launches, forums and hybrid events.',
    image:
      'https://images.pexels.com/photos/33925166/pexels-photo-33925166.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'brand',
    index: '05',
    title: 'Brand Storytelling',
    description:
      'Helping brands communicate who they are, what they do and why it matters through films, campaigns, testimonials and visual identity-driven content.',
    image:
      'https://images.pexels.com/photos/2335052/pexels-photo-2335052.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

export const journey = [
  {
    year: '2021',
    title: 'Early production work',
    detail:
      'Built a foundation in camera operation, editing and live multi-camera broadcast across corporate and media assignments.',
    image:
      'https://images.pexels.com/photos/7513459/pexels-photo-7513459.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    year: '2022',
    title: 'Founded Dencast Global Limited',
    detail:
      'Built a creative production and communications company serving organizations across Kenya and the wider region.',
    image:
      'https://images.pexels.com/photos/19102538/pexels-photo-19102538.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    year: '2022',
    title: 'International & institutional productions',
    detail:
      'Led production and live coverage for forums including the EU–Kenya Business Forum, corporate AGMs, and multi-day conferences.',
    image:
      'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    year: '2022',
    title: 'Entertainment & talk formats',
    detail:
      'Produced and directed studio and red-carpet coverage for regional talk show formats, including The Amakovewala Show.',
    image:
      'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    year: '2022',
    title: 'Lead Editor, Michezo Afrika',
    detail:
      'Took on sports journalism and multimedia storytelling, connecting athletes, teams and communities across Africa.',
    image:
      'https://images.pexels.com/photos/9750839/pexels-photo-9750839.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];
