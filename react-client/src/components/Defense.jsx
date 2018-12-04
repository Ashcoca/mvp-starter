import React from 'react';
import DefenseList from './DefenseList.jsx';

const Defense = (props) => (
  <div>
    <div className="input-container">
      <input type="text" placeholder="Player Name"></input>
      <button className="add-player">Add Defense</button>
    </div>
    <ol className="player-list">
      { props.items[0].map(item => <DefenseList item={item} onClick={props.onClick}/>)}
    </ol>
  </div>
)

export default Defense;