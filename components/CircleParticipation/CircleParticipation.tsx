import styles from './CircleParticipation.module.css'

type CircleParticipationStep = {
  title: React.ReactNode
  listItems?: React.ReactNode[]
  paragraphs?: React.ReactNode[]
  button?: {
    label: string
    href: string
  }
}

type CircleParticipationProps = {
  heading: string
  steps: CircleParticipationStep[]
}

export default function CircleParticipation({
  heading,
  steps,
}: CircleParticipationProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.content}>
          {steps.map((step, index) => (
            <div className={styles.step} key={index}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              {step.listItems && step.listItems.length > 0 && (
                <ul className={styles.stepList}>
                  {step.listItems.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
              {step.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {step.button && (
                <div className={styles.buttonarea}>
                  <p className={styles.button}>
                    <a href={step.button.href} target="_blank" rel="noreferrer">
                      {step.button.label}
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
