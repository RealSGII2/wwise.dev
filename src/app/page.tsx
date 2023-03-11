import { LinkButton } from '@/components/Button';
import ContentContainer from '@/components/ContentContainer';
import FadeIn from '@/components/FadeIn';
import Row from '@/components/Row';
import Statistic from '@/components/Statistic';
import LogoFloat from '../components/LogoFloat';

export default function IndexPage() {
    return (
        <>
            {/* 'hero-image': (url('/hero-sun.png'), url('/hero-moon.png')), */}
            <link rel='preload' href='/hero-sun.png' />
            <link rel='preload' href='/hero-moon.png' />

            <main
                style={{
                    // backgroundColor: 'var(--bg-raised)',
                    backgroundColor: 'var(--hero-background)',
                    height: 'calc(100% - 72px)',
                    paddingTop: 128,
                    backgroundImage: 'var(--hero-image)',
                    backgroundSize: 'cover',
                }}
            >
                <ContentContainer>
                    <h1
                        className='fadeIn h1'
                        style={{ marginTop: 0, animationDelay: '200ms' }}
                    >
                        Web Design & Development
                        <br />
                        Done{' '}
                        <span className='brandGradientText'>
                            Simple, Modern, & Right
                        </span>
                        .
                    </h1>

                    <FadeIn delay={400}>
                        <Row style={{ marginBottom: '3rem' }}>
                            <LinkButton
                                size='large'
                                variant='cta'
                                href='#about'
                            >
                                About me
                            </LinkButton>

                            <LinkButton
                                size='large'
                                variant='primary'
                                href='#about'
                            >
                                My projects
                            </LinkButton>
                        </Row>
                    </FadeIn>

                    <Row gap={2}>
                        <FadeIn delay={600}>
                            <Statistic label='Happy Users (2022)'>
                                58,920
                            </Statistic>
                        </FadeIn>
                        <FadeIn delay={800}>
                            <Statistic label='Official Websites'>12</Statistic>
                        </FadeIn>
                        <FadeIn delay={1000}>
                            <Statistic label='Satisfied Clients'>3</Statistic>
                        </FadeIn>
                    </Row>
                </ContentContainer>
            </main>

            <ContentContainer>
                <h1 className='h2 brandGradientText smallCentered'>About me</h1>

                <LogoFloat />

                <p
                    className='heroP'
                    style={{ textAlign: 'center', color: 'var(--fg-default)' }}
                >
                    Hi! I&apos;m William Wise, an aspiring web developer and designer
                    based in Arkansas. I like to build and explore creative
                    things.
                </p>

                <p className='heroP'>
                    My first experience dates way back to 2013, when I was a
                    child who found{' '}
                    <a
                        href='https://wix.com/'
                        target='_blank'
                        referrerPolicy='no-referrer'
                        className='a'
                    >
                        Wix
                    </a>
                    . I designed plenty of useless websites that served no
                    purpose, but it helped spark my interest in actually making
                    websites and being creative.
                </p>

                <p className='heroP'>
                    Three years later, I got tired of Wix&apos;s pricing and
                    limitations. After seeing my friend learn HTML, I decided to
                    follow his path. As the years go by, I learn more and more
                    frameworks: EJS, Vue.js, Nuxt.js, React.js, then finally
                    Next.js. As of now, my favourite toolset is Next.js
                    (Typescript) styled with Scss.
                </p>

                <p className='heroP'>
                    In my free time, I enjoy other creative works such as
                    graphic design, branding, and designing fonts, as well as
                    hiking, biking, and playing video games.
                </p>
            </ContentContainer>

            <ContentContainer>
                <h1 className='h2 brandGradientText smallCentered' style={{ marginTop: '86px' }}>
                    Featured Projects
                </h1>

<div style={{ height: '100vh' }} />
            </ContentContainer>

            <div style={{ height: '64px' }} />
        </>
    );
}
