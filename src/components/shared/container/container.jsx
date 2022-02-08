import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const sizeClassNames = {
  sm: 'relative max-w-[1144px] mx-auto px-4 md:px-6 lg:px-10 xl:px-0',
  md: 'relative max-w-[1216px] mx-auto px-4 md:px-6 lg:px-10 xl:px-0',
};
const Container = ({ className: additionalClassName, size, children, ...otherProps }) => {
  const className = classNames(sizeClassNames[size], additionalClassName);

  return (
    <div className={className} {...otherProps}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizeClassNames)),
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: null,
  size: null,
};

export default Container;
