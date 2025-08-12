import React, { useState } from 'react';
import { Edit3, Check, X } from 'lucide-react';

interface EditableMetricProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  unit: string;
  min?: number;
  max?: number;
  step?: number;
}

const EditableMetric: React.FC<EditableMetricProps> = ({
  value,
  onChange,
  label,
  unit,
  min = 1,
  max = 100,
  step = 1
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    if (tempValue >= min && tempValue <= max) {
      onChange(tempValue);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setTempValue(value);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className="bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
      <div className="text-center">
        <p className="text-gray-400 text-sm font-medium mb-2">{label}</p>
        
        {isEditing ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <input
                type="number"
                value={tempValue}
                onChange={(e) => setTempValue(Number(e.target.value))}
                onKeyDown={handleKeyPress}
                className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-xl font-bold text-center w-20"
                min={min}
                max={max}
                step={step}
                autoFocus
              />
              <span className="text-purple-400 font-medium">{unit}</span>
            </div>
            
            <div className="flex justify-center gap-2">
              <button
                onClick={handleSave}
                className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                title="Guardar"
              >
                <Check size={16} />
              </button>
              <button
                onClick={handleCancel}
                className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                title="Cancelar"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <p className="text-2xl font-bold text-white">{value}</p>
              <span className="text-purple-400 font-medium">{unit}</span>
              <button
                onClick={() => setIsEditing(true)}
                className="p-1 text-gray-400 hover:text-white transition-colors ml-2"
                title="Editar"
              >
                <Edit3 size={16} />
              </button>
            </div>
            <p className="text-xs text-gray-500">Click para editar</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditableMetric;