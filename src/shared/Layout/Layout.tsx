import React from 'react';
import styles from './Layout.css';

interface ILayoutProps {
    children?: React.ReactNode;
};

export function Layout({ children }: ILayoutProps) {
    return (
        <div className={styles.Layout}>
            {children}
        </div>
    );
};