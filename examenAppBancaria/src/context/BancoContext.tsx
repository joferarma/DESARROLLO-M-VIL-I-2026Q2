import React, { createContext, useState } from 'react';

interface Transaccion {
  id: number;
  descripcion: string;
}

interface BancoContextType {
  saldo: number;

  transacciones: Transaccion[];

  depositarSaldo: () => void;

  retirarSaldo: () => void;

  transferirSaldo: (
    cuenta: string,
    destinatario: string,
    monto: number
  ) => boolean;
}

export const BancoContext = createContext(
  {} as BancoContextType
);

export const BancoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [saldo, setSaldo] = useState(10000);

  const [transacciones, setTransacciones] =
    useState<Transaccion[]>([
      {
        id: 1,
        descripcion: 'Saldo inicial L.10000',
      },
    ]);

  const depositarSaldo = () => {
    setSaldo(saldo + 500);

    setTransacciones([
      ...transacciones,
      {
        id: transacciones.length + 1,
        descripcion: 'Deposito de L.500',
      },
    ]);
  };

  const retirarSaldo = () => {
    if (saldo < 200) {
      return;
    }

    setSaldo(saldo - 200);

    setTransacciones([
      ...transacciones,
      {
        id: transacciones.length + 1,
        descripcion: 'Retiro de L.200',
      },
    ]);
  };

  const transferirSaldo = (
    cuenta: string,
    destinatario: string,
    monto: number
  ) => {
    if (monto > saldo) {
      return false;
    }

    setSaldo(saldo - monto);

    setTransacciones([
      ...transacciones,
      {
        id: transacciones.length + 1,
        descripcion:
          'Transferencia de L.' +
          monto +
          ' a ' +
          destinatario,
      },
    ]);

    return true;
  };

  return (
    <BancoContext.Provider
      value={{
        saldo,
        transacciones,
        depositarSaldo,
        retirarSaldo,
        transferirSaldo,
      }}
    >
      {children}
    </BancoContext.Provider>
  );
};