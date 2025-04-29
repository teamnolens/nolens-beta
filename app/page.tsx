'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

// Hero carousel images (diverse art)
const heroImages = [
  '/images/hero-art-1.png', // Placeholder for a classic artwork
  '/images/hero-art-2.png',
  '/images/hero-art-3.png',
];

// Works (static grid)
const worksImages = [
  { src: '/images/work-1.png', title: 'Artwork 1', artist: 'Artist 1' },
  { src: '/images/work-2.png', title: 'Artwork 2', artist: 'Artist 2' },
  { src: '/images/work-3.png', title: 'Artwork 3', artist: 'Artist 3' },
  { src: '/images/work-4.png', title: 'Artwork 4', artist: 'Artist 4' },
  { src: '/images/work-5.png', title: 'Artwork 5', artist: 'Artist 5' },
  { src: '/images/work-6.png', title: 'Artwork 6', artist: 'Artist 6' },
];

// Special Exhibitions (carousel, vertically long rectangle)
const exhibitions = [
  { src: '/images/exhibition-1.png', title: 'Timeless Classics', host: 'Nolens DAO' },
  { src: '/images/exhibition-2.png', title: 'Modern Masters', host: 'Art Collective' },
  { src: '/images/exhibition-3.png', title: 'Abstract Visions', host: 'Gallery X' },
];

// Meet the Artists (scrollable section)
const artists = [
  {
    name: 'Kael Vortex',
    work: '/images/work-artist-1.png',
    bio: 'Kael Vortex is a digital artist and architect based in Berlin, known for their minimalist geometric compositions that explore the intersection of technology and human perception. With a background in computational design, Kael uses algorithms and generative processes to create works that balance order and chaos, often reflecting on the future of human-machine collaboration. Their pieces have been exhibited in virtual galleries across Web3 platforms, including Decentraland, and have been minted as NFTs on Ethereum. Kael’s art challenges viewers to find harmony in the asymmetry of a rapidly digitizing world, blending Bauhaus principles with futuristic aesthetics. (Note: This artist profile and artwork are AI-generated placeholders for demonstration purposes and will be replaced with real content.)',
    philosophy: '"I believe art should be a blueprint for the future—a space where order and chaos coexist in harmony."',
  },
  {
    name: 'Zephyr Kane',
    work: '/images/work-artist-2.png',
    bio: 'Zephyr Kane is a New York-based artist whose neo-expressionist works delve into the raw, unfiltered emotions of modern life. Drawing inspiration from the gritty energy of urban environments and the legacy of artists like Jean-Michel Basquiat, Zephyr uses bold colors, chaotic lines, and fragmented forms to explore themes of mental health, identity, and societal pressure. Their art has been showcased in underground NFT marketplaces and Web3 art collectives, where they’ve gained a cult following for their emotionally charged pieces. Zephyr often incorporates text and symbols into their work, creating a visual language that speaks to the struggles of the digital age. (Note: This artist profile and artwork are AI-generated placeholders for demonstration purposes and will be replaced with real content.)',
    philosophy: '"Art is a scream—a way to externalize the chaos within."',
  },
  {
    name: 'Amara Solaris',
    work: '/images/work-artist-3.png',
    bio: 'Amara Solaris is a visionary Afrofuturist artist from Lagos, Nigeria, whose work celebrates African heritage through a cosmic, speculative lens. Blending traditional African aesthetics with futuristic technology, Amara creates vibrant, otherworldly pieces that imagine a future where African culture thrives in interstellar dimensions. Their art often features bioluminescent elements, holographic motifs, and intricate tribal patterns, reflecting a deep connection to ancestry while embracing the possibilities of Web3 and the metaverse. Amara’s works have been featured in virtual exhibitions on platforms like The Sandbox, and they are an active member of several Web3 art DAOs. (Note: This artist profile and artwork are AI-generated placeholders for demonstration purposes and will be replaced with real content.)',
    philosophy: '"My art is a bridge between the ancestral and the cosmic—a celebration of African heritage reimagined in a boundless future."',
  },
];

// Moments (carousel, 3 per view)
const moments = [
  { src: '/images/moment-1.png', caption: 'Zoom Meeting (AI-generated placeholder)' },
  { src: '/images/moment-2.png', caption: 'AMA session with creators (AI-generated placeholder)' },
  { src: '/images/moment-3.png', caption: 'Celebration on Decentraland (AI-generated placeholder)' },
];

