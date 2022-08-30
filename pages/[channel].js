import Head from "next/head";
import {useRouter} from "next/router";
import SiteSeo from "../components/siteSeo";
import AppContainer from "../components/appContainer";
import StreamPlayer from "../components/streamPlayer";

import styles from "../styles/Channel.module.scss";

export default function Channel() {
  const router = useRouter();
  const { channel } = router.query;

  return (
    <div>
      <Head>
        <title>Zleed &bull; {channel}</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <SiteSeo title="Zleed &bull; {channel}" description="A free and open-source streaming platform." />
      </Head>

      <AppContainer>
        <div className={styles.viewContainer}>
          <div className={styles.videoContainer}>
            <StreamPlayer src={`https://strmd.eu1.zleed.ga/${channel}.m3u8`} />
            <label>Zleed is a free and open-source streaming platform.</label>
          </div>

          <div className={styles.chatBar}>

          </div>
        </div>
      </AppContainer>
    </div>
  )
}