import { Manual } from '../types';

export const manuals: Manual[] = [
  {
    id: 'python',
    title: 'Python (パイソン)',
    category: 'Language',
    icon: 'python',
    shortDescription: 'AI開発やデータ分析、自動化に最適！文法がシンプルで、プログラミング初心者が最初に学ぶのに最もおすすめな言語です。',
    officialUrl: 'https://www.python.org/downloads/',
    steps: [
      {
        title: 'インストーラーをゲットする',
        description: '公式サイトの黄色いボタン「Download Python 3.x.x」をクリックして、セットアップ用のファイルをダウンロードします。',
        tip: 'WindowsやMacなど、あなたが今使っているパソコンに合わせたファイルが自動で選ばれるので安心してください。',
      },
      {
        title: '【最重要】チェックボックスを忘れずに',
        description: 'ダウンロードしたファイルを開きます。インストール画面の一番下にある\n**「Add python.exe to PATH」**\nという項目に必ずチェックを入れてください！これを忘れると、後で黒い画面（ターミナル）でPythonが動かなくなります。',
        warning: 'もしチェックを忘れてインストールしてしまった場合は、一度アンインストールしてやり直すのが一番簡単で確実です。',
      },
      {
        title: '「Install Now」をクリック',
        description: 'チェックを入れたら、一番上の「Install Now」をクリックしてインストールを開始します。数分で完了します。',
      },
      {
        title: '魔法の言葉で動作確認',
        description: 'パソコンの「PowerShell」（Windows）または「ターミナル」（Mac）を開き、以下のコマンドを入力してEnterキーを押してください。数字が表示されれば、あなたのパソコンにPythonという魔法が宿りました！',
        command: {
          label: 'Terminal',
          code: 'python --version',
        },
      },
    ],
  },
  {
    id: 'nodejs',
    title: 'Node.js (ノード・ジェイエス)',
    category: 'Language',
    icon: 'nodejs',
    shortDescription: 'JavaScriptという言語をパソコン上で動かすための道具です。Webサイト制作や最先端のアプリ開発には欠かせません。',
    officialUrl: 'https://nodejs.org/',
    steps: [
      {
        title: '「LTS」という安定版を選ぶ',
        description: '公式サイトにある2つのボタンのうち、左側の**「LTS」**と書かれた方を選んでください。LTSは「長い間、安定して使える」という意味で、初心者にはこちらが絶対におすすめです。',
        tip: '右側の「Current」は最新機能が入っていますが、初心者には少し不安定な場合があります。',
      },
      {
        title: '基本は「次へ」の連打でOK',
        description: 'ダウンロードしたファイルを実行し、設定は変えずに「Next（次へ）」を押し続けて完了させてください。',
      },
      {
        title: '準備ができているか確認',
        description: 'ターミナルを開いて、以下のコマンドを入力してみましょう。バージョン番号が表示されたら、開発の準備は万端です！',
        command: {
          label: 'Terminal',
          code: 'node -v',
        },
        tip: '一緒に「npm」というツールも自動で入ります。これは世界中の便利なプログラムを借りてくるためのツールです。',
      },
    ],
  },
  {
    id: 'vscode',
    title: 'Visual Studio Code (VSCode)',
    category: 'Editor',
    icon: 'vscode',
    shortDescription: '世界中のエンジニアに愛されている「超高性能なメモ帳」です。これ一つでどんなプログラミングも快適に行えます。',
    officialUrl: 'https://code.visualstudio.com/',
    steps: [
      {
        title: 'ダウンロードしてインストール',
        description: '公式サイトの青い大きなボタンからダウンロードします。インストールは画面の指示に従うだけでとても簡単です。',
      },
      {
        title: '日本語の教科書にする',
        description: '最初は英語のメニューですが、簡単に日本語にできます。\n1. 左側の四角いアイコン（Extensions）をクリック。\n2. 検索バーに「Japanese」と入力。\n3. 「Japanese Language Pack」を見つけて「Install」ボタンを押す。\n4. 右下に出る「Restart」ボタンで再起動すれば日本語になります！',
        tip: '英語のままでも使えますが、日本語にすると設定がグッとわかりやすくなります。',
      },
      {
        title: '自動保存をオンにする（超推奨）',
        description: '「ファイル」メニュー →「基本設定」→「設定」を開き、「Auto Save」と検索して設定を**「afterDelay」**に変更しましょう。これで「保存し忘れて作業が消えた！」という悲劇を防げます。',
        warning: '慣れるまでは、書いたコードが自動で保存される設定にしておくのが安心です。',
      },
    ],
  },
  {
    id: 'git',
    title: 'Git (ギット)',
    category: 'Version Control',
    icon: 'git',
    shortDescription: 'ファイルの変更履歴を保存する「セーブポイント」のようなツールです。間違えて消してしまっても、過去に戻ることができます。',
    officialUrl: 'https://git-scm.com/',
    steps: [
      {
        title: '公式サイトからダウンロード',
        description: '公式サイトからインストーラーをダウンロードします。設定項目がたくさん出てきますが、**すべて初期設定（Nextのまま）で大丈夫です**。',
        tip: '設定は後からいつでも変えられるので、最初は深く考えなくてOKです。',
      },
      {
        title: 'あなたの名前をGitに教える',
        description: 'Gitを使うには「誰が作業したか」を登録する必要があります。ターミナルを開いて、以下の2行を1行ずつ実行してください。',
        command: {
          label: 'Terminal',
          code: 'git config --global user.name "Your Name"\ngit config --global user.email "your@email.com"',
        },
        warning: '名前とメールアドレスを登録しないと、一部の機能が使えない場合があります。',
      },
    ],
  },
  {
    id: 'docker',
    title: 'Docker (ドッカー)',
    category: 'Other',
    icon: 'docker',
    shortDescription: '自分だけの「仮想の開発専用PC」を瞬時に作れる魔法のツールです。環境を壊す心配なく、自由に実験できます。',
    officialUrl: 'https://www.docker.com/',
    steps: [
      {
        title: 'Docker Desktopを手にいれる',
        description: '公式サイトから「Docker Desktop」をダウンロードしてインストールします。少しファイルが大きいので、安定したWi-Fi環境で行いましょう。',
      },
      {
        title: 'インストール後の再起動',
        description: 'インストールが終わると、パソコンの再起動を求められることがあります。大切なファイルは保存してから再起動しましょう。',
        warning: 'Windowsの場合は「WSL 2」という追加の設定が必要になることがありますが、画面の指示に従えば自動で進みます。',
      },
      {
        title: 'クジラさんが動いているか確認',
        description: 'アプリを起動して、画面の隅に「クジラのアイコン」が表示されれば成功です。ターミナルで以下のコマンドを打って確認してみましょう。',
        command: {
          label: 'Terminal',
          code: 'docker --version',
        },
      },
    ],
  },
  {
    id: 'mt4-5',
    title: 'MetaTrader 4 / 5 (MT4/5)',
    category: 'Trading',
    icon: 'activity',
    shortDescription: 'FXのトレードや、自動売買プログラムを動かすための世界標準ソフトです。初心者でもチャートを眺めることから始められます。',
    officialUrl: 'https://www.metatrader4.com/',
    steps: [
      {
        title: '証券会社からダウンロード',
        description: 'MT4/5は、お使いの証券会社のマイページからダウンロードするのが一番です。その方がサーバー設定などが済んでいて簡単です。',
        tip: '特にこだわりがなければ、最新の「MT5」を選ぶのが動作が軽くておすすめです。',
      },
      {
        title: 'ログイン情報を入力',
        description: '起動すると「ログインID」「パスワード」「サーバー」の入力を求められます。証券会社から届いたメールをしっかり確認して入力しましょう。',
        warning: 'サーバー名を間違えると、正しいパスワードを入れても「回線不通」になるので注意してください。',
      },
    ],
  },
  {
    id: 'mql4-5',
    title: 'MQL 4 / 5 プログラミング',
    category: 'Trading',
    icon: 'code',
    shortDescription: 'MetaTrader専用の言語です。これを使えば、寝ている間も自動でトレードしてくれる「EA（エキスパートアドバイザ）」が作れます。',
    officialUrl: 'https://www.mql5.com/',
    steps: [
      {
        title: 'MetaEditorを開く',
        description: 'MT4/5の中で**「F4」キー**を押してください。プログラムを書くための専用画面「MetaEditor」がパッと開きます。',
      },
      {
        title: '最初のEAを作ってみる',
        description: '「新規作成」ボタンを押し、ウィザードに従って進めると、自動売買の「中身」となるプログラムの土台が自動で作られます。',
        tip: '最初は中身を書き換えなくても、そのまま「コンパイル」ボタンを押すだけで動くファイルが出来上がります。',
      },
      {
        title: 'プログラムを「MT4/5」に送る',
        description: '画面上部の「コンパイル」ボタンを押します。エラーがなければ、MT4/5の画面にあなたの作ったプログラムが登場します！',
      },
    ],
  },
];