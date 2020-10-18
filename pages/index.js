import React, { Fragment } from 'react'
import Head from 'next/head'

import API from 'Hooks/useApi'

import ListPosts from 'components/ListPosts'

import Home from 'components/Layouts/Home'

const Index = () => {
  const { data, isLoading, isError } = API.useCharacters()

  console.log({ data, isLoading, isError })

  return (
    <Fragment>
      <Head>
        <title>🔥 Faceshows</title>
      </Head>

      <Home>
        <Fragment>
          {isLoading && 'Cargando...'}
          <ListPosts posts={data.results} />
        </Fragment>
      </Home>
    </Fragment>
  )
}

export default Index
