import React from 'react';
import { UserCheck, MessageSquare, BarChart3 } from 'lucide-react';
import SlideContainer from '../SlideContainer';
import SolutionCard from '../SolutionCard';

interface Slide04Props {
  costeHora: number;
}

const Slide04: React.FC<Slide04Props> = ({ costeHora }) => {
  return (
    <SlideContainer>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              Reactivación de clientes
            </h1>
            <p className="text-xl text-gray-300 font-medium">
              Recupera clientes inactivos
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
                <UserCheck className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Segmentación por última compra</h3>
                <p className="text-gray-400">Identifica automáticamente clientes según su inactividad</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
                <MessageSquare className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Mensajes programados</h3>
                <p className="text-gray-400">Campañas automáticas de reactivación personalizadas</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-600/20 rounded-lg mt-1">
                <BarChart3 className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Seguimiento de respuestas</h3>
                <p className="text-gray-400">Métricas de apertura, clics y conversiones</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <SolutionCard 
            horasAhorro={null}
            costeHora={costeHora}
            isReactivacion={true}
          />
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

export default Slide04;