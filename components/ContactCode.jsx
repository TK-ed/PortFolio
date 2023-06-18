import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'justtk11@proton.me',
    href: 'mailto:justtk11@proton.me',
  },
  {
    social: 'LinkedIn',
    link: 'TharunKumar',
    href: 'https://www.linkedin.com/in/tharun-kumar-783911250/',
  },
  {
    social: 'GitHub',
    link: 'TK-ed',
    href: 'https://github.com/TK-ed',
  },
  {
  social: 'Instagram',
  link: "Tharun",
  href: 'https://www.instagram.com/gaming_geek_11/',
  },
  {
    social: 'Discord',
    link: 'Tharun#7991',
    href: 'https://discord.com/invite/Tharun#7991',
  },
  {
    social: 'Website',
    link: 'TK-ed',
    href: 'https://justtk.vercel.app',
  },
];

const Certifications = [
  {
    platform: 'Udemy',
    title: 'SQL/PostgreSQL Bootcamp',
    href: 'https://drive.google.com/file/d/1A_Emscd1nFExCwnC7_B_efgRB748oV_-/view?usp=sharing'
  },
  {
    platform: 'Udemy',
    title: 'Learn Java Programming',
    href: 'https://drive.google.com/file/d/1nm3QZbEXF96GF15YntfLEpWdif6Nc0S3/view?usp=sharing'
  },
  {
    platform: 'Hackerrank',
    title: 'CSS Basics',
    href: 'https://drive.google.com/file/d/1AwRg64krQEyIc8_nzTRSELZsSs8zttDk/view?usp=sharing'
  },
  {
    platform: 'Udemy',
    title: 'Master Python',
    href: 'https://drive.google.com/file/d/1xj6fbDm8sGqkJqpyZROxrEStAKIArHWH/view?usp=sharing'
  },
]

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>production</a>
        </p>
      <p className={styles.line}>
        <span>TK-ed</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      <br />
      <div>
          <>
          <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>certifications</span>&#58;
      </p>
          {Certifications.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.platform}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.title}
          </a>
        </p>
      ))}   
          </>
    </div>
    </div>
  );
};

export default ContactCode;
