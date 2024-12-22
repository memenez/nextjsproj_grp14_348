'use client';

import Link from 'next/link';
import styles from '../styles/page.module.css';

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <h1>Welcome to the PublicVoice Dashboard. Navigate to explore feedback, surveys, reports, and polls.</h1>
      

      {/* Navigation Buttons */}
      <div className={styles.navButtons}>
        <Link href="/feedback">
          <button className={styles.button}>Feedback</button>
        </Link>
        <Link href="/polls">
          <button className={styles.button}>Polls & Voting</button>
        </Link>
        <Link href="/survey">
          <button className={styles.button}>Survey</button>
        </Link>
        <Link href="/report">
          <button className={styles.button}>Report</button>
        </Link>
      </div>
    </div>
  );
}
