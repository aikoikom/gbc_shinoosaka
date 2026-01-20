import styles from './EventPurpose.module.css'

type Supporter = {
  name: string
  siteUrl: string
  bannerSrc: string
  bannerAlt: string
  supportUrl: string
  benefits: string[]
}

type EventPurposeProps = {
  purposeHeading: string
  purposeParagraphs: React.ReactNode[]
  cta?: {
    label: string
    href: string
  }
  supportHeading: string
  supportIntro: string[]
  supporters: Supporter[]
}

export default function EventPurpose({
  purposeHeading,
  purposeParagraphs,
  cta,
  supportHeading,
  supportIntro,
  supporters,
}: EventPurposeProps) {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>{purposeHeading}</h2>
          <div className={styles.content}>
            {purposeParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {cta && (
              <div className={styles.buttonarea}>
                <p className={styles.button}>
                  <a href={cta.href} target="_blank" rel="noopener noreferrer">
                    {cta.label}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>{supportHeading}</h2>
          <div className={styles.content}>
            {supportIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className={styles.circlelist}>
              {supporters.map((supporter) => (
                <article className={styles.circlecard} key={supporter.name}>
                  <figure className={styles.circlethumb}>
                    <a href={supporter.siteUrl}>
                      <img src={supporter.bannerSrc} alt={supporter.bannerAlt} />
                    </a>
                  </figure>
                  <div className={styles.circlebody}>
                    <h3 className={styles.circlename}>
                      <a href={supporter.siteUrl}>{supporter.name}</a>
                    </h3>
                    <span className={styles.circlehandle}>
                      <a href={supporter.supportUrl}>支援詳細ページ</a>
                    </span>
                    <p className={styles.circleintro}>
                      {supporter.benefits.map((benefit, index) => (
                        <span key={benefit}>
                          ・{benefit}
                          {index < supporter.benefits.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
