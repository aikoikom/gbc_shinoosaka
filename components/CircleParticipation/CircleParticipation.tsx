import styles from './CircleParticipation.module.css'

export default function CircleParticipation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>サークル参加方法</h2>
        <div className={styles.content}>
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>1. こみっくトレジャー47でサークル参加申込</h3>
            <ul className={styles.stepList}>
              <li>ジャンルコード: W001_パロディ：アニメ原作_こみっく★トレジャー</li>
              <li>備考欄に「『新大阪（仮）』連結希望」と記載すること</li>
            </ul>
          </div>
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>2. 参加申請フォーム送信</h3>
            <p>お申し込み完了後に「このフォーム」にて参加申請をお願いします。</p>
          </div>
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>3. 当日の頒布</h3>
            <p>
              当日は「ガールズバンドクライ」にまつわる作品を、一種以上頒布をお願いします。<br />
              また、当日スペースの前に貼ることのできるPOP（A3寸延を2枚）をお渡し予定です。<br />
              （プチオンリーに参加しているとわかりやすくするため、設営に差し支えがなければ、貼っていただけると幸いです）
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
