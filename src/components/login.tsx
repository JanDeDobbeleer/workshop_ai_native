
import React, { useState } from 'react';
import { Lock, AlertCircle } from 'lucide-react';
import { verifyPassword } from '../utils/hash';

interface LoginProps {
  onSuccess: (password: string) => void;
  passwordHash: string; // SHA-256 hash of the correct password
}

export const Login: React.FC<LoginProps> = ({ onSuccess, passwordHash }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);

    const isValid = await verifyPassword(inputPassword, passwordHash);

    if (isValid) {
      // Pass raw password to derive session signing key
      onSuccess(inputPassword);
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
    setIsVerifying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div
        className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all ${
          isShaking ? 'animate-shake' : ''
        }`}
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full mb-4">
            <Lock className="w-7 h-7 text-gray-600" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">AI Native Software Engineering</h1>
          <p className="text-gray-500 text-sm mt-2">Enter the workshop password to open the slides.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="workshop-password" className="sr-only">
              Workshop password
            </label>
            <input
              id="workshop-password"
              type="password"
              value={inputPassword}
              onChange={(e) => {
                setInputPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter password"
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors ${
                error ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
              }`}
              autoFocus
            />
            {error && (
              <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Incorrect password. Please try again.</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isVerifying}
            className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isVerifying ? 'Verifying...' : 'Unlock'}
          </button>
        </form>

        <p className="text-gray-500 text-sm text-center mt-6">
          Need access? Contact{' '}
          <a href="mailto:workshop@itdepends.be" className="text-blue-600 hover:underline">
            workshop@itdepends.be
          </a>
        </p>
      </div>
    </div>
  );
};
