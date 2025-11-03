
import React, { useState } from 'react';
import { TEST_PASSWORD } from '../constants';

interface TestLoginScreenProps {
  onTestLogin: (success: boolean) => void;
  onSwitchToMain: () => void;
}

const TestLoginScreen: React.FC<TestLoginScreenProps> = ({ onTestLogin, onSwitchToMain }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === TEST_PASSWORD) {
      setError('');
      onTestLogin(true);
    } else {
      setError('Contraseña incorrecta.');
      onTestLogin(false);
    }
  };

  return (
    <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-200">
      <h1 className="text-2xl font-bold text-center text-amber-800 mb-6">Acceso de Prueba</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-amber-700">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-yellow-300 rounded-md shadow-sm placeholder-yellow-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
          />
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
          Entrar
        </button>
      </form>
       <div className="text-center mt-4">
        <button onClick={onSwitchToMain} className="text-sm text-amber-600 hover:underline">Volver al inicio</button>
      </div>
    </div>
  );
};

export default TestLoginScreen;
