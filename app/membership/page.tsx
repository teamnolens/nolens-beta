'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Membership.module.css';

// Define interfaces for TypeScript
interface MembershipTier {
  name: string;
  price: number;
  perks: string[];
}

interface MuseumPass {
  name: string;
  price: number;
  description: string;
}

// Membership tiers data
const membershipTiers: MembershipTier[] = [
  {
    name: 'Dreamer',
    price: 8,
    perks: [
      '1x voting power in Noleners DAO',
      'Priority curation (basic)',
      'Option to purchase Nolens Museum Pass separately',
    ],
  },
  {
    name: 'Visionary',
    price: 20,
    perks: [
      '2x voting power in Noleners DAO',
      'Priority curation (advanced)',
      'Limited access to Atelier Hub (analytics, creator forum, 1 free boost/month)',
      '1 Sketch Pass included (1 exhibition, 2 weeks)',
      'Upgrade to Canvas Pass for $10 or Masterpiece Pass for $21',
      '5% discount on minting fees',
    ],
  },
  {
    name: 'Artisan',
    price: 45,
    perks: [
      '2x voting power in Noleners DAO',
      'Full access to Atelier Hub',
      '1 Canvas Pass included (3 exhibitions, 1 month)',
      'Upgrade to Masterpiece Pass for $11',
      '10% discount on minting fees',
      'Priority listing in virtual exhibitions',
    ],
  },
  {
    name: 'Cloister',
    price: 180,
    perks: [
      '2x voting power per member in Noleners DAO (scales with team size)',
      'Access to Atelier Hub for each member',
      'Unlimited exhibition access for each member (equivalent to Masterpiece Pass)',
      'Additional members: $14/month each (up to 12 additional members)',
      'Free commission on minting',
      'Fractional ownership (0.1% of the value of artwork)',
      'Host 1 free hybrid exhibition per year',
    ],
  },
  {
    name: 'Museo',
    price: 350,
    perks: [
      '2.2x voting power per member in Noleners DAO (scales with team size)',
      'Access to Atelier Hub for each member',
      'Unlimited exhibition access for each member (equivalent to Masterpiece Pass)',
      'Additional members: $14/month each (unlimited)',
      'Free commission on minting',
      'Fractional ownership (0.2% of the value of artwork)',
      'Host 2 free hybrid exhibitions per year',
      'Dedicated support for tokenizing artworks',
    ],
  },
];

// Museum Passes data
const museumPasses: MuseumPass[] = [
  {
    name: 'Sketch',
    price: 7,
    description: '1 exhibition, valid for 2 weeks',
  },
  {
    name: 'Canvas',
    price: 17,
    description: '3 exhibitions, valid for 1 month',
  },
  {
    name: 'Masterpiece',
    price: 28,
    description: 'Unlimited exhibitions, valid for 1 month',
  },
];

