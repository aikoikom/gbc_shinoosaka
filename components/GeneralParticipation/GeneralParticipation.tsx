import styles from './GeneralParticipation.module.css'

type GeneralParticipationStep = {
  title: React.ReactNode
  paragraphs: React.ReactNode[]
}

type GeneralParticipationProps = {
  heading: string
  steps: GeneralParticipationStep[]
}

export default function GeneralParticipation({
  heading,
  steps,
}: GeneralParticipationProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.content}>
          {steps.map((step, index) => (
            <div className={styles.step} key={index}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              {step.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
