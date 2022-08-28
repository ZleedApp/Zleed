import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Auth.module.css';
import logo from '../public/logo_transparent.png';
import Link from "next/link";
import {setCookie} from "cookies-next";

export default function Register() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const registerData = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }

    const response = await fetch('https://zleed.ga/api/v1/auth/register',
      { method: 'POST', body: JSON.stringify(registerData), headers: { 'Content-Type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        if(data.status === 1) {
          setCookie('jwt', data.data.jwtToken);
        } else {
          alert(data.message);
        }
      });
  }

  return (
    <div className={styles.centerDiv}>
      <Head>
        <title>Zleed &bull; Register</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <form className={styles.centerElement} onSubmit={handleSubmit}>
        <div className={styles.centerHeader}>
          <Image src={logo} alt="Zleed Icon" width={128} height={128} />

          <h2>Zleed</h2>
        </div>

        <input required type="text" name="username" placeholder="Username" />
        <input required type="email" name="email" placeholder="Email" />
        <input required type="password" name="password" placeholder="Password" />
        <input required type="password" name="repeat_pass" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>

      <Link href="/login">
        <a>Already have an account?</a>
      </Link>

      <Link href="/reset">
        <a>Forgot Password?</a>
      </Link>
    </div>
  )
}