import React from 'react';
import { Truck, CheckCircle, RotateCcw } from 'lucide-react';
import SlideContainer from '../SlideContainer';
import EditableMetric from '../EditableMetric';

interface Slide06Props {
  costeHora: number;
  horasNotificaciones: number;
  onHorasNotificacionesChange: (value: number) => void;
}

const Slide06: React.FC<Slide06Props> = ({ costeHora, horasNotificaciones, onHorasNotificacionesChange }) => {
  const ahorroMensual = horasNotificaciones * costeHora;

  return (
    <SlideContainer>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              Notificaciones de entrega
            </h1>
            <p className="text-xl text-gray-300 font-medium">
              Con confirmación automática
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
                <Truck className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Aviso N días antes</h3>
                <p className="text-gray-400">Notificación previa de la entrega programada</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
                <CheckCircle className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Confirmación o reprogramación</h3>
                <p className="text-gray-400">El cliente puede confirmar o solicitar cambio de fecha</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
                <RotateCcw className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Registro de interacciones</h3>
                <p className="text-gray-400">Historial completo de comunicaciones y cambios</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="flex justify-center lg:justify-end">
            <EditableMetric
              value={horasNotificaciones}
              onChange={onHorasNotificacionesChange}
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

export default Slide06;