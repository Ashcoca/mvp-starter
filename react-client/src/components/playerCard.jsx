import React from 'react';


class Modal extends React.Component {

  //   let team = data[0];
  //   let opponent = data[1];
  //   let rank = data[2];
  //   let id = data[3];
  //   let position = data[4];

  render () {
    const { isOpen } = this.props;
    if (this.props.items && (this.props.items.querySelector('div'))) {
      let data = this.props.items.querySelector('div').innerText.split('|');
      return (
        <div className={isOpen ? 'modal' : 'hidden'}>
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={this.props.onClose}>&times;</span>
              <h2>{this.props.items.innerText.slice(0, -1)}</h2>
            </div>
            <div className="modal-body">
              <p>Plays {data[4]} for {data[0]}</p>
              <p>Upcoming opponent: {data[1]}</p>
            </div>
            <div className="modal-footer">
              <h3> <a href={`http://www.nfl.com/player/${this.props.items.innerText.replace(/\s/g, '').toLowerCase()}/${data[3]}/profile`} target="_blank">View Complete Player Info on NFL.com</a></h3>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <img src='https://thumbs.gfycat.com/FaithfulDeafeningBullmastiff-small.gif'></img>      
      </div>
    ) 
  }
}

// const container = document.createElement('div');
// document.body.appendChild(container);

export default Modal;