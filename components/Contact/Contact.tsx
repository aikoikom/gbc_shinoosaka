import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>連絡先</h2>
        <div className={styles.content}>
          <p className={styles.text}>
            もし何か本イベントに対してご質問やご意見がありましたら<br />
            以下の連絡先にお願いいたします。
          </p>
          <div className={styles.contactInfo}>
            <p className={styles.organizer}>主催者：ico</p>
            <p className={styles.email}>
              MAIL: aikoiko.m@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
