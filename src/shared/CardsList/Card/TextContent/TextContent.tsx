import React from 'react';
import styles from './TextContent.css';
import { Title } from './Title/Title';
import { UserLink } from './UserLink/UserLink';

export function TextContent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <UserLink />
                <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}>опубликовано </span>
                    4 часа назад
                </span>
            </div>
            <Title />
        </div>
    );
}