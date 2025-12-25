import styles from './EventPurpose.module.css'

export default function EventPurpose() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>本イベントの目的</h2>
          <div className={styles.content}>
            <p>
              2025秋に総集編が劇場公開され、完全新規映像も予告されている今最も熱いアニメ「ガールズバンドクライ」の同人誌即売会が首都圏に偏り過ぎている！！！
            </p>
            <p>ガルクラの同人誌を、首都圏以外でも頒布できる場を作りたい！として、始まりました。</p>
            <p>
              新刊だけでなく、今までの既刊（特に、最新のコミックマーケット冬の新刊！）を首都圏以外でも、実際にリアルで手に入れられる貴重な機会になればいいなと思っています。
            </p>
            <p>
              関西圏の方はもちろん、それ以外の方々もご参加いただけると嬉しいです！<br />
              シールラリーなどの企画も考えているため、SNS（Twitter/現X）を要チェック！<br />
            </p>

            <div className={styles.buttonarea}>
              <p className={styles.button}>
                <a
                  href="https://x.com/gbc_shinoosaka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter（現X）はこちら
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>支援印刷所</h2>
          <div className={styles.content}>
            <p>親イベント「こみっくトレジャー47」と弊プチオンリーを支援してくださる印刷所です。（順不同/敬称略）</p>
            <p>あたたかいご支援、ありがとうございます！</p>
            <p>※特典内容は予告無く変更となる場合がございます。</p>
            <p>最新の情報詳細はリンク先の各印刷所様HPにてご確認の上、ご利用ください。</p>

             <div className={styles.circlelist}>
            <article className={styles.circlecard}>
              <figure className={styles.circlethumb}>
               <a href="https://www.shippo.co.jp/neko/"> <img
                  src="https://www.shippo.co.jp/neko/img/neko_banner.gif"
                  alt="ねこのしっぽ バナー"
                /></a>
              </figure>
              <div className={styles.circlebody}>
                <h3 className={styles.circlename}>
                  <a href="https://www.shippo.co.jp/neko/">ねこのしっぽ</a>
                </h3>
                <span className={styles.circlehandle}>
                  <a href="https://www.shippo.co.jp/neko/schedule/event_support.shtml">支援詳細ページ</a>
                </span>
                <p className={styles.circleintro}>
                  ・優遇イベント専用〆切<br />
                  ・イベント会場への搬入料 送料無料
                </p>
              </div>
            </article>

<article className={styles.circlecard}>
              <figure className={styles.circlethumb}>
                <a href="https://www.starbooks.jp/"><img
                  src="http://www.starbooks.jp/images/banner.jpg"
                  alt="STARBOOKS バナー"
                /></a>
              </figure>
              <div className={styles.circlebody}>
                <h3 className={styles.circlename}>
                  <a href="https://www.starbooks.jp/">STARBOOKS</a>
                </h3>
                <span className={styles.circlehandle}>
                  <a href="https://www.starbooks.jp/doujin/event_support.php">支援詳細ページ</a>
                </span>
                <p className={styles.circleintro}>
                  ・2000円分の割引チケット進呈
                </p>
              </div>
            </article>



           </div> 
          </div>
        </div>
      </section>
    </>
  )
}
