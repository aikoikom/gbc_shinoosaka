import styles from './CosplayInfo.module.css'

export default function CosplayInfo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>コスプレ参加について</h2>
        <p className={styles.text}>
          コスプレ参加につきましては、こみっくトレジャー47に準じます。
        </p>
      </div>
    </section>
  )
}
