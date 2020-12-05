import React from 'react';
import User from './User';
import Spinner from './Spinner';
import '../css/NotificacionesMessage.css';
import AceptarAmistad from './AceptarAmistad';

const NotificationMessage = (props) => {
  const { deleteElementOfArray, typeNotification } = props;

  const deleteElement = (index) => {
    deleteElementOfArray(typeNotification.toString(), index);
  };

  return (
    <div className="NotificationMessage">
      <div>
        <h5 className="NotificationMessage-type"> {props.typeNotification} </h5>
      </div>

      <div className="NotificationMessage-body">
        <ul>
          {props.loading && <Spinner />}
          {props.notificaciones.map((item, index) => {
            return (
              <li key={item.id} className="NotificationMessage-body-item">
                <User
                  image={item.album.images[0].url}
                  name={item.artists[0].name}
                  Width={props.typeNotification === 'Messages' && '100%'}
                >
                  {props.typeNotification === 'Messages' && (
                    <span>{item.album.name}</span>
                  )}
                </User>

                {props.typeNotification === 'Artistas' && (
                  <AceptarAmistad index={index} deleteElement={deleteElement} />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NotificationMessage;
