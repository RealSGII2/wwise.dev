'use client';

import { useEffect } from 'react';

const ScrollListener = () => {
    useEffect(() => {
        const listener = () => {
            if (document.body.scrollTop > window.innerHeight * 0.85)
                document.body.classList.add('notInHero');
            else document.body.classList.remove('notInHero');
        };

        document.body.addEventListener('scroll', listener);

        return () => {
            document.body.removeEventListener('scroll', listener);
        };
    }, []);

    return <></>;
};

export default ScrollListener;
