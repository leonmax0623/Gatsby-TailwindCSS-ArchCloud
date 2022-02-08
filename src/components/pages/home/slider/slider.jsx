import { Transition } from '@headlessui/react';
import useScrollPosition from '@react-hook/window-scroll';
import React, { useState, useRef, useLayoutEffect, useMemo, createRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMedia } from 'react-use';

import Button from 'components/shared/button';
import CanvasVideo from 'components/shared/canvas-video';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import useWindowSize from 'hooks/use-window-size';

const items = [
  {
    video: '/videos/cloud-journey.mp4',
    title: 'Cloud Journey',
    text: 'We help your business move to the cloud that best fits your needs',
    list: [
      'Cloud discovery workshop',
      'Workload assessment',
      'Architecture and engineering lead',
      'Modern cross-functional teams',
    ],
  },
  {
    video: '/videos/training.mp4',
    title: 'Training',
    text: 'We educate your teams with group trainings and 1-on-1 knowledge transfer sessions',
    list: [
      'Serverless software development',
      'Infrastructure-as-code with Terraform and CDK',
      'Docker / Kubernetes from beginners to experts',
      'Cloud development practices',
    ],
  },
  {
    video: '/videos/engineering.mp4',
    title: 'Cloud Software Engineering',
    text: 'We build full-stack software solutions using Cloud Native services',
    list: [
      'Solution architecture for cloud environments',
      'Infrastructure-as-Code (IaC) engineering',
      'CI/CD pipelines and GitOps',
      'Software engineering and go-live support',
    ],
  },
];

const buttons = ['Cloud Journey', 'Training', 'Engineering'];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentNavButton, setCurrentNavButton] = useState(0);
  const sectionRef = useRef();
  const slideRefs = useMemo(() => [...Array(buttons.length)].map(() => createRef()), []);
  const { height: pageHeight } = useWindowSize();
  const [containerRef, inView] = useInView({ threshold: 0, triggerOnce: false });
  const [wrapperRef, wrapperInView] = useInView({ rootMargin: '400px', triggerOnce: true });
  const [backgroundColor, setBackgroundColor] = useState('');
  const [item1Ref, item1InView] = useInView({ threshold: 0, triggerOnce: false });
  const [item2Ref, item2InView] = useInView({ threshold: 0, triggerOnce: false });
  const [item3Ref, item3InView] = useInView({ threshold: 0, triggerOnce: false });

  const isLg = useMedia('(min-width: 1024px)');

  const itemsRef = useMemo(() => [item1Ref, item2Ref, item3Ref], [item1Ref, item2Ref, item3Ref]);
  const itemsInView = useMemo(
    () => [item1InView, item2InView, item3InView],
    [item1InView, item2InView, item3InView]
  );

  const scrollY = useScrollPosition();
  useLayoutEffect(() => {
    const currentScrollTop = scrollY;
    const switchPoints = [...Array(buttons.length + 1)].map(
      (_, index) => sectionRef.current.offsetTop + pageHeight * index - pageHeight + 200
    );

    switchPoints.forEach((_, index) => {
      if (currentScrollTop > switchPoints[index] && currentScrollTop < switchPoints[index + 1]) {
        setCurrentSlide(index);
        setCurrentNavButton(index);
      }
    });
  }, [pageHeight, scrollY]);

  const handleNavButton = (index) => {
    setCurrentNavButton(index);
    slideRefs[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 text-white bg-black lg:py-0"
      id="services"
      style={{ backgroundColor }}
    >
      <div className="relative flex flex-col" ref={containerRef}>
        <Container className="grid items-start h-full grid-cols-12 xs:gap-8" size="md">
          <div ref={wrapperRef} className="relative h-full col-span-7">
            {isLg && (
              <div className="sticky top-0 h-screen min-h-[770px] 2xl:min-h-[835px]">
                <div className="xl:absolute right-0 w-full xl:w-[770px] 2xl:w-[943px] h-full">
                  {items.map(({ video }, index) => (
                    <Transition
                      show={currentSlide === index}
                      enter="transition-opacity duration-1000"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-1000"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      unmount={false}
                      key={index}
                    >
                      <div
                        className={`absolute -right-5 -left-16 xl:left-0 h-auto -translate-y-1/2 xl:-right-8 top-1/2 ${
                          currentSlide === index ? '' : 'hidden'
                        }`}
                      >
                        <CanvasVideo
                          src={video}
                          className="w-full"
                          inView={inView && currentSlide === index}
                          autoPlay={false}
                          preload={wrapperInView ? 'auto' : 'none'}
                          setBackgroundColor={setBackgroundColor}
                        />
                      </div>
                    </Transition>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="text-left col-span-full lg:col-span-5">
            <div className="absolute top-0 bottom-0 hidden lg:block">
              <div className="space-x-0.5 z-10 sticky top-16 my-16">
                {buttons.map((buttonText, index) => {
                  const isActive = index === currentNavButton;

                  return (
                    <Button
                      className="text-black uppercase outline-none"
                      size="small"
                      theme="secondary"
                      key={buttonText}
                      type="button"
                      color={isActive ? 'primary' : 'white'}
                      onClick={() => handleNavButton(index)}
                    >
                      {buttonText}
                    </Button>
                  );
                })}
              </div>
            </div>
            <div className="space-y-14 lg:space-y-0">
              {items.map(({ title, text, list, video }, index) => (
                <div
                  className="lg:h-screen lg:min-h-[770px] 2xl:min-h-[835px] flex flex-col justify-center"
                  key={title}
                  ref={slideRefs[index]}
                >
                  <div ref={itemsRef[index]}>
                    {!isLg && (
                      <CanvasVideo
                        src={video}
                        className="w-full max-w-[450px]"
                        inView={itemsInView[index]}
                        preload={wrapperInView ? 'auto' : 'none'}
                        setBackgroundColor={setBackgroundColor}
                        autoPlay
                      />
                    )}
                  </div>
                  <div className="lg:max-w-sm lg:mx-0">
                    <Heading tag="h2">{title}</Heading>
                    <p className="mt-5 text-xl leading-normal">{text}</p>
                    <ul className="mt-6 space-y-4">
                      {list.map((item, index) => (
                        <li
                          className="relative pl-4 text-base before:block xl:leading-none before:absolute before:w-1 before:h-1 before:bg-primary before:left-0 before:top-1/2 before:-translate-1/2"
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Slider;
