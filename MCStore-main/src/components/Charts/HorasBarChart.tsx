import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Solution } from '../../data/solutions';

interface HorasBarChartProps {
  solutions: Solution[];
}

const HorasBarChart: React.FC<HorasBarChartProps> = ({ solutions }) => {
  const data = solutions
    .filter(s => s.horasAhorro !== null && s.id !== 4) // Excluir reactivación
    .map(s => ({
      nombre: s.nombre.split(' ').slice(0, 2).join(' '), // Acortar nombres
      horas: s.horasAhorro || 0
    }));

  return (
    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        Horas ahorradas por solución
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="nombre" 
            stroke="#9CA3AF"
            angle={-45}
            textAnchor="end"
            height={80}
            fontSize={12}
          />
          <YAxis stroke="#9CA3AF" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB'
            }}
          />
          <Bar 
            dataKey="horas" 
            fill="url(#blueGradient)"
            radius={[4, 4, 0, 0]}
          />
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HorasBarChart;