export default function Home() {
  // Custom carousel state for Hero
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroSlidesToShow = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) =>
        prevIndex === heroImages.length - heroSlidesToShow ? 0 : prevIndex + 1
      );
    }, 5000); // Autoplay every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleHeroDotClick = (index: number) => {
    setCurrentHeroIndex(index);
  };

  // Custom carousel state for Special Exhibitions
  const [currentExhibitionIndex, setCurrentExhibitionIndex] = useState(0);
  const exhibitionSlidesToShow = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExhibitionIndex((prevIndex) =>
        prevIndex === exhibitions.length - exhibitionSlidesToShow ? 0 : prevIndex + 1
      );
    }, 3000); // Autoplay every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleExhibitionDotClick = (index: number) => {
    setCurrentExhibitionIndex(index);
  };

  // Custom carousel state for Moments
  const [currentMomentIndex, setCurrentMomentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default: 3 slides per view on desktop

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMomentIndex((prevIndex) =>
        prevIndex === moments.length - slidesToShow ? 0 : prevIndex + 1
      );
    }, 3000); // Autoplay every 3 seconds
    return () => clearInterval(interval);
  }, [slidesToShow]);

  const handleMomentDotClick = (index: number) => {
    setCurrentMomentIndex(index);
  };

  // Responsive slides to show
  const updateSlidesToShow = () => {
    if (typeof window === 'undefined') return 3; // SSR fallback
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(updateSlidesToShow());
    };
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className="font-poppins">Nolens</h1>
        <div className={styles.headerActions}>
          <Link href="/dashboard" className={styles.headerLink}>Dashboard</Link>
          <button className={styles.profileButton}>Connect Wallet</button>
        </div>
      </header>
      <main className={styles.main}>
        {/* Disclaimer Section */}
        <section className={styles.disclaimer}>
          <h2 className="font-poppins">Disclaimer: AI-Generated Content</h2>
          <p className="font-roboto">
            The artists, artworks, and images displayed on this website are AI-generated placeholders used for development and demonstration purposes. They do not represent real artists or artworks. We are currently in the beta phase of Nolens, and these placeholders allow us to test and refine the platform’s functionality, design, and user experience. We are actively working to onboard real creators and will replace this content with authentic artist contributions before our official launch. Thank you for your understanding as we build Nolens!
          </p>
        </section>

        {/* Hero Section: Static Text Overlay on Carousel */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.heroCarousel}>
            <div
              className={styles.heroTrack}
              style={{
                transform: `translateX(-${currentHeroIndex * (100 / heroSlidesToShow)}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {heroImages.map((image, idx) => (
                <div
                  key={idx}
                  className={styles.heroSlide}
                  style={{ flex: `0 0 ${100 / heroSlidesToShow}%` }}
                >
                  <Image
                    src={image}
                    alt={`Hero Art ${idx + 1} (AI-generated placeholder)`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.heroImage}
                    onError={(e) => {
                      console.log(`Failed to load hero image: ${image}`);
                      e.currentTarget.src = 'https://picsum.photos/1920/1080?random=' + (idx + 1); // Fallback to placeholder
                    }}
                    priority // Ensure all images load immediately
                  />
                  <div className={styles.heroOverlay} />
                </div>
              ))}
            </div>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="font-poppins">Weave Art with Narratives at Nolens</h2>
              <div className={styles.heroButtons}>
                <Link href="/gallery" className={styles.ctaButton}>Discover Art</Link>
                <Link href="/community" className={styles.ctaButtonSecondary}>Join the DAO</Link>
              </div>
            </motion.div>
            <div className={styles.heroDots}>
              {heroImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.heroDot} ${currentHeroIndex === idx ? styles.activeDot : ''}`}
                  onClick={() => handleHeroDotClick(idx)}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Works Section (Static Grid, 2-3 per Row) */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-poppins">Works</h3>
          <p className="font-roboto">Explore community favorites curated from the Nolens gallery (AI-generated placeholders).</p>
          <div className={styles.worksGrid}>
            {worksImages.map((work, idx) => (
              <motion.div
                key={idx}
                className={styles.workCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                <div className={styles.workImageWrapper}>
                  <Image
                    src={work.src}
                    alt={`${work.title} (AI-generated placeholder)`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.workImage}
                    onError={() => console.log(`Failed to load image: ${work.src}`)}
                  />
                  <div className={styles.workOverlay}>
                    <p className="font-roboto">View Details</p>
                  </div>
                </div>
                <h4 className="font-poppins">{work.title}</h4>
                <p className="font-roboto">By {work.artist} (AI-generated)</p>
              </motion.div>
            ))}
          </div>
          <Link href="/gallery" className={styles.sectionLink}>View More in Gallery</Link>
        </motion.section>

        {/* Special Exhibitions Section (Custom Carousel) */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-poppins">Special Exhibitions</h3>
          <p className="font-roboto">Discover events curated by the Nolens DAO, art collectives, and galleries (AI-generated placeholders).</p>
          <div className={styles.exhibitionCarousel}>
            <div
              className={styles.exhibitionTrack}
              style={{
                transform: `translateX(-${currentExhibitionIndex * (100 / exhibitionSlidesToShow)}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {exhibitions.map((exhibition, idx) => (
                <div
                  key={idx}
                  className={styles.carouselItem}
                  style={{ flex: `0 0 ${100 / exhibitionSlidesToShow}%` }}
                >
                  <div className={styles.exhibitionCard}>
                    <Image
                      src={exhibition.src}
                      alt={`${exhibition.title} (AI-generated placeholder)`}
                      width={500}
                      height={750}
                      className={styles.exhibitionImage}
                      onError={() => console.log(`Failed to load image: ${exhibition.src}`)}
                    />
                    <h4 className="font-poppins">{exhibition.title}</h4>
                    <p className="font-roboto">Hosted by {exhibition.host} (AI-generated)</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.exhibitionDots}>
              {Array.from({ length: exhibitions.length - exhibitionSlidesToShow + 1 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.exhibitionDot} ${currentExhibitionIndex === idx ? styles.activeDot : ''}`}
                  onClick={() => handleExhibitionDotClick(idx)}
                />
              ))}
            </div>
          </div>
          <Link href="/events" className={styles.sectionLink}>Explore All Events</Link>
        </motion.section>

        {/* Meet the Artists Section (Centered Layout) */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-poppins">Meet the Artists</h3>
          <p className="font-roboto">Get to know the creators behind the art on Nolens (AI-generated placeholders).</p>
          <div className={styles.artistList}>
            {artists.map((artist, idx) => (
              <motion.div
                key={idx}
                className={styles.artistSection}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                <div className={styles.artistContent}>
                  <div className={styles.artistDetails}>
                    <span className={styles.artistIndex}>Artist {idx + 1}</span>
                    <h4 className="font-poppins">{artist.name}</h4>
                    <p className="font-roboto">{artist.philosophy}</p>
                    <p className="font-roboto">{artist.bio}</p>
                  </div>
                  <div className={styles.artistWork}>
                    <Image
                      src={artist.work}
                      alt={`${artist.name}'s Work (AI-generated placeholder)`}
                      width={300}
                      height={300}
                      className={styles.artistWorkImage}
                      onError={() => console.log(`Failed to load image: ${artist.work}`)}
                    />
                    <p className="font-roboto">{`"${artist.work?.split('/')?.pop()?.replace('.png', '') || 'Untitled'}"`}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <Link href="/artists" className={styles.sectionLink}>Meet More Artists</Link>
        </motion.section>

        {/* Moments Section (Custom Carousel) */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-poppins">Moments</h3>
          <p className="font-roboto">Highlights from the Nolens community (AI-generated placeholders).</p>
          <div className={styles.momentsCarousel}>
            <div
              className={styles.momentsTrack}
              style={{
                transform: `translateX(-${currentMomentIndex * (100 / slidesToShow)}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {moments.map((moment, idx) => (
                <div
                  key={idx}
                  className={styles.carouselItem}
                  style={{ flex: `0 0 ${100 / slidesToShow}%` }}
                >
                  <div className={styles.momentCard}>
                    <Image
                      src={moment.src}
                      alt={moment.caption}
                      width={500}
                      height={375}
                      className={styles.momentImage}
                      onError={() => console.log(`Failed to load image: ${moment.src}`)}
                    />
                    <p className="font-roboto">{moment.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.momentsDots}>
              {Array.from({ length: moments.length - slidesToShow + 1 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.momentDot} ${currentMomentIndex === idx ? styles.activeDot : ''}`}
                  onClick={() => handleMomentDotClick(idx)}
                />
              ))}
            </div>
          </div>
          <Link href="/community" className={styles.sectionLink}>See More Moments</Link>
        </motion.section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p className="font-roboto">© 2025 Nolens. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}