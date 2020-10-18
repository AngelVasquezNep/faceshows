import React from 'react'

import styles from './index.module.css'

const Menu = () => <nav id="MainMenuContainer" className="MainMenu-container">Menu</nav>
const LeftAside = () => (
  <aside id="LeftAsideContainer" className="LeftAside-container">left-sidebar</aside>
)
const Content = () => (
  <section id="MainContentContainer" className="MainContent-container">content</section>
)
const RightAside = () => (
  <aside id="RightAsideContainer" className="RightAside-container">right-sidebar</aside>
)

const HomeLayout = () => {
  return (
    <main className={styles['HomeLayout-container']}>
      <Menu />
      <LeftAside />
      <Content />
      <RightAside />
    </main>
  )
}

export default HomeLayout
