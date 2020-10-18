import React from 'react'
import BaseCard from 'components/Cards/BaseCard'

const ListPost = ({ posts }) =>
  posts.map((_, i) => (
    <BaseCard>
      <p key={i}>Hola</p>
    </BaseCard>
  ))

ListPost.defaultProps = {
  posts: []
}

export default ListPost
