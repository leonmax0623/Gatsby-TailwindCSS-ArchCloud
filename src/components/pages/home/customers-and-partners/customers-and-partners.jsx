import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import acend from './images/acend.svg';
import coalist from './images/coalist.svg';
import dacadoo from './images/dacadoo.svg';
import darwin from './images/darwin.svg';
import delta from './images/delta.svg';
import procloud from './images/procloud.svg';
import securosys from './images/securosys.svg';
import suntechdrive from './images/suntechdrive.svg';
import umb from './images/umb.svg';
import vetsuccess from './images/vetsuccess.svg';

const partners = [
  {
    src: umb,
    alt: 'UMB logo',
    link: 'https://www.umb.ch/',
  },
  {
    src: acend,
    alt: 'acend logo',
    link: 'https://acend.ch/',
  },
  {
    src: procloud,
    alt: 'procloud logo',
    link: 'https://www.procloud.ch/',
  },
  {
    src: coalist,
    alt: 'coalist logo',
    link: 'https://coalist.ch/',
  },
];

const customers = [
  {
    src: dacadoo,
    alt: 'dacadoo logo',
    link: 'https://www.dacadoo.com/',
  },
  {
    src: darwin,
    alt: 'Darwin logo',
    link: 'https://darwincav.com/',
  },
  {
    src: delta,
    alt: 'delta logo',
    link: 'https://www.deltaholding.rs/home.html',
  },
  {
    src: suntechdrive,
    alt: 'SunTechDrive logo',
    link: 'https://suntechdrive.com/',
  },
  {
    src: securosys,
    alt: 'securosys logo',
    link: 'https://www.securosys.com/',
  },
  {
    src: vetsuccess,
    alt: 'VetSuccess logo',
    link: 'https://vetsuccess.com/',
  },
];

const CustomersAndPartners = () => (
  <section className="bg-white" id="customers-and-partners">
    <Container size="md">
      <div className="py-20 text-center lg:py-30 lg:text-left xl:py-40">
        <Heading size="lg" tag="h2" className="lg:max-w-[535px]" theme="black">
          Customers and Partners
        </Heading>
        {/* <p className="mt-4 lg:mt-6 text-lg xl:text-xl leading-normal xl:leading-normal text-black font-normal mx-auto lg:mx-0 lg:max-w-[592px]">
          We mesh our expertise in leadership and technology into shaping high-performing IT
          organisations.
        </p> */}
        <div className="grid mt-12 text-sm font-semibold leading-none tracking-widest uppercase lg:mt-16 gap-y-10 lg:grid-cols-2 gap-x-16">
          <div className="flex flex-col">
            <span>Customers</span>
            <div className="grid flex-grow grid-cols-2 mt-8 gap-x-6 gap-y-8 lg:gap-8">
              {customers.map(({ src, alt, link }, index) => (
                <div
                  className="flex items-center justify-center h-24 px-4 border lg:h-auto border-gray"
                  key={index}
                >
                  <a href={link} target="_blank" rel="noreferrer">
                    <img className="mr-2" src={src} alt={alt} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span>Partners</span>
            <div className="grid grid-cols-2 mt-8 gap-x-6 gap-y-8 lg:gap-8">
              {partners.map(({ src, alt, link }, index) => (
                <a href={link} target="_blank" rel="noreferrer" key={index}>
                  <img className="w-full h-auto" src={src} alt={alt} key={alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default CustomersAndPartners;
