import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const photoFolder = '/images/My%20Story%20Photos%20/';

type StoryParagraph = string | { heading: string };

const chapters: {
  id: string;
  title: string;
  subtitle: string;
  photos: string[];
  alt: string;
  paragraphs: StoryParagraph[];
}[] = [
  {
    id: 'growing-up',
    title: 'Growing Up',
    subtitle: 'Bungoma, family, and the people who shaped me.',
    photos: ['my story 1.jpg', 'students power.jpg'],
    alt: 'An early photograph from Dennis Machio\'s story',
    paragraphs: [
      'Growing up in Bungoma, I was raised in a beautiful family of twelve in a small but fast growing , close-knit town where most people knew one another. As Bungoma slowly grew and became busier, that sense of community remained a defining part of my childhood. It was a place where relationships mattered, where everyone seemed connected, and where your journey was often shaped by the people around you.',
      'I began my education at Moi Primary School, right in the heart of Bungoma town, before joining Friends School Kamusinga.',
      'At Kamusinga, I discovered that my greatest lessons were not always found inside the classroom. I was drawn to extracurricular activities, particularly sport and music. Football became more than a game, music became part of me, it became a space where I could express myself, compete, dream and discover what I was capable of.',
    ],
  },
  {
    id: 'football-years',
    title: 'The Football Years',
    subtitle: 'A goalkeeper with another future waiting.',
    photos: ['best of western_.jpg', 'students power 2.jpg'],
    alt: 'A photograph from Dennis Machio\'s years in sport',
    paragraphs: [
      { heading: 'The goalkeeper' },
      'During my years at Kamusinga, I was fortunate to receive the kind of nurturing that helped me develop into one of the promising young footballers in Western Kenya at the time.',
      'I became known as one of the region\'s top goalkeepers, earning the distinction of Magharibi Number One.',
      'Then came an opportunity that could have changed everything.',
      'I was selected for the Kenya Under-17 national team. But my school principal at the time, Christopher Kahemba, would not allow me to leave school to join the national team camp.',
      'I was effectively put under school arrest, no travelling, no going home, not even the usual half-term break.',
      'Looking back, it was one of those moments that seemed frustrating at the time but became part of the larger story of my life.',
      { heading: 'Football almost became my career' },
      'I still remember the day I sat for my final examinations.',
      'While I was completing my last paper, several of Kenya\'s established football clubs were already interested in signing me. Nzoia Sugar, Mumias Sugar, AFC Leopards and Utalii were among the clubs showing interest.',
      'Football was a serious career path in those days. It provided employment and opened doors for young people with talent.',
      'I eventually joined Nzoia Sugar FC, beginning what would become my short professional football career.',
      'But life had another direction waiting for me.',
    ],
  },
  {
    id: 'finding-the-camera',
    title: 'Finding the Camera',
    subtitle: 'Trading the goalposts for a new way of seeing.',
    photos: ['My First camera_.jpg', '510524444_10237093903029941_7199984166105602043_n.jpg'],
    alt: 'Dennis Machio with his first camera',
    paragraphs: [
      { heading: 'From football to creativity' },
      'In 2001, I joined Moi University.',
      'It was a significant decision. I chose to step away from my football career and pursue my first academic passion, Creative Arts, Theatre and Film Studies.',
      'I graduated in 2006.',
      'At university, however, sport remained part of who I was. My passion for sports and student leadership led to my election as the Sports Director of the Moi University Students\' Association, popularly known as the SGC.',
      'It was another lesson in leadership, teamwork and working with people, skills that would later become important in my career in media and production.',
      { heading: 'Discovering the world of media' },
      'After university, my first formal employment opportunity came through a newspaper advertisement.',
      'It took me to Mombasa, where I joined Bombolulu Workshops and Cultural Centre and eventually became its Creative Director.',
      'But I was hungry for more technical knowledge.',
      'I wanted to understand not just creativity, but the technical craft behind television and film production.',
      'That desire took me back to school.',
      'I was fortunate to receive an Al Jazeera Network scholarship to study at the Mohammed Amin Foundation, where I gained hands-on technical training in television and film production.',
      'That experience helped bridge the gap between my creative imagination and the technical skills needed to bring ideas to life.',
    ],
  },
  {
    id: 'building-dencast',
    title: 'Building Dencast',
    subtitle: 'Turning curiosity into a creative enterprise.',
    photos: ['dennis machio option 3.png', 'my story 4.jpg', '650112637_10241010127413103_3941026414670921703_n.jpg'],
    alt: 'Dennis Machio today',
    paragraphs: [
      { heading: 'The field became my classroom' },
      'Since graduating, one thing has become increasingly clear to me:',
      'The field is the best classroom.',
      'For nearly two decades, I have continued to learn by doing—producing, filming, editing, directing, documenting, experimenting and, sometimes, getting things wrong and starting again.',
      'My journey began in sports media, where I worked as a lead editor at Michezo Afrika, a leading sports news platform.',
      'Working in sports journalism and content production gave me an opportunity to combine two worlds that had always been part of my life: sport and storytelling.',
      'Together with the team at Michezo Afrika, we built a strong sports content platform and established ourselves among Kenya\'s leading sports content aggregators, earning multiple industry recognitions over the years.',
      { heading: 'Building Dencast Global' },
      'The journey eventually led me to establish Dencast Global, a production and creative media agency built around my belief that every story deserves to be told well.',
      'Today, my work spans film, documentaries, television, live events, photography, digital content, creative direction and storytelling.',
      'I have had the privilege of working across different sectors, meeting extraordinary people and documenting stories from different parts of Kenya and beyond.',
      'Every project has taught me something.',
      'Every client has challenged me differently.',
      'Every production has added another layer to my understanding of the craft.',
      { heading: 'Still learning. Still creating.' },
      'When I look back, my journey doesn\'t feel like a straight line.',
      'It has been a series of unexpected turns, from a young goalkeeper in Bungoma, to a university student studying  Creative Arts and film, to a sports leader, creative director, editor, filmmaker and entrepreneur.',
      'Football taught me discipline and teamwork.',
      'University taught me leadership.',
      'Media taught me curiosity.',
      'The field taught me resilience.',
      'And creativity taught me that there is always another way to tell a story.',
      'I have learned, unlearned and learned again.',
      'I have reinvented myself many times and I continue to do so.',
    ],
  },
];

