import React from 'react';
import '../css/NoticiaItem.css';
import User from './User';
import Megusta from './Megusta';
import { numberRandom } from '../services/functions';

const NoticiaItem = (props) => {
  const handleItemClik = () => {
    props.handleClikItemFullScreen(props);
  };

  return (
    <div className="NoticiaItem">
      <div>
        <User image={props.image} name={props.name}>
          <p className="User-tiempo"> Hace {numberRandom(2, 24)} horas </p>
        </User>

        <p className="NoticiasItem-name">
          {props.species},{' '}
          {(props.location && props.location.name) || props.name}
        </p>

        <img
          className="NoticiaItem-img"
          src={props.image}
          alt={props.name}
          onClick={handleItemClik}
        />
      </div>

      <Megusta
        likes={(props.episode.length || 1) * 5}
        compartidos={(props.episode.length || 1) * 3}
      />
    </div>
  );
};

export default NoticiaItem;
