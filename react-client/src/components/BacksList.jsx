import React from 'react';

const BacksList = (props) => (
    <li className="player-box animated fadeInDown">
      { props.item.firstName + " " + props.item.lastName }
      <div className="hidden">{props.item.teamAbbr}|{props.item.opponentTeamAbbr}|{props.item.rank}|{props.item.id}|{props.item.position}</div>
    </li>
  )


export default BacksList;