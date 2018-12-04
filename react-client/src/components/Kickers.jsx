import React from 'react';
import KickerList from './KickerList.jsx';

const Kickers = (props) => (
  <div>
    <div className="input-container">
      <input type="text" placeholder="Player Name"></input>
      <button className="add-player">Add Kickers</button>
    </div>
    <ol className="player-list">
      { props.items[0].map(item => <KickerList item={item} onClick={props.onClick}/>)}
    </ol>
  </div>
)

export default Kickers;