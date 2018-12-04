import React from 'react';
import ReceiverList from './ReceiverList.jsx';
import Search from './Search.jsx';



const Receivers = (props) => (
  <div>
    <div className="input-container">
      <img className="player-img" src={"https://s3-us-west-1.amazonaws.com/fantasyash/wr3.png"}/>
      <br/>
      <Search />
    </div>
    <ol className="player-list">
      { props.items[0].map(item => <ReceiverList item={item} onClick={props.onClick} handleDelete={props.handleDelete}/>)}
    </ol>
  </div>
)

export default Receivers;
