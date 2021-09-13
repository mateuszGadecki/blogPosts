import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title = '' }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;
