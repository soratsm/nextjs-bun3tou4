import { memo } from 'react';
import { PocketIcon, PocketShareButton } from 'react-share';

type Props = {
  url: string;
  title: string;
  size: string | number;
};

const ShareRoundPocketButton: React.FC<Props> = (props) => {
  const { url, title, size } = props;
  return (
    <>
      <PocketShareButton url={url} title={title}>
        <PocketIcon size={size} round />
      </PocketShareButton>
    </>
  );
};

export default memo(ShareRoundPocketButton);
