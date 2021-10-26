import React from 'react';
import styles from './UserLink.css';

export function UserLink() {
    return (
        <div className={styles.userLink}>
            <img 
                className={styles.avatar}
                src="http://lorempixel.com/250/200" 
                alt="avatar" 
            />
            <a href="#user-url" className={styles.userName}>Дмитрий Гришин</a>
        </div>
    );
}