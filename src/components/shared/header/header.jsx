import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Link from 'components/shared/link';
import Logo from 'images/logo.svg';

const navigation = [
  { label: 'Services', to: '#services' },
  { label: 'About us', to: '#about-us' },
  { label: 'Customers and Partners', to: '#customers-and-partners' },
  { label: 'Technologies', to: '#technologies' },
];

export default function Header() {
  return (
    <div className="relative bg-black">
      <Popover>
        {({ open: isOpen, close }) => (
          <>
            <Container size="md" aria-label="Global">
              <nav className="flex items-center justify-between h-20" aria-label="Global">
                <Link to="/" className="z-20">
                  <span className="sr-only">Arch Cloud</span>
                  <img src={Logo} alt="Arch Cloud logo" />
                </Link>
                <div className="z-20 flex items-center -mr-2 lg:hidden">
                  <Popover.Button className="items-center justify-center p-2 text-white rounded-md hover:text-primary focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    <Burger isOpen={isOpen} />
                  </Popover.Button>
                  {isOpen && (
                    <div className="absolute top-0 right-0 z-30" onClick={close}>
                      <span className="sr-only">Close Menu</span>
                      <div className="w-20 h-20" aria-hidden="true" />
                    </div>
                  )}
                </div>
                <div className="flex-row items-center hidden text-center divide-x lg:flex divide-primary">
                  {navigation.map(({ label, to }, index) => (
                    <span
                      className="px-4 text-xs font-semibold leading-none tracking-widest last:pr-0"
                      key={index}
                    >
                      <Link
                        to={to}
                        className="text-white uppercase transition-colors duration-200 hover:text-primary"
                        onClick={(e) => {
                          if (to.startsWith('#')) {
                            e.preventDefault();
                            document.querySelector(to).scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {label}
                      </Link>
                    </span>
                  ))}
                </div>
              </nav>
            </Container>
            <Transition
              show={isOpen}
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                className="absolute inset-x-0 top-0 z-10 min-h-screen py-20 transition origin-top-right transform bg-black lg:hidden"
                focus
                static
              >
                <div className="overflow-hidden rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex flex-col text-center">
                    {navigation.map(({ label, to }, index) => (
                      <Link
                        key={index}
                        to={to}
                        className="block px-3 py-4 text-base font-medium leading-none text-white transition-colors duration-200 rounded-md outline-none hover:text-primary"
                        onClick={close}
                      >
                        {label}
                      </Link>
                    ))}
                    <div className="pt-6 pb-12">
                      <Button
                        className="uppercase"
                        to="mailto:hello@arch.cloud"
                        size="normal"
                        theme="primary"
                        tag="a"
                      >
                        Contact us
                      </Button>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
