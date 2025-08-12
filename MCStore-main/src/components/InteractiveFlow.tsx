import React, { useState, useEffect } from 'react';
import { 
  User, 
  Database, 
  CheckCircle, 
  Bell, 
  Eye,
  ArrowRight,
  Smartphone,
  FileText,
  Clock
} from 'lucide-react';

interface FlowStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const InteractiveFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps: FlowStep[] = [
    {
      id: 1,
      title: "Cliente completa formulario",
      description: "Acceso vía QR/enlace desde cualquier dispositivo",
      icon: <User size={24} />,
      color: "text-blue-400",
      bgColor: "bg-blue-600/20"
    },
    {
      id: 2,
      title: "Se introduce en base de datos",
      description: "Registro automático con validaciones",
      icon: <Database size={24} />,
      color: "text-purple-400",
      bgColor: "bg-purple-600/20"
    },
    {
      id: 3,
      title: "Sistema confirma al cliente",
      description: "Email/SMS automático de confirmación",
      icon: <CheckCircle size={24} />,
      color: "text-green-400",
      bgColor: "bg-green-600/20"
    },
    {
      id: 4,
      title: "Aviso interno a MC Store",
      description: "Notificación inmediata al equipo",
      icon: <Bell size={24} />,
      color: "text-orange-400",
      bgColor: "bg-orange-600/20"
    },
    {
      id: 5,
      title: "Seguimiento del pedido",
      description: "Control completo del estado y progreso",
      icon: <Eye size={24} />,
      color: "text-cyan-400",
      bgColor: "bg-cyan-600/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
        setIsAnimating(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const handleStepClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveStep(index);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="space-y-8">
      {/* Flujo visual principal */}
      <div className="relative">
        {/* Línea de conexión */}
        <div className="absolute top-16 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-30"></div>
        
        {/* Pasos del flujo */}
        <div className="flex justify-between items-start relative z-10">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center max-w-32">
              {/* Círculo del paso */}
              <button
                onClick={() => handleStepClick(index)}
                className={`
                  relative w-16 h-16 rounded-full border-2 transition-all duration-500 cursor-pointer
                  ${activeStep === index 
                    ? `${step.bgColor} border-current ${step.color} scale-110 shadow-lg` 
                    : 'bg-gray-800/40 border-gray-600 text-gray-400 hover:border-gray-500'
                  }
                  ${isAnimating && activeStep === index ? 'animate-pulse' : ''}
                `}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {step.icon}
                </div>
                
                {/* Indicador de progreso */}
                {activeStep === index && (
                  <div className="absolute -inset-1 rounded-full border-2 border-current opacity-50 animate-ping"></div>
                )}
              </button>
              
              {/* Flecha de conexión */}
              {index < steps.length - 1 && (
                <ArrowRight 
                  className={`
                    absolute top-6 left-20 text-gray-500 transition-all duration-300
                    ${activeStep === index ? 'text-blue-400 scale-110' : ''}
                  `} 
                  size={16} 
                />
              )}
              
              {/* Título y descripción */}
              <div className="mt-4 text-center">
                <h4 className={`
                  text-sm font-semibold transition-colors duration-300
                  ${activeStep === index ? step.color : 'text-gray-300'}
                `}>
                  {step.title}
                </h4>
                <p className={`
                  text-xs mt-1 transition-colors duration-300
                  ${activeStep === index ? 'text-gray-300' : 'text-gray-500'}
                `}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detalle del paso activo */}
      <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-xl ${steps[activeStep].bgColor}`}>
            <div className={steps[activeStep].color}>
              {steps[activeStep].icon}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Paso {activeStep + 1}: {steps[activeStep].title}
            </h3>
            <p className="text-gray-400">
              {steps[activeStep].description}
            </p>
          </div>
        </div>

        {/* Contenido específico por paso */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {activeStep === 0 && (
            <>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <Smartphone className="text-blue-400" size={20} />
                <span className="text-sm text-gray-300">Acceso móvil/desktop</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <FileText className="text-blue-400" size={20} />
                <span className="text-sm text-gray-300">Campos validados</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <CheckCircle className="text-blue-400" size={20} />
                <span className="text-sm text-gray-300">Adjuntos permitidos</span>
              </div>
            </>
          )}
          
          {activeStep === 1 && (
            <>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <Database className="text-purple-400" size={20} />
                <span className="text-sm text-gray-300">Airtable integrado</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <CheckCircle className="text-purple-400" size={20} />
                <span className="text-sm text-gray-300">Validación automática</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <Clock className="text-purple-400" size={20} />
                <span className="text-sm text-gray-300">Tiempo real</span>
              </div>
            </>
          )}

          {activeStep === 2 && (
            <>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-sm text-gray-300">Email automático</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <Smartphone className="text-green-400" size={20} />
                <span className="text-sm text-gray-300">SMS opcional</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <FileText className="text-green-400" size={20} />
                <span className="text-sm text-gray-300">Resumen del pedido</span>
              </div>
            </>
          )}

          {activeStep === 3 && (
            <>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <Bell className="text-orange-400" size={20} />
                <span className="text-sm text-gray-300">Notificación push</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <User className="text-orange-400" size={20} />
                <span className="text-sm text-gray-300">Asignación automática</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <Clock className="text-orange-400" size={20} />
                <span className="text-sm text-gray-300">Respuesta inmediata</span>
              </div>
            </>
          )}

          {activeStep === 4 && (
            <>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <Eye className="text-cyan-400" size={20} />
                <span className="text-sm text-gray-300">Dashboard completo</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <Bell className="text-cyan-400" size={20} />
                <span className="text-sm text-gray-300">Alertas de estado</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                <FileText className="text-cyan-400" size={20} />
                <span className="text-sm text-gray-300">Historial completo</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Indicadores de progreso */}
      <div className="flex justify-center gap-2">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => handleStepClick(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${activeStep === index ? 'bg-blue-500 w-8' : 'bg-gray-600 hover:bg-gray-500'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveFlow;