import React from 'react';

const ReceiverList = (props) => (
  <li className="player-box">
    { props.item.firstName + " " + props.item.lastName }
  </li>
)

export default ReceiverList;