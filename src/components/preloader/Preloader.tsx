import React from 'react';
import { Wrapper, Loader } from './PreloaderStyles';

const Preloader: React.FC = () => (
  <Wrapper>
    <Loader>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </Loader>
  </Wrapper>
);

export default Preloader;
