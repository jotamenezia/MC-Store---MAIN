import React from 'react';
import { Clock } from 'lucide-react';

interface SolutionCardProps {
  horasAhorro: number | null;
  costeHora: number;
  isReactivacion?: boolean;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ horasAhorro, costeHora, isReactivacion = false }) => {
  const ahorroMensual = horasAhorro ? horasAhorro * costeHora : 0;
  const ingresosReactivacion = 2500; // €/campaña

  return (
    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
      <div className="space-y-6">
        {!isReactivacion && horasAhorro && (
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-600/20 rounded-xl">
              <Clock className="text-purple-400" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium">Ahorro de tiempo/mes</p>
              <p className="text-2xl font-bold text-white">{horasAhorro}h</p>
              <p className="text-purple-400 font-medium">
                ~{ahorroMensual.toLocaleString()} €/mes
              </p>
            </div>
          </div>
        )}
        
        {isReactivacion && (
          <div className="p-3 bg-purple-600/20 rounded-xl">
            <div className="text-center">
              <p className="text-gray-400 text-sm font-medium mb-2">Ingresos recuperados</p>
              <p className="text-2xl font-bold text-white">~{ingresosReactivacion.toLocaleString()} €</p>
              <p className="text-purple-400 font-medium">por campaña</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionCard;