import type { FC, ReactNode } from 'react';

import className from '@/util/className';
import styles from './styles.module.scss';

type ContentContainerProps = {
    children?: ReactNode;
    noPadding?: boolean;
};

const ContentContainer: FC<ContentContainerProps> = ({
    children,
    noPadding,
}) => {
    return (
        <div
            className={className(
                styles.contentContainer,
                noPadding && styles.noPadding
            )}
        >
            {children}
        </div>
    );
};

export default ContentContainer;
