import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import Image1 from './images/image1.svg';
import Image2 from './images/image2.svg';
import Image3 from './images/image3.svg';

const items = [
  {
    src: Image1,
    title: 'Cloud Development',
    text: 'We develop Cloud Native and serverless software using multiple languages and frameworks',
  },
  {
    src: Image2,
    title: 'Cloud Infrastructure',
    text: 'We build cloud environments using infrastructure-as-code on all major cloud platforms',
  },
  {
    src: Image3,
    title: 'Cloud Organization',
    text: 'We guide organizations to transform teams and boost innovation with cloud technologies',
  },
];
const Values = () => (
  <section className="bg-white">
    <Container size="sm">
      <div className="py-20 lg:py-30 xl:pt-32 xl:pb-40">
        <Heading
          tag="h2"
          className="justify-center text-center max-w-[1008px] mx-auto"
          theme="black"
          size="md"
        >
          We combine cloud and software engineering skills to accelerate your business with multi-cloud
          solutions
        </Heading>
        <div className="grid grid-cols-1 mx-auto mt-14 lg:mt-20 lg:grid-cols-3 lg:mx-0 lg:max-w-max gap-y-8 gap-x-25">
          {items.map(({ src, title, text }) => (
            <div className="flex flex-col items-center" key={title}>
              <img className="w-[72px] h-[72px]" src={src} alt="" loading="lazy" aria-hidden />
              <Heading
                tag="h3"
                className="justify-center pt-8 leading-none text-center"
                theme="black"
                size="sm"
              >
                {title}
              </Heading>
              <p
                theme="black"
                className="justify-center pt-5 text-base leading-normal text-center lg:text-lg"
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
export default Values;
