# Portfolio

* ETFの組み合わせから資産分散の実態を可視化するアプリ。
* 各ETFの投資対象の国・銘柄・分野の投資比率を一覧に表示します。
* スクレイピングを用いて、定期的に最新情報を自動取得しています。

## 対象者と提供するもの

超長期運用を目的としている人を対象に、資産の分散を重視したポートフォリオの検討やリバランスに活用できる情報を提供。

具体的には下記機能を提供しています。

* 各種ETFの国・銘柄・分野ごとの分散状況を手軽に確認（静的サイトによる高速表示）
* ETFの組み合わせにおけるシミュレーション機能

今後の機能拡充として下記を検討していますが、ご意見等あれば大歓迎

* 資産クラスごとの相関係数を基に加重平均
* シミュレーションとポートフォリオを比較したリバランス内容の整理
* 現代ポートフォリオ理論の図とその説明など

## 技術構成

### フロントエンド

* Next.js（React派生）によるETF情報のSSG
* 円グラフを用いた情報の視覚化
* Supabaseからprismaやaxiosを使ったデータ取得
* AtomicDesignによるコンポーネント構成
* Chakra UIによる画面構築
* チャットボットを経由して、Slack通知や外部ページヘの誘導

### [バックエンド](https://github.com/soratsm/nestjs-schedule-scraping)

* NestJS（Express派生）によるTypeScript実装
* Puppeteer(Headless Chrome)を用いたスクレイピング
* Node Cronによるジョブ定期実行
* Supabaseへprismaを使ったデータ格納

## その他メモ

### LOGO

* 『[Hatchful](https://hatchful.shopify.com/)』：Free Logo Maker
* 上記で作成したLOGO.pngを下記に渡して大枠完成
* 『[Favicon Generator](https://realfavicongenerator.net)』：Webに必要な基本セットを生成してくれる
* ヘッダー画像等に関わる背景の透過や大きさ調整は『CANVA』や『GIMP』で軽く整形

### Slack通知

『[Incoming Webhook](https://slack.com/intl/ja-jp/help/articles/115005265063-Slack-%E3%81%A7%E3%81%AE-Incoming-Webhook-%E3%81%AE%E5%88%A9%E7%94%A8)』：Slack連携の方法は色々あるがいちばん簡単な方法

* チャンネルを対象に通知用のURL生成
* ボディーにメッセージ詰め込む
* URLに対してPOSTすれば通知完了
* URLは環境変数を使用して外部漏洩しないよう注意

### JSDoc

* 『[JSDocリファレンス](https://www.typescriptlang.org/ja/docs/handbook/jsdoc-supported-types.html)』：コメントからDocumentsの自動生成
* パッケージ追加でHTMLに吐き出すことも可能
* TypeScriptなので、分かりづらい箇所のみで十分
* フロントはCustom Hooksぐらいで十分、バックはしっかり目に記載する

### ホスティング＆CI/CD

* Next.JSとVercelの相性は流石によく。とくに迷わず構築可能
* バックエンドはHerokuとGitHub Actionsによる連携
  * 変数の受け渡しやスリープの対処など少し面倒くさい
  * ホスティングするタイミングで障害発生・・・
  * 可用性という意味でもそれぞれの領域は疎結合にすべき

### ORM（Object-Relational Mapping）

* [Prisma](https://www.prisma.io/docs/getting-started/quickstart)を使用
  * DB定義やSQLイメージ、型ファイルの自動生成等、使い勝手は悪くない。
  * ただし、Next.JSのHot Reloadと相性は良くない印象
* その他にも種類豊富だが、学習コストは高くないので、色々試すのがいいと考える

### PWA（Progressive Web Apps）

* [next-pwa](https://www.npmjs.com/package/next-pwa)を使用
  * manifestの生成:[Simicart](https://www.simicart.com/manifest-generator.html)あたりを使用してサクッと生成
  * 『next.config.js』を追記
  * 『.gitignore』を追記
