import { useState } from 'react';
import { solutions, pack, defaultCosteHora } from '../data/solutions';

export const useCalculations = () => {
  const [costeHora, setCosteHora] = useState(defaultCosteHora);
  const [horasFormularios, setHorasFormularios] = useState(25);
  const [horasBaseDatos, setHorasBaseDatos] = useState(6);
  const [horasInventario, setHorasInventario] = useState(14);
  const [horasAvisosCobro, setHorasAvisosCobro] = useState(8);
  const [horasNotificaciones, setHorasNotificaciones] = useState(10);
  const [horasGraficas, setHorasGraficas] = useState(4);
  const [horasFormularioInterno, setHorasFormularioInterno] = useState(10);

  const getActiveSolutions = () => {
    return solutions.map(solution => {
      switch (solution.id) {
        case 1: return { ...solution, horasAhorro: horasFormularios };
        case 2: return { ...solution, horasAhorro: horasBaseDatos };
        case 3: return { ...solution, horasAhorro: horasInventario };
        case 5: return { ...solution, horasAhorro: horasAvisosCobro };
        case 6: return { ...solution, horasAhorro: horasNotificaciones };
        case 7: return { ...solution, horasAhorro: horasGraficas };
        case 8: return { ...solution, horasAhorro: horasFormularioInterno };
        default: return solution;
      }
    });
  };

  const getTotalHorasAhorro = () => {
    return getActiveSolutions()
      .filter(s => s.horasAhorro !== null && s.id !== 4) // Excluir reactivación del total de horas
      .reduce((total, solution) => total + (solution.horasAhorro || 0), 0);
  };

  const getAhorroMensual = () => {
    return getActiveSolutions()
      .filter(s => s.horasAhorro !== null && s.id !== 4) // Excluir reactivación del total monetario
      .reduce((total, solution) => total + ((solution.horasAhorro || 0) * costeHora), 0);
  };

  const getIngresosReactivacion = () => {
    // Valor fijo para ingresos recuperados por campaña de reactivación
    return 2500; // €/campaña (valor orientativo)
  };

  const getPaybackMeses = () => {
    const ahorroMensual = getAhorroMensual();
    if (ahorroMensual === 0) return 0;
    return 9900 / ahorroMensual; // Pack sin OCR
  };

  const getPaybackData = () => {
    const paybackMeses = getPaybackMeses();
    const data = [];
    for (let mes = 0; mes <= 12; mes++) {
      const ahorroAcumulado = mes * getAhorroMensual();
      const balance = ahorroAcumulado - 9900;
      data.push({
        mes,
        balance,
        ahorroAcumulado,
        inversion: 9900
      });
    }
    return data;
  };

  return {
    costeHora,
    setCosteHora,
    horasFormularios,
    setHorasFormularios,
    horasBaseDatos,
    setHorasBaseDatos,
    horasInventario,
    setHorasInventario,
    horasAvisosCobro,
    setHorasAvisosCobro,
    horasNotificaciones,
    setHorasNotificaciones,
    horasGraficas,
    setHorasGraficas,
    horasFormularioInterno,
    setHorasFormularioInterno,
    getActiveSolutions,
    getTotalHorasAhorro,
    getAhorroMensual,
    getIngresosReactivacion,
    getPaybackMeses,
    getPaybackData
  };
};