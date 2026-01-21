import type { ReactNode } from 'react'

export type CircleLink = {
  label: string
  href: string
}

export type Circle = {
  imageSrc: string
  imageAlt: string
  name: string
  handle: string
  intro: string
  links: CircleLink[]
  booth: string
}

export type Supporter = {
  name: string
  siteUrl: string
  bannerSrc: string
  bannerAlt: string
  supportUrl: string
  benefits: string[]
}

export type EventContent = {
  header: {
    logoSrc: string
    logoAlt: string
    titleLines: string[]
    date: string
    venue: ReactNode
    hashtag: string
  }
  about: {
    heading: string
    paragraphs: string[]
  }
  circleParticipation: {
    heading: string
    steps: {
      title: ReactNode
      listItems?: ReactNode[]
      paragraphs?: ReactNode[]
      button?: { label: string; href: string }
      buttons?: { label: string; href: string }[]
    }[]
  }
  generalParticipation: {
    heading: string
    steps: {
      title: ReactNode
      paragraphs: ReactNode[]
    }[]
  }
  cosplayInfo: {
    heading: string
    text: ReactNode
  }
  circleList: {
    heading: string
    comingSoon?: string
    circles: Circle[]
  }
  eventPurpose: {
    purposeHeading: string
    purposeParagraphs: ReactNode[]
    cta?: { label: string; href: string }
    supportHeading: string
    supportIntro: string[]
    supporters: Supporter[]
  }
  contact: {
    heading: string
    intro: ReactNode
    organizer: string
    email: string
    form?: { label: string; href: string }
  }
  footer: {
    text: string
  }
}

