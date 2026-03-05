import Link from 'next/link'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Next Event</p>
          <h1 className={styles.title}>ガールズバンドヤタイ in 福岡</h1>
          <p className={styles.subtitle}>
            最新情報は、イベントページをご参照ください！
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/second">
              イベントページを見る
            </Link>
            <a
              className={styles.secondary}
              href="https://x.com/gbc_shinoosaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xで最新情報を確認
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.infoGrid}>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>開催概要</h2>
            <p className={styles.cardText}>2026年6月21日（日）、マリンメッセ福岡にて開催決定！</p>
            <p className={styles.cardText}>その他、詳細はイベントページへ。</p>            
            <p className={styles.cardText}>
              公開後に随時更新していきます。
            </p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>サークル参加募集</h2>
            <p className={styles.cardText}>
              1.COMIC CITY 福岡 64へサークル参加お申込み<br></br>
              2.申請フォームにて参加申請<br></br>
              両方のお申し込みで申請完了です！
            </p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>アーカイブ</h2>
            <p className={styles.cardText}>
              前回イベントの告知ページはアーカイブとして保存しています。
            </p>
            <Link className={styles.inlineLink} href="/first">
              新大阪（仮）
            </Link>
          </article>
        </section>
      </main>
    </div>
  )
}
