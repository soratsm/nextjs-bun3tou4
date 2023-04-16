import { Box, BoxProps, Heading, ListItem, Text, LinkProps, UnorderedList } from '@chakra-ui/react';
import { Link, Tocbot, TocH3 } from '@src/components/atoms';
import { Layout } from '@src/components/templates';
import { memo } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Info = () => (
  <Layout title='info'>
    <Heading size='lg' p={2} m={2} borderBottom={'double'}>
      {`${process.env.NEXT_PUBLIC_TITLE}について`}
    </Heading>
    <Tocbot />
    <SBox>
      <TocH3>{`${process.env.NEXT_PUBLIC_TITLE}とは`}</TocH3>
      <Text>
        ETFの組み合わせから資産分散の実態を可視化するアプリ。
        各ETFの投資対象の国・銘柄・分野の投資比率を一覧に表示します。
        スクレイピングを用いて、定期的に最新情報を自動取得しています。
      </Text>
    </SBox>
    <SBox>
      <TocH3>対象者と提供するもの</TocH3>
      <Text>
        超長期運用を目的としている人を対象に、資産の分散を重視したポートフォリオの検討やリバランスに活用できる情報を提供。
      </Text>
      <br />
      <Text>具体的には下記機能を提供しています。</Text>
      <UnorderedList>
        <ListItem>
          各種ETFの国・銘柄・分野ごとの分散状況を手軽に確認(静的サイトによる高速表示)
        </ListItem>
        <ListItem>ETFの組み合わせにおけるシミュレーション機能</ListItem>
      </UnorderedList>
      <br />
      <Text>今後の機能拡充として下記を検討していますが、ご意見等あれば大歓迎</Text>
      <UnorderedList>
        <ListItem>資産クラスごとの相関係数を基に加重平均</ListItem>
        <ListItem>シミュレーションとポートフォリオを比較したリバランス内容の整理</ListItem>
        <ListItem>現代ポートフォリオ理論の図とその説明など</ListItem>
      </UnorderedList>
    </SBox>
    <SBox>
      <TocH3>構成要素</TocH3>
      <Text>
        本アプリでは下記技術を用いており、各サービスの仕様変更ならびに障害発生時には、本アプリの提供・公開を中断する場合もございます。予めご了承下さい。
      </Text>
      <br />
      <Text>フロントエンド</Text>
      <UnorderedList>
        <ListItem>Next.js(React派生)によるETF情報のSSG</ListItem>
        <ListItem>円グラフを用いた情報の視覚化</ListItem>
        <ListItem>Supabaseからprismaやaxiosを使ったデータ取得</ListItem>
        <ListItem>AtomicDesignによるコンポーネント構成</ListItem>
        <ListItem>Chakra UIによる画面構築</ListItem>
        <ListItem>チャットボットを経由して、Slack通知や外部ページヘの誘導</ListItem>
      </UnorderedList>
      <br />
      <Text>バックエンド</Text>
      <UnorderedList>
        <ListItem>NestJS(Express派生)によるTypeScript実装</ListItem>
        <ListItem>Puppeteer(Headless Chrome)を用いたスクレイピング</ListItem>
        <ListItem>Node Cronによるジョブ定期実行</ListItem>
        <ListItem>Supabaseへprismaを使ったデータ格納</ListItem>
      </UnorderedList>
    </SBox>
    <SBox>
      <TocH3>自己紹介</TocH3>
      <Text>
        <SLink href='https://twitter.com/soratsm'>@soratsm</SLink>
      </Text>
      <br />
      <Text>
        モノを作る事が好き。言語にこだわりはなく、フロントエンド～サーバーサイドまで適当に触って楽しんでます。最近のモダンな言語の開発体験は素晴らしい。
      </Text>
      <br />
      <Text>
        このアプリは、SPAアプリ作成入門者が、ポートフォリオ代わりに上記のようなライブラリやサービス使って、あったらいいなを作ってみたモノです。
      </Text>
      <Text>
        まだまだ荒削りですが、コードも公開しているのでこんな感じのアプリを作りたい方は参考にしてみて下さい。
      </Text>
      <Text>
        ただ、私自身も初学者のためあくまで参考程度にご利用下さい。（ご指摘・質問など大歓迎）
      </Text>
      <br />
      <Text>ソース：</Text>
      <Text>
        <SLink href='https://github.com/soratsm/nextjs-bun3tou4'>フロント GitHub</SLink>
      </Text>
      <Text>
        <SLink href='https://github.com/soratsm/nestjs-schedule-scraping'>
          バックエンド GitHub
        </SLink>
      </Text>
      <br />
      <Text>
        ご指摘・ご質問やお仕事相談は、
        <SLink href='https://twitter.com/soratsm'>Twitter</SLink>
　　　　　　　　　　　　　よりご連絡下さい。
      </Text>
    </SBox>
  </Layout>
);

export default memo(Info);

// style
const SBox: React.FC<BoxProps> = (props) => {
  return (
    <Box
      borderRadius={'md'}
      px={'4'}
      py={'4'}
      m={'2'}
      maxW={'100v'}
      boxShadow={'md'}
      bg={'bgSecondary'}
      Color={'textPrimary'}
      {...props}
    />
  );
};

const SLink: React.FC<LinkProps> = (props) => {
  return (
    <Link color='teal.500' isExternal {...props}>
      {props.children}
      <ExternalLinkIcon mx='3px' />
    </Link>
  );
};
