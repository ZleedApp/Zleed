import {useEffect, useRef} from "react";
import Hls from "hls.js";

export default function StreamPlayer({ src, className }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.controls = true
    const defaultOptions = {};
    if (video.canPlayType('application/vnd.apple.mpegurl'))
      video.src = src
    else if (Hls.isSupported()) {
      const hls = new Hls();

      hls.loadSource(src);
      hls.attachMedia(video);
    } else {
      console.error(
        'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API'
      )
    }
  }, [ src, videoRef ])

  return (
    <video autoPlay controls ref={videoRef} className={className} />
  )
}