
import React from 'react';
import { Module as ModuleType } from '../types';
import Quiz from './Quiz';

interface ModuleProps {
  module: ModuleType;
  onQuizComplete: (moduleId: number, answers: Record<number, string>) => void;
  isCompleted: boolean;
}

const Module: React.FC<ModuleProps> = ({ module, onQuizComplete, isCompleted }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-amber-800 border-b-2 border-amber-200 pb-2">{module.title}</h2>
      
      <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-200">
        <h3 className="text-lg font-semibold text-amber-700 mb-2">Resumen del Módulo</h3>
        <p className="text-base text-amber-800">{module.summary}</p>
      </div>

      <div className="prose prose-amber max-w-none">
        {module.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t-2 border-dashed border-amber-200">
        <Quiz 
          quiz={module.quiz} 
          moduleId={module.id} 
          onComplete={onQuizComplete} 
          isCompleted={isCompleted}
        />
      </div>
    </div>
  );
};

export default Module;
