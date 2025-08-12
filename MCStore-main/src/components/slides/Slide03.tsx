import React from 'react';
import { Package, TrendingDown, Bell } from 'lucide-react';
import SlideContainer from '../SlideContainer';
import EditableMetric from '../EditableMetric';

interface Slide03Props {
  costeHora: number;
  horasInventario: number;
  onHorasInventarioChange: (value: number) => void;
}

const Slide03: React.FC<Slide03Props> = ({ costeHora, horasInventario, onHorasInventarioChange }) => {
  const ahorroMensual = horasInventario * costeHora;

  return (
    <SlideContainer>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Inventario conectado
          </h1>
          <p className="text-xl text-gray-300 font-medium">
            Alertas automáticas de stock
          </p>
        </div>

        {/* Widget interactivo */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Demo interactiva
            </h3>
            <p className="text-gray-400">
              Prueba cómo funcionan las alertas automáticas de stock
            </p>
          </div>
          
          <div className="relative">
            <iframe 
              src="/inventory-widget.html" 
              className="w-full h-96 border-0 rounded-xl"
              title="Widget de inventario interactivo"
            />
          </div>
        </div>

        {/* Beneficios */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
              <Package className="text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Entradas y salidas</h3>
              <p className="text-gray-400">Control automático de movimientos de inventario</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
              <TrendingDown className="text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Descuento por pedido</h3>
              <p className="text-gray-400">Actualización automática del stock al confirmar pedidos</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
              <Bell className="text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Umbrales y avisos</h3>
              <p className="text-gray-400">Notificaciones cuando el stock baja del mínimo configurado</p>
            </div>
          </div>
        </div>

        {/* Métricas editables */}
        <div className="flex justify-center">
          <EditableMetric
            value={horasInventario}
            onChange={onHorasInventarioChange}
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

export default Slide03;