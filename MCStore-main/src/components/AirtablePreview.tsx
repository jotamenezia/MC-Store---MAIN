import React from 'react';
import { ExternalLink, Database, Users, Package, FileText } from 'lucide-react';

const AirtablePreview: React.FC = () => {
  const sampleData = [
    {
      id: 1,
      cliente: "María García",
      producto: "Mármol Carrara",
      cantidad: "15 m²",
      estado: "Pendiente",
      fecha: "08/01/2025",
      total: "2.850€"
    },
    {
      id: 2,
      cliente: "Hotel Majestic",
      producto: "Granito Negro",
      cantidad: "45 m²",
      estado: "En proceso",
      fecha: "07/01/2025",
      total: "6.750€"
    },
    {
      id: 3,
      cliente: "Construcciones López",
      producto: "Travertino",
      cantidad: "28 m²",
      estado: "Entregado",
      fecha: "05/01/2025",
      total: "3.920€"
    },
    {
      id: 4,
      cliente: "Ana Martínez",
      producto: "Cuarzo Blanco",
      cantidad: "12 m²",
      estado: "Facturado",
      fecha: "03/01/2025",
      total: "2.160€"
    }
  ];

  const getStatusColor = (estado: string) => {
    switch (estado) {
      case 'Pendiente': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'En proceso': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Entregado': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Facturado': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header con enlace */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600/20 rounded-lg">
            <Database className="text-blue-400" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Vista previa de Airtable</h3>
            <p className="text-gray-400 text-sm">Así quedaría tu base de datos organizada</p>
          </div>
        </div>
        
        <a
          href="https://airtable.com/app1YHusrevWB1mhd/tbldjfoFncKY1j3Qy/viwZ6GXpiSmUWT8f4?blocks=hide"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 font-medium"
        >
          Ver en Airtable
          <ExternalLink size={16} />
        </a>
      </div>

      {/* Tabla simulada */}
      <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Cliente</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Producto</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Cantidad</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Estado</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Fecha</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-300">Total</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row, index) => (
                <tr key={row.id} className={index < sampleData.length - 1 ? 'border-b border-gray-700/50' : ''}>
                  <td className="px-4 py-3 text-white font-medium">{row.cliente}</td>
                  <td className="px-4 py-3 text-gray-300">{row.producto}</td>
                  <td className="px-4 py-3 text-gray-300">{row.cantidad}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(row.estado)}`}>
                      {row.estado}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-300">{row.fecha}</td>
                  <td className="px-4 py-3 text-right text-white font-semibold">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Características destacadas */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
          <Users className="text-blue-400" size={20} />
          <span className="text-sm text-gray-300">Clientes organizados</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
          <Package className="text-blue-400" size={20} />
          <span className="text-sm text-gray-300">Productos catalogados</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
          <FileText className="text-blue-400" size={20} />
          <span className="text-sm text-gray-300">Estados actualizados</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
          <Database className="text-blue-400" size={20} />
          <span className="text-sm text-gray-300">Datos conectados</span>
        </div>
      </div>
    </div>
  );
};

export default AirtablePreview;