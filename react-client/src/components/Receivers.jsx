import React from 'react';
import ReceiverList from './ReceiverList.jsx';

const Receivers = (props) => (
  <ol className="player-list">
    <h4> Wide Receivers </h4>
    { props.items[0].map(item => <ReceiverList item={item}/>)}
  </ol>
)

export default Receivers;