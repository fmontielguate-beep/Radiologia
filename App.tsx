
import React, { useState, useEffect, useCallback } from 'react';
import { courseModules } from './services/courseData';
import LoginScreen from './components/LoginScreen';
import TestLoginScreen from './components/TestLoginScreen';
import CourseScreen from './components/CourseScreen';
import ResultsScreen from './components/ResultsScreen';
import { User, QuizResult } from './types';
import { STORAGE_KEY } from './constants';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isTestMode, setIsTestMode] = useState(false);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, Record<number, string>>>({});
  const [finalResults, setFinalResults] = useState<QuizResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [authView, setAuthView] = useState<'main' | 'test'>('main');

  const totalModules = courseModules.length;
  const completedModules = Object.keys(userAnswers).length;

  const handleLogin = (loggedInUser: User) => {
    const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (storedData[loggedInUser.licenseNumber]) {
      alert('Este número de colegiado ya ha completado el curso. No se puede realizar de nuevo.');
      return;
    }
    setUser(loggedInUser);
  };

  const handleTestLogin = (success: boolean) => {
    if (success) {
      setUser({ firstName: 'Usuario', lastName: 'de Prueba', licenseNumber: '00000' });
      setIsTestMode(true);
    }
  };
  
  const handleModuleComplete = useCallback((moduleId: number, answers: Record<number, string>) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [moduleId]: answers,
    }));
  }, []);

  const handleNextModule = () => {
    if (currentModuleIndex < totalModules - 1) {
      setCurrentModuleIndex(prev => prev + 1);
    } else {
      const results: QuizResult[] = courseModules.map(module => {
        const answers = userAnswers[module.id] || {};
        let score = 0;
        module.quiz.forEach(question => {
          if (answers[question.id] === question.correctAnswer) {
            score++;
          }
        });
        return {
          moduleId: module.id,
          score: score,
          totalQuestions: module.quiz.length,
        };
      });
      setFinalResults(results);
      setShowResults(true);
    }
  };

  const handlePreviousModule = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(prev => prev - 1);
    }
  };
  
  const saveFinalScore = useCallback(() => {
    if (!user || isTestMode || finalResults.length === 0) return;
    
    const totalScore = finalResults.reduce((acc, result) => acc + result.score, 0);
    const totalPossible = finalResults.reduce((acc, result) => acc + result.totalQuestions, 0);
    const finalGrade = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;

    const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    storedData[user.licenseNumber] = {
      name: `${user.firstName} ${user.lastName}`,
      score: finalGrade,
      date: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
  }, [user, isTestMode, finalResults]);
  
  useEffect(() => {
    if (showResults && finalResults.length > 0) {
        saveFinalScore();
    }
  }, [showResults, finalResults, saveFinalScore]);


  if (!user) {
    return (
      <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-4">
        {authView === 'main' ? (
          <LoginScreen onLogin={handleLogin} onSwitchToTest={() => setAuthView('test')} />
        ) : (
          <TestLoginScreen onTestLogin={handleTestLogin} onSwitchToMain={() => setAuthView('main')} />
        )}
      </div>
    );
  }

  if (showResults) {
    return <ResultsScreen user={user} results={finalResults} modules={courseModules} />;
  }

  return (
    <CourseScreen
      user={user}
      currentModuleIndex={currentModuleIndex}
      modules={courseModules}
      onNextModule={handleNextModule}
      onPreviousModule={handlePreviousModule}
      onModuleComplete={handleModuleComplete}
      completedModulesCount={completedModules}
      userAnswers={userAnswers}
    />
  );
};

export default App;