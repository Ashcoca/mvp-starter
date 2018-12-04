import React from 'react';

const DefenseList = (props) => (
    <li className="player-box animated fadeInDown" onClick = {props.onClick}>
      { props.item.firstName + " " + props.item.lastName }
      <div className="hidden">{props.item.teamAbbr}|{props.item.opponentTeamAbbr}|{props.item.rank}|{props.item.id}|{props.item.position}</div>
    </li>
  )


export default DefenseList;