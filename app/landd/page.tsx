import I from '@/components/core/Italic';
import InteractiveDots from '@/components/effects/InteractiveDots';
import SectionSpacer from '@/components/ui/SectionSpacer';
import React from 'react';

export default function Page() {
  const Text = ({ children }) => (
    <p className="text-[16px] font-light leading-[24px]">{children}</p>
  );

  const Subheading = ({ children }) => (
    <p className="sub-heading">{children}</p>
  );

  const Label = ({ children }) => (
    <p className="words">
      <Text>{children}</Text>
    </p>
  );

  return (
    <>
      <InteractiveDots dotSize={100} />
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
          <div>
            <Text>
              My name is <span className="text-[#FFD700]">Remco Stoeten</span>
            </Text>
            <Text>I enjoy building things, with code.</Text>
            <Text>
              I am a brand identity designer working with startups and small businesses worldwide to build brands and products that stick. I love working in small, highly collaborative teams facing complex design and business problems.
            </Text>
            <Text>Here's my email: johndoe@gmail.com</Text>
            <Text>Don't be a stranger</Text>
            <Subheading>I am currently occupied with.</Subheading>
            <div className="flex gap-2">
              <Label>NextJS</Label>
              <Label>
                Typescript & <I i="co." />
              </Label>
              <Label>Micro interactions</Label>
              <Label>Architecture</Label>
              <Label>Performance</Label>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