function StoryPhotos({ photos, alt }: { photos: string[]; alt: string }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches || photos.length < 2) return undefined;

    const interval = window.setInterval(() => {
      const rail = railRef.current;
      if (!rail) return;
      const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 1;
      rail.scrollTo({
        left: atEnd ? 0 : rail.scrollLeft + rail.clientWidth,
        behavior: 'smooth',
      });
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused, photos.length]);

  const move = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };

  return (
    <div className="my-story-chapter-photo" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="my-story-photo-rail" ref={railRef} aria-label={alt}>
        {photos.map((photo, index) => (
          <img
            className={photo === 'My First camera_.jpg' ? 'my-story-camera-photo' : undefined}
            key={photo}
            src={`${photoFolder}${encodeURIComponent(photo)}`}
            alt={`${alt}, photograph ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>
      <div className="my-story-photo-controls">
        <button type="button" onClick={() => move(-1)} aria-label={`Previous ${alt.toLowerCase()} photo`} title="Previous photo"><ChevronLeft size={18} /></button>
        <button type="button" onClick={() => move(1)} aria-label={`Next ${alt.toLowerCase()} photo`} title="Next photo"><ChevronRight size={18} /></button>
      </div>
    </div>
  );
}

function MyStoryPage() {
  return (
    <>
      <section className="my-story-hero section-pad">
        <div className="my-story-hero-copy">
          <p className="section-kicker">The Person Behind The Camera</p>
          <h1>My <em>Story.</em></h1>
          <p>Before the cameras, there was a boy from Bungoma. Before the companies, there was football. Before the stories became my profession, I was simply fascinated by people and the lives they lived.</p>
        </div>
        <img src={`${photoFolder}dennis%20machio%20option%203.png`} alt="Dennis Machio" />
      </section>
      <nav className="my-story-chapter-nav section-pad" aria-label="My Story chapters">
        {chapters.map((chapter, index) => (
          <a key={chapter.id} href={`#${chapter.id}`}><span>0{index + 1}</span> {chapter.title}</a>
        ))}
      </nav>
      <div className="my-story-chapters">
        {chapters.map((chapter, index) => (
          <section className="my-story-chapter section-pad" id={chapter.id} key={chapter.id} aria-labelledby={`${chapter.id}-title`}>
            <div className="my-story-chapter-copy">
              <span className="my-story-chapter-number">0{index + 1} / 04</span>
              <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
              <p className="my-story-chapter-subtitle">{chapter.subtitle}</p>
              {chapter.paragraphs.map((paragraph, paragraphIndex) =>
                typeof paragraph === 'string' ? (
                  <p key={paragraphIndex}>{paragraph}</p>
                ) : (
                  <p className="my-story-chapter-subheading" key={paragraphIndex}><strong>{paragraph.heading}</strong></p>
                )
              )}
            </div>
            <StoryPhotos photos={chapter.photos} alt={chapter.alt} />
          </section>
        ))}
      </div>
      <section className="my-story-closing section-pad">
        <p>This is my journey: from the football fields of Bungoma to the world of storytelling, from chasing a ball to capturing moments, telling stories and building creative possibilities.</p>
        <h2>And I believe the best chapters are still being written.</h2>
      </section>
    </>
  );
}

export default MyStoryPage;