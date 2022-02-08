import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const fontWeightClassNames = {
  semi: 'font-semibold',
  bold: 'font-bold',
};

const sizeClassNames = {
  xl: 'text-4xl md:text-5xl xl:text-6xl',
  lg: 'text-3xl md:text-4xl xl:text-5xl',
  md: 'text-2xl md:text-3xl xl:text-4xl',
  sm: 'text-xl md:text-2xl xl:text-3xl',
};

const themeClassNames = {
  white: 'text-white',
  black: 'text-black',
};

const Heading = ({
  className: additionalClassName,
  tag: Tag,
  size,
  theme,
  fontWeight,
  asHTML,
  children,
}) => {
  const className = classNames(
    fontWeightClassNames[fontWeight],
    sizeClassNames[size],
    themeClassNames[theme],
    additionalClassName
  );

  if (asHTML) {
    return <Tag className={className} dangerouslySetInnerHTML={{ __html: children }} />;
  }

  return <Tag className={className}>{children}</Tag>;
};

Heading.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizeClassNames)),
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
  fontWeight: PropTypes.oneOf(Object.keys(fontWeightClassNames)),
  asHTML: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  className: null,
  asHTML: false,
  size: 'xl',
  theme: 'white',
  fontWeight: 'semi',
};

export default Heading;
