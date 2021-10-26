import React from 'react';
import styles from './Preview.css';

export function Preview( ) {
    return (
        <div className={styles.preview}>
            <img 
                className={styles.previewImg}
                src="https://cdn.dribbble.com/users/975591/screenshots/15980842/media/4b368ba7844342802c7882e94015a7ec.png?compress=1&resize=800x600" 
                alt="avatar" 
            />
        </div>
    );
};