import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zleed &bull; Explore</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <Link href="/register">
        <a>register</a>
      </Link>
      |
      <Link href="/login">
        <a>login</a>
      </Link>
      |
      <Link href="/dashboard">
        <a>dashboard</a>
      </Link>

      <h3>Test:</h3>

    </div>
  )
}
