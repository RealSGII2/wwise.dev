import type { FC } from 'react';
import Button, { LinkButton, NextLinkButton } from '../Button';
import ContentContainer from '../ContentContainer';
import { Wordmark } from '../Logo';
import styles from './styles.module.scss';

const Appbar: FC = () => {
    return (
        <>
            <div className={styles.fancyBar} />
            <div className={styles.announcementBar}>
                <ContentContainer>
                    Welcome to the new version of my portfolio! <a className='a' href="#">See what&apos;s different.</a>
                </ContentContainer>
            </div>
            <nav className={styles.appbar}>
                <ContentContainer>
                    {/* Branding */}
                    <section className={styles.section}>
                        <Wordmark height='24' />
                    </section>

                    {/* Navigation */}
                    <section className={styles.section}>
                        <NextLinkButton href='/#about' variant='tertiary'>
                            About me
                        </NextLinkButton>

                        <NextLinkButton href='/#projects' variant='tertiary'>
                            Projects
                        </NextLinkButton>
                    </section>

                    {/* Tertiary links/tools */}
                    <section className={styles.section}>
                        <Button size='mediumIcon' variant='tertiary'></Button>

                        <Button
                            size='mediumIcon'
                            variant='tertiary'
                        >
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 16 16'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M9.96501 1.38919C9.82597 1.42019 9.69865 1.49019 9.59799 1.59099C9.4971 1.69181 9.42705 1.8193 9.39606 1.95852C9.36506 2.09773 9.3744 2.2429 9.42299 2.37699C9.77971 3.36027 9.84866 4.42487 9.62174 5.44594C9.39481 6.46701 8.88143 7.4022 8.14181 8.14182C7.40219 8.88144 6.467 9.39482 5.44593 9.62174C4.42487 9.84866 3.36026 9.77972 2.37699 9.42299C2.24298 9.3744 2.0979 9.36501 1.95875 9.39591C1.8196 9.42681 1.69213 9.49673 1.59128 9.59747C1.49044 9.69821 1.42039 9.82561 1.38934 9.96473C1.3583 10.1038 1.36754 10.2489 1.41599 10.383C1.81725 11.4906 2.49153 12.4791 3.37637 13.2568C4.26121 14.0345 5.328 14.5764 6.47795 14.8323C7.62789 15.0881 8.8238 15.0496 9.95492 14.7204C11.086 14.3912 12.1158 13.7818 12.9488 12.9488C13.7818 12.1158 14.3912 11.086 14.7204 9.95493C15.0496 8.82381 15.0881 7.62789 14.8323 6.47795C14.5764 5.32801 14.0345 4.26121 13.2568 3.37637C12.4791 2.49153 11.4906 1.81726 10.383 1.41599C10.249 1.36749 10.104 1.3582 9.96501 1.38919Z'
                                    fill='currentColor'
                                />
                            </svg>
                        </Button>

                        <LinkButton
                            href='https://github.com/RealSGII2'
                            target='_blank'
                            size='mediumIcon'
                            variant='tertiary'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 16 16'
                                width='24'
                                height='24'
                            >
                                <path
                                    fill='currentColor'
                                    d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'
                                ></path>
                            </svg>
                        </LinkButton>
                    </section>
                </ContentContainer>
            </nav>
        </>
    );
};

export default Appbar;
