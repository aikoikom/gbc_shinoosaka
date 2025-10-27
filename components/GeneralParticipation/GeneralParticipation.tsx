import styles from './GeneralParticipation.module.css'

export default function GeneralParticipation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>一般参加方法</h2>
        <div className={styles.content}>
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>1. 入場</h3>
            <p>
              <a href="https://www.aoboo.jp/event/item/p0087.html">こみっくトレジャー47</a>の会場に入場したら、ガイドブックをお一人様１冊を入場ゲートでご購入をして下さい。<br />
              （本イベントを含めた、<a href="https://www.aoboo.jp/event/item/p0087.html">こみっくトレジャー47</a>内で開催するイベントの全てに参加が出来ます。）
            </p>
          </div>
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>2. パンフレット購入</h3>
            <p>
              「新大阪（仮）」本部のサークルスペースに来ていただき、パンフレットを1冊購入する。<br />
              （なくても頒布されている同人誌は手に入れられます）
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
