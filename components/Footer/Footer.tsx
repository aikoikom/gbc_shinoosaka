import styles from './Footer.module.css'

type FooterProps = {
  text: string
}

export default function Footer({ text }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>{text}</p>
      </div>
    </footer>
  )
}
