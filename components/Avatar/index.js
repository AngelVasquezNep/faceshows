import React from 'react'

import S from './index.module.css'

const Avatar = ({ image, title, subTitle, avatarName }) => (
  <div className={S['Avatar']}>
    <img
      src={image}
      className={S['Avatar-image']}
      alt={(typeof title === 'string' && title) || avatarName}
    />
    {(title || subTitle) && (
      <div className={S['Avatar-extra']}>
        {title}
        {subTitle}
      </div>
    )}
  </div>
)

export default Avatar