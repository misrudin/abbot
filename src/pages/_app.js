import 'styles/globals.scss'
import {DefaultSeo} from 'next-seo';

import SEO from '../../next-seo.config';

function MyApp({Component, pageProps}) {
  if (process.env.NODE_ENV === 'production') {
    console.log = function () {
    };
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
