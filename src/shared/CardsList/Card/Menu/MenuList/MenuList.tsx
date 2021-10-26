import React from 'react';
import {EColors, Text} from "../../../../Text/Text";
import Icon from "../../../../Icons/Icon";

import styles from './MenuList.css';

interface IMenuItemsListProps {
    postId: string
}

export function MenuList({ postId }: IMenuItemsListProps) {
    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.comments} onClick={() => console.log(postId)}>
                <Icon name={"comments"} size={16}></Icon>
                <Text size={12} color={EColors.grey99}>Комментарии</Text>
            </li>

                <div className={styles.dividerComments}/>

            <li className={styles.share}>
                <Icon name={"share"} size={16}></Icon>
                <Text size={12} color={EColors.grey99}>Поделиться</Text>
            </li>

            <div className={styles.dividerShare}/>

            <li className={styles.menuItem}>
                <Icon name={"block"} size={16}></Icon>
                <Text size={12} color={EColors.grey99}>Скрыть</Text>
            </li>

            <div className={styles.divider}/>

            <li className={styles.add}>
                <Icon name={"save"} size={16}></Icon>
                <Text size={12} color={EColors.grey99}>Сохранить</Text>
            </li>

            <div className={styles.dividerAdd}/>

            <li className={styles.menuItem}>
                <Icon name={"warning"} size={16}></Icon>
                <Text size={12} color={EColors.grey99}>Пожаловаться</Text>
            </li>
        </ul>
    )
}

// import React from 'react';
// import {generateId} from "../../../../../utils/react/generateRandomIndex";
// import {GenericList} from "../../../../GenericList/GenericList";
// import styles from './MenuList.css';
//
// const listMenuItem = [
//     { text: 'Комментарии' },
//     { text: 'Поделиться' },
//     { text: 'Скрыть' },
//     { text: 'Сохранить' },
//     { text: 'Пожаловаться' },
// ].map(generateId);
//
// export const MenuList = () => <GenericList list={listMenuItem} />