import React from 'react';

const Spinner = () => {
  return (
    <div className="cities__status-wrapper" style={{backgroundImage: `url(../img/spinner.gif)`, backgroundSize: `90px 70px`}}>
      <b className="cities__status">Loading...</b>
    </div>
  );
};

export default Spinner;
