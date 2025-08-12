import React from 'react';

interface SlideContainerProps {
  children: React.ReactNode;
  className?: string;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 flex items-center justify-center p-8 ${className}`}>
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default SlideContainer;