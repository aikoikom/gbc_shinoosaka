import Link from 'next/link'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Next Event</p>
          <h1 className={styles.title}>新しいイベントを準備中</h1>
          <p className={styles.subtitle}>
            詳細・告知内容は後日公開予定です。公開前の更新もあるため、
            最新情報はこのページをご確認ください。
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/first">
              過去イベントアーカイブを見る
            </Link>
            <a
              className={styles.secondary}
              href="https://x.com/gbc_shinoosaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              公式Xで最新情報
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.infoGrid}>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>開催概要</h2>
            <p className={styles.cardText}>日程・会場・参加方法は準備中です。</p>
            <p className={styles.cardText}>
              公開後に随時更新していきます。
            </p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>参加募集</h2>
            <p className={styles.cardText}>
              サークル参加・一般参加ともに情報公開までお待ちください。
            </p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>アーカイブ</h2>
            <p className={styles.cardText}>
              前回イベントの告知ページはアーカイブとして保存しています。
            </p>
            <Link className={styles.inlineLink} href="/first">
              /first を開く
            </Link>
          </article>
        </section>
      </main>
    </div>
  )
}
