import { useRouter } from 'next/router';
import {useEffect, useRef, useState} from "react";

import Hls from "hls.js";
import Head from "next/head";
import StreamPlayer from "../components/streamPlayer";
import Header from "../components/header";

export default function Cid() {
  const [ data, setData ] = useState(null);
  const [ isLoading, setLoading ] = useState(false);

  const videoRef = useRef(null);

  const router = useRouter();
  const { cid } = router.query;

  useEffect(() => {
    if(!router.isReady) return;

    setLoading(true);

    fetch(`https://zleed.ga/api/v1/channel/${cid}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [ router.isReady ]);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <Head>
        <title>Zleed &bull; {data.userData.displayName}</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <h1>{data.userData.displayName}</h1>

      <StreamPlayer src={`https://strmd.eu1.zleed.ga/${data.userData.userName}.m3u8`} />
    </div>
  )
}