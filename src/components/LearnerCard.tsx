import React from 'react';
import { Learner, AttendanceStatus } from '../types/attendance';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface LearnerCardProps {
  learner: Learner;
  onStatusChange: (learnerId: string, status: AttendanceStatus) => void;
}

const statusConfig = {
  attending: {
    icon: CheckCircle,
    label: 'Attending',
    color: 'text-success-600',
    bgColor: 'bg-success-50',
    borderColor: 'border-success-200',
    buttonClass: 'btn-success'
  },
  absent: {
    icon: XCircle,
    label: 'Absent',
    color: 'text-danger-600',
    bgColor: 'bg-danger-50',
    borderColor: 'border-danger-200',
    buttonClass: 'btn-danger'
  },
  excused: {
    icon: Clock,
    label: 'Excused Absence',
    color: 'text-warning-600',
    bgColor: 'bg-warning-50',
    borderColor: 'border-warning-200',
    buttonClass: 'btn-warning'
  }
};

export const LearnerCard: React.FC<LearnerCardProps> = ({ learner, onStatusChange }) => {
  const currentConfig = statusConfig[learner.status];
  const Icon = currentConfig.icon;

  return (
    <div className={`card border-2 ${currentConfig.borderColor} ${currentConfig.bgColor} transition-all duration-200 hover:shadow-xl`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Icon className={`w-6 h-6 ${currentConfig.color}`} />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{learner.name}</h3>
            <p className={`text-sm font-medium ${currentConfig.color}`}>
              {currentConfig.label}
            </p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => onStatusChange(learner.id, 'attending')}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
              learner.status === 'attending'
                ? 'bg-success-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-success-100'
            }`}
          >
            Present
          </button>
          <button
            onClick={() => onStatusChange(learner.id, 'absent')}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
              learner.status === 'absent'
                ? 'bg-danger-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-danger-100'
            }`}
          >
            Absent
          </button>
          <button
            onClick={() => onStatusChange(learner.id, 'excused')}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
              learner.status === 'excused'
                ? 'bg-warning-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-warning-100'
            }`}
          >
            Excused
          </button>
        </div>
      </div>
    </div>
  );
};
