import React from 'react';

interface SecurityCardProps {
  title: string;
  icon: React.ReactNode;
  status: string;
  details: string[];
}

const SecurityCard: React.FC<SecurityCardProps> = ({ title, icon, status, details }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'protected':
      case 'active':
      case 'running':
      case 'monitoring':
      case 'analyzing':
      case 'collecting':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'critical':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl text-blue-400">{icon}</span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs ${getStatusColor(status)}`}>
          {status}
        </div>
      </div>
      <div className="space-y-2">
        {details.map((detail, index) => (
          <p key={index} className="text-sm text-gray-300">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SecurityCard;