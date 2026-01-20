import styles from './Header.module.css'

type HeaderProps = {
  logoSrc: string
  logoAlt: string
  titleLines: string[]
  date: string
  venue: React.ReactNode
  hashtag: string
}

export default function Header({
  logoSrc,
  logoAlt,
  titleLines,
  date,
  venue,
  hashtag,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img
          src={logoSrc}
          alt={logoAlt}
          className={styles.logo}
        />
        <h1 className={styles.title}>
          {titleLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <div className={styles.eventInfo}>
          <p className={styles.date}>{date}</p>
          <p className={styles.venue}>{venue}</p>
          <p className={styles.hashtag}>{hashtag}</p>
        </div>
      </div>
    </header>
  )
}
