import PrivacyPolicy from '@src/pages/privacy-policy';
import { render, screen } from '@testing-library/react';

// TOC&サイドメニュー分があるため複数ヒット
describe('PrivacyPolicy', () => {
  it('Should render header text', async () => {
    render(<PrivacyPolicy />);
    expect(screen.getAllByText('プライバシーポリシー')).toHaveLength(3);
    expect(screen.getAllByText('基本方針')).toHaveLength(2);
    expect(screen.getAllByText('適用範囲')).toHaveLength(2);
    expect(screen.getAllByText('個人情報の利用目的')).toHaveLength(2);
    expect(screen.getAllByText('個人情報の管理')).toHaveLength(2);
    expect(screen.getAllByText('個人情報の第三者提供')).toHaveLength(2);
    expect(screen.getAllByText('個人情報に関するお問い合わせ')).toHaveLength(2);
    expect(screen.getAllByText('Cookie（クッキー）')).toHaveLength(2);
    expect(screen.getAllByText('アクセス解析')).toHaveLength(2);
    expect(screen.getAllByText('広告配信')).toHaveLength(2);
    expect(screen.getAllByText('コメント・お問い合わせフォーム')).toHaveLength(2);
    expect(screen.getAllByText('他サイトからの埋め込みコンテンツ')).toHaveLength(2);
    expect(screen.getAllByText('免責事項')).toHaveLength(2);
    expect(screen.getAllByText('著作権・肖像権')).toHaveLength(2);
    expect(screen.getAllByText('リンク')).toHaveLength(2);
    expect(screen.getAllByText('本プライバシーポリシーの変更')).toHaveLength(2);
  });
});
