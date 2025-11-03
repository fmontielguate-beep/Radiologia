import React from 'react';
import { User, Module as ModuleType } from '../types';
import ProgressBar from './ProgressBar';
import Module from './Module';

interface CourseScreenProps {
  user: User;
  currentModuleIndex: number;
  modules: ModuleType[];
  onNextModule: () => void;
  onPreviousModule: () => void;
  onModuleComplete: (moduleId: number, answers: Record<number, string>) => void;
  completedModulesCount: number;
  userAnswers: Record<number, Record<number, string>>;
}

const CourseScreen: React.FC<CourseScreenProps> = ({
  user,
  currentModuleIndex,
  modules,
  onNextModule,
  onPreviousModule,
  onModuleComplete,
  completedModulesCount,
  userAnswers
}) => {
  const currentModule = modules[currentModuleIndex];
  const totalModules = modules.length;
  const isModuleCompleted = userAnswers.hasOwnProperty(currentModule.id);

  return (
    <div className="min-h-screen bg-yellow-50 text-amber-900 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border-2 border-yellow-200 overflow-hidden">
        <header className="p-6 bg-amber-100 border-b-2 border-yellow-200">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-amber-800">Curso de Radiología Pediátrica</h1>
            <div className="text-right text-sm">
              <p className="font-semibold">{`${user.firstName} ${user.lastName}`}</p>
              <p className="text-amber-700">Colegiado: {user.licenseNumber}</p>
            </div>
          </div>
          <ProgressBar current={completedModulesCount} total={totalModules} />
        </header>

        <main className="p-6 md:p-8">
          <Module 
            key={currentModule.id}
            module={currentModule} 
            onQuizComplete={onModuleComplete}
            isCompleted={isModuleCompleted} 
          />
        </main>

        <footer className="p-4 bg-amber-50 border-t-2 border-yellow-200 flex justify-between items-center">
          <button
            onClick={onPreviousModule}
            disabled={currentModuleIndex === 0}
            className="py-2 px-4 border border-amber-300 rounded-md shadow-sm text-sm font-medium text-amber-700 bg-white hover:bg-amber-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <span className="text-sm font-medium text-amber-600">
            Módulo {currentModuleIndex + 1} de {totalModules}
          </span>
          <button
            onClick={onNextModule}
            disabled={!isModuleCompleted}
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {currentModuleIndex === totalModules - 1 ? 'Finalizar Curso' : 'Siguiente'}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CourseScreen;