const circleList: Circle[] = [
  {
    imageSrc: '/gbc_shinoosaka/images/CC/02.jpeg',
    imageAlt: '新大阪（仮）本部のサークルカット',
    name: '新大阪（仮）本部',
    handle: 'ｉｃｏ',
    intro:
      'プチオンリー本部です。まずはこちらにお立ち寄りいただき、パンフレットをお受け取り下さい。',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/gbc_shinoosaka',
      },
    ],
    booth: 'Ｊ09a',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/05.png',
    imageAlt: 'びびっどサンダーのサークルカット',
    name: 'びびっどサンダー',
    handle: 'ズミクニ',
    intro: 'ガールズバンドクライの桃香さんが悩む本',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/zumikuni',
      },
    ],
    booth: 'Ｊ09b',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/23.jpeg',
    imageAlt: 'GO!GO!2711のサークルカット',
    name: 'GO!GO!2711',
    handle: '24、ビオ',
    intro: 'トキナシトキアリ',
    links: [
      {
        label: 'Twitter（24）',
        href: 'https://x.com/2outni4',
      },
      {
        label: 'Twitter（ビオ）',
        href: 'https://x.com/motenaikitakami',
      },
    ],
    booth: 'Ｊ10a',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/06.png',
    imageAlt: 'まどぎわのひとのサークルカット',
    name: 'まどぎわのひと',
    handle: 'なるかぜ',
    intro: 'ガールズバンドクライの日常作品などをまとめました。',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/narukaze__',
      },
    ],
    booth: 'Ｊ10b',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/17.png',
    imageAlt: 'かもごはんのサークルカット',
    name: 'かもごはん',
    handle: 'kamo',
    intro: 'オールキャラ漫画河原木ましまし多め',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/kamo_gohan',
      },
    ],
    booth: 'Ｊ11a',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/09.png',
    imageAlt: 'EIMLESSのサークルカット',
    name: 'EIMLESS',
    handle: 'ルア',
    intro:
      '初参加です。ヒナとトゲトゲがもし偶然、運命、必然的に出会ったら…的なギャグ漫画本を出す予定です！',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/rua_gr_',
      },
    ],
    booth: 'Ｊ11b',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/13.png',
    imageAlt: '古代藍色研究会のサークルカット',
    name: '古代藍色研究会',
    handle: '今陣',
    intro: 'ガルクラの漫画(コピー本)の予定です',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/ima_jin_2458',
      },
    ],
    booth: 'Ｊ12a',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/15.png',
    imageAlt: '生まれたての蟹のサークルカット',
    name: '生まれたての蟹',
    handle: 'nes_Q',
    intro:
      'Xに投稿した漫画の再録本になる予定です。描き下ろしも多分する。',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/nes_Q',
      },
    ],
    booth: 'Ｊ12b',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/18.png',
    imageAlt: '鴉舟（仮）のサークルカット',
    name: '鴉舟（仮）',
    handle: 'raberave',
    intro: '湿度の高いダイダス描きたいよね（願望）',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/raberave',
      },
    ],
    booth: 'Ｊ13a',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/19.png',
    imageAlt: 'イレリモツのサークルカット',
    name: 'イレリモツ',
    handle: 'reitsumo',
    intro: 'ガルクラ本初めて描きます、よろしくお願いいたします！',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/ustier_210',
      },
    ],
    booth: 'Ｊ13b',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/08.png',
    imageAlt: '群青温泉湯あがり庵のサークルカット',
    name: '群青温泉湯あがり庵',
    handle: '群青温泉',
    intro:
      '初のガルクラSS本です！日常系がお好みの方にオススメしたいです♪よろしくお願いします！',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/gunjo_spa',
      },
    ],
    booth: 'Ｊ14a',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/10.png',
    imageAlt: '天頂の隠れ家のサークルカット',
    name: '天頂の隠れ家',
    handle: '天頂',
    intro: '過去に制作したグッズと新規でアクリルキーホルダーを頒布予定です！',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/tentyono_artrie',
      },
    ],
    booth: 'Ｊ14b',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/22.png',
    imageAlt: 'マングロース工房のサークルカット',
    name: 'マングロース工房',
    handle: 'リラックマングロース',
    intro: 'ガルクラ最高〜！',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/relax_1007',
      },
      {
        label: 'Pixiv',
        href: 'https://www.pixiv.net/users/5573613',
      },
    ],
    booth: 'Ｊ15a',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/14.png',
    imageAlt: '下駄札26のサークルカット',
    name: '下駄札26',
    handle: 'はるのぶ',
    intro: '初ガルクラです。ルパさんや桃香さんなど、おそらく酒飲みの何らかが…',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/harunobu_or2',
      },
    ],
    booth: 'Ｊ15b',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/12.png',
    imageAlt: 'ナスザウルスのサークルカット',
    name: 'ナスザウルス',
    handle: 'てらのてら子',
    intro:
      "サークル「ナスザウルス」です。ガルクラの女女本出してます。よろしくお願いします。〜(   'ω'〜)",
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/5120Gigabyte',
      },
    ],
    booth: 'Ｊ16a',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/21.png',
    imageAlt: '完全手動エクスプレスのサークルカット',
    name: '完全手動エクスプレス',
    handle: 'えんびたんさん',
    intro: '桃香×仁菜のカプ小説メインでやってます。。',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/AVE_EEE',
      },
    ],
    booth: 'Ｊ16b',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/16.png',
    imageAlt: 'はやおきできた！のサークルカット',
    name: 'はやおきできた！',
    handle: 'ぷるたぶ',
    intro: 'になもも本かなにか',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/prpr_churu',
      },
    ],
    booth: 'Ｊ17a',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/11.jpg',
    imageAlt: 'ハムちゃん大好きのサークルカット',
    name: 'ハムちゃん大好き',
    handle: 'もみ',
    intro: 'になもも/再録か何か',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/hamchan69',
      },
    ],
    booth: 'Ｊ17b',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/20.png',
    imageAlt: 'ペンギンぱーのサークルカット',
    name: 'ペンギンぱー',
    handle: 'ケイキチ',
    intro: '人生初参加です。になももの小説を頑張って書きます。',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/KEUkei819',
      },
    ],
    booth: 'Ｊ18a',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/03.png',
    imageAlt: 'トポロジカルブランケットのサークルカット',
    name: 'トポロジカルブランケット',
    handle: 'k5',
    intro: '仁菜ヒナ！仁菜ヒナ！仁菜ヒナ！仁菜ヒナ！',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/TiroDuetto',
      },
    ],
    booth: 'Ｊ18b',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/07.PNG',
    imageAlt: 'あつあつフライヤーのサークルカット',
    name: 'あつあつフライヤー',
    handle: 'フライング・フライドポテト',
    intro: 'ニナヒナの漫画です。グッズとかも考えてます。',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/flyingfriesfree',
      },
    ],
    booth: 'Ｊ19a',
  },
  {
    imageSrc: '/gbc_shinoosaka/images/CC/04.png',
    imageAlt: 'ぼたさんちのサークルカット',
    name: 'ぼたさんち',
    handle: '甘味トロ',
    intro:
      'ヒナがトゲナシトゲアリに加入している世界に仁菜が異世界転生するお話です！',
    links: [
      {
        label: 'Twitter / X',
        href: 'https://x.com/botatoro3',
      },
    ],
    booth: 'Ｊ19b',
  },
]

