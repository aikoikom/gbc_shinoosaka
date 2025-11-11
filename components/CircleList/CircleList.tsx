import styles from './CircleList.module.css'

export default function CircleList() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>サークル参加リスト</h2>
        <div className={styles.comingSoon}>



<section className={styles.circle-list}>
  <article className={styles.circle-card}>
    <figure className={styles.circle-thumb}>
      <img src="public/images/CC/02.jpeg" alt="新大阪（仮）本部のサークルカット" />
    </figure>

    <div className={styles.circle-body}>
      <h3 className={styles.circle-name}>新大阪（仮）本部</h3>
      <span className={styles.circle-handle}>ｉｃｏ</span>
      <p className={styles.circle-intro}>プチオンリー本部です。まずはこちらにお立ち寄りいただき、パンフレットをお受け取り下さい。</p>

      <!-- ▼ SNSリンク（必要な分だけ残す） -->
      <div className={styles.circle-social}>
        <a href="https://x.com/gbc_shinoosaka" className={styles.sns-link}>Twitter / X</a>
      </div>
      <!-- ▲ ここまで -->
    </div>
  </article>
</section>







          
        </div>
      </div>
    </section>
  )
}
