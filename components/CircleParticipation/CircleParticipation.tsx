import styles from './CircleParticipation.module.css'

export default function CircleParticipation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>サークル参加方法</h2>
        <div className={styles.content}>
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>1. <a href="https://www.aoboo.jp/event/item/p0087.html">こみっくトレジャー47</a>へサークル参加申込</h3>
            <ul className={styles.stepList}>
              <li>ジャンルコード: こみっく★トレジャー 47 J061_ガールズバンドクライ</li>
              <li>備考欄に「『新大阪（仮）』連結希望」と記載すること</li>
              <li>お申込み〆切は、2025年11月28日23:59までです。</li>
            </ul>
                      <div className={styles.buttonarea}>
           <p className={styles.button}>
             <a href="https://www.aoboo.jp/event/item/p0087.html" target="_blank">
             親イベント「こみっくトレジャー47」</a></p>
         </div>
            
          </div>
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>2. 参加申請フォーム送信</h3>
            <p>こみトレ47のお申し込み完了後に下記フォームにて参加申請をお願いします。</p>
            <p>※参加申請は、2025年11月30日23:59までにお願いします。</p>
                      <div className={styles.buttonarea}>
           <p className={styles.button}>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZurn-tWdMHxN5c61e96gXfx313cVc_V1d1JGKy9X-mr1nMA/viewform?usp=header" target="_blank">
             「新大阪（仮）」お申込みフォーム</a></p>
         </div>
          </div>
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>3. 当日の頒布</h3>
            <p>
              当日は「ガールズバンドクライ」にまつわる作品を、一種以上頒布をお願いします。<br />
              また、当日スペースの前に貼ることのできるPOP（A3サイズを2枚）をお渡し予定です。<br />
              （プチオンリーに参加しているとわかりやすくするため、設営に差し支えがなければ、貼っていただけると幸いです）
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
