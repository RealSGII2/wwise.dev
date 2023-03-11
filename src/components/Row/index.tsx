import type { FC, ReactNode } from 'react';
import { DivProps } from 'react-html-props';
import styles from './styles.module.scss';

const Row: FC<{
    children?: ReactNode;
    gap?: number;
} & DivProps> = ({ children, gap, style, ...rest }) => {
    return <div {...rest} className={styles.row} style={{ ...style, gap: `${gap ?? 0.5}rem` }}>{children}</div>;
};

export default Row;
