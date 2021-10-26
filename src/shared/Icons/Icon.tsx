import React from 'react';

import {
    iconSave,
    IconBlock,
    WarningIcon,
    ShareIcon,
    MenuIcon,
    CommentsIcon, IconAnon
} from "./Icons";

const icons = {
    save: iconSave,
    block: IconBlock,
    comments: CommentsIcon,
    menu: MenuIcon,
    share: ShareIcon,
    warning: WarningIcon,
    anon: IconAnon

}

export interface IconProps {
    name: keyof typeof icons,
    size: number
}

const Icon = (props: IconProps) => {
    const { name, size = 16 } = props;

    return (
        <span style={{width: size, height: size}}>
            {icons[name]}
        </span>
    )
}

export default Icon;