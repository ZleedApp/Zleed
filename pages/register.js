import styles from '../styles/Auth.module.scss';

import Head from 'next/head';
import Link from 'next/link';
import SiteSeo from "../components/siteSeo";
import zleedIcon from "../public/logo.png";
import Image from "next/image";
import ErrorMessage from "../components/errorMessage";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();

    if(e.target[0].value === '') {
      ErrorMessage(document, 'Username is required.', styles);

      return;
    } else if(e.target[1].value === '') {

      ErrorMessage(document, 'Email is required.', styles);

      return;
    } else if(e.target[2].value === '') {
      ErrorMessage(document, 'Password is required.', styles);

      return;
    } else if(e.target[3].value === '') {
      ErrorMessage(document, 'Confirm Password is required.', styles);

      return;
    } else if(e.target[2].value !== e.target[3].value) {
      ErrorMessage(document, 'Passwords do not match.', styles);

      return;
    }

    const userPayload = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value
    }
  }

  return (
    <div className={styles.centerDiv}>
      <Head>
        <title>Zleed &bull; Register</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <SiteSeo title="Zleed &bull; Register" description="A free and open-source streaming platform." />
      </Head>

      <form method="post" onSubmit={handleSubmit}>
        <div className={styles.formTop}>
          <Image src={zleedIcon} width={128} height={128} />

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

      <div className={styles.errorMessage}>hi</div>
    </div>
  )
}