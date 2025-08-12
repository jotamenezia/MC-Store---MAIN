import React from 'react';
import { useSlideNavigation } from './hooks/useSlideNavigation';
import { useCalculations } from './hooks/useCalculations';
import Navigation from './components/Navigation';
import Slide00 from './components/slides/Slide00';
import Slide01 from './components/slides/Slide01';
import Slide02 from './components/slides/Slide02';
import Slide03 from './components/slides/Slide03';
import Slide04 from './components/slides/Slide04';
import Slide05 from './components/slides/Slide05';
import Slide06 from './components/slides/Slide06';
import Slide07 from './components/slides/Slide07';
import Slide08 from './components/slides/Slide08';
import Slide09 from './components/slides/Slide09';
import Slide10 from './components/slides/Slide10';

const TOTAL_SLIDES = 11;

function App() {
  const { currentSlide, nextSlide, prevSlide, goToSlide } = useSlideNavigation(TOTAL_SLIDES);
  const { 
    costeHora, 
    horasFormularios, 
    setHorasFormularios,
    horasBaseDatos,
    setHorasBaseDatos,
    horasInventario,
    setHorasInventario,
    horasAvisosCobro,
    setHorasAvisosCobro,
    horasNotificaciones,
    setHorasNotificaciones,
    horasGraficas,
    setHorasGraficas,
    horasFormularioInterno,
    setHorasFormularioInterno
  } = useCalculations();

  const handlePrint = () => {
    window.print();
  };

  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 0: return <Slide00 />;
      case 1: return <Slide01 costeHora={costeHora} horasFormularios={horasFormularios} onHorasFormulariosChange={setHorasFormularios} />;
      case 2: return <Slide02 costeHora={costeHora} horasBaseDatos={horasBaseDatos} onHorasBaseDatosChange={setHorasBaseDatos} />;
      case 3: return <Slide03 costeHora={costeHora} horasInventario={horasInventario} onHorasInventarioChange={setHorasInventario} />;
      case 4: return <Slide04 costeHora={costeHora} />;
      case 5: return <Slide05 costeHora={costeHora} horasAvisosCobro={horasAvisosCobro} onHorasAvisosCobroChange={setHorasAvisosCobro} />;
      case 6: return <Slide06 costeHora={costeHora} horasNotificaciones={horasNotificaciones} onHorasNotificacionesChange={setHorasNotificaciones} />;
      case 7: return <Slide07 costeHora={costeHora} horasGraficas={horasGraficas} onHorasGraficasChange={setHorasGraficas} />;
      case 8: return <Slide08 costeHora={costeHora} horasFormularioInterno={horasFormularioInterno} onHorasFormularioInternoChange={setHorasFormularioInterno} />;
      case 9: return <Slide09 />;
      case 10: return <Slide10 />;
      default: return <Slide00 />;
    }
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-900 overflow-hidden">
        <div className="transition-all duration-500 ease-in-out">
          {renderCurrentSlide()}
        </div>
        
        <div className="no-print">
          <Navigation
            currentSlide={currentSlide}
            totalSlides={TOTAL_SLIDES}
            onPrevious={prevSlide}
            onNext={nextSlide}
            onGoToSlide={goToSlide}
            onPrint={handlePrint}
          />
        </div>
      </div>
    </>
  );
}

export default App;