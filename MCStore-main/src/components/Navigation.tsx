import React from 'react';
import { ChevronLeft, ChevronRight, Printer } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
  onPrint?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
  onPrint
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-lg border-t border-gray-700/50 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Botón Anterior */}
        <button
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:opacity-50 text-white rounded-lg transition-all duration-200 font-medium"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={20} />
          Anterior
        </button>

        {/* Barra de progreso y puntos */}
        <div className="flex-1 mx-8">
          {/* Barra de progreso */}
          <div className="mb-3">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              />
            </div>
          </div>
          
          {/* Puntos clicables */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => onGoToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Botones derecha */}
        <div className="flex items-center gap-3">
          {onPrint && (
            <button
              onClick={onPrint}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-200"
              aria-label="Imprimir presentación"
            >
              <Printer size={18} />
            </button>
          )}
          
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:opacity-50 text-white rounded-lg transition-all duration-200 font-medium"
            aria-label="Siguiente slide"
          >
            Siguiente
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;