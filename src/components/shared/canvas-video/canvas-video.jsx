import PropTypes from 'prop-types';
import React, { useEffect, useRef, useCallback, useState } from 'react';

const CanvasVideo = ({ src, className, inView, autoPlay, preload, setBackgroundColor }) => {
  const requestAnimationFrameId = useRef();
  const videoRef = useRef();
  const canvasRef = useRef();
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const renderVideo = useCallback((ctx, video) => {
    ctx.drawImage(video, 0, 0);
    requestAnimationFrameId.current = window.requestAnimationFrame(() => {
      renderVideo(ctx, video);
    });
  }, []);

  // Set canvas size when video metadata is available
  const onVideoReady = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  }, []);

  // Check whether video has width which could be considered as a sign that metadata is loaded
  // I use it as an alternative for state attribute in video, since it has a different behaviour in Safari and Chrome

  const onMount = () => {
    const video = videoRef.current;
    if (video.videoWidth > 0) {
      setIsVideoReady(true);
    } else {
      setIsVideoReady(false);
    }
  };

  // Run a video ready function or subscribe to event listener waiting meta data loading
  // SSR could cause the issue when we subscribe to even when it's already triggered
  // For this reason we have an additional video width check

  useEffect(() => {
    const video = videoRef.current;
    if (isVideoReady) {
      onVideoReady();
    } else {
      video.addEventListener('loadedmetadata', () => {
        onVideoReady();
        setIsVideoReady(true);
      });
    }
  }, [isVideoReady, onVideoReady]);

  useEffect(onMount, []);

  const setBackgroundColorIfPossible = (ctx) => {
    const rawColorData = ctx.getImageData(0, 0, 8, 8).data;
    const r = rawColorData[60];
    const g = rawColorData[61];
    const b = rawColorData[62];
    if (r === 0 && g === 0 && b === 0) {
      setTimeout(() => {
        setBackgroundColorIfPossible(ctx);
      }, 1000);
    } else {
      setBackgroundColor(`rgb(${r},${g},${b})`);
    }
  };
  // Play the video and render video in canvas simultaneously
  const play = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    video.play();
    const ctx = canvas.getContext('2d');
    renderVideo(ctx, video);

    if (setBackgroundColor) {
      setBackgroundColorIfPossible(ctx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pause the video and stop execution of animation frame
  const pause = useCallback(() => {
    const video = videoRef.current;
    video.pause();
    window.cancelAnimationFrame(requestAnimationFrameId.current);
  }, []);

  // Move to a playing state when all condition are met
  useEffect(() => {
    if (inView && isVideoReady && !isPlaying) {
      setIsPlaying(true);
      play();
    }
    if (!inView && isVideoReady && isPlaying) {
      setIsPlaying(false);
      pause();
    }
  }, [inView, isVideoReady, isPlaying, play, pause, src]);

  return (
    <>
      <canvas ref={canvasRef} className={className} />
      <video
        ref={videoRef}
        className="hidden"
        src={src}
        autoPlay={autoPlay}
        preload={preload}
        muted
        playsInline
        loop
      />
    </>
  );
};

CanvasVideo.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  inView: PropTypes.bool.isRequired,
  autoPlay: PropTypes.bool,
  preload: PropTypes.string,
  setBackgroundColor: PropTypes.func,
};

CanvasVideo.defaultProps = {
  className: '',
  autoPlay: true,
  preload: 'auto',
  setBackgroundColor: undefined,
};
export default CanvasVideo;
