import React from 'react';
import { Learner } from '../types/attendance';
import { Users, CheckCircle, XCircle, Clock } from 'lucide-react';

interface AttendanceSummaryProps {
  learners: Learner[];
}

export const AttendanceSummary: React.FC<AttendanceSummaryProps> = ({ learners }) => {
  const attending = learners.filter(l => l.status === 'attending').length;
  const absent = learners.filter(l => l.status === 'absent').length;
  const excused = learners.filter(l => l.status === 'excused').length;
  const total = learners.length;

  return (
    <div className="card bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-6 h-6 text-primary-600" />
        <h2 className="text-xl font-bold text-primary-800">Attendance Summary</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{total}</div>
          <div className="text-sm text-gray-600">Total</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-success-600">{attending}</div>
          <div className="text-sm text-gray-600 flex items-center justify-center space-x-1">
            <CheckCircle className="w-4 h-4" />
            <span>Present</span>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-danger-600">{absent}</div>
          <div className="text-sm text-gray-600 flex items-center justify-center space-x-1">
            <XCircle className="w-4 h-4" />
            <span>Absent</span>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-warning-600">{excused}</div>
          <div className="text-sm text-gray-600 flex items-center justify-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>Excused</span>
          </div>
        </div>
      </div>
      
      {total > 0 && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-success-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(attending / total) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            {Math.round((attending / total) * 100)}% attendance rate
          </p>
        </div>
      )}
    </div>
  );
};
