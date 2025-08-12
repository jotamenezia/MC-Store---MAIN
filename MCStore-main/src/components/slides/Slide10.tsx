import React from 'react';
import { CheckCircle } from 'lucide-react';
import SlideContainer from '../SlideContainer';

const Slide10: React.FC = () => {
  return (
    <SlideContainer>
      <div className="text-center space-y-12">
        <div className="space-y-8">
          <div className="p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl w-fit mx-auto">
            <CheckCircle className="text-green-400" size={80} />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-white leading-tight">
              Tiempo recuperado.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Todo en orden.
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
              Un sistema claro para trabajar con calma y sin pérdidas
            </p>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent flex-1"></div>
                <span className="text-gray-400 font-medium">Transformación completa</span>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent flex-1"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">Antes</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>📞 Llamadas perdidas</li>
                    <li>📋 Pedidos mal anotados</li>
                    <li>⏰ Horas de búsqueda</li>
                    <li>😰 Estrés constante</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">Después</h3>
                  <ul className="text-green-400 space-y-2">
                    <li>✅ Todo registrado</li>
                    <li>🎯 Datos precisos</li>
                    <li>⚡ Procesos automáticos</li>
                    <li>😌 Trabajo tranquilo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8">
          <p className="text-sm text-gray-500 italic">
            Valores orientativos. Ajuste final en función del volumen real.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide10;