import React from 'react';
import 'yet-another-react-lightbox/styles.css';

import { LazyMotion, domAnimation } from 'framer-motion';
import 'swiper/css';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </>
  );
};

export default AppProvider;
