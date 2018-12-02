import react from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('#app'))

class playerCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Modal Header</h2>
          </div>
          <div class="modal-body">
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div class="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    )
  }
    

}



export default playerCard;