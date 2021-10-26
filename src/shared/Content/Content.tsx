import React from 'react';
import styles from './Content.css';

interface IContentProps {
    children?: React.ReactNode;
}

export function Content({ children }: IContentProps) {
    return (
        <main className={styles.Content}>
            { children }
        </main>
    );
};