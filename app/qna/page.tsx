import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function QnA() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className="font-poppins">Nolens</h1>
        <div className={styles.headerActions}>
          <Link href="/dashboard" className={styles.headerLink}>Dashboard</Link>
          <Link href="/qna" className={styles.headerLink}>Q&A</Link>
          <Link href="/join" className={styles.headerLink}>Join Beta</Link>
          <a href="https://x.com/nolensprotocol" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/x-icon.svg" alt="X" width={24} height={24} />
          </a>
          <a href="https://discord.gg/nolens" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/discord-icon.svg" alt="Discord" width={24} height={24} />
          </a>
          <button className={styles.profileButton}>Connect Wallet</button>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h3 className="font-poppins">Questions & Answers</h3>
          <p className="font-roboto">
            Learn more about Nolens and our features for artists, collectors, and galleries.
          </p>
          <div className={styles.qnaList}>
            <div className={styles.qnaItem}>
              <h4 className="font-poppins">What is Nolens?</h4>
              <p className="font-roboto">
                Nolens is a decentralized NFT marketplace on Polygon, redefining Web3 art through authentic storytelling, art-historically grounded curation, and community governance. We empower creators, collectors, and organizations in a vibrant ecosystem.
              </p>
            </div>
            <div className={styles.qnaItem}>
              <h4 className="font-poppins">How does curation work on Nolens?</h4>
              <p className="font-roboto">
                Our curation is art-centric and community-driven. Creators submit 200-500 word narrative proofs, self-assessed against three principles (40% Storytelling, 30% Cultural Connection, 30% Creative Authenticity). Curation NFT holders assign placements like Community Favorites using a hybrid algorithm (45% curator score, 30% views, 15% tags, 10% market value). Learn more at <a href="https://nolens.xyz/principles">our principles</a>.
              </p>
            </div>
            <div className={styles.qnaItem}>
              <h4 className="font-poppins">How can I mint an NFT on Nolens?</h4>
              <p className="font-roboto">
                Creators mint NFTs via /dashboard for $0.50 USDC, submitting a 200-500 word narrative proof. Proofs are filtered for AI and quality, with ~40% rejected or reassigned. Verified creators ($1 USDC) get priority and a free monthly boost.
              </p>
            </div>
            <div className={styles.qnaItem}>
              <h4 className="font-poppins">What is the Noleners DAO?</h4>
              <p className="font-roboto">
                The Noleners DAO allows our community to govern the platform. Members propose and vote on styles, themes, and tags (0.5 USDC/equivalent $NOL, 50% approval). Visionary+ tiers get enhanced voting power.
              </p>
            </div>
            <div className={styles.qnaItem}>
              <h4 className="font-poppins">What is the Atelier Hub?</h4>
              <p className="font-roboto">
                The Atelier Hub is a space for art collectives and galleries (Cloister/Museo tiers) to collaborate, curate collections, and bridge traditional and Web3 art. Features include Atelier Collectives, curation studios, and collaborative quests.
              </p>
            </div>
            <div className={styles.qnaItem}>
              <h4 className="font-poppins">What are the fees on Nolens?</h4>
              <p className="font-roboto">
                Primary sales have a 2.2% fee (97.8% creator retention), and secondary sales have a 2% Nolens fee plus 18% creator royalty. Minting costs $0.50 USDC.
              </p>
            </div>
            <div className={styles.qnaItem}>
              <h4 className="font-poppins">How can I get involved?</h4>
              <p className="font-roboto">
                Join our beta as a creator, curator, or collector via /join. Connect with us on{' '}
                <a href="https://x.com/nolensprotocol" target="_blank" rel="noopener noreferrer">
                  X
                </a>{' '}
                and{' '}
                <a href="https://discord.gg/nolens" target="_blank" rel="noopener noreferrer">
                  Discord
                </a>.
              </p>
            </div>
          </div>
          <Link href="/join" className={styles.ctaButtonSmall}>Join the Beta</Link>
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