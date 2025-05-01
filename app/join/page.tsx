import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Join() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className="font-poppins">Nolens</h1>
        <div className={styles.headerActions}>
          <Link href="/dashboard" className={styles.headerLink}>Dashboard</Link>
          <Link href="/qna" className={styles.headerLink}>Q&A</Link>
          <Link href="/join" className={styles.headerLink}>Join Beta</Link>
          <a href="https://x.com/nolensprotocol" target="_blank" rel="noopener noreferrer">
            <img src="/icons/x-icon.svg" alt="X" width={24} height={24} />
          </a>
          <a href="https://discord.gg/nolens" target="_blank" rel="noopener noreferrer">
            <img src="/icons/discord-icon.svg" alt="Discord" width={24} height={24} />
          </a>
          <button className={styles.profileButton}>Connect Wallet</button>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h3 className="font-poppins">Join the Nolens Beta</h3>
          <p className="font-roboto">
            Sign up as a Creator, Collector, or Gallery to explore Nolens’ Web3 art ecosystem.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '2rem 0' }}>
            <button className={styles.ctaButtonSmall}>Creator</button>
            <button className={styles.ctaButtonSmall}>Collector</button>
            <button className={styles.ctaButtonSmall}>Gallery</button>
          </div>
          <button className={styles.ctaButton}>Connect Wallet</button>
          <Link href="/" className={styles.sectionLink}>Back to Home</Link>
        </section>
      </main>
      <footer className={styles.footer}>
        <p className="font-roboto">
          © 2025 Nolens. All rights reserved. | Contact: @nolensprotocol on{' '}
          <a href="https://x.com/nolensprotocol" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37' }}>
            X
          </a>{' '}
          &{' '}
          <a href="https://discord.gg/nolens" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37' }}>
            Discord
          </a>{' '}
          |{' '}
          <a href="https://nolens.xyz/principles" style={{ color: '#D4AF37' }}>
            Our Principles
          </a>
        </p>
      </footer>
    </div>
  );
}