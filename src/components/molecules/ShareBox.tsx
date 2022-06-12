import { Center, Grid, GridItem } from '@chakra-ui/react';
import {
  ShareCopyButton,
  ShareRoundEmailButton,
  ShareRoundFacebookButton,
  ShareRoundHatenaButton,
  ShareRoundLineButton,
  ShareRoundPocketButton,
  ShareRoundTwitterButton,
} from '@src/components/atoms';
import { useRouter } from 'next/router';
import { memo } from 'react';

const ShareBox = () => {
  const router = useRouter();
  const url = router.asPath;
  const title = process.env.NEXT_PUBLIC_TITLE;
  const size = 48;
  return (
    <Center m={'auto'} p={2}>
      <Grid templateRows='repeat(3)' templateColumns='repeat(3)' gap={4}>
        <GridItem colSpan={1}>
          <ShareRoundFacebookButton url={url} title={title} size={size} />
        </GridItem>
        <GridItem colSpan={1}>
          <ShareRoundTwitterButton url={url} title={title} size={size} />
        </GridItem>
        <GridItem colSpan={1}>
          <ShareRoundLineButton url={url} title={title} size={size} />
        </GridItem>
        <GridItem colSpan={1}>
          <ShareRoundHatenaButton url={url} title={title} size={size} />
        </GridItem>
        <GridItem colSpan={1}>
          <ShareRoundPocketButton url={url} title={title} size={size} />
        </GridItem>
        <GridItem colSpan={1}>
          <ShareRoundEmailButton url={url} title={title} size={size} />
        </GridItem>
        <GridItem colSpan={3} m={'auto'}>
          <ShareCopyButton url={url} />
        </GridItem>
      </Grid>
    </Center>
  );
};

export default memo(ShareBox);
