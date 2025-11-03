
import React, { useState } from 'react';
import { Question } from '../types';

interface QuizProps {
  quiz: Question[];
  moduleId: number;
  onComplete: (moduleId: number, answers: Record<number, string>) => void;
  isCompleted: boolean;
}

const Quiz: React.FC<QuizProps> = ({ quiz, moduleId, onComplete, isCompleted }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(answers).length !== quiz.length) {
        alert("Por favor, responda todas las preguntas antes de continuar.");
        return;
    }
    setSubmitted(true);
    onComplete(moduleId, answers);
  };

  if (isCompleted && !submitted) {
    return (
       <div className="text-center bg-green-100 border border-green-300 text-green-800 p-4 rounded-lg">
           <h3 className="text-xl font-bold mb-2">Autoevaluación Respondida</h3>
           <p>Ya has guardado tus respuestas para este cuestionario. Puedes avanzar al siguiente módulo.</p>
       </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-bold text-amber-700 mb-4">Autoevaluación</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        {quiz.map((q, index) => (
          <div key={q.id}>
            <p className="font-semibold mb-2">{index + 1}. {q.text}</p>
            <div className="space-y-2">
              {q.options.map((option, i) => (
                <label key={i} className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    onChange={() => handleAnswerChange(q.id, option)}
                    disabled={submitted || isCompleted}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        {!submitted && !isCompleted && (
          <button type="submit" className="w-full sm:w-auto mt-6 py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
            Guardar y Continuar
          </button>
        )}
      </form>
      {submitted && (
        <div className="mt-6 text-center bg-green-100 border border-green-300 p-4 rounded-lg">
          <h4 className="text-lg font-bold text-green-800">¡Respuestas Guardadas!</h4>
          <p className="text-green-700 mt-2">Ahora puedes proceder al siguiente módulo.</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
