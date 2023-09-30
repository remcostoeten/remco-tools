import I from '@/components/core/Italic';
import InteractiveDots from '@/components/effects/InteractiveDots';
import SwappingWords from '@/components/effects/SwappingWords';
import Footer from '@/components/landing/Footer';
import SectionSpacer from '@/components/ui/SectionSpacer';
import { Label, Subheading, Text } from '@c/core/PageElements';
import React from 'react';

export default function Page() {
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
      <Footer />
    </React.Fragment>
  );
}