import React from 'react'
import Menu from 'components/Menu'
import LeftAside from 'components/LeftAside'
import RightAside from 'components/RightAside'
import MainContent from 'components/MainContent'

import ListPosts from 'components/ListPosts'

import styles from './index.module.css'

const HomeLayout = ({ posts }) => {
  return (
    <main className={styles['HomeLayout-container']}>
      <Menu />
      <LeftAside />
      <MainContent>
        <ListPosts posts={posts} />
      </MainContent>
      <RightAside />
    </main>
  )
}

export default HomeLayout
