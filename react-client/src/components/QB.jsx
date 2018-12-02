import React from 'react';
import QBList from './QBlist.jsx';

const Quarterbacks = (props) => (
  <ol className="player-list">
    <h4> Quarterbacks </h4>
    { props.items[0].map(item => <QBList item={item}/>)}
  </ol>
)

export default Quarterbacks;