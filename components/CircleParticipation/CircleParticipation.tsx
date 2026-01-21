import styles from './CircleParticipation.module.css'

type CircleParticipationStep = {
  title: React.ReactNode
  listItems?: React.ReactNode[]
  paragraphs?: React.ReactNode[]
  button?: {
    label: string
    href: string
  }
  buttons?: {
    label: string
    href: string
  }[]
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
              {(() => {
                const buttons = step.buttons ?? (step.button ? [step.button] : [])
                if (buttons.length === 0) {
                  return null
                }
                return (
                <div className={styles.buttonarea}>
                  {buttons.map((button, buttonIndex) => (
                    <a
                      className={styles.button}
                      href={button.href}
                      target="_blank"
                      rel="noreferrer"
                      key={`${button.label}-${buttonIndex}`}
                    >
                      {button.label}
                    </a>
                  ))}
                </div>
                )
              })()}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
