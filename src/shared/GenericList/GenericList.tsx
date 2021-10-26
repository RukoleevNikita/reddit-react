import React from 'react';
import styles from './GenericList.css';

interface IItem {
    id: string;
    text: string;
    onClick?: (id: string) => void;
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
    svg?: string;
}

interface IGenericListProps {
    list: IItem[];
}

const noop = () => {};

export function GenericList({ list }: IGenericListProps) {
    return (
        <>
            {list.map(({ As = 'div', text, onClick = noop, id, className, href, svg }) => (
                <As
                    className={className}
                    onClick={() => onClick(id)}
                    key={id}
                    href={href}
                >
                    {text}
                </As>
            ))}

        </>
    )
}