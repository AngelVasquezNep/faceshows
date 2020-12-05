import React from 'react';
import '../css/Relase.css';

const Item = (props) => {
  const handleClick = (ev) => {
    props.handleClick(props.name, props.id);
  };

  return (
    <div
      onClick={handleClick}
      className={'Relase--item' + ' ' + (props.active === props.id && 'active')}
      title={props.name}
    >
      <img src={props.img} alt={props.name} />
      <p> {props.name} </p>
    </div>
  );
};

export default Item;
