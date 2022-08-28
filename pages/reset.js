import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Auth.module.css';
import logo from '../public/logo_transparent.png';
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.centerDiv}>
      <Head>
        <title>Zleed &bull; Reset Password</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <form className={styles.centerElement}>
        <div className={styles.centerHeader}>
          <Image src={logo} alt="Zleed Icon" width={128} height={128} />

          <h2>Zleed</h2>
        </div>

        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <button type="submit">Reset Password</button>
      </form>

      <Link href="/register">
        <a>Don't an account?</a>
      </Link>

      <Link href="/login">
        <a>Remembered the password?</a>
      </Link>
    </div>
  )
}