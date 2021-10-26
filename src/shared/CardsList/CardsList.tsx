import React from 'react';
import { Cards } from './Card/Card';
import styles from './CardsList.css';

export function CardsList() {
    return (
        <ul className={styles.CardsList}>
            <Cards />
        </ul>
    );
};