import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Solution } from '../../data/solutions';

interface PesoDonutChartProps {
  solutions: Solution[];
}

const COLORS = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#6366F1'];

const PesoDonutChart: React.FC<PesoDonutChartProps> = ({ solutions }) => {
  const data = solutions
    .filter(s => s.horasAhorro !== null && s.id !== 4) // Excluir reactivación
    .map((s, index) => ({
      name: s.nombre.split(' ').slice(0, 2).join(' '),
      value: s.horasAhorro || 0,
      color: COLORS[index % COLORS.length]
    }));

  return (
    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        Peso de cada módulo en ahorro total
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB'
            }}
            formatter={(value: number) => [`${value}h`, 'Ahorro']}
          />
          <Legend 
            wrapperStyle={{ color: '#9CA3AF', fontSize: '12px' }}
            formatter={(value) => <span style={{ color: '#9CA3AF' }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PesoDonutChart;