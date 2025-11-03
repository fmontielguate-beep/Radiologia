
import React, { useRef } from 'react';
import { User, QuizResult, Module } from '../types';

interface ResultsScreenProps {
  user: User;
  results: QuizResult[];
  modules: Module[];
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ user, results, modules }) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const totalScore = results.reduce((acc, result) => acc + result.score, 0);
  const totalPossible = results.reduce((acc, result) => acc + result.totalQuestions, 0);
  const finalGrade = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
  
  const handleDownloadImage = async () => {
    const element = certificateRef.current;
    if (element && (window as any).html2canvas) {
      const canvas = await (window as any).html2canvas(element, { scale: 2 });
      const data = canvas.toDataURL('image/png');
      const link = document.createElement('a');

      link.href = data;
      link.download = `Certificado-${user.lastName}-${user.firstName}.png`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
        alert("Hubo un error al generar la imagen. La librería no se cargó correctamente.");
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center p-4">
      <div ref={certificateRef} className="w-full max-w-3xl bg-white p-8 md:p-12 rounded-xl shadow-2xl border-4 border-amber-300 relative">
        <div className="absolute top-4 right-4 text-3xl">🏆</div>
        <div className="absolute bottom-4 left-4 text-3xl transform rotate-12">📜</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-amber-800 mb-4">Curso Finalizado</h1>
        <p className="text-center text-amber-600 text-lg mb-8">¡Felicitaciones por completar el curso de Radiología Pediátrica!</p>
        
        <div className="bg-amber-50 border-2 border-dashed border-amber-200 p-6 rounded-lg text-center space-y-2 mb-8">
          <p className="text-lg text-amber-800">Participante:</p>
          <p className="text-2xl font-bold text-amber-900">{`${user.firstName} ${user.lastName}`}</p>
          <p className="text-sm text-amber-700">Número de Colegiado: {user.licenseNumber}</p>
          <div className="pt-4 mt-4 border-t border-amber-200">
            <p className="text-lg text-amber-800">Nota Final Obtenida:</p>
            <p className={`text-5xl font-bold ${finalGrade >= 60 ? 'text-green-600' : 'text-red-600'}`}>
              {finalGrade}/100
            </p>
          </div>
           <p className="text-xs text-amber-500 pt-2">Fecha de finalización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>

        <div className="w-full">
          <h2 className="text-xl font-bold text-amber-800 mb-4 text-center">Desglose de Resultados</h2>
          <div className="space-y-2 border border-yellow-200 p-4 rounded-lg">
            {results.map(result => {
              const module = modules.find(m => m.id === result.moduleId);
              return (
                <div key={result.moduleId} className="flex justify-between items-center bg-yellow-50 p-3 rounded-md">
                  <span className="text-amber-700 font-medium text-sm text-left w-3/4">{module?.title || `Módulo ${result.moduleId}`}</span>
                  <span className="font-bold text-amber-900 text-sm">{result.score} / {result.totalQuestions}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleDownloadImage}
        className="mt-8 py-3 px-8 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
      >
        Generar Certificado
      </button>
    </div>
  );
};

export default ResultsScreen;
