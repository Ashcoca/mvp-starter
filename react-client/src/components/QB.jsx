import React from 'react';
import QBList from './QBlist.jsx';

const Quarterbacks = (props) => (
  <div>
    <div className="input-container">
      <img className="player-img" src={"https://s3-us-west-1.amazonaws.com/fantasyash/qb2.png"}/>
      <br/>
      <input type="text" placeholder="Player Name"></input>
      <button className="add-player">Add Quarterbacks</button>
    </div>
    <ol className="player-list">
      { props.items[0].map(item => <QBList item={item} onClick={props.onClick} handleDelete={props.handleDelete}/>)}
    </ol>
  </div>
)

export default Quarterbacks;
