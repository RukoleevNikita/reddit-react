import React, {useState} from 'react';
import {Dropdown } from "../../../Dropdown/Dropdown";
import {MenuList} from "./MenuList/MenuList";
import {EColors, Text} from "../../../Text/Text";


import styles from './Menu.css';
import Icon from "../../../Icons/Icon";

export function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown button={
                <button className={styles.menuButton}>
                    {/*<MenuIcon />*/}
                    <Icon name={"menu"} size={16}></Icon>
                </button>
            }>
                <div className={styles.dropdown}>
                    <MenuList postId="12343"/>
                    <button className={styles.closeButton}>
                        <Text mobileSize={12} size={14} color={EColors.grey66}>
                            Закрыть
                        </Text>
                    </button>
                </div>
            </Dropdown>
        </div>
    );
};