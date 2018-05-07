import React from 'react';
import '../css/app.css'

const Container = props => (
  <div className="Container--body">
    {props.children}
  </div>
)

export default Container;