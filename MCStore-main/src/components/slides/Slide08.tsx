import React from 'react';
import { Phone, Zap, FileText } from 'lucide-react';
import SlideContainer from '../SlideContainer';
import EditableMetric from '../EditableMetric';

interface Slide08Props {
  costeHora: number;
  horasFormularioInterno: number;
  onHorasFormularioInternoChange: (value: number) => void;
}

const Slide08: React.FC<Slide08Props> = ({ costeHora, horasFormularioInterno, onHorasFormularioInternoChange }) => {
  const ahorroMensual = horasFormularioInterno * costeHora;

  return (
    <SlideContainer>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              Formulario interno
            </h1>
            <p className="text-xl text-gray-300 font-medium">
              Registro rápido de pedidos
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
                <Phone className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Registro rápido por llamada</h3>
                <p className="text-gray-400">Formulario optimizado para toma de pedidos telefónicos</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
                <FileText className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Campos predefinidos</h3>
                <p className="text-gray-400">Formulario con validaciones y campos obligatorios</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
                <Zap className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Integración completa</h3>
                <p className="text-gray-400">Conecta directamente con inventario y facturación</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="flex justify-center lg:justify-end">
            <EditableMetric
              value={horasFormularioInterno}
              onChange={onHorasFormularioInternoChange}
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

export default Slide08;