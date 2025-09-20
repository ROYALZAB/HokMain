const defaultTitle = 'HouseOfKhaja – AI Automation Solutions';
const defaultDescription =
  'HouseOfKhaja provides AI-powered solutions for customer interactions, appointment scheduling, and automation to help businesses save time and grow.';

const SEO = {
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://houseofkhaja.com/', // your domain
    site_name: 'HouseOfKhaja',
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: 'https://houseofkhaja.com/og-image.png', // upload this to /public
        width: 1200,
        height: 630,
        alt: 'HouseOfKhaja AI Automation',
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico', // replace with your favicon
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
  twitter: {
    handle: '@houseofkhaja', // update once you make a Twitter/X
    site: '@houseofkhaja',
    cardType: 'summary_large_image',
  },
};

export default SEO;
