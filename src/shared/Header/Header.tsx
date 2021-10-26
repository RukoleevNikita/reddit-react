import React from 'react';
import styles from './Header.css';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { SortBlock } from './SortBlock/SortBlock';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';
import {UserBlock} from "./SearchBlock/UserBlock/UserBlock";


export function Header({}) {
    return (
        <header className={styles.Header}>
            <ThreadTitle />
            <SortBlock />
            <UserBlock />
        </header>
    );
};