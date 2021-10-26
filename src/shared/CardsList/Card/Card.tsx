import React from 'react';
import styles from './Card.css';
import { Controls } from './Controls/Controls';
import { Menu } from './Menu/Menu';
import { Preview } from './Preview/Preview';
import { TextContent } from './TextContent/TextContent';
import { GenericList } from "../../GenericList/GenericList";
import { merge } from "../../../utils/js/merge";
import { generateId } from "../../../utils/react/generateRandomIndex";

export function Cards( ) {

    return (
        <li className={styles.Card}>
            <TextContent />
            <Preview />
            <Menu />
            <Controls />
        </li>
    );
};