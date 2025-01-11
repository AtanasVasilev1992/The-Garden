import { createContext, useContext, useState } from 'react';
import styles from './ConfirmDialog.module.css';

const ConfirmContext = createContext();

export function ConfirmProvider({ children }) {
    const [dialog, setDialog] = useState(null);

    const confirm = (message, title = 'Confirm Action') => {
        return new Promise((resolve) => {
            setDialog({ message, title, resolve });
        });
    };

    const handleConfirm = () => {
        dialog?.resolve(true);
        setDialog(null);
    };

    const handleCancel = () => {
        dialog?.resolve(false);
        setDialog(null);
    };

    return (
        <ConfirmContext.Provider value={confirm}>
            {children}
            {dialog && (
                <div className={styles.overlay}>
                    <div className={styles.dialog}>
                        <h3 className={styles.title}>{dialog.title}</h3>
                        <p className={styles.message}>{dialog.message}</p>
                        <div className={styles.buttons}>
                            <button 
                                className={styles.confirmButton}
                                onClick={handleConfirm}
                            >
                                Confirm
                            </button>
                            <button 
                                className={styles.cancelButton}
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </ConfirmContext.Provider>
    );
}

export const useConfirm = () => useContext(ConfirmContext);