import React from 'react';
import BacksList from './BacksList.jsx';

const Backs = (props) => (
  <div>
    <div className="input-container">
      <input type="text" placeholder="Player Name"></input>
      <button className="add-player">Add Running Back</button>
    </div>
    <ol className="player-list">
      { props.items[0].map(item => <BacksList item={item} onClick={props.onClick}/>)}
    </ol>
  </div>
)

export default Backs;