import React from 'react';
import SlideContainer from '../SlideContainer';

const Slide00: React.FC = () => {
  return (
    <SlideContainer className="relative overflow-hidden">
      {/* Fondo con textura de mármol */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Overlay oscuro suave */}
      <div className="absolute inset-0 bg-gray-900/60"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center space-y-12">
        
        {/* Logos */}
        <div className="flex items-center justify-center gap-12 md:gap-16 lg:gap-20 mb-8">
          {/* Logo MC Store */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center p-4 shadow-2xl">
              <img 
                src="/mcstore-light-2.png" 
                alt="Logo MC Store"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="text-white font-bold text-lg">MC Store</div>';
                  }
                }}
              />
            </div>
            <p className="text-gray-300 text-sm mt-3 font-medium">Cliente</p>
          </div>
          
          {/* Separador */}
          <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          
          {/* Logo Fluia */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center p-4 shadow-2xl">
              <img 
                src="/image-removebg-preview.png" 
                alt="Logo Fluia"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="text-white font-bold text-lg">Fluia</div>';
                  }
                }}
              />
            </div>
            <p className="text-gray-300 text-sm mt-3 font-medium">Agencia</p>
          </div>
        </div>
        
        {/* Título y subtítulo */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Propuesta de Automatización
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              para MC Store
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
            Pedidos, inventario, facturación y retención de clientes
          </p>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-pulse delay-1500"></div>
      </div>
    </SlideContainer>
  );
};

export default Slide00;