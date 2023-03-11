import { FC, ReactNode } from 'react';

const FadeIn: FC<{
    children?: ReactNode;
    delay?: number;
}> = ({ children, delay }) => {
    return (
        <div className='fadeIn' style={{ animationDelay: `${delay ?? 0}ms` }}>
            {children}
        </div>
    );
};

export default FadeIn;
