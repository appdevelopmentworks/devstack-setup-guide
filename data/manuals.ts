import { Manual } from '../types';

export const manuals: Manual[] = [
  {
    id: 'python',
    title: 'Python (パイソン)',
    category: 'Language',
    icon: 'python',
    shortDescription: 'AI開発やデータ分析で大人気！初心者にも書きやすいプログラミング言語です。',
    officialUrl: 'https://www.python.org/downloads/',
    steps: [
      {
        title: 'インストーラーをダウンロード',
        description: '公式サイトにある黄色いボタン「Download Python 3.x.x」をクリックして、インストーラー（セットアップ用のファイル）を保存します。',
        tip: 'Windows等のOSは自動で判別されるので、そのままボタンを押せば大丈夫です。',
      },
      {
        title: '【超重要】インストール設定',
        description: 'ダウンロードしたファイルを実行します。\n**一番下の「Add python.exe to PATH」というチェックボックスに必ずチェックを入れてください！**\nこれにチェックを入れないと、後で設定が大変になります。チェックを入れたら「Install Now」をクリックします。',
        warning: '「Add python.exe to PATH」のチェック忘れに注意！これだけでトラブルの9割を防げます。',
      },
      {
        title: '正しく入ったか確認',
        description: 'Windowsなら「PowerShell」または「コマンドプロンプト」、Macなら「ターミナル」を開きます。\n以下のコマンドを入力してEnterキーを押し、数字（バージョン）が表示されれば成功です！',
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
    shortDescription: 'Webサイトを作ったり、便利なツールを動かすために必要なソフトです。',
    officialUrl: 'https://nodejs.org/',
    steps: [
      {
        title: '推奨版（LTS）を選ぶ',
        description: '公式サイトに行くとボタンが2つあります。左側の**「LTS（推奨版）」**と書かれている方をダウンロードしてください。\nLTSは「安定して長く使えるバージョン」という意味です。',
      },
      {
        title: 'インストール',
        description: 'ダウンロードしたファイルを開いてインストールを開始します。\n基本的には設定を変更せず、そのまま「Next（次へ）」を押し続けて完了させて大丈夫です。',
      },
      {
        title: 'インストールの確認',
        description: 'ターミナル（黒い画面）を開いて、以下のコマンドを入力してみましょう。バージョン番号が表示されたら準備完了です！',
        command: {
          label: 'Terminal',
          code: 'node -v',
        },
        tip: '同時に「npm」というツールもインストールされます。これも開発でよく使います。',
      },
    ],
  },
  {
    id: 'vscode',
    title: 'Visual Studio Code (VSCode)',
    category: 'Editor',
    icon: 'vscode',
    shortDescription: 'プログラミングをするための「高機能なメモ帳」。世界で一番使われています。',
    officialUrl: 'https://code.visualstudio.com/',
    steps: [
      {
        title: 'ダウンロードとインストール',
        description: '公式サイトの青い大きなボタンからダウンロードしてインストールします。\nWindows、Mac、Linuxなど、使っているパソコンに合わせて自動で選ばれます。',
      },
      {
        title: '日本語にする',
        description: '最初は英語の画面です。\n1. 左端のアイコン列から四角いブロックのアイコン（Extensions）をクリック。\n2. 検索バーに「Japanese」と入力。\n3. 「Japanese Language Pack...」という地球儀アイコンのものを選んで「Install」をクリック。\n4. 右下に「Restart」ボタンが出たらクリックして再起動します。',
        tip: 'これでメニューが日本語になります！',
      },
      {
        title: '便利な設定：自動保存',
        description: 'ファイルメニュー（MacはCodeメニュー）から「設定」→「設定」を開き、検索窓に「Auto Save」と入力します。\n設定を「afterDelay」に変更しておくと、勝手に保存してくれるので「保存し忘れ」がなくなります。',
      },
    ],
  },
  {
    id: 'git',
    title: 'Git (ギット)',
    category: 'Version Control',
    icon: 'git',
    shortDescription: 'ゲームのセーブポイントのように、ファイルの変更履歴を保存・管理するツールです。',
    officialUrl: 'https://git-scm.com/',
    steps: [
      {
        title: 'インストール',
        description: '公式サイトからダウンロードします。\nインストール画面では英語の選択肢がたくさん出ますが、**すべて初期設定のまま「Next」で進めて問題ありません**。',
      },
      {
        title: 'ユーザー登録（初期設定）',
        description: 'Gitを使うには「誰が変更したか」を記録するために名前とメールアドレスの登録が必要です。\nターミナルを開いて、以下のコマンドを1行ずつ実行してください。',
        command: {
          label: 'Terminal',
          code: 'git config --global user.name "あなたの名前(ローマ字推奨)"\ngit config --global user.email "あなたのメールアドレス"',
        },
        tip: 'メールアドレスは実際に使っているものでなくても、Gitの設定上は動作します。',
      },
    ],
  },
  {
    id: 'docker',
    title: 'Docker (ドッカー)',
    category: 'Other',
    icon: 'docker',
    shortDescription: 'アプリの動作環境を「コンテナ」という箱として丸ごと作成・管理できるツールです。',
    officialUrl: 'https://www.docker.com/',
    steps: [
      {
        title: 'Docker Desktopのダウンロード',
        description: '公式サイトの「Download Docker Desktop」ボタンからインストーラーをダウンロードします。\nWindows、Mac、Linux用がそれぞれ用意されています。',
      },
      {
        title: 'インストール',
        description: 'ダウンロードしたファイルを実行し、画面の指示に従ってインストールします。\nインストール完了後、PCの再起動を求められる場合があるので、作業中のファイルは保存しておきましょう。',
        warning: 'Windowsの場合、インストール中に「WSL 2」のコンポーネントが必要と言われることがあります。画面の指示に従って更新・インストールしてください。',
      },
      {
        title: '起動確認',
        description: 'インストールが終わったら「Docker Desktop」というアプリを起動します。\nクジラのアイコンがメニューバー（タスクバー）に表示され、ステータスが「Running」になれば準備OKです。\n念のためターミナルで以下のコマンドを入力して確認してみましょう。',
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
    shortDescription: 'FXなどのトレードをするための定番ソフト。チャート分析や自動売買に使います。',
    officialUrl: 'https://www.metatrader4.com/',
    steps: [
      {
        title: 'どこから入手する？',
        description: '開発元の公式サイトからもダウンロードできますが、**実際にお使いになる証券会社（XM, TitanFX, OANDAなど）の公式サイトからダウンロードすることをお勧めします。**\n会社ごとにサーバーの設定などが最初から済んでいるため、スムーズに始められます。',
        warning: 'MT4とMT5は別のソフトです。使いたい口座に合わせて選びましょう。',
      },
      {
        title: 'インストールと起動',
        description: 'ダウンロードした「mt4setup.exe」などを実行し、画面の指示に従ってインストールします。\n完了すると自動的にMT4/5が立ち上がります。',
      },
      {
        title: '口座にログイン',
        description: '初回起動時にログイン画面が出ます。\n証券会社から送られてきた「ログインID」「パスワード」「サーバー名」を選択・入力してログインします。\n接続されると「ボーン」という音が鳴り、チャートが動き出します。',
      },
    ],
  },
  {
    id: 'mql4-5',
    title: 'MQL 4 / 5 プログラミング',
    category: 'Trading',
    icon: 'code',
    shortDescription: 'MetaTrader専用のプログラミング言語。自動売買ソフト(EA)などを自作できます。',
    officialUrl: 'https://www.mql5.com/',
    steps: [
      {
        title: '開発画面（MetaEditor）を開く',
        description: 'プログラミングをするための画面は、MetaTraderの中にすでに入っています。\nMT4/5を起動し、キーボードの**「F4」キー**を押すか、ツールバーにある**「黄色い本のようなアイコン」**をクリックしてください。\n「MetaEditor（メタエディタ）」という別のウィンドウが開きます。',
      },
      {
        title: '最初のプログラムを作る',
        description: 'MetaEditorの左上にある「新規作成」ボタンを押します。\nウィザードが出るので「エキスパートアドバイザ（自動売買プログラム）」を選んで「次へ」を進んでいくと、プログラムの雛形が作られます。',
      },
      {
        title: 'コンパイル（プログラムの変換）',
        description: 'コードを書いた後は、画面上部の「コンパイル」ボタンを押します。\nこれで人間が読めるプログラムが、PCが実行できるファイル（.ex4 / .ex5）に変換されます。\nエラーがなければ、MT4/5側のナビゲーター画面にあなたのプログラムが表示されます！',
      },
    ],
  },
];