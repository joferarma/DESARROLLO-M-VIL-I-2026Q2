import React, { createContext, useEffect, useState } from 'react';

type IMCContextType = {
  peso: number;
  altura: number;
  imc: number;
  clasificacion: string;

  aumentarPeso: () => void;
  disminuirPeso: () => void;

  aumentarAltura: () => void;
  disminuirAltura: () => void;
};

export const IMCContext = createContext<IMCContextType>(
  {} as IMCContextType
);

type Props = {
  children: React.ReactNode;
};

export const IMCProvider = ({ children }: Props) => {
  const [peso, setPeso] = useState<number>(70);
  const [altura, setAltura] = useState<number>(1.70);

  const [imc, setImc] = useState<number>(0);
  const [clasificacion, setClasificacion] = useState<string>('');

  useEffect(() => {
    const resultado = peso / (altura * altura);

    setImc(resultado);

    if (resultado < 18.5) {
      setClasificacion('Bajo peso');
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      setClasificacion('Peso normal');
    } else if (resultado >= 25 && resultado <= 29.9) {
      setClasificacion('Sobrepeso');
    } else {
      setClasificacion('Obesidad');
    }
  }, [peso, altura]);

  const aumentarPeso = () => {
    setPeso(peso + 1);
  };

  const disminuirPeso = () => {
    if (peso > 1) {
      setPeso(peso - 1);
    }
  };

  const aumentarAltura = () => {
    setAltura((valorAnterior) =>
      parseFloat((valorAnterior + 0.01).toFixed(2))
    );
  };

  const disminuirAltura = () => {
    if (altura > 0.5) {
      setAltura((valorAnterior) =>
        parseFloat((valorAnterior - 0.01).toFixed(2))
      );
    }
  };

  return (
    <IMCContext.Provider
      value={{
        peso,
        altura,
        imc,
        clasificacion,
        aumentarPeso,
        disminuirPeso,
        aumentarAltura,
        disminuirAltura,
      }}
    >
      {children}
    </IMCContext.Provider>
  );
};