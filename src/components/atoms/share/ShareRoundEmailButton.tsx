import { memo } from 'react';
import { EmailIcon, EmailShareButton } from 'react-share';

type Props = {
  url: string;
  title: string;
  size: string | number;
};

const ShareRoundEmailButton: React.FC<Props> = (props) => {
  const { url, title, size } = props;
  return (
    <>
      <EmailShareButton url={url} subject={title}>
        <EmailIcon size={size} round />
      </EmailShareButton>
    </>
  );
};

export default memo(ShareRoundEmailButton);
