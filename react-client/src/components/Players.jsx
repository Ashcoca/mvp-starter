import React from 'react';
import PlayerList from './PlayerList.jsx';

const randomImage = () => {
  let images = [
    "https://s3-us-west-1.amazonaws.com/fantasyash/wr3.png",
    "https://s3-us-west-1.amazonaws.com/fantasyash/football.jpg",
    "https://s3-us-west-1.amazonaws.com/fantasyash/defense4.jpg",
    "https://s3-us-west-1.amazonaws.com/fantasyash/rb.png",
    "https://s3-us-west-1.amazonaws.com/fantasyash/qb2.png"
  ]
  let randomNum = Math.floor(Math.random() * 5);
  return images[randomNum];
};

const Players = (props) => (
  <div>
    <div className="input-container">
      <img className="player-img" src={randomImage()}/>
      <br/>
    </div>
    <ol className="player-list">
      { props.items.map(item => <PlayerList item={item} onClick={props.onClick}/>)}
    </ol>
  </div>
)

export default Players;
