import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

interface PaybackData {
  mes: number;
  balance: number;
  ahorroAcumulado: number;
  inversion: number;
}

interface PaybackLineChartProps {
  data: PaybackData[];
}

const PaybackLineChart: React.FC<PaybackLineChartProps> = ({ data }) => {
  return (
    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        Payback acumulado del pack (12 meses)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="mes" 
            stroke="#9CA3AF"
            label={{ value: 'Meses', position: 'insideBottom', offset: -10, style: { textAnchor: 'middle', fill: '#9CA3AF' } }}
          />
          <YAxis 
            stroke="#9CA3AF"
            tickFormatter={(value) => `${(value/1000).toFixed(0)}k€`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB'
            }}
            formatter={(value: number) => [`${value.toLocaleString()}€`, 'Balance']}
            labelFormatter={(label) => `Mes ${label}`}
          />
          <ReferenceLine 
            y={0} 
            stroke="#10B981" 
            strokeDasharray="3 3"
            label={{ value: "Punto de equilibrio", position: "topLeft", style: { fill: '#10B981' } }}
          />
          <Line 
            type="monotone" 
            dataKey="balance" 
            stroke="#3B82F6" 
            strokeWidth={3}
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#8B5CF6' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaybackLineChart;