import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

StateFeature.propTypes = {};

function StateFeature(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Click Count</button>
    </>
  );
}

export default StateFeature;
