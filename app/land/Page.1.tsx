'use client';
import I from '@/components/core/Italic';
import InteractiveDots from '@/components/effects/InteractiveDots';
import SwappingWords from '@/components/effects/SwappingWords';
import Footer from '@/components/landing/Footer';
import SectionSpacer from '@/components/ui/SectionSpacer';
import { Label, Subheading, Text } from '@c/core/PageElements';
import React, { useEffect } from 'react';


export default function Page() {
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    useEffect(() => {
        const interval = setInterval(() => {
            const stars = document.getElementsByClassName("magic-star");
            for (const star of stars) {
                star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
                star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

                star.style.animation = "none";
                star.offsetHeight;
                star.style.animation = "";
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <React.Fragment>
            <SectionSpacer variant={'small'} />
            <InteractiveDots dotColor='#fff' />
            <main className="home-container">
                <div className="flex gap-[40px] pt-4 pb-12">
                    <span className="wave" style={{ fontSize: '50px' }}>
                        👋
                    </span>
                    <div className="content">
                        <div className="content__container">
                            <ul className="content__container__list text-4xl">
                                <li className="content__container__list__item">Ollah!</li>
                                <li className="content__container__list__item">Bonjour!</li>
                                <li className="content__container__list__item">Hello!</li>
                                <li className="content__container__list__item">Nihao!</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[40px]">
                    <div className="flex flex-col">
                        <Text>
                            My name is{' '}
                            <span className="pl-1 text-[#FFD700]">{' '}Remco Stoeten{' '}</span>
                        </Text>
                        <Text>I enjoy building things, with code.</Text>
                        <Text>
                            I am a brand identity designer working with startups and small
                            businesses worldwide to build brands and products that stick. I love
                            working in small, highly collaborative teams facing complex design and
                            business problems.
                        </Text>
                        <Text>Here's my email: johndoe@gmail.com</Text>
                        <Text>Don't be a stranger</Text>
                    </div>
                    <section className='gap-[16px] flex flex-col'>
                        <span>
                            <Subheading>I am currently occupied with.</Subheading>
                        </span>
                        <div className="flex gap-2 flex-wrap">
                            <Label>
                                Next<I i="js" /> {'  '}<span className='pl-1 font-light'> as the weapon of choice</span>
                            </Label>
                            <Label>
                                Typescript because{' '}
                                <SwappingWords
                                    words={[
                                        'of typesafety and DX!',
                                        'everyone else does it',
                                        'I like compiler errors',
                                        'I have too much time',
                                    ]}
                                    interval={2000} />
                            </Label>
                            <Label>
                                <span className='text-light pr-1'>Micro interactions to look</span>       <I i="elegant" />.
                            </Label>
                            <Label>Algorithms and data structures</Label>
                        </div>
                    </section>
                    <section>
                        <span>
                            <Subheading>Some things i've build or working on.</Subheading>
                        </span>
                    </section>
                </div>
            </main>
            <Sprinkle />
            <Footer />
        </React.Fragment>
    );

    function Sprinkle({ }) {
        return (<div className='sprinle'>
            HTML CSS JSResult Skip Results Iframe
            <h1>
                Sometimes I'll start a line of code and I
                <span className="magic">
                    <span className="magic-star">
                        <svg viewBox="0 0 512 512">
                            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                        </svg>
                    </span>
                    <span className="magic-star">
                        <svg viewBox="0 0 512 512">
                            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                        </svg>
                    </span>
                    <span className="magic-star">
                        <svg viewBox="0 0 512 512">
                            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                        </svg>
                    </span>
                    <span className="magic-text">don't even know</span>
                </span>
                where it's going.
            </h1>
        </div>);
    }
}
