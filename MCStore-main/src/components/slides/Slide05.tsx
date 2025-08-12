import React from 'react';
import { Calendar, Mail, CheckCircle2 } from 'lucide-react';
import SlideContainer from '../SlideContainer';
import EditableMetric from '../EditableMetric';

interface Slide05Props {
  costeHora: number;
  horasAvisosCobro: number;
  onHorasAvisosCobroChange: (value: number) => void;
}

const Slide05: React.FC<Slide05Props> = ({ costeHora, horasAvisosCobro, onHorasAvisosCobroChange }) => {
  const ahorroMensual = horasAvisosCobro * costeHora;

  return (
    <SlideContainer>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              Avisos de cobro
            </h1>
            <p className="text-xl text-gray-300 font-medium">
              Sistema programado de seguimiento
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
                <Calendar className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Filtro por antigüedad</h3>
                <p className="text-gray-400">Detecta automáticamente facturas vencidas</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
                <Mail className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Envíos los lunes</h3>
                <p className="text-gray-400">Recordatorios programados semanalmente</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
                <CheckCircle2 className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Estados de seguimiento</h3>
                <p className="text-gray-400">Control de enviado, leído y pagado</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="flex justify-center lg:justify-end">
            <EditableMetric
              value={horasAvisosCobro}
              onChange={onHorasAvisosCobroChange}
              label="Ahorro de tiempo/mes"
              unit="h"
              min={1}
              max={50}
              step={1}
            />
          </div>

          <div className="text-center lg:text-right">
            <p className="text-purple-400 font-medium text-lg">
              ~{ahorroMensual.toLocaleString()} €/mes
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Valores orientativos. Ajuste según reglas y volumen.
        </p>
      </div>
    </SlideContainer>
  );
};

export default Slide05;