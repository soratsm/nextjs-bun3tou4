import { memo } from 'react';
import { LineIcon, LineShareButton } from 'react-share';

type Props = {
  url: string;
  title: string;
  size: string | number;
};

const ShareRoundLineButton: React.FC<Props> = (props) => {
  const { url, title, size } = props;
  return (
    <>
      <LineShareButton url={url} title={title}>
        <LineIcon size={size} round />
      </LineShareButton>
    </>
  );
};

export default memo(ShareRoundLineButton);
