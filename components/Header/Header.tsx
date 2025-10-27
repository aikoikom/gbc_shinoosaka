import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img
          src="/gbc_shinoosaka/images/logo.png"
          alt="ガールズバンドクライプチオンリーロゴ"
          className={styles.logo}
        />
        <h1 className={styles.title}>
          <font size="50%">ガールズバンドクライプチオンリー</font>
          <br />
         『新大阪（仮）』
        </h1>
        <div className={styles.eventInfo}>
          <p className={styles.date}>2026年1月18日（日）</p>
          <p className={styles.venue}>こみっくトレジャー47atインテックス大阪</p>
          <p className={styles.hashtag}>#大阪ガルクラプチ</p>
        </div>
      </div>
    </header>
  )
}
