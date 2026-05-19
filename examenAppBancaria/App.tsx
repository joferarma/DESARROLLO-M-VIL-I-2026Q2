import React from 'react';

import NavegacionPrincipal from './src/navegacion/NavegacionPrincipal';

import { BancoProvider } from './src/context/BancoContext';

export default function App() {
  return (
    <BancoProvider>
      <NavegacionPrincipal />
    </BancoProvider>
  );
}