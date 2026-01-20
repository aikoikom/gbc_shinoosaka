import styles from './AboutPetitOnly.module.css'

type AboutPetitOnlyProps = {
  heading: string
  paragraphs: string[]
}

export default function AboutPetitOnly({
  heading,
  paragraphs,
}: AboutPetitOnlyProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.content}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
