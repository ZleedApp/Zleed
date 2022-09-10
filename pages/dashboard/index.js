import Head from "next/head";
import SiteSeo from "../../components/siteSeo";
import AppContainer from "../../components/appContainer";
import {getCookie, hasCookie} from "cookies-next";
import {useEffect, useState} from "react";

export default function DashboardHome() {
  const [ data, setData ] = useState(null);
  const [ isLoading, setLoading ] = useState(false);

  if(!hasCookie('zleed_jwt')) return (<div>You are not logged in</div>);

  useEffect(() => {
    const jwtToken = getCookie('zleed_jwt');

    setLoading(true);

    fetch('https://zleed.ga/api/v1/user/@me', { headers: { 'Authorization': `Bearer ${jwtToken}` } })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [ getCookie, hasCookie ]);

  if (isLoading) return <p>Loading...</p>
  if (!data) return (<div>You are not logged in</div>);

  return (
    <div>
      <Head>
        <title>Zleed Dashboard &bull; Home</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <SiteSeo title="Zleed Dashboard &bull; Home" description="A free and open-source streaming platform." />
      </Head>

      <AppContainer>
        <h2 style={{ 'margin-bottom': '6px' }}>Dashboard</h2>

        <label>Stream Key: </label> <code>{data.streamData.streamToken}</code>

        <br />
        <br />

        <label>Data: </label>
        <pre style={{ overflow: 'scroll' }}>{JSON.stringify(data)}</pre>
      </AppContainer>
    </div>
  )
}