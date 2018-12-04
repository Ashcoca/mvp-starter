import React from 'react';


const ReceiverList = (props) => (
  <li className="player-box animated fadeInDown" onClick = {props.onClick}>
    { props.item.firstName + " " + props.item.lastName }
    <i className="js-remove" handleDelete={props.handleDelete}>✖</i>
    <div className="hidden">{props.item.teamAbbr}|{props.item.opponentTeamAbbr}|{props.item.rank}|{props.item.id}|{props.item.position}</div>
  </li>
)

export default ReceiverList;

