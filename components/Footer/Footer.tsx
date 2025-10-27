import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
       ガールズバンドクライプチオンリー 新大阪（仮）
        </p>
      </div>
    </footer>
  )
}
