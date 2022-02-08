import React from 'react';

import logo from 'images/logo.svg';

import Container from '../container';
import Link from '../link';

import leftShape from './images/left-shape.svg';
import rightShape from './images/right-shape.svg';

const navigation1 = {
  label: 'Company',
  items: [
    { href: '#services', name: 'Services' },
    { href: '#customers-and-partners', name: 'Customers and Partners' },
    { href: '#about-us', name: 'About us' },
    { href: '#technologies', name: 'Technologies' },
    { href: 'mailto:hello@arch.cloud', name: 'Contact Us' },
  ],
};
const navigation2 = {
  label: 'Related',
  items: [
    { href: 'https://konem.blog', name: 'Our Blog' },
    { href: 'https://awsplayground.1way2cloud.com/index.html', name: 'AWS Playground' },
    { href: 'https://terraforge.io/', name: 'Terraforge' },
  ],
};

const Footer = () => (
  <footer className="overflow-hidden text-white bg-black">
    <h2 className="sr-only">Footer</h2>
    <div className="py-20 lg:py-28" id="contact-us">
      <Container size="md">
        <img
          className="absolute left-0 hidden h-auto -translate-y-1/2 w-52 sm:block md:w-auto md:-left-20 top-1/2"
          src={leftShape}
          alt=""
          aria-hidden
        />
        <img
          className="absolute right-0 hidden -translate-y-1/2 w-52 md:w-auto sm:block md:-right-20 top-1/2"
          src={rightShape}
          alt=""
          aria-hidden
        />
        <div className="flex flex-col items-center text-center">
          <span className="text-2xl leading-none">Get in touch</span>
          <Link
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl transition-colors duration-200 hover:bg-hover-primary tracking-widest uppercase px-4 mt-10 leading-none md:leading-none lg:leading-none xl:leading-none py-2.5 font-semibold text-black bg-primary"
            to="mailto:hello@arch.cloud"
          >
            hello@arch.cloud
          </Link>
        </div>
      </Container>
    </div>
    <div className="py-12 border-t border-white border-opacity-10">
      <Container className="grid grid-cols-12 gap-8" size="md">
        <div className="flex flex-col justify-between col-span-12 lg:col-span-5">
          <Link to="/">
            <img src={logo} alt="Arch Cloud logo" />
          </Link>
          <span className="mt-8 text-sm leading-none">
            Creative design by{' '}
            <Link
              className="transition-colors duration-200 hover:text-primary"
              to="https://pixelpoint.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixel Point
            </Link>
          </span>
        </div>
        <div className="grid grid-cols-7 col-span-12 gap-8 text-xs font-semibold tracking-widest uppercase lg:col-span-7">
          <div className="col-span-7 sm:col-span-4 lg:col-span-5 xl:col-span-4">
            <h3 className="text-white text-opacity-30">{navigation1.label}</h3>
            <div className="grid max-w-sm grid-cols-3 mt-6 gap-x-8 md:gap-x-12 gap-y-6">
              {navigation1.items.map(({ href, name }) => (
                <Link
                  className="leading-none transition-colors duration-200 col-span-full xs:col-span-1 xs:even:col-span-2 hover:text-primary"
                  to={href}
                  key={name}
                  onClick={(e) => {
                    if (href.startsWith('#')) {
                      e.preventDefault();
                      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-7 sm:col-span-3 lg:col-start-6 lg:col-end-8">
            <h3 className="text-white text-opacity-30">{navigation2.label}</h3>
            <div className="grid mt-6 gap-y-6">
              {navigation2.items.map(({ href, name }) => (
                <Link
                  className="leading-none transition-colors duration-200 hover:text-primary"
                  to={href}
                  key={name}
                  target="_blank"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  </footer>
);

export default Footer;
