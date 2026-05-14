import React, { createContext, useState } from 'react';
import { JuegoContextoTipo } from '../types/types';

export const JuegoContext = createContext<JuegoContextoTipo>({
  partidasJugadas: 0,
  aumentarPartidas: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const JuegoProvider = ({ children }: Props) => {
  const [partidasJugadas, setPartidasJugadas] = useState(0);

  const aumentarPartidas = () => {
    setPartidasJugadas((valorAnterior) => valorAnterior + 1);
  };

  return (
    <JuegoContext.Provider
      value={{
        partidasJugadas,
        aumentarPartidas,
      }}
    >
      {children}
    </JuegoContext.Provider>
  );
};