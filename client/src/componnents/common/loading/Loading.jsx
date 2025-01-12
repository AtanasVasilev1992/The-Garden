import { createContext, useContext, useState } from 'react';
import styles from './Loading.module.css';

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    const showLoading = () => setIsLoading(true);
    const hideLoading = () => setIsLoading(false);

    return (
        <LoadingContext.Provider value={{ showLoading, hideLoading }}>
            {children}
            {isLoading && (
                <div className={styles.overlay}>
                    <div className={styles.spinner}></div>
                </div>
            )}
        </LoadingContext.Provider>
    );
}

export const useLoading = () => useContext(LoadingContext);