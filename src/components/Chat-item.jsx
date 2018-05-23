import React from 'react'
import '../css/ChatItem.css'

const chatItem = props => {
  
  const text1 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quos minima eum enim corrupti eius vero aspernatur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quos minima eum enim corrupti eius vero aspernatur '
  const text2 = 'Lorem, ipsum Hola'
  const text3 = 'Lorem, ipsum dolor sit eius vero aspernatur '

  const arreglo = [
    { content: text1, author: 'User' },
    { content: text3, author: 'Friend' },
    { content: text2, author: 'User' },
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

            <div key={index} 
                 className=  { item.author === 'User' ?  "ChatItem ChatItem-right" : 'ChatItem ChatItem-left' } >
              <div>
                <div className="ChatItem--width85">
                  <div className= 'ChatItem--content'>
                      <span>
                        { item.content } 
                      </span>
                  </div>
                </div>
              </div>
            </div>

            )
          })
      }

  </div>
  )
}


export default chatItem