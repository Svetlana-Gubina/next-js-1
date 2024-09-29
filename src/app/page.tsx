import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={`${styles.nav} ${styles.navTop}`}>
          <Image
            className={styles.logo}
            width='150'
            height='100'
            src='/image/logo.png'
            alt='AwesomeFit App Logo'
          />
          <ul className={styles.navList}>
            <li>
              <Link href='#track'>Track</Link>
            </li>
            <li>
              <Link href='#'>Pricing</Link>
            </li>
            <li>
              <Link className={styles.btn} href='#'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className={styles.title}>AwesomeFit App</h1>
        <span className={styles.subTitle}>
          Unleash Your Potential, One Rep at a Time!
        </span>
        <Link className={`${styles.btn} ${styles.btnGrow}`} href='#'>
          Learn More
        </Link>
        <Image
          className={styles.scrollDownIcon}
          width='100'
          height='100'
          src='/image/arrow_down.svg'
          alt='Scroll Down Icon'
        />
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 id='track' className={styles.sectionTitle}>
            Track
          </h2>
          <div className={styles.trackGrid}>
            <div className={styles.trackGridItem}>
              <Image
                width='100'
                height='100'
                src='/image/1-1.svg'
                alt='HTML 5 Icon'
              />
              <p>
                Complete a fitness assessment to determine current fitness
                levels.
              </p>
            </div>
            <div className={styles.trackGridItem}>
              <Image
                width='100'
                height='100'
                src='/image/1-2.svg'
                alt='Node JS Icon'
              />
              <p>
                Include various workout types (strength, cardio, flexibility)
                and durations.
              </p>
            </div>
            <div className={styles.trackGridItem}>
              <Image
                width='100'
                height='100'
                src='/image/1-3.svg'
                alt='Visual Studio Code Icon'
              />
              <p>Include calorie tracking and healthy recipe suggestions.</p>
            </div>
            <div className={styles.trackGridItem}>
              <Image
                width='100'
                height='100'
                src='/image/1-4.svg'
                alt='Database Icon'
              />
              <p>
                Monitor workout performance and progress towards goals with
                metrics (e.g., weight, reps, time).
              </p>
            </div>
            <div className={styles.trackGridItem}>
              <Image
                width='100'
                height='100'
                src='/image/1-5.svg'
                alt='Web Page Edit Icon'
              />
              <p>
                Include access to trainers or fitness experts for advice and
                encouragement.{' '}
              </p>
            </div>
            <div className={styles.trackGridItem}>
              <Image
                width='100'
                height='100'
                src='/image/1-6.svg'
                alt='React Icon'
              />
              <p>
                Adjust programs based on progress and changing goals to keep
                users engaged{' '}
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.sectionAccent}`}>
          <div className={styles.pricingCardsContainer}>
            <div className={styles.pricingCard}>
              <div className={styles.priceHeader}>
                <div className={styles.planName}>Basic</div>
                <div className={styles.planPrice}>$10</div>
              </div>
              <div className={styles.planFeature}>
                <div className={styles.feature}> Personalized Workout Plan</div>
                <div className={styles.feature}>Nutrition Basics</div>
                <div className={styles.feature}>Progress Tracking</div>
                <div className={styles.feature}>Weekly Check-Ins</div>
                <div className={styles.feature}>
                  Live Access to Community Forum
                </div>
                <div className={styles.feature}>Video Demonstrations</div>
              </div>
            </div>
            <div
              className={`${styles.pricingCard} ${styles.pricingCardAccent}`}
            >
              <div className={styles.priceHeader}>
                <div className={styles.planName}>Preferred</div>
                <div className={styles.planPrice}>$25</div>
              </div>
              <div className={styles.planFeature}>
                <div className={styles.feature}>
                  {' '}
                  Comprehensive Workout Plan
                </div>
                <div className={styles.feature}>Detailed Nutrition Plans</div>
                <div className={styles.feature}>Advanced Progress Tracking</div>
                <div className={styles.feature}>Bi-Weekly Check-Ins</div>
                <div className={styles.feature}>Live Community Support</div>
                <div className={styles.feature}>Challenges & Rewards</div>
              </div>
            </div>
            <div className={styles.pricingCard}>
              <div className={styles.priceHeader}>
                <div className={styles.planName}>Pro</div>
                <div className={styles.planPrice}>$50</div>
              </div>
              <div className={styles.planFeature}>
                <div className={styles.feature}>
                  Elite Personalized Coaching
                </div>
                <div className={styles.feature}>Custom Nutrition Coaching</div>
                <div className={styles.feature}>
                  Comprehensive Progress Tracking
                </div>
                <div className={styles.feature}>Weekly Live Workouts</div>
                <div className={styles.feature}>Exclusive Community Access</div>
                <div className={styles.feature}>Fitness App Integrations</div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <form className={styles.form} action='/send'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' />
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message'></textarea>
            <div className={styles.btnContainer}>
              <button
                className={`${styles.btn} ${styles.btnSquare}`}
                type='submit'
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <Image
            className={styles.logo}
            width='150'
            height='100'
            src='/image/logo.png'
            alt='AwesomeFit App Logo'
          />
          <ul className={styles.navList}>
            <li>
              <Link href='#track'>Track</Link>
            </li>
            <li>
              <Link href='#'>Pricing</Link>
            </li>
            <li>
              <Link className={styles.btn} href='#'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
