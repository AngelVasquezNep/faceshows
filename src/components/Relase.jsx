import React from 'react';
import '../css/Relase.css';
import RelaseCategory from './Relase-category';

const Relase = (props) => (
  <div className="Relase">
    <RelaseCategory handleSearch={props.handleSearch} />
  </div>
);

export default Relase;
