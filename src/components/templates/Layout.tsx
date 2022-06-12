import { Box, useDisclosure } from '@chakra-ui/react';
import { PageHead } from '@src/components/atoms';
import { Footer, Header, SidebarDrawer, SideNavbar } from '@src/components/organisms';
import { memo } from 'react';

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { title = '', description, children } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pageTitle = title.length
    ? title + ' | ' + process.env.NEXT_PUBLIC_TITLE
    : process.env.NEXT_PUBLIC_TITLE;
  return (
    <>
      <PageHead title={pageTitle} description={description} />
      <Box minH='100vh' bg={'bgPrimary'}>
        <SideNavbar display={{ base: 'none', md: 'block' }} />
        <SidebarDrawer isOpen={isOpen} onClose={onClose} />
        <Header onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} py='4' className='body'>
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default memo(Layout);
