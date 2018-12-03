import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Receivers from './components/Receivers.jsx';
import Backs from './components/Backs.jsx';
import QB from './components/QB.jsx';
import Modal from './components/playerCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        rb: [],
        qb: [],
        wr: [],
        k: [],
        def: [],
      isLoading: true,
      isModalOpen: false,
      selectedItem: null,
      error: null,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {

    fetch('/receivers')
    .then(response => response.json())
    .then(data => {
      this.setState({
        wr: [data.players],
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false })
    );

    fetch('/backs')
    .then(response => response.json())
    .then(data => {
      this.setState({
        rb: [data.players],
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false })
    );

    fetch('/quarterbacks')
    .then(response => response.json())
    .then(data => {
      this.setState({
        qb: [data.players],
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false })
    );  
  }

  toggleModal(selectedItem) {
    if (this.state.isModalOpen === false) {
      this.setState({
         isModalOpen: true, 
         selectedItem: selectedItem.target
        })
    } else {
      this.setState({ isModalOpen: false })
    }
  }

  render () {
    if (this.state.wr.length > 0 && this.state.rb.length > 0 && this.state.qb.length > 0) {
      return (
      <div>
        <h1>NFL Fantasy Rankings</h1>
        <div className="column" onClick={this.toggleModal}>
          <QB items={this.state.qb}/>
        </div>
        <div className="column" onClick={this.toggleModal}>
          <Backs items={this.state.rb}/>
        </div>
        <div className="column"  onClick={this.toggleModal}>
          <Receivers items={this.state.wr}/>
        </div>
        <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal} items={this.state.selectedItem}/>
      </div>
      )
    }
    return (
    <div>
      <img src='https://thumbs.gfycat.com/FaithfulDeafeningBullmastiff-small.gif'></img>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));