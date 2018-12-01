import React from 'react';
import BacksList from './BacksList';

const Backs = (props) = (
  <ol className="player-list">
    <h4> Running Backs </h4>
    { props.items[0].map(item => <BacksList item={item}/>)}
  </ol>

)

export default Backs;