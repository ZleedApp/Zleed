import Head from "next/head";
import Header from "../../components/header";
import {getCookie, hasCookie} from "cookies-next";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";

export default function Dashboard() {
  const [ data, setData ] = useState(null);
  const [ isLoading, setLoading ] = useState(false);

  const jwtToken = getCookie('jwt');

  useEffect(() => {
    if(!hasCookie('jwt')) return (<div>You are not logged in</div>);

    setLoading(true);

    fetch(`https://zleed.ga/api/v1/user/@me`, { headers: { 'Authorization': `Bearer ${jwtToken}` } })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [ jwtToken, hasCookie ]);

  if (isLoading) return <p>Loading...</p>
  if (!data) return (<div>You are not logged in</div>);

  return (
    <div>
      <Head>
        <title>Zleed &bull; Dashboard</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <div>
        <p>userId: {data.userId}</p>
        <p>userName: {data.userName}</p>
        <p>userDisplayName: {data.userDisplayName}</p>
        <p>userEmail: {data.userEmail}</p>
        <p>userCreated: {data.userCreated}</p>
        <p>streamToken: {data.streamData.streamToken}</p>
        <p>streamTitle: {data.streamData.streamTitle}</p>
        <p>streamGame: {data.streamData.streamGame}</p>
        <p>streamLanguage: {data.streamData.streamLanguage}</p>
        <p>isLive: {data.isLive}</p>
        <p>isLive: {data.isAdmin}</p>
      </div>
    </div>
  )
}