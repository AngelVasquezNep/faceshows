import React from 'react'
import User from './User'
import Spinner from './Spinner'
import '../css/NotificacionesMessage.css'

const NotificationMessage = props => (
  <div className="NotificationMessage">
    <div>
      <h5 className="NotificationMessage-type"> { props.typeNotification } </h5 >
    </div>
    
    <div className="NotificationMessage-body">
      <ul>
        { props.loading && <Spinner/>}
        {
          props.notificaciones.map(item =>{
          return  <li key={item.id} className="NotificationMessage-body-item">
                    <User 
                      image={ item.album.images[0].url } 
                      name={item.artists[0].name}
                    />
                  </li>
          })
        }
      </ul>

    </div>
  </div>
)

export default NotificationMessage