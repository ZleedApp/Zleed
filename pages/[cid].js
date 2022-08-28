import { useRouter } from 'next/router';
import {useEffect, useRef, useState} from "react";

import Hls from "hls.js";
import Head from "next/head";
import StreamPlayer from "../components/streamPlayer";
import Header from "../components/header";

import styles from "../styles/Channel.module.css";
import AppContent from "../components/appContent";

export default function Cid() {
  const [ data, setData ] = useState(null);
  const [ isLoading, setLoading ] = useState(false);

  const videoRef = useRef(null);

  const router = useRouter();
  const { cid } = router.query;

  useEffect(() => {
    if(!router.isReady) return;

    setLoading(true);

    fetch(`https://zleed.ga/api/v1/user/${cid}`)
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
        <title>Zleed &bull; {data.userDisplayName}</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <AppContent>
        <div className={styles.leftSide}>
          <StreamPlayer src={`https://strmd.eu1.zleed.ga/${data.userName}.m3u8`} className={styles.videoItem} />
          <div>
            <label>{data.userDisplayName}</label>
            <label>{data.streamData.streamTitle}</label>
            <label>{data.streamData.streamGame}</label>
          </div>
        </div>

        <div className={styles.rightSite}>
          <p>chat tba</p>
        </div>
      </AppContent>
    </div>
  )
}

/*
<div className={styles.leftSide}>
          <StreamPlayer src={`https://strmd.eu1.zleed.ga/${data.userName}.m3u8`} className={styles.videoItem} />
          <div>
            <label>{data.userDisplayName}</label>
            <label>{data.streamData.streamTitle}</label>
            <label>{data.streamData.streamGame}</label>
          </div>
        </div>

        <div className={styles.rightSite}>
          <p>chat tba</p>
        </div>
 */