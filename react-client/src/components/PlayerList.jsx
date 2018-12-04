import React from 'react';

var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.initialX,
    }
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.dragged);
  }
  dragEnd(e) {
    this.dragged.style.display = 'block';
    this.dragged.parentNode.removeChild(this.dragged.previousSibling);
    
    // update state
    var data = this.state.x
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if(from < to) to--;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({x: data});
  }
  dragOver(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if(e.target.className === 'placeholder') return;
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder, e.target);
  }


  render() {
    return (
      <li 
        className="player-box animated fadeInDown" 
        onClick = {this.props.onClick}
        draggable='true'
        onDragEnd={this.dragEnd.bind(this)}
        onDragStart={this.dragStart.bind(this)}>
          { this.props.item.firstName + " " + this.props.item.lastName }
          <i className="js-remove" onClick={this.props.handleDelete}>✖</i>
          <div className="hidden">{this.props.item.teamAbbr}|{this.props.item.opponentTeamAbbr}|{this.props.item.rank}|{this.props.item.id}|{this.props.item.position}</div>
      </li>
    )
  }

}

// const PlayerList = (props) => (
//   <li className="player-box animated fadeInDown" onClick = {props.onClick}>
//   { props.item.firstName + " " + props.item.lastName }
//   <i className="js-remove">✖</i>
//   <div className="hidden">{props.item.teamAbbr}|{props.item.opponentTeamAbbr}|{props.item.rank}|{props.item.id}|{props.item.position}</div>
// </li>
// )

export default PlayerList;

