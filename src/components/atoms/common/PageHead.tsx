import Head from 'next/head';
import { memo } from 'react';

type Props = {
  title: string;
  description?: string;
  url?: string;
};

const PageHead: React.FC<Props> = (props) => {
  const { title, description, url } = props;
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <meta name='format-detection' content='telephone=no' />

      {/* OGP */}
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='description' content={description ? description : `summary of ${title}`} />
      <meta name='keywords' content={'投資,Chatbot,React,NextJS,Chakra-UI'} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={'/images/logo.png'} />
      <meta property='og:site_name' content={title} />
      <link rel='canonical' href={url} />

      {/* twitter */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@tcr_jp' />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={'/images/logo.png'} />

      {/* Favicon */}
      <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      <link rel='manifest' href='/manifest.json' />

      <link rel='icon' href='/favicons/favicon.ico' />
      <link rel='shortcut icon' href='/favicons/favicon.ico' />
    </Head>
  );
};

export default memo(PageHead);
