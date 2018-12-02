import React from 'react';

const QBList = (props) => (
  <li className="player-box">
    { props.item.firstName + " " + props.item.lastName }
  </li>
)

export default QBList;