const supporters: Supporter[] = [
  {
    name: 'ねこのしっぽ',
    siteUrl: 'https://www.shippo.co.jp/neko/',
    bannerSrc: 'https://www.shippo.co.jp/neko/img/neko_banner.gif',
    bannerAlt: 'ねこのしっぽ バナー',
    supportUrl: 'https://www.shippo.co.jp/neko/schedule/event_support.shtml',
    benefits: ['優遇イベント専用〆切', 'イベント会場への搬入料 送料無料'],
  },
  {
    name: 'STARBOOKS',
    siteUrl: 'https://www.starbooks.jp/',
    bannerSrc: 'http://www.starbooks.jp/images/banner.jpg',
    bannerAlt: 'STARBOOKS バナー',
    supportUrl: 'https://www.starbooks.jp/doujin/event_support.php',
    benefits: ['2000円分の割引チケット進呈'],
  },
]

export const firstEvent: EventContent = {
  header: {
    logoSrc: '/gbc_shinoosaka/images/logo.png',
    logoAlt: 'ガールズバンドクライプチオンリーロゴ',
    titleLines: ['ガールズバンドクライプチオンリー', '『新大阪（仮）』'],
    date: '2026年1月18日（日）',
    venue: (
      <>
        <a href="https://www.aoboo.jp/event/item/p0087.html">こみっくトレジャー47</a>{' '}
        at インテックス大阪
      </>
    ),
    hashtag: '#大阪ガルクラプチ',
  },
  about: {
    heading: 'プチオンリーとは？',
    paragraphs: [
      'プチオンリーは、提案者（発起人）が好きなジャンル（カップリング等）で、特定のイベントに一斉参加を呼びかけ・様々な企画を提案するイベント内イベントのことを指します。',
      'スペースに共通のポップを飾ったり、配置マップ・記念本の発行なども行われ、小さなオンリーイベントの雰囲気を楽しめます。',
    ],
  },
  circleParticipation: {
    heading: 'サークル参加方法',
    steps: [
      {
        title: (
          <>
            1. <a href="https://www.aoboo.jp/event/item/p0087.html">こみっくトレジャー47</a>
            へサークル参加申込
          </>
        ),
        listItems: [
          'ジャンルコード: こみっく★トレジャー 47 J061_ガールズバンドクライ',
          '備考欄に「『新大阪（仮）』連結希望」と記載すること',
          'お申込み〆切は、2025年11月28日23:59までです。',
        ],
        paragraphs: [
          '※b2 online以外の場合→W001_パロディ：アニメ原作（B欄に原作名・キャラ・傾向記載）',
        ],
        buttons: [
          {
          label: '親イベント「こみっくトレジャー47」',
          href: 'https://www.aoboo.jp/event/item/p0087.html',
          },
        ],
      },
      {
        title: '2. 参加申請フォーム送信',
        paragraphs: [
          'こみトレ47のお申し込み完了後に下記フォームにて参加申請をお願いします。',
          '※参加申請は、2025年11月30日23:59までにお願いします。',
        ],
        buttons: [
          {
          label: '「新大阪（仮）」お申込みフォーム',
          href:
            'https://docs.google.com/forms/d/e/1FAIpQLSfZurn-tWdMHxN5c61e96gXfx313cVc_V1d1JGKy9X-mr1nMA/viewform?usp=header',
          },
        ],
      },
      {
        title: '3. 当日の頒布',
        paragraphs: [
          <>
            当日は「ガールズバンドクライ」にまつわる作品を、一種以上頒布をお願いします。
            <br />
            また、当日スペースの前に貼ることのできるPOP（約900mm×350mmの布）をお渡し予定です。
            <br />
            （プチオンリーに参加しているとわかりやすくするため、設営に差し支えがなければ、貼っていただけると幸いです）
          </>,
        ],
      },
    ],
  },
  generalParticipation: {
    heading: '一般参加方法',
    steps: [
      {
        title: '1. 入場',
        paragraphs: [
          <>
            <a href="https://www.aoboo.jp/event/item/p0087.html">こみっくトレジャー47</a>
            の会場に入場したら、ガイドブックをお一人様１冊を入場ゲートでご購入をして下さい。
            <br />
            （本イベントを含めた、
            <a href="https://www.aoboo.jp/event/item/p0087.html">こみっくトレジャー47</a>
            内で開催するイベントの全てに参加が出来ます。）
          </>,
        ],
      },
      {
        title: '2. パンフレット購入',
        paragraphs: [
          <>
            「新大阪（仮）」本部のサークルスペースに来ていただき、パンフレットを1冊購入する。
            <br />
            （なくても頒布されている同人誌は手に入れられます）
          </>,
        ],
      },
    ],
  },
  cosplayInfo: {
    heading: 'コスプレ参加について',
    text: (
      <>
        コスプレ参加につきましては、
        <a href="https://www.aoboo.jp/event/item/p0087.html">こみっくトレジャー47</a>に準じます。
      </>
    ),
  },
  circleList: {
    heading: 'サークル参加リスト',
    circles: circleList,
  },
  eventPurpose: {
    purposeHeading: '本イベントの目的',
    purposeParagraphs: [
      '2025秋に総集編が劇場公開され、完全新規映像も予告されている今最も熱いアニメ「ガールズバンドクライ」の同人誌即売会が首都圏に偏り過ぎている！！！',
      'ガルクラの同人誌を、首都圏以外でも頒布できる場を作りたい！として、始まりました。',
      '新刊だけでなく、今までの既刊（特に、最新のコミックマーケット冬の新刊！）を首都圏以外でも、実際にリアルで手に入れられる貴重な機会になればいいなと思っています。',
      <>
        関西圏の方はもちろん、それ以外の方々もご参加いただけると嬉しいです！
        <br />
        シールラリーなどの企画も考えているため、SNS（Twitter/現X）を要チェック！
        <br />
      </>,
    ],
    cta: {
      label: 'Twitter（現X）はこちら',
      href: 'https://x.com/gbc_shinoosaka',
    },
    supportHeading: '支援印刷所',
    supportIntro: [
      '親イベント「こみっくトレジャー47」と弊プチオンリーを支援してくださる印刷所です。（順不同/敬称略）',
      'あたたかいご支援、ありがとうございます！',
      '※特典内容は予告無く変更となる場合がございます。',
      '最新の情報詳細はリンク先の各印刷所様HPにてご確認の上、ご利用ください。',
    ],
    supporters,
  },
  contact: {
    heading: '連絡先',
    intro: (
      <>
        本イベントに対してご質問やご意見がありましたら
        <br />
        以下の連絡先にお願いいたします。
      </>
    ),
    organizer: '主催者：ico',
    email: 'MAIL: aikoiko.m@gmail.com',
    form: {
      label: 'お問い合わせフォーム',
      href:
        'https://docs.google.com/forms/d/e/1FAIpQLSeuMRsJm85IwDxXvseNyhXnPU7aG-H6OcWrXBgzlg6-sqcBOw/viewform?usp=header',
    },
  },
  footer: {
    text: 'ガールズバンドクライプチオンリー 新大阪（仮）',
  },
}

