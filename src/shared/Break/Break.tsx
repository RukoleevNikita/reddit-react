import React from 'react';
import classNames from 'classnames';

import styles from './Break.css';


type TBreakSizes = 4 | 8 | 12 | 16 | 20;
type TDisplays = 'mobile' | 'tablet' | 'desktop';

interface IBreackProps {
    size: TBreakSizes;
    mobileSize?: TBreakSizes;
    tabletSize?: TBreakSizes;
    desktopSize?: TBreakSizes;
    inline?: boolean;
    top?: boolean;
}

export function Break(props: IBreackProps) {
    const { inline = false, top = false, size, mobileSize, desktopSize, tabletSize } = props;

    return (
        <div className={classNames(
            styles[`s${size}`],
            { [styles.inline]: inline },
            { [styles.top]: top },
            { [styles[`mobile_s${mobileSize}`]]: mobileSize },
            { [styles[`tablet_s${tabletSize}`]]: tabletSize },
            { [styles[`desktop_s${desktopSize}`]]: desktopSize },
        )}/>
    );
}