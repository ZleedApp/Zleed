import styles from '../styles/Auth.module.scss';

import Head from 'next/head';
import Link from 'next/link';
import SiteSeo from "../components/siteSeo";

export default function Register() {
  return (
    <div className={styles.centerDiv}>
      <Head>
        <title>Zleed &bull; Register</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <SiteSeo title="Zleed &bull; Register" description="A free and open-source streaming platform." />
      </Head>

      <form>
        <div className={styles.formTop}>
          <img
            src="https://zleed.ga/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_transparent.0edb399c.png&w=256&q=75"
            width="128px" height="128px"/>

          <h1>Zleed</h1>
        </div>

        <div className={styles.formBottom}>
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="E-Mail" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="password_confirm" placeholder="Confirm Password" />

          <div className={styles.buttonList}>
            <Link href="/login">
              <a>Already have an account?</a>
            </Link>

            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  )
}