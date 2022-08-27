import Head from "next/head";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Zleed &bull; Login</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}