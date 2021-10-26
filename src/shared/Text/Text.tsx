import React from 'react';
import classNames from 'classnames';

import styles from './Text.css';

export enum EColors {
    black = 'black',
    orange = 'orange',
    green = 'green',
    white = 'white',
    greyF4 = 'greyF4',
    greyF3 = 'greyF3',
    greyD9 = 'greyD9',
    greyC4 = 'greyC4',
    grey99 = 'grey99',
    grey66 = 'grey66',
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;
interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
    children?: React.ReactNode;
    size: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    color?: EColors;
    bold?: boolean;
}

export function Text(props: ITextProps) {
    const { As = 'span', color = EColors.black, children, size, mobileSize, desktopSize, tabletSize, bold = false } = props;
    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        { [styles.bold]: bold },
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`t${tabletSize}`]]: tabletSize },
        { [styles[`d${desktopSize}`]]: desktopSize },
    );

    return (
        <As className={classes}>
            {children}
        </As>
    );
}