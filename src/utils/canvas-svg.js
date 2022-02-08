/* eslint-disable */

import React, { useEffect, useRef, useState } from 'react';

const CanvasSvg = ({ src, width, height, onLoad, className }) => {
  const canvasRef = useRef();
  const [isDesktopChrome, setIsDesktopChrome] = useState();
  const imgPlaceholderData = `data:image/svg+xml;charset=utf-8,%3Csvg height='${
    height * 2
  }' width='${width * 2}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`;
  useEffect(() => {
    const ua = window.navigator.userAgent;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)
    ) {
      setIsDesktopChrome(false);
    } else if (/Chrome/i.test(ua)) {
      setIsDesktopChrome(true);
    } else {
      setIsDesktopChrome(false);
    }
  }, []);

  useEffect(() => {
    if (isDesktopChrome) {
      const image = new Image();
      const { devicePixelRatio } = window;
      image.addEventListener('load', () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = devicePixelRatio * width;
        canvas.height = devicePixelRatio * height;
        ctx.drawImage(image, 0, 0);
        if (onLoad) {
          onLoad();
        }
      });
      image.src = src;
    }
  }, [src, isDesktopChrome]);
  return (
    <div className={className}>
      {isDesktopChrome === true && (
        <div className="relative inline-block overflow-hidden">
          <div className="block">
            <img
              src={imgPlaceholderData}
              alt=""
              style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', position: 'static' }}
              aria-hidden
            />
          </div>
          <canvas
            ref={canvasRef}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'block',
              marginLeft: 'auto',
            }}
          />
        </div>
      )}
      {isDesktopChrome === false && (
        <img
          src={src}
          style={{ width, height: 'auto', display: 'block', marginLeft: 'auto' }}
          onLoad={onLoad}
        />
      )}
    </div>
  );
};

export default CanvasSvg;
