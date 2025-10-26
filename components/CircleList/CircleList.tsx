import styles from './CircleList.module.css'

export default function CircleList() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>サークル参加リスト</h2>
        <div className={styles.comingSoon}>
          <p>coming soon…</p>
        </div>
      </div>
    </section>
  )
}
