'use client';
import Sprinkle from '@c/effects/Sprinkle';
import I from '@/components/core/Italic';
import InteractiveDots from '@/components/effects/InteractiveDots';
import SwappingWords from '@/components/effects/SwappingWords';
import Footer from '@/components/landing/Footer';
import SectionSpacer from '@/components/ui/SectionSpacer';
import { Label, Subheading, Text } from '@c/core/PageElements';
import React, { useEffect } from 'react';
import FramerMagnetic from '@c/effects/framer';
import AlternatingGrid from '@/components/IconGrid';

export default function Page() {
  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    const interval = setInterval(() => {
      const stars = document.getElementsByClassName("magic-star");
      for (const star of stars as any) {
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
              <span className="pl-1 ">remco stoeten</span>
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
              <FramerMagnetic>
                <Subheading>I am currently occupied with.</Subheading>
              </FramerMagnetic>

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
                  interval={2000}
                />
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
      <Sprinkle t1='some random ' t2='effect' />
      <AlternatingGrid />
    </React.Fragment>
  );
}