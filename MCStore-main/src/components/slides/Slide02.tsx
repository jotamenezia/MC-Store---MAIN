import React from 'react';
import { Database, Users, FileCheck } from 'lucide-react';
import SlideContainer from '../SlideContainer';
import EditableMetric from '../EditableMetric';
import AirtablePreview from '../AirtablePreview';

interface Slide02Props {
  costeHora: number;
  horasBaseDatos: number;
  onHorasBaseDatosChange: (value: number) => void;
}

const Slide02: React.FC<Slide02Props> = ({ costeHora, horasBaseDatos, onHorasBaseDatosChange }) => {
  const ahorroMensual = horasBaseDatos * costeHora;

  return (
    <SlideContainer>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Base de datos optimizada
          </h1>
          <p className="text-xl text-gray-300 font-medium">
            Estructura limpia en Airtable
          </p>
        </div>

        {/* Previsualización de Airtable */}
        <AirtablePreview />
        
        {/* Beneficios */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
              <Database className="text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Estructura y limpieza</h3>
              <p className="text-gray-400">Datos organizados, sin duplicados ni inconsistencias</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
              <Users className="text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Relaciones integradas</h3>
              <p className="text-gray-400">Clientes, productos, pedidos y facturas conectados</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
              <FileCheck className="text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Vistas por equipo</h3>
              <p className="text-gray-400">Cada persona ve solo lo que necesita para su trabajo</p>
            </div>
          </div>
        </div>

        {/* Métricas editables */}
        <div className="flex justify-center">
          <EditableMetric
            value={horasBaseDatos}
            onChange={onHorasBaseDatosChange}
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

export default Slide02;