import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Burger = ({ isOpen }) => {
  const baseClasses = 'h-[2px] rounded-full bg-white my-2 transition-transform';
  const line1Classes = classNames(baseClasses, 'w-1/2', {
    'rotate-45  translate-y-[6px] translate-x-[1px] origin-bottom': isOpen,
  });
  const line2Classes = classNames(baseClasses, 'w-full', {
    '-rotate-45 origin-top	': isOpen,
  });
  const line3Classes = classNames(baseClasses, 'w-3/4', {
    'rotate-45 translate-y-[-9px] translate-x-[3.4px] origin-bottom': isOpen,
  });
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [isOpen]);
  return (
    <div className="w-5">
      <div className={line1Classes} />
      <div className={line2Classes} />
      <div className={line3Classes} />
    </div>
  );
};

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

Burger.defaultProps = {};

export default Burger;
