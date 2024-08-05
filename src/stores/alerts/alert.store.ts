import { create } from 'zustand';

interface Alert {
  id: number;
  type: 'info' | 'success' | 'error';
  message: string;
}

interface AlertState {
  alerts: Alert[];
  addAlert: (type: 'info' | 'success' | 'error', message: string) => void;
  removeAlert: (id: number) => void;
}

let alertId = 0;

export const useAlertStore = create<AlertState>((set) => ({
  alerts: [],
  addAlert: (type, message) => {
    const id = alertId++;
    set((state) => ({
      alerts: [...state.alerts, { id, type, message }],
    }));
    setTimeout(() => {
      set((state) => ({
        alerts: state.alerts.filter((alert) => alert.id !== id),
      }));
    }, 3000);
  },
  removeAlert: (id) =>
    set((state) => ({
      alerts: state.alerts.filter((alert) => alert.id !== id),
    })),
}));
