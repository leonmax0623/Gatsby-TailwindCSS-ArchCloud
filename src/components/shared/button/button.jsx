import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const classes = {
  base: 'whitespace-nowrap !leading-none inline-flex transition-colors duration-200 tracking-widest border-0 font-bold',
  size: {
    small: 'py-2.5 px-3',
    normal: 'py-4 px-7 lg:py-5 lg:px-8',
  },
  theme: {
    primary: 'text-base leading-none',
    secondary: 'text-xs leading-3',
  },
  color: {
    primary: 'bg-primary hover:bg-hover-primary',
    white: 'bg-white',
  },
};

const Button = ({
  className: additionalClassName,
  to,
  size,
  theme,
  children,
  color,
  ...otherProps
}) => {
  const className = classNames(
    classes.theme[theme],
    classes.size[size],
    classes.color[color],
    classes.base,
    additionalClassName
  );

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal']),
  theme: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  className: null,
  to: null,
  size: 'normal',
  theme: 'primary',
  color: 'primary',
};

export default Button;
