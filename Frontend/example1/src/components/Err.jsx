import React, { useContext } from 'react';
import { ErrContext } from '../contexts/ErrContext';
const Err = () => {
  const { err } = useContext(ErrContext);
  return (
    <div className="err-block">
      Erorr
      {String(err)}
    </div>
  );
};

export default Err;