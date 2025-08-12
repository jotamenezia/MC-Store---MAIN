import React from 'react';
import { FileText, CheckCircle, Upload, Shield, Clock, Users } from 'lucide-react';
import SlideContainer from '../SlideContainer';
import InteractiveFlow from '../InteractiveFlow';
import EditableMetric from '../EditableMetric';

interface Slide01Props {
  costeHora: number;
  horasFormularios: number;
  onHorasFormulariosChange: (value: number) => void;
}

const Slide01: React.FC<Slide01Props> = ({ costeHora, horasFormularios, onHorasFormulariosChange }) => {
  const ahorroMensual = horasFormularios * costeHora;

  return (
    <SlideContainer>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Formularios de clientes
          </h1>
          <p className="text-xl text-gray-300 font-medium">
            Registro de pedidos automático y fiable
          </p>
        </div>

        {/* Flujo interactivo */}
        <InteractiveFlow />

        {/* Beneficios */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Beneficios clave
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-4">
              <div className="p-4 bg-blue-600/20 rounded-xl w-fit mx-auto">
                <Shield className="text-blue-400" size={32} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Recepción estructurada
                </h4>
                <p className="text-gray-400 text-sm">
                  Información completa sin omisiones ni errores de transcripción
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 bg-green-600/20 rounded-xl w-fit mx-auto">
                <Users className="text-green-400" size={32} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Experiencia mejorada
                </h4>
                <p className="text-gray-400 text-sm">
                  Confirmación automática que mejora la experiencia del cliente
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="p-4 bg-purple-600/20 rounded-xl w-fit mx-auto">
                <Clock className="text-purple-400" size={32} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Proceso ágil
                </h4>
                <p className="text-gray-400 text-sm">
                  Notificación inmediata al equipo interno para agilizar el proceso
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Métricas editables */}
        <div className="flex justify-center">
          <EditableMetric
            value={horasFormularios}
            onChange={onHorasFormulariosChange}
            label="Ahorro de tiempo/mes"
            unit="h"
            min={1}
            max={50}
            step={1}
          />
        </div>

        {/* Ahorro monetario */}
        <div className="text-center">
          <p className="text-purple-400 font-medium text-lg">
            ~{ahorroMensual.toLocaleString()} €/mes
          </p>
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

export default Slide01;