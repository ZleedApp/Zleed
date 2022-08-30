import Head from 'next/head'
import SiteSeo from "../components/siteSeo";

import styles from '../styles/Home.module.scss';

import {MdPerson, MdSearch} from "react-icons/md";
import Link from "next/link";
import defaultImage from "../public/default_img.png";
import Image from "next/image";
import AppContainer from "../components/appContainer";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Zleed &bull; Explore</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <SiteSeo title="Zleed &bull; Explore" description="A free and open-source streaming platform." />
      </Head>

      <AppContainer>
        <h2 style={{ 'margin-bottom': '6px' }}>Currently Live</h2>

        <div className={styles.streamList}>
          <div className={styles.streamCard}>
            <Image src={defaultImage} width={320} height={180} />

            <div className={styles.streamCardInfo}>
              <Link href="/zleed">
                <a>Zleed is a free and open-source streaming platform.</a>
              </Link>
              <Link href="/zleed">
                <a>Zleed</a>
              </Link>
              <Link href="/category/podcasts">
                <a>Podcasts</a>
              </Link>
            </div>
          </div>
        </div>

        <h2>Games</h2>
      </AppContainer>
    </div>
  )
}
