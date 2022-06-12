import {
  Box,
  BoxProps,
  Heading,
  ListItem,
  ListProps,
  Text,
  TextProps,
  UnorderedList,
} from '@chakra-ui/react';
import { Tocbot, TocH3 } from '@src/components/atoms';
import { Layout } from '@src/components/templates';
import { memo } from 'react';

const PrivacyPolicy = () => (
  <Layout title='info'>
    <Heading size='lg' p={2} m={2} borderBottom={'double'}>
      プライバシーポリシー
    </Heading>
    <Tocbot />
    <SBox>
      <TocH3>基本方針</TocH3>
      <SText>
        当サイトは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サイトで取扱う個人情報の取得、利用、管理を適正に行います。
      </SText>
    </SBox>
    <SBox>
      <TocH3>適用範囲</TocH3>
      <SText>
        本プライバシーポリシーは、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。
      </SText>
    </SBox>
    <SBox>
      <TocH3>個人情報の利用目的</TocH3>
      <SText>
        当サイトは、お客様からご提供いただく情報を以下の目的の範囲内において利用します。
      </SText>
      <SList>
        <ListItem>ご本人確認のため</ListItem>
        <ListItem>お問い合わせ、コメント等の確認・回答のため</ListItem>
        <ListItem>メールマガジン・DM・各種お知らせ等の配信・送付のため</ListItem>
        <ListItem>キャンペーン・アンケート・モニター・取材等の実施のため</ListItem>
        <ListItem>サービスの提供・改善・開発・マーケティングのため</ListItem>
        <ListItem>
          お客さまの承諾・申込みに基づく、提携事業者・団体等への個人情報の提供のため
        </ListItem>
        <ListItem>利用規約等で禁じている行為などの調査のため</ListItem>
        <ListItem>その他個別に承諾いただいた目的</ListItem>
      </SList>
    </SBox>
    <SBox>
      <TocH3>個人情報の管理</TocH3>
      <SText>
        当サイトは、個人情報の正確性及び安全確保のために、セキュリティ対策を徹底し、個人情報の漏洩、改ざん、不正アクセスなどの危険については、必要かつ適切なレベルの安全対策を実施します。
      </SText>
      <SText>
        当サイトは、第三者に重要な情報を読み取られたり、改ざんされたりすることを防ぐために、SSLによる暗号化を使用しております。
      </SText>
    </SBox>
    <SBox>
      <TocH3>個人情報の第三者提供</TocH3>
      <SText>
        当サイトは、以下を含む正当な理由がある場合を除き、個人情報を第三者に提供することはありません。
      </SText>
      <SList>
        <ListItem>ご本人の同意がある場合</ListItem>
        <ListItem>法令に基づく場合</ListItem>
        <ListItem>人の生命・身体・財産の保護に必要な場合</ListItem>
        <ListItem>公衆衛生・児童の健全育成に必要な場合</ListItem>
        <ListItem>国の機関等の法令の定める事務への協力の場合（税務調査、統計調査等）</ListItem>
      </SList>
      <SText>
        当サイトでは、利用目的の達成に必要な範囲内において、他の事業者へ個人情報を委託することがあります。
      </SText>
    </SBox>
    <SBox>
      <TocH3>個人情報に関するお問い合わせ</TocH3>
      <SText>
        開示、訂正、利用停止等のお申し出があった場合には、所定の方法に基づき対応致します。具体的な方法については、個別にご案内しますので、お問い合わせください。
      </SText>
    </SBox>
    <SBox>
      <TocH3>Cookie（クッキー）</TocH3>
      <SText>
        Cookie（クッキー）は、利用者のサイト閲覧履歴を、利用者のコンピュータに保存しておく仕組みです。
      </SText>
      <SText>
        利用者はCookie（クッキー）を無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。ただし、Cookie（クッキー）を拒否した場合、当サイトのいくつかのサービス・機能が正しく動作しない場合があります。
      </SText>
    </SBox>
    <SBox>
      <TocH3>アクセス解析</TocH3>
      <SText>
        当サイトでは、サイトの分析と改善のためにGoogleが提供している「Googleアナリティクス」を利用しています。
      </SText>
      <SText>
        このサービスは、トラフィックデータの収集のためにCookie（クッキー）を使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
      </SText>
    </SBox>
    <SBox>
      <TocH3>広告配信</TocH3>
      <SText>当サイトは、第三者配信の広告サービス「Google アドセンス」を利用しています。</SText>
      <SText>
        広告配信事業者は、利用者の興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。これによって利用者のブラウザを識別できるようになりますが、個人を特定するものではありません。
      </SText>
      <SText>
        Cookie（クッキー）を無効にする方法や「Googleアドセンス」に関する詳細は、https://policies.google.com/technologies/ads?gl=jpをご覧ください。
      </SText>
    </SBox>
    <SBox>
      <TocH3>コメント・お問い合わせフォーム</TocH3>
      <SText>
        当サイトでは、コメント・お問い合わせフォームに表示されているデータ、そしてスパム検出に役立てるためのIP
        アドレスやブラウザのユーザーエージェント文字列等を収集します。
      </SText>
      <SText>
        メールアドレスから作成される匿名化されたハッシュ文字列は、あなたが「Gravatar」サービスを使用中かどうか確認するため同サービスに提供されることがあります。
      </SText>
      <SText>
        同サービスのプライバシーポリシーは、https://automattic.com/privacy/ をご覧ください。
      </SText>
    </SBox>
    <SBox>
      <TocH3>他サイトからの埋め込みコンテンツ</TocH3>
      <SText>
        当サイトには、埋め込みコンテンツ
        （動画、画像、投稿など）が含まれます。他サイトからの埋め込みコンテンツは、訪問者がそのサイトを訪れた場合とまったく同じように振る舞います。
      </SText>
      <SText>
        これらのサイトは、あなたのデータの収集、Cookie（クッキー）の使用、サードパーティによる追加トラッキングの埋め込み、埋め込みコンテンツとのやりとりの監視を行うことがあります。
      </SText>
      <SText>
        アカウントを使ってそのサイトにログイン中の場合、埋め込みコンテンツとのやりとりのトラッキングも含まれます。
      </SText>
    </SBox>
    <SBox>
      <TocH3>免責事項</TocH3>
      <SText>
        当サイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
      </SText>
      <SText>
        当サイトからリンクやバナーなどによって他のサイトに移動した場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
      </SText>
      <SText>当サイトで掲載している料金表記について、予告なく変更されることがあります。</SText>
    </SBox>
    <SBox>
      <TocH3>著作権・肖像権</TocH3>
      <SText>
        当サイトで掲載しているすべてのコンテンツ（文章、画像、動画、音声、ファイル等）の著作権・肖像権等は当サイト所有者または各権利所有者が保有し、許可なく無断利用（転載、複製、譲渡、二次利用等）することを禁止します。また、コンテンツの内容を変形・変更・加筆修正することも一切認めておりません。
      </SText>
      <SText>
        各権利所有者におかれましては、万一掲載内容に問題がございましたら、ご本人様よりお問い合わせください。迅速に対応いたします。
      </SText>
    </SBox>
    <SBox>
      <TocH3>リンク</TocH3>
      <SText>
        当サイトは原則リンクフリーです。リンクを行う場合の許可や連絡は不要です。引用する際は、引用元の明記と該当ページへのリンクをお願いします。
      </SText>
      <SText>
        ただし、画像ファイルへの直リンク、インラインフレームを使用したHTMLページ内で表示する形でのリンクはご遠慮ください。
      </SText>
    </SBox>
    <SBox>
      <TocH3>本プライバシーポリシーの変更</TocH3>
      <SText>当サイトは、本プライバシーポリシーの内容を適宜見直し、その改善に努めます。</SText>
      <SText>本プライバシーポリシーは、事前の予告なく変更することがあります。</SText>
      <SText>
        本プライバシーポリシーの変更は、当サイトに掲載された時点で有効になるものとします。
      </SText>
    </SBox>
  </Layout>
);

export default memo(PrivacyPolicy);

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
      color={'textPrimary'}
      {...props}
    />
  );
};

const SText: React.FC<TextProps> = (props) => {
  return <Text fontSize={'0.875rem'} mt={'3'} {...props} />;
};

const SList: React.FC<ListProps> = (props) => {
  return <UnorderedList fontSize={'0.875rem'} mt={'3'} {...props} />;
};
