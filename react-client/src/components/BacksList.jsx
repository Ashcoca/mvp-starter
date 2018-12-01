import React from 'react';

const BacksList = (props) => (
    <li className="player-box">
      { props.item.firstName + " " + props.item.lastName }
    </li>
  )


export default BacksList;