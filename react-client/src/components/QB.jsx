import React from 'react';
import QBList from './QBlist.jsx';

const Quarterbacks = (props) => (
  <div>
    <div className="input-container">
      <input type="text" placeholder="Player Name"></input>
      <button className="add-player">Add Quarterbacks</button>
    </div>
    <ol className="player-list">
      { props.items[0].map(item => <QBList item={item}/>)}
    </ol>
  </div>
)

export default Quarterbacks;