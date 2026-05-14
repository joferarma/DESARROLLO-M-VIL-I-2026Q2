export interface CartaTipo {
  id: number;
  valor: string;
  descubierta: boolean;
}

export interface JuegoContextoTipo {
  partidasJugadas: number;
  aumentarPartidas: () => void;
}