import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = ({ title, desc, image = '/favicon.ico' }) => {
  const formatTile = `${title} | Abbot`;

  const config = {
    title: formatTile,
    description: desc,

    openGraph: {
      title: formatTile,
      description: desc,
      images: [
        {
          url: image,
        },
      ],
    },
  };

  return <NextSeo {...config} />;
};

export default SEO;
