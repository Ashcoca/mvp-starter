import React from 'react';


class Modal extends React.Component {
  render () {
    const { isOpen } = this.props;
 
    return (
      <div className={isOpen ? 'modal' : 'hidden'}>
         <div className="modal-content">
           <div className="modal-header">
             <span className="close" onClick={this.props.onClose}>&times;</span>
             <h2>Modal Header</h2>
           </div>
           <div className="modal-body">
             <p>Some text in the Modal Body</p>
             <p>Some other text...</p>
           </div>
           <div className="modal-footer">
             <h3>Modal Footer</h3>
           </div>
         </div>
      </div>
    );
  }
}


// const container = document.createElement('div');
// document.body.appendChild(container);

export default Modal;