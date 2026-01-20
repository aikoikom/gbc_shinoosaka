import styles from './Contact.module.css'

type ContactProps = {
  heading: string
  intro: React.ReactNode
  organizer: string
  email: string
  form?: {
    label: string
    href: string
  }
}

export default function Contact({
  heading,
  intro,
  organizer,
  email,
  form,
}: ContactProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.content}>
          <p className={styles.text}>{intro}</p>
          <div className={styles.contactInfo}>
            <p className={styles.organizer}>{organizer}</p>
            <p className={styles.email}>{email}</p>
            {form && (
              <div className={styles.buttonarea}>
                <p className={styles.contactbutton}>
                  <a href={form.href} target="_blank" rel="noreferrer">
                    {form.label}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
