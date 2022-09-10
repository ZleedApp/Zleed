import styles from '../styles/Auth.module.scss';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import SiteSeo from '../components/siteSeo';
import { setCookie } from 'cookies-next';

import zleedIcon from '../public/logo.png'
import ErrorMessage from "../components/errorMessage";

export default function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();

    if(e.target[0].value === '') {

      ErrorMessage(document, 'Email is required.', styles);

      return;
    } else if(e.target[1].value === '') {
      ErrorMessage(document, 'Password is required.', styles);

      return;
    }

    const userPayload = {
      email: e.target[0].value,
      password: e.target[1].value,
    }

    fetch('https://zleed.ga/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userPayload)
    })
      .then(res => res.json())
      .then(data => {
        if(data.status === 0) {
          ErrorMessage(document, data.message, styles);
        } else {
          setCookie('zleed_jwt', data.data.jwtToken, { maxAge: data.data.jwtExpires });

          window.location.href = '/dashboard';
        }
      });
  }

  return (
    <div className={styles.centerDiv}>
      <Head>
        <title>Zleed &bull; Login</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <SiteSeo title="Zleed &bull; Login" description="A free and open-source streaming platform." />
      </Head>

      <form method="post" onSubmit={handleSubmit}>
        <div className={styles.formTop}>
          <Image src={zleedIcon} width={128} height={128} />

          <h1>Zleed</h1>
        </div>

        <div className={styles.formBottom}>
          <input type="email" name="email" placeholder="E-Mail"/>
          <input type="password" name="password" placeholder="Password"/>

          <div className={styles.buttonList}>
            <Link href="/reset">
              <a>Forgot Password?</a>
            </Link>

            <button type="submit">Login</button>
          </div>
        </div>
      </form>

      <div className={styles.errorMessage}>hi</div>
    </div>
  )
}
