import React from 'react';

const ReceiverList = (props) => (
  <li className="player-box">
    { props.item.firstName + " " + props.item.lastName }
    <div className="hidden">{props.item.teamAbbr} {props.item.opponentTeamAbbr} {props.item.rank}</div>
  </li>
)

export default ReceiverList;