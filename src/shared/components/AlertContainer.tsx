import React from 'react';
import { useAlertStore } from '../../stores/alerts/alert.store';
import Alert from './Alert';

export const AlertContainer: React.FC = () => {
    const { alerts, removeAlert } = useAlertStore();

    return (
        <div className="fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 pointer-events-none">
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                {alerts.map((alert) => (
                    <Alert
                        key={alert.id}
                        type={alert.type}
                        message={alert.message}
                        onClose={() => removeAlert(alert.id)}
                    />
                ))}
            </div>
        </div>
    );
};
