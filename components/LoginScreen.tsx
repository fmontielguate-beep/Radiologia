
import React, { useState } from 'react';
import { User } from '../types';

interface LoginScreenProps {
  onLogin: (user: User) => void;
  onSwitchToTest: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onSwitchToTest }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !licenseNumber) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    setError('');
    onLogin({ firstName, lastName, licenseNumber });
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-200">
      <h1 className="text-3xl font-bold text-center text-amber-800 mb-2">Curso de Radiología Pediátrica</h1>
      <p className="text-center text-amber-600 mb-6">Por favor, identifíquese para comenzar.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-amber-700">Nombre</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-yellow-300 rounded-md shadow-sm placeholder-yellow-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-amber-700">Apellido</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-yellow-300 rounded-md shadow-sm placeholder-yellow-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="licenseNumber" className="block text-sm font-medium text-amber-700">Número de Colegiado</label>
          <input
            type="text"
            id="licenseNumber"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-yellow-300 rounded-md shadow-sm placeholder-yellow-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
          />
           <p className="mt-1 text-xs text-amber-600">El curso solo se puede realizar una vez por número de colegiado.</p>
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
          Iniciar Curso
        </button>
      </form>
      <div className="text-center mt-4">
        <button onClick={onSwitchToTest} className="text-sm text-amber-600 hover:underline">Acceder como usuario de prueba</button>
      </div>
    </div>
  );
};

export default LoginScreen;
