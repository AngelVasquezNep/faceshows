import React from 'react'
import '../css/ChatItem.css'

const chatItem = props => {
  
  const text1 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quos minima eum enim corrupti eius vero aspernatur '
  const text2 = 'Lorem, ipsum  '
  const text3 = 'Lorem, ipsum dolor sit eius vero aspernatur '

  const arreglo = [
    { content: text1, author: 'User' },
    { content: text2, author: 'User' },
    { content: text3, author: 'Friend' },
    { content: text1, author: 'User' },
    { content: text2, author: 'User' },
    { content: text1, author: 'Friend' },
    { content: text3, author: 'User' },
    { content: text1, author: 'User' },
    { content: text2, author: 'Friend' },
    { content: text2, author: 'User' },
    { content: text3, author: 'User' },
    { content: text1, author: 'User' },
    { content: text2, author: 'User' },
    { content: text3, author: 'Friend' },
    { content: text3, author: 'User' },
    { content: text1, author: 'User' },
    { content: text2, author: 'User' },
    { content: text3, author: 'User' }
  ]

  return (
  <div className="ChatContent">

      {
        arreglo.map( (item, index) => {
          return( 
          <div key={index} className="ChatItem">
              <div 
                className= { item.author === 'User' ? 'ChatItem--content ChatItem-User' : 'ChatItem--content'}>
                <p> { item.content } </p>
              </div>
          </div>
            )
          })
      }

  </div>
  )
}


export default chatItem