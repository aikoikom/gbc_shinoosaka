import styles from './EventPurpose.module.css'

export default function EventPurpose() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>本イベントの目的</h2>
        <div className={styles.content}>
          <p>
            2025秋に総集編が劇場公開され、完全新規映像も予告されている今最も熱いアニメ「ガールズバンドクライ」の同人誌即売会が首都圏に偏り過ぎている！！！
          </p>
          <p>
            ガルクラの同人誌を、首都圏以外でも頒布できる場を作りたい！として、始まりました。
          </p>
          <p>
            新刊だけでなく、今までの既刊（特に、最新のコミックマーケット冬の新刊！）を首都圏以外でも、実際にリアルで手に入れられる貴重な機会になればいいなと思っています。
          </p>
          <p>
            関西圏の方はもちろん、それ以外の方々もご参加いただけると嬉しいです！<br />
            シールラリーなどの企画も考えているため、SNS（Twitter/現X）を要チェック！
          </p>
<br></br>
<a class="twitter-timeline" href="https://twitter.com/gbc_shinoosaka?ref_src=twsrc%5Etfw">Tweets by gbc_shinoosaka</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          
        </div>
      </div>
    </section>
  )
}
