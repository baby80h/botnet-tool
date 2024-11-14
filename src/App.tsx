import React from 'react';
import SecurityDashboard from './components/SecurityDashboard';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <h1 className="text-2xl font-bold">Security Monitoring Dashboard</h1>
      </header>
      <main className="p-6">
        <SecurityDashboard />
      </main>
    </div>
  );
}

export default App;