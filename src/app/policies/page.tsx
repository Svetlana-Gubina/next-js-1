import styles from './page2.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Policies() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h1 className={styles.heading}>
          Privacy Policy for{' '}
          <span className={styles.subTitle}>AwesomeFit App</span>
        </h1>
        <p className={styles.date}>Effective Date: 01.01.2025</p>
        <h2 className={styles.heading}>Introduction</h2>
        <p className={styles.paragraph}>
          AwesomeFit App is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you use our mobile application (the &quot;App&quot;).
          Please read this policy carefully. If you do not agree with the terms
          of this policy, please do not access the App.
        </p>
        <h3 className={styles.heading}>Information We Collect</h3>
        <h4>Personal Information</h4>
        <p className={styles.paragraph}>
          We may collect personal information that you provide directly to us
          when you:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>- Create an account</li>
          <li className={styles.listItem}>- Complete a profile</li>
          <li className={styles.listItem}>- Log workouts or fitness data</li>
          <li className={styles.listItem}>- Contact us for support</li>
        </ul>

        <p className={styles.paragraph}>This information may include:</p>
        <ul className={styles.list}>
          <li> - Name</li>
          <li>- Email address</li>
          <li>- Phone number</li>
          <li> - Age</li>
          <li>- Gender</li>
          <li>- Fitness goals</li>
          <li>- Other relevant personal information</li>
        </ul>

        <h4 className={styles.heading}>Usage Data</h4>
        <p className={styles.paragraph}>
          We may also collect information about how you access and use the App,
          including:
        </p>
        <ul className={styles.list}>
          <li>
            {' '}
            - Device information (e.g., device type, operating system) - IP
            address - Location data (with your consent){' '}
          </li>
          <li>- Log data (e.g., time and date of access) </li>
        </ul>

        <h3 className={styles.heading}>How We Use Your Information</h3>
        <p className={styles.paragraph}>
          We may use the information we collect for various purposes, including:
        </p>
        <ul className={styles.list}>
          <li>
            - To provide and maintain our App - To personalize your experience -
            To improve our services and develop new features
          </li>
          <li>
            - To communicate with you, including sending updates and promotional
            materials
          </li>
          <li>
            - To monitor usage and analyze trends - To comply with legal
            obligations
          </li>
        </ul>

        <h3 className={styles.heading}>Sharing Your Information</h3>
        <p className={styles.paragraph}>
          We do not sell or rent your personal information to third parties. We
          may share your information in the following circumstances:
        </p>
        <ul className={styles.list}>
          <li>
            - With Service Providers: We may employ third-party companies and
            individuals to facilitate our App (&quot;Service Providers&quot;),
            provide the App on our behalf, perform App-related services, or
            assist us in analyzing how our App is used.
          </li>
          <li>
            - For Legal Reasons: We may disclose your information if required to
            do so by law or in response to valid requests by public authorities.
          </li>
        </ul>

        <h3 className={styles.heading}>Data Security</h3>
        <p className={styles.paragraph}>
          We take reasonable measures to protect your information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or method of electronic storage is 100%
          secure. While we strive to protect your personal information, we
          cannot guarantee its absolute security.
        </p>
        <p className={styles.paragraph}>
          Your Rights Depending on your location, you may have certain rights
          regarding your personal information, including:
        </p>
        <ul className={styles.list}>
          <li>
            - The right to access and receive a copy of the personal information
            we hold about you. - The right to request correction of any
            inaccurate personal information.
          </li>
          <li>
            - The right to request deletion of your personal information. To
            exercise these rights, please contact us at awesomefit@gmail.com.
          </li>
        </ul>

        <h3 className={styles.heading}>Changes to This Privacy Policy</h3>

        <p className={styles.paragraph}>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
          Changes to this Privacy Policy are effective when they are posted on
          this page.
        </p>
      </section>
      <section className={`${styles.section} ${styles.sectionContact}`}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.paragraph}>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <p className={styles.paragraph}>
          <span className={styles.emailTitle}>- Email:</span>
          <a className={styles.email} href='mailto:awesomefit@gmail.com'>
            awesomefit@gmail.com
          </a>
        </p>
      </section>
      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <Image
            className={styles.logo}
            width='150'
            height='100'
            src='/image/logo.png'
            alt='AwesomeFit App Logo'
          />
          <div className={styles.appLinks}>
            <a href='№' target='_blank' rel='noopener noreferrer'>
              <Image
                width='100'
                height='100'
                src='https://gymteam.kinescopecdn.net/img/l/common/appstore_icon.svg'
                alt=''
              />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <Image
                width='100'
                height='100'
                src='https://gymteam.kinescopecdn.net/img/l/common/play_icon.svg'
                alt=''
              />
            </a>
          </div>
          <ul className={styles.navList}>
            <li>
              <Link href='/#track'>Track</Link>
            </li>
            <li>
              <Link href='/#pricing'>Pricing</Link>
            </li>
            <li>
              <Link className={styles.btn} href='/#contact'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
