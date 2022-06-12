import { memo } from 'react';
import { TwitterIcon, TwitterShareButton } from 'react-share';

type Props = {
  url: string;
  title: string;
  size: string | number;
};

const ShareRoundTwitterButton: React.FC<Props> = (props) => {
  const { url, title, size } = props;
  return (
    <>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={size} round />
      </TwitterShareButton>
    </>
  );
};

export default memo(ShareRoundTwitterButton);
