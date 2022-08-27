import { useRouter } from 'next/router';
import {useEffect, useRef, useState} from "react";

import Hls from "hls.js";
import Head from "next/head";

export default function Cid() {
  const [ data, setData ] = useState(null);
  const [ isLoading, setLoading ] = useState(false);

  const videoRef = useRef(null);

  const router = useRouter();
  const { cid } = router.query;

  useEffect(() => {
    if(!router.isReady) return;

    setLoading(true);

    fetch(`http://zleed.ga/api/v1/channel/${cid}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [ router.isReady ]);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  let userStreamUrl = `http://strmd.eu1.zleed.ga/${data.userData.userName}.m3u8`;

  const hls = new Hls();

  hls.loadSource(userStreamUrl);
  hls.attachMedia(videoRef.current);

  console.log(hls);
  console.log(videoRef.current);

  return (
    <div>
      <Head>
        <title>Zleed &bull; {data.userData.displayName}</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1>{data.userData.displayName}</h1>

      <video autoPlay controls ref={videoRef} />
    </div>
  )
}