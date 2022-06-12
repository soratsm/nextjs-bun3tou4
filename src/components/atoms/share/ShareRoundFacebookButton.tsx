import { memo } from 'react';
import { FacebookIcon, FacebookShareButton } from 'react-share';

type Props = {
  url: string;
  title: string;
  size: string | number;
};

const ShareRoundFacebookButton: React.FC<Props> = (props) => {
  const { url, title, size } = props;
  return (
    <>
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={size} round />
      </FacebookShareButton>
    </>
  );
};

export default memo(ShareRoundFacebookButton);
