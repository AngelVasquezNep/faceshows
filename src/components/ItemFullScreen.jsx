import React from 'react';
import '../css/ItemFullScreen.css';

const ItemFullScreen = (props) => (
  <div className="ItemFullScreen">
    <div
      className="ItemFullScreen-background"
      style={{ backgroundImage: 'url(' + props.item.image + ')' }}
    ></div>

    <div className="ItemFullScreen-content">
      <img
        className="ItemFullScreen-img"
        src={props.item.image}
        alt={props.item.name}
      />

      <div className="ItemFullScreen-info">
        <h1>{props.item.name}</h1>
        <h2 className="ItemFullScreen-title"> {props.item.name} </h2>
      </div>
    </div>
  </div>
);

export default ItemFullScreen;
