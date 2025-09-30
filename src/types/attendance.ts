export type AttendanceStatus = 'attending' | 'absent' | 'excused';

export interface Learner {
  id: string;
  name: string;
  status: AttendanceStatus;
}

export interface AttendanceSession {
  id: string;
  date: string;
  learners: Learner[];
  completed: boolean;
}

export interface EmailSummary {
  date: string;
  totalLearners: number;
  attending: number;
  absent: number;
  excused: number;
  learners: Learner[];
}
