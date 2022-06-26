import Info from '@src/pages/info';
import { render, screen } from '@testing-library/react';

// TOC&サイドメニュー分があるため複数ヒット
describe('Info', () => {
  it('Should render header text', async () => {
    render(<Info />);
    expect(screen.getAllByText(`${process.env.NEXT_PUBLIC_TITLE}について`)).toHaveLength(2);
    expect(screen.getAllByText(`${process.env.NEXT_PUBLIC_TITLE}とは`)).toHaveLength(3);
    expect(screen.getAllByText('対象者と提供するもの')).toHaveLength(2);
    expect(screen.getAllByText('構成要素')).toHaveLength(2);
    expect(screen.getAllByText('自己紹介')).toHaveLength(2);
  });
});
