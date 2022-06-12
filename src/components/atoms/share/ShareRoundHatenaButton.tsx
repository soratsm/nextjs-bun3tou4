import { memo } from 'react';
import { HatenaIcon, HatenaShareButton } from 'react-share';

type Props = {
  url: string;
  title: string;
  size: string | number;
};

const ShareRoundHatenaButton: React.FC<Props> = (props) => {
  const { url, title, size } = props;
  return (
    <>
      <HatenaShareButton url={url} title={title}>
        <HatenaIcon size={size} round />
      </HatenaShareButton>
    </>
  );
};

export default memo(ShareRoundHatenaButton);