export default function Membership() {
  // State for toggling monthly/yearly pricing
  const [isYearly, setIsYearly] = useState<boolean>(false);

  // State for toggling Museum Passes section
  const [showMuseumPasses, setShowMuseumPasses] = useState<boolean>(false);

  // Calculate discounted price for yearly billing (15% off)
  const getPrice = (price: number) => {
    if (isYearly) {
      return Math.round(price * 12 * 0.85); // 15% off for yearly billing
    }
    return price;
  };

  // Split tiers into two groups for layout
  const firstRowTiers = membershipTiers.slice(0, 3); // Dreamer, Visionary, Artisan
  const secondRowTiers = membershipTiers.slice(3); // Cloister, Museo

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className="font-poppins">Nolens</h1>
        <div className={styles.headerActions}>
          <Link href="/" className={styles.headerLink}>Home</Link>
          <Link href="/dashboard" className={styles.headerLink}>Dashboard</Link>
          <Link href="/qna" className={styles.headerLink}>Q&A</Link>
          <Link href="/membership" className={styles.headerLink}>Pricing</Link>
          <button className={styles.profileButton}>Connect Wallet</button>
        </div>
      </header>
      <main className={styles.main}>
        <motion.section
          className={styles.membershipSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-poppins">Choose Your Nolens Membership</h2>
          <p className="font-roboto">
            Unlock the full potential of Web3 art with exclusive perks and museum access.
          </p>
          <div className={styles.toggleContainer}>
            <span className={`${styles.toggleLabel} ${!isYearly ? styles.activeToggle : ''}`}>
              Pay Monthly
            </span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              <span className={styles.slider}></span>
            </label>
            <span className={`${styles.toggleLabel} ${isYearly ? styles.activeToggle : ''}`}>
              Pay Yearly (15% off)
            </span>
          </div>
          {/* First Row: Dreamer, Visionary, Artisan */}
          <div className={styles.membershipRow}>
            {firstRowTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                className={`${styles.membershipCard} ${
                  tier.name === 'Cloister' ? styles.cloisterCard : ''
                } ${tier.name === 'Museo' ? styles.museoCard : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                {tier.name === 'Cloister' && (
                  <span className={styles.badge}>Best for Small Galleries</span>
                )}
                {tier.name === 'Museo' && (
                  <span className={styles.badge}>Best for Large Galleries</span>
                )}
                <h3 className="font-poppins">{tier.name}</h3> {/* Removed "Tier" suffix */}
                <p className="font-roboto">
                  ${getPrice(tier.price)}{isYearly ? '/year' : '/month'}
                </p>
                <ul className={styles.perkList}>
                  {tier.perks.map((perk, perkIdx) => (
                    <li key={perkIdx} className="font-roboto">
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link href="/buy" className={styles.subscribeButton}>
                  Subscribe
                </Link>
                <p className={styles.daoTagline}>Join the Noleners DAO</p>
              </motion.div>
            ))}
          </div>

          {/* Second Row: Cloister, Museo */}
          <div className={styles.membershipRow}>
            {secondRowTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                className={`${styles.membershipCard} ${
                  tier.name === 'Cloister' ? styles.cloisterCard : ''
                } ${tier.name === 'Museo' ? styles.museoCard : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                {tier.name === 'Cloister' && (
                  <span className={styles.badge}>Best for Small Galleries</span>
                )}
                {tier.name === 'Museo' && (
                  <span className={styles.badge}>Best for Large Galleries</span>
                )}
                <h3 className="font-poppins">{tier.name}</h3> {/* Removed "Tier" suffix */}
                <p className="font-roboto">
                  ${getPrice(tier.price)}{isYearly ? '/year' : '/month'}
                </p>
                <ul className={styles.perkList}>
                  {tier.perks.map((perk, perkIdx) => (
                    <li key={perkIdx} className="font-roboto">
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link href="/buy" className={styles.subscribeButton}>
                  Subscribe
                </Link>
                <p className={styles.daoTagline}>Join the Noleners DAO</p>
              </motion.div>
            ))}
          </div>

          {/* Museum Passes Section */}
          <div className={styles.museumPassToggle}>
            <button
              onClick={() => setShowMuseumPasses(!showMuseumPasses)}
              className={styles.toggleButton}
            >
              {showMuseumPasses ? 'Hide Museum Passes' : 'Show Museum Passes'}
            </button>
          </div>
          {showMuseumPasses && (
            <motion.div
              className={styles.museumPassGrid}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
            >
              {museumPasses.map((pass, idx) => (
                <motion.div
                  key={idx}
                  className={styles.museumPassCard}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                >
                  <h4 className="font-poppins">{pass.name} Pass</h4>
                  <p className="font-roboto">
                    ${getPrice(pass.price)}{isYearly ? '/year' : ''}
                  </p>
                  <p className="font-roboto">{pass.description}</p>
                  <Link href="/buy" className={styles.subscribeButton}>
                    Purchase Pass
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className="font-roboto">
          © 2025 Nolens. All rights reserved. | Contact: @nolensprotocol on{' '}
          <a href="https://x.com/nolensprotocol" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37' }}>
            X
          </a>{' '}
          &{' '}
          <a href="https://discord.gg/XPUf73Bf" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37' }}>
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