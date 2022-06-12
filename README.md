# Portfolio

## 対象

* 超長期運用を目的としている20～50代の日本人
* 具体的にはつみたてNISA（20年）・IDECO（60歳まで）を活用して資産運用する人に向けた投資情報

## 提供するもの

* 分散投資に活用できる情報
  * 各種ETFの国ごとの分散
  * 資産分散
  * 会社分散
* 各種ETFを活用したシミュレーション
  * 資産クラスごとの相関係数を基に加重平均
* 現状のポートフォリオの管理
  * ユーザー情報の管理
* シミュレーションとポートフォリオを比較したリバランス内容の整理
* 忘れた頃に見たい投資の考えをブログとして投稿
  * 現代ポートフォリオ理論の図とその説明など
  * どの証券口座がお得かなど（アフィリエイト）

## 技術構成

### フロントエンド

* NextJSによるETF情報のSSG
  * 参照のしやすさ
  * グラフ等での視覚化
* シミュレーション
  * 資産金額に応じてETF毎の投入金額
* 自身のポートフォリオ管理
  * 認証周りはFireAuthに任せる
* ブログ
  * マークダウンで記載して表示＆SSG
* データの取得
  * 自身で構築したバックエンドにaxiosで取得
* ホスティングはVarcel
* AtomicDesignによるコンポーネント構成
* ChakraUIによる画面構築

### バックエンド

* NestJSによる構築
  * フロントともにTypeScriptで実装
* シミュレーションはバックエンドでロジック
* DBはMysqlでPrismaで操作
* DockerでAWSあたりにホスティング

### データ取得

* スクレイピングでデータ取得
* 取得したデータを必要な形式に変換してMysqlに格納
* 定期スケジューリングでデータの更新

### logo

* https://hatchful.shopify.com/
* 上記で作成したLOGO.pngを下記に渡して生成
* https://realfavicongenerator.net

### Analytics

* https://qiita.com/y_kawase/items/8f1b5a303400a09c4923
* ホスティングしたらもう一度Analyticsを実装
* https://panda-program.com/posts/nextjs-google-analytics
* https://zenn.dev/renshimosawa/articles/086f30b628c153

### JSDoc

* https://ics.media/entry/6789/
* https://qiita.com/opengl-8080/items/a36679f7926f4cac0a81