export const secondEvent: EventContent = {
  ...firstEvent,
  header: {
    ...firstEvent.header, // ← これも入れた方が安全
    logoSrc: '/gbc_shinoosaka/images/logo2.png',
    logoAlt: 'ガールズバンドヤタイ ロゴ',
    titleLines: ['ガールズバンドクライプチオンリー', '『ガールズバンドヤタイ』'],
    date: '2026年6月21日（日）',
    venue: (
      <>
        <a href="https://www.akaboo.jp/event/item/20204482.html">COMIC CITY 福岡 64</a>
        {' '}at マリンメッセ福岡
      </>
    ),
    hashtag: '#ガールズバンドヤタイ',
  },

  circleParticipation: {
    heading: 'サークル参加方法',
    steps: [
      {
        title: (
          <>
            1. <a href="https://www.akaboo.jp/event/item/20204482.html">COMIC CITY 福岡 64</a>
            へサークル参加申込
          </>
        ),
        paragraphs: [
          <>
            <a href="https://www.b2-online.jp/event/">b2-online</a>からお申込み
          </>,
        ],
        listItems: [
          'ジャンルコード: アニメFC ◆該当なしアニメFCジャンル（C欄に「ガールズバンドクライ」と記入）',
          '備考欄に「プチオンリー『ガールズバンドヤタイ』連結希望」と記載すること',
          'お申込み〆切は、2026年5月8日（金）23:59までです。（満了次第受付終了）',
        ],
        buttons: [
          {
          label: '親イベント「COMIC CITY 福岡 64」',
          href: 'https://www.akaboo.jp/event/item/20204482.html',
          },
          {
          label: '申し込みサイト「b2-online」',
          href: 'https://www.b2-online.jp/event/',
          },
        ],
      },
     
      {
        title: '2. 参加申請フォーム送信',
        paragraphs: [
          <>
            <a href="https://www.akaboo.jp/event/item/20204482.html">COMIC CITY 福岡 64</a>
            のお申し込み完了後に下記フォームにて参加申請をお願いします。
          </>,
          '※参加申請は、2026年5月10日（金）23:59までにお願いします。',
        ],
        button: {
          label: '「ガールズバンドヤタイ」お申込みフォーム',
          href: '（フォームURLをここに）',
        },
      },
      {
        title: '3. 当日の頒布',
        paragraphs: [
          <>
            当日は「ガールズバンドクライ」にまつわる作品を、一種以上頒布をお願いします。
            <br />
            また、当日スペースの前に貼ることのできる横断幕（約900mm×350mmの布）をお渡し予定です。
            <br />
            （プチオンリーに参加しているとわかりやすくするため、設営に差し支えがなければ、貼っていただけると幸いです）
          </>,
        ],
      },
    ],
  },

 generalParticipation: {
    heading: '一般参加方法',
    steps: [
      {
        title: '1. 入場',
        paragraphs: [
          <>
            <a href="https://www.akaboo.jp/event/item/20204482.html">COMIC CITY 福岡 64</a>
            の会場に入場したら、ガイドブックをお一人様１冊を入場ゲートでご購入をして下さい。
            <br />
            （本イベントを含めた、
            <a href="https://www.akaboo.jp/event/item/20204482.html">COMIC CITY 福岡 64</a>
            内で開催するイベントの全てに参加が出来ます。）
          </>,
        ],
      },
      {
        title: '2. パンフレット購入',
        paragraphs: [
          <>
            「ガールズバンドヤタイ」本部のサークルスペースに来ていただき、パンフレットを1冊購入する。
            <br />
            （なくても頒布されている同人誌は手に入れられます）
          </>,
        ],
      },
    ],
  },

cosplayInfo: {
  heading: 'コスプレ参加について',
  text: (
    <>
      コスプレ参加につきましては、
      <a href="https://www.akaboo.jp/event/item/20204482.html">
        COMIC CITY 福岡 64
      </a>
      に準じます。
    </>
  ),
},
  
  circleList: {
    heading: 'サークル参加リスト',
    comingSoon: 'Coming soon...',
    circles: [],
  },
}
