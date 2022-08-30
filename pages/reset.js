import styles from '../styles/Auth.module.scss';

import Head from 'next/head';
import Link from "next/link";
import SiteSeo from "../components/siteSeo";
import zleedIcon from "../public/logo.png";
import Image from "next/image";
import ErrorMessage from "../components/errorMessage";

export default function Forgot() {

  const handleSubmit = (e) => {
    e.preventDefault();

    if(e.target[0].value === '') {
      ErrorMessage(document, 'Username is required.', styles);

      return;
    } else if(e.target[1].value === '') {
      ErrorMessage(document, 'Email is required.', styles);

      return;
    }

    const userPayload = {
      username: e.target[0].value,
      email: e.target[1].value,
    }
  }

  return (
    <div className={styles.centerDiv}>
      <Head>
        <title>Zleed &bull; Reset Password</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <SiteSeo title="Zleed &bull; Reset Password" description="A free and open-source streaming platform." />
      </Head>

      <form method="post" onSubmit={handleSubmit}>
        <div className={styles.formTop}>
          <Image src={zleedIcon} width={128} height={128} />

          <h1>Zleed</h1>
        </div>

        <div className={styles.formBottom}>
          <input type="text" name="username" placeholder="Username"/>
          <input type="email" name="email" placeholder="E-Mail"/>

          <div className={styles.buttonList}>
            <Link href="/register">
              <a>Don&apos;t have an account?</a>
            </Link>

            <button type="submit">Reset Password</button>
          </div>
        </div>
      </form>

      <div className={styles.errorMessage}>hi</div>
    </div>
  )
}
