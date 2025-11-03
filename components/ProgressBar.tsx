
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-amber-700">Progreso del Curso</span>
        <span className="text-sm font-medium text-amber-700">{current} de {total} Módulos</span>
      </div>
      <div className="w-full bg-yellow-200 rounded-full h-4">
        <div
          className="bg-amber-500 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
