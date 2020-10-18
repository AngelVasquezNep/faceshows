import React from 'react'
import Link from 'next/link'

import UtilsDate from 'utils/date'

import BaseCard from 'components/Cards/BaseCard'
import Avatar from 'components/Avatar'

import S from './index.module.css'

const PostImage = ({ image, alt }) => (
  <img src={image} alt={alt || 'Post Image'} className={S['PostImage']} />
)

const PostCard = ({ className, id, image, name, created }) => {
  return (
    <BaseCard className={className}>
      <div className={S['PostCard']}>
        <header className={S['PostCard-header']}>
          <Avatar
            image={image}
            title={
              <Link href="/characters/[id]" as={`/characters/${id}`}>
                <a style={{ marginBottom: '0.5rem' }}> {name} </a>
              </Link>
            }
            subTitle={UtilsDate.format(created)}
          />
        </header>
        <section className={S['PostCard-content']}>
          <PostImage image={image} />
        </section>
        <footer className={S['PostCard-footer']}>
          <div className={S['PostCard-stats']}>Stats</div>
          <div className={S['PostCard-actions']}>Actions</div>
        </footer>
      </div>
    </BaseCard>
  )
}

export default PostCard
