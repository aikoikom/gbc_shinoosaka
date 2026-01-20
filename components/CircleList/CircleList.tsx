import styles from './CircleList.module.css'

type CircleLink = {
  label: string
  href: string
}

type Circle = {
  imageSrc: string
  imageAlt: string
  name: string
  handle: string
  intro: string
  links: CircleLink[]
  booth: string
}

type CircleListProps = {
  heading: string
  comingSoon?: string
  circles: Circle[]
}

export default function CircleList({
  heading,
  comingSoon,
  circles,
}: CircleListProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.comingSoon}>
          {comingSoon && circles.length === 0 && <p>{comingSoon}</p>}
          {circles.length > 0 && (
            <section className={styles.circlelist}>
              {circles.map((circle) => (
                <article className={styles.circlecard} key={circle.name}>
                  <figure className={styles.circlethumb}>
                    <img src={circle.imageSrc} alt={circle.imageAlt} />
                  </figure>
                  <div className={styles.circlebody}>
                    <h3 className={styles.circlename}>{circle.name}</h3>
                    <span className={styles.circlehandle}>{circle.handle}</span>
                    <p className={styles.circleintro}>{circle.intro}</p>
                    <div className={styles.circlesocial}>
                      {circle.links.map((link, index) => (
                        <span key={link.href}>
                          <a className={styles.snslink} href={link.href}>
                            {link.label}
                          </a>
                          {index < circle.links.length - 1 && ' / '}
                        </span>
                      ))}
                      <p>{circle.booth}</p>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          )}
        </div>
      </div>
    </section>
  )
}
