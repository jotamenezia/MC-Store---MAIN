import React from 'react';
import { BarChart3, TrendingUp, Users } from 'lucide-react';
import SlideContainer from '../SlideContainer';
import EditableMetric from '../EditableMetric';

interface Slide07Props {
  costeHora: number;
  horasGraficas: number;
  onHorasGraficasChange: (value: number) => void;
}

const Slide07: React.FC<Slide07Props> = ({ costeHora, horasGraficas, onHorasGraficasChange }) => {
  const ahorroMensual = horasGraficas * costeHora;

  return (
    <SlideContainer>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Gráficas contables
          </h1>
          <p className="text-xl text-gray-300 font-medium">
            Informes automatizados
          </p>
        </div>

        {/* Widget interactivo */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Dashboard interactivo
            </h3>
            <p className="text-gray-400">
              Explora las gráficas contables con controles en tiempo real
            </p>
          </div>
          
          <div className="relative">
            <iframe 
              src="/charts-widget.html" 
              className="w-full h-[600px] border-0 rounded-xl"
              title="Widget de gráficas contables interactivo"
            />
          </div>
        </div>

        {/* Beneficios */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
              <BarChart3 className="text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Ingresos vs gastos</h3>
              <p className="text-gray-400">Comparativas mensuales y anuales automáticas</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
              <TrendingUp className="text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Análisis aging</h3>
              <p className="text-gray-400">Antigüedad de facturas pendientes por rangos</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
              <Users className="text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Top clientes/productos</h3>
              <p className="text-gray-400">Rankings automáticos de rentabilidad</p>
            </div>
          </div>
        </div>

        {/* Métricas editables */}
        <div className="flex justify-center">
          <EditableMetric
            value={horasGraficas}
            onChange={onHorasGraficasChange}
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

export default Slide07;