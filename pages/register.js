import Head from "next/head";

export default function Register() {
  return (
    <div>
      <Head>
        <title>Zleed &bull; Register</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}