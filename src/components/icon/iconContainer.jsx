import React from 'react';
import './icon.css';

function Icon(props) {
  const { color, size } = props;
  return (
    <div className="Icon">
      <button onClick={props.handleClick}>
        <svg
          fill={color}
          width={size}
          height={size}
          viewBox={props.viewBox || '0 0 32 32'}
        >
          {props.children}
        </svg>
        <p> {props.value || ''} </p>
      </button>
    </div>
  );
}

export default Icon;
