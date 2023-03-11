import type { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

const Statistic: FC<{
    children: ReactNode;
    label: string;
}> = ({ children, label }) => {
    return (
        <div className={styles.statistic}>
            <h2>{label}</h2>
            <p>{children}</p>
        </div>
    );
};

export default Statistic;
