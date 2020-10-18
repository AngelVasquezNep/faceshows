import React from 'react'

import Menu from 'components/Menu'
import LeftAside from 'components/LeftAside'
import RightAside from 'components/RightAside'
import MainContent from 'components/MainContent'

import styles from './index.module.css'

const HomeLayout = ({ children, leftAside, rightAside }) => {
  return (
    <main className={styles['HomeLayout-container']}>
      <Menu />
      <LeftAside>{leftAside}</LeftAside>
      <MainContent>{children}</MainContent>
      <RightAside>{rightAside}</RightAside>
    </main>
  )
}

export default HomeLayout
