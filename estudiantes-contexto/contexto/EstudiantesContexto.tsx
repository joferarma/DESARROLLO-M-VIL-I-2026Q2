import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import { Estudiante } from '../interfaces/Estudiante';

interface EstudiantesContextoProps {
  estudiantes: Estudiante[];
  agregarEstudiante: (nombre: string) => void;
  eliminarEstudiante: (id: string) => void;
}

export const EstudiantesContexto =
  createContext<EstudiantesContextoProps>(
    {} as EstudiantesContextoProps
  );

interface Props {
  children: ReactNode;
}

export const EstudiantesProvider = ({ children }: Props) => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    { id: '1', nombre: 'Juan' },
    { id: '2', nombre: 'Maria' },
    { id: '3', nombre: 'Carlos' },
    { id: '4', nombre: 'Ana' },
    { id: '5', nombre: 'Pedro' },
    { id: '6', nombre: 'Luisa' },
    { id: '7', nombre: 'Jose' },
    { id: '8', nombre: 'Carmen' },
    { id: '9', nombre: 'Miguel' },
    { id: '10', nombre: 'Sofia' },
  ]);

  // Agregar estudiante
  const agregarEstudiante = (nombre: string) => {
    const nuevoEstudiante: Estudiante = {
      id: Date.now().toString(),
      nombre,
    };

    setEstudiantes((previos) => [
      ...previos,
      nuevoEstudiante,
    ]);
  };

  // Eliminar estudiante
  const eliminarEstudiante = (id: string) => {
    setEstudiantes((previos) =>
      previos.filter(
        (estudiante) => estudiante.id !== id
      )
    );
  };

  // Simular carga automática después de 5 segundos
  useEffect(() => {
    const temporizador = setTimeout(() => {
      const estudianteAutomatico: Estudiante = {
        id: Date.now().toString(),
        nombre: 'Estudiante Ejemplo',
      };

      setEstudiantes((previos) => [
        ...previos,
        estudianteAutomatico,
      ]);
    }, 5000);

    return () => clearTimeout(temporizador);
  }, []);

  return (
    <EstudiantesContexto.Provider
      value={{
        estudiantes,
        agregarEstudiante,
        eliminarEstudiante,
      }}
    >
      {children}
    </EstudiantesContexto.Provider>
  );
};