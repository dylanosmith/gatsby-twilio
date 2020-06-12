import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StartForm from '../components/start-form';

const IndexPage = () => {
  const [token, setToken] = useState(false);

  return (
    <Layout>
      <SEO title="Home" />
      {!token ? <StartForm storeToken={setToken} /> : <p>Has token</p>}
      <p>
        Todo: 
        1. show local video
        2.conntect to a room 
        3.show participants' video (remote)
        4. Handle events
      </p>
    </Layout>
)}

export default IndexPage
