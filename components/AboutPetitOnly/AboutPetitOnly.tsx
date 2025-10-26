import styles from './AboutPetitOnly.module.css'

export default function AboutPetitOnly() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>プチオンリーとは？</h2>
        <div className={styles.content}>
          <p>
            プチオンリーは、提案者（発起人）が好きなジャンル（カップリング等）で、特定のイベントに一斉参加を呼びかけ・様々な企画を提案するイベント内イベントのことを指します。
          </p>
          <p>
            スペースに共通のポップを飾ったり、配置マップ・記念本の発行なども行われ、小さなオンリーイベントの雰囲気を楽しめます。
          </p>
        </div>
      </div>
    </section>
  )
}
