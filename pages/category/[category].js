import Head from "next/head";
import {useRouter} from "next/router";
import SiteSeo from "../../components/siteSeo";

export default function Channel() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <Head>
        <title>Zleed &bull; Category: {category}</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <SiteSeo title="Zleed &bull; Category: {category}" description="A free and open-source streaming platform." />
      </Head>

      design in progress.
    </div>
  )
}