'use client';

/*
    This is a "hack" to get routes that return a 404.
    As of now, neither not-found.tsx nor error.tsx catch unmatched routes.

    I'll fix it as soon as they add functionality.
*/

import { LinkButton, NextLinkButton } from '@/components/Button';
import ContentContainer from '@/components/ContentContainer';
import Row from '@/components/Row';
import { useEffect, useState } from 'react';

const possibleHumorousMessages: string[] = [
    'Unavailable for legal reasons',
    'This page was stolen',
    'This page fell over',
    'Between us, this never happened',
    '"My dog ate this page"',
    'Wrong turn?',
    'You look lost, stranger',
    "That's an error.",
    "It's the end of the world!",
    "That wasn't supposed to happen",
    'Uh oh',
    'Oh no',
    'Call a doctor!',
    'I swear it was right here!',
    'I think the page flew away',
    'Imagine a page here',
    'Dear Federal Agents: this page does not exist'
];

export default function IndexErrorPage() {
    const [text, setText] = useState<string>('');
    const [shouldShowSecret, setShouldShowSecret] = useState(false);

    useEffect(() => {
        let currentValue =
            Number.parseInt(
                window.sessionStorage.getItem('notFoundCount') ?? '0'
            ) ?? 0;

        if (isNaN(currentValue)) currentValue = 0;

        window.sessionStorage.setItem(
            'notFoundCount',
            (currentValue + 1).toString()
        );

        if (currentValue + 1 >= 10) {
            setShouldShowSecret(true);
            setText('[Insert your funny message here]')
        } else {
            setText(
                possibleHumorousMessages[
                    Math.floor(Math.random() * possibleHumorousMessages.length)
                ]
            );
        }
    }, []);

    return (
        <>
            <main
                style={{
                    // backgroundColor: 'var(--bg-raised)',
                    backgroundColor: '#222435',
                    height: 'calc(100% - 72px)',
                    paddingTop: 128,
                }}
            >
                {text && (
                    <div className={text.length != 0 ? 'fadeIn' : ''}>
                        <ContentContainer>
                            <h1 className='h1' style={{ margin: 0 }}>
                                <span
                                    className='brandGradientText'
                                    style={{ fontSize: 124 }}
                                >
                                    404
                                    {shouldShowSecret && '... or maybe?'}
                                </span>
                                <br />
                                {text}
                            </h1>

                            <p></p>

                            <p
                                className='heroP'
                                style={{ marginBottom: '2rem' }}
                            >
                                {shouldShowSecret ? (
                                    <>
                                        It appears that you like finding
                                        secrets. If you have any ideas for new
                                        messages, you can email me. :)
                                    </>
                                ) : (
                                    <>
                                        The thing you are looking for is not
                                        here, or it doesn&apos;t exist.
                                    </>
                                )}
                            </p>

                            <Row style={{ marginBottom: '3rem' }}>
                                <NextLinkButton
                                    size='large'
                                    variant='cta'
                                    href='/'
                                >
                                    Go to the home page
                                </NextLinkButton>

                                {shouldShowSecret && (
                                    <LinkButton
                                        size='large'
                                        href='mailto:william@wwise.dev'
                                    >
                                        Send an idea
                                    </LinkButton>
                                )}
                            </Row>
                        </ContentContainer>
                    </div>
                )}
            </main>
        </>
    );
}
