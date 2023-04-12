import React from 'react';
import classes from './style.module.css';

function Loader() {
  return <div className={classes['spinner-border']}></div>;
}

export default Loader;
