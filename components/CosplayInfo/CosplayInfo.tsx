import styles from './CosplayInfo.module.css'

type CosplayInfoProps = {
  heading: string
  text: React.ReactNode
}

export default function CosplayInfo({ heading, text }: CosplayInfoProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  )
}
