import React from 'react';
import { Calculator, Euro, Clock, TrendingUp } from 'lucide-react';
import SlideContainer from '../SlideContainer';
import HorasBarChart from '../Charts/HorasBarChart';
import PesoDonutChart from '../Charts/PesoDonutChart';
import PaybackLineChart from '../Charts/PaybackLineChart';
import { useCalculations } from '../../hooks/useCalculations';

const Slide09: React.FC = () => {
  const {
    costeHora,
    setCosteHora,
    getActiveSolutions,
    getTotalHorasAhorro,
    getAhorroMensual,
    getIngresosReactivacion,
    getPaybackMeses,
    getPaybackData
  } = useCalculations();

  const activeSolutions = getActiveSolutions();
  const totalHoras = getTotalHorasAhorro();
  const ahorroMensual = getAhorroMensual();
  const ingresosReactivacion = getIngresosReactivacion();
  const paybackMeses = getPaybackMeses();
  const paybackData = getPaybackData();

  return (
    <SlideContainer>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            Resumen de coste y ahorro
          </h1>
          
          {/* Control coste hora */}
          <div className="flex justify-center items-center gap-3">
            <label className="text-gray-300 font-medium">Coste por hora:</label>
            <div className="relative">
              <input
                type="number"
                value={costeHora}
                onChange={(e) => setCosteHora(Number(e.target.value))}
                className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white w-24 text-center"
                min="1"
                max="100"
              />
              <span className="absolute right-3 top-2 text-gray-400">€/h</span>
            </div>
          </div>
        </div>

        {/* Tabla de soluciones */}
        <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Detalle por solución
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="pb-4 text-gray-300 font-semibold">Solución</th>
                  <th className="pb-4 text-gray-300 font-semibold text-right">Precio €</th>
                  <th className="pb-4 text-gray-300 font-semibold text-right">Ahorro (h/mes)</th>
                  <th className="pb-4 text-gray-300 font-semibold text-right">Ahorro (€/mes)</th>
                  <th className="pb-4 text-gray-300 font-semibold text-right">Ingresos recup. €/campaña*</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {activeSolutions.map((solution, index) => (
                  <tr key={solution.id} className={index < activeSolutions.length - 1 ? 'border-b border-gray-700' : ''}>
                    <td className="py-4">{solution.nombre}</td>
                    <td className="py-4 text-right">{solution.precio.toLocaleString()}</td>
                    <td className="py-4 text-right">
                      {solution.horasAhorro !== null ? solution.horasAhorro : '-'}
                    </td>
                    <td className="py-4 text-right">
                      {solution.horasAhorro !== null ? ((solution.horasAhorro || 0) * costeHora).toLocaleString() : '-'}
                    </td>
                    <td className="py-4 text-right">
                      {solution.id === 4 ? ingresosReactivacion.toLocaleString() : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-600">
            <p className="text-xs text-gray-400">
              * Solo "Reactivación de inactivos" usa "Ingresos recup. €/campaña"
            </p>
          </div>
        </div>

        {/* Métricas principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 text-center">
            <div className="p-3 bg-blue-600/20 rounded-xl w-fit mx-auto mb-3">
              <Calculator className="text-blue-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Pack Fase 1</h3>
            <p className="text-2xl font-bold text-blue-400">9.900 €</p>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 text-center">
            <div className="p-3 bg-purple-600/20 rounded-xl w-fit mx-auto mb-3">
              <Clock className="text-purple-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Ahorro tiempo total</h3>
            <p className="text-2xl font-bold text-purple-400">{totalHoras}h/mes</p>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 text-center">
            <div className="p-3 bg-green-600/20 rounded-xl w-fit mx-auto mb-3">
              <Euro className="text-green-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Ahorro total</h3>
            <p className="text-2xl font-bold text-green-400">{ahorroMensual.toLocaleString()} €/mes</p>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 text-center">
            <div className="p-3 bg-orange-600/20 rounded-xl w-fit mx-auto mb-3">
              <TrendingUp className="text-orange-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Payback</h3>
            <p className="text-2xl font-bold text-orange-400">{paybackMeses.toFixed(1)} meses</p>
          </div>
        </div>

        {/* Ingresos recuperados */}
        <div className="max-w-md mx-auto">
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-2">Ingresos recuperados</h3>
            <p className="text-2xl font-bold text-purple-400">{ingresosReactivacion.toLocaleString()} €/campaña</p>
            <p className="text-sm text-gray-400 mt-1">Reactivación de clientes inactivos</p>
          </div>
        </div>

        {/* Gráficas */}
        <div className="grid lg:grid-cols-2 gap-8">
          <HorasBarChart solutions={activeSolutions} />
          <PesoDonutChart solutions={activeSolutions} />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <PaybackLineChart data={paybackData} />
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide09;