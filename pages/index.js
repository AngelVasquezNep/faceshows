import React, { Fragment } from 'react'
import Head from 'next/head'

import Home from 'components/Layouts/Home'

const Index = () => (
  <Fragment>
    <Head>
      <title>🔥 Faceshows</title>
    </Head>

    <Home posts={new Array(1).fill(1)} />
  </Fragment>
)

export default Index
