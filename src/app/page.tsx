import { LinkButton } from '@/components/Button';
import ContentContainer from '@/components/ContentContainer';
import FadeIn from '@/components/FadeIn';
import Row from '@/components/Row';
import Statistic from '@/components/Statistic';

export default function IndexPage() {
    return (
        <>
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

                    <Row gap={1}>
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
        </>
    );
}
