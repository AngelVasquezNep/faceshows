import React from 'react'
import PostCard from 'components/Cards/PostCard'

import S from './index.module.css'

const ListPost = ({ posts }) => (
  <section className={S['ListPost']}>
    {posts.map((post, i) => (
      <PostCard {...post} className="PostCardItem" key={i} />
    ))}
  </section>
)

ListPost.defaultProps = {
  posts: []
}

export default ListPost
