import React from 'react';
import Icon from "../../../Icons/Icon";

import styles from './UserBlock.css'
import {Break} from "../../../Break/Break";
import {EColors, Text} from "../../../Text/Text";


interface IUserBlockProps {
    avatarSrc?: string
    username?: string
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
    return (
        <a
            href="https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
            className={styles.userBox}>
            <div className={styles.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
                    : <Icon name={"anon"} size={16}></Icon>
                }
            </div>
            {console.log(process.env.CLIENT_ID)}

            <div className={styles.username}>
                <Break size={12} />
                <Text size={20} color={username ? EColors.black : EColors.grey99}>{username || 'Аноним'}</Text>
            </div>
        </a>
    );
};