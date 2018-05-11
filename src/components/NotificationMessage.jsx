import React from 'react'
// import Users from './User'
import '../css/NotificacionesMessage.css'

const NotificationMessage = props => (
  <div className="NotificationMessage">
    <div>
      <h5 className="NotificationMessage-type"> { props.typeNotification } </h5 >
    </div>
    
    <div className="NotificationMessage-body">
      <ul>
        <li><p className="NotificationMessage-body-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis repudiandae dignissimos ex aut nisi ab, error blanditiis? Velit iure quidem suscipit cupiditate iste in, explicabo exercitationem sit labore possimus!
        </p></li>
        <li><p className="NotificationMessage-body-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis repudiandae dignissimos ex aut nisi ab, error blanditiis? Velit iure quidem suscipit cupiditate iste in, explicabo exercitationem sit labore possimus!
        </p></li>
        <li><p className="NotificationMessage-body-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis repudiandae dignissimos ex aut nisi ab, error blanditiis? Velit iure quidem suscipit cupiditate iste in, explicabo exercitationem sit labore possimus!
        </p></li>
      </ul>

      

    </div>
  </div>
)

export default NotificationMessage