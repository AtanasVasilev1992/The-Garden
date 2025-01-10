import { createContext, useContext, useState } from 'react';
import styles from './Toast.module.css';

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const showToast = (message, type = 'success') => {
        const id = Date.now();
        setToasts(current => [...current, { id, message, type }]);
        setTimeout(() => {
            setToasts(current => current.filter(toast => toast.id !== id));
        }, 3000);
    };

    const removeToast = (id) => {
        setToasts(current => current.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            <div className={styles.toastContainer}>
                {toasts.map(toast => (
                    <div 
                        key={toast.id} 
                        className={`${styles.toast} ${styles[toast.type]}`}
                    >
                        <span>{toast.message}</span>
                        <button 
                            className={styles.closeButton}
                            onClick={() => removeToast(toast.id)}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export const useToast = () => useContext(ToastContext);