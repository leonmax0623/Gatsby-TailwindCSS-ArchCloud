import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Button from 'components/shared/button';
import CanvasVideo from 'components/shared/canvas-video';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Hero = () => {
  const [sectionRef, inView] = useInView();
  const [backgroundColor, setBackgroundColor] = useState('');

  return (
    <section ref={sectionRef} className="overflow-hidden bg-black" style={{ backgroundColor }}>
      <div className="relative flex flex-col max-w-[1600px] mx-auto pb-10 lg:block lg:flex-row lg:pb-0">
        <div className="relative w-full h-[375px] order-1 -mt-10 xs:h-[450px] xs:-mt-16 sm:h-auto sm:max-w-[600px] sm:mx-auto sm:-translate-x-8 lg:max-w-[650px] lg:absolute lg:top-10 lg:-right-16 xl:top-0 xl:right-0 xl:max-w-[850px] 2xl:max-w-none 2xl:w-[71%] 2xl:-right-24 2xl:top-auto">
          <CanvasVideo
            src="/videos/hero.mp4"
            className="absolute top-0 h-full -translate-x-1/2 left-1/2 sm:relative sm:h-auto sm:left-0 sm:w-full sm:translate-x-0"
            inView={inView}
            setBackgroundColor={setBackgroundColor}
          />
        </div>
        <Container size="md">
          <div className="pt-10 mx-auto text-center lg:text-left lg:py-24 lg:mx-0 lg:max-w-max xl:py-32 2xl:pt-32 2xl:pb-64">
            <Heading tag="h2" className="lg:max-w-[520px] leading-[1.125]">
              Architecting Cloud Native Solutions
            </Heading>
            {/* <p className="pt-5 leading-normal lg:leading-normal text-lg lg:text-xl text-white font-normal lg:max-w-[511px]">
              We mesh our expertise in leadership and technology into shaping high-performing IT
              organizations.
            </p> */}
            <div className="mt-8">
              <Button
                className="uppercase"
                to="mailto:hello@arch.cloud"
                size="normal"
                theme="primary"
              >
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Hero;
