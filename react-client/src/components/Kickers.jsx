import React from 'react';
import KickerList from './KickerList.jsx';

const Kickers = (props) => (
  <div>
    <div className="input-container">
    <img className="player-img" src={"https://s3-us-west-1.amazonaws.com/fantasyash/football.jpg"}/>

    <br/>
      <input type="text" placeholder="Player Name"></input>
      <button className="add-player">Add Kickers</button>
    </div>
    <ol className="player-list">
      { props.items[0].map(item => <KickerList item={item} onClick={props.onClick} handleDelete={props.handleDelete}/>)}
    </ol>
  </div>
)

export default Kickers;