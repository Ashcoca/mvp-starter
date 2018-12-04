import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Receivers from './components/Receivers.jsx';
import Backs from './components/Backs.jsx';
import QB from './components/QB.jsx';
import Kickers from './components/Kickers.jsx';
import Defense from './components/Defense.jsx';
import Modal from './components/playerCard.jsx';
import Dragger from './components/Dragger.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        rb: [],
        qb: [],
        wr: [],
        k: [],
        def: [],
        current: [],
      isLoading: true,
      isModalOpen: false,
      selectedItem: null,
      view: 'home',
      error: null,
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.setView = this.setView.bind(this);
    this.setCurrent = this.setCurrent.bind(this);
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
    
    fetch('/kickers')
    .then(response => response.json())
    .then(data => {
      this.setState({
        k: [data.players],
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false })
    );

    fetch('/defense')
    .then(response => response.json())
    .then(data => {
      this.setState({
        def: [data.players],
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false })
    );
  }

  toggleModal(selectedItem) {
    console.log("hello")
    if (this.state.isModalOpen === false) {
      this.setState({
         isModalOpen: true, 
         selectedItem: selectedItem.target
        })
    } else {
      this.setState({ isModalOpen: false })
    }
  }

  toggleView(e) {
    console.log(e.target.name)
    this.setState({
      view: e.target.name
    })
  }

  setView() {
    this.setState({
      view: 'home'
    })
  }
  
  setCurrent(arr) {
    this.setState({
      current: arr
    })
  }

  render() {
    if (this.state.view === 'WR') {
      return (
      <div className="column animated fadeIn">
        <button className="back-button animated pulse" onClick={this.setView}>Back</button>
        <Receivers items={this.state.wr} onClick={this.toggleModal}/>
        <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal} items={this.state.selectedItem}/>
      </div>
      )
    } else if (this.state.view === 'RB') {
      return (
      <div className="column animated fadeIn">
        <button className="back-button animated pulse" onClick={this.setView}>Back</button>
        <Backs items={this.state.rb} onClick={this.toggleModal}/>
        <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal} items={this.state.selectedItem}/>
      </div>
      )
    } else if (this.state.view === 'QB') {
      return (
        <div className="column animated fadeIn">
          <img src={"https://s3-us-west-1.amazonaws.com/fantasyash/qb2.png"}/>
          <br/>
          <button className="back-button animated pulse" onClick={this.setView}>Back</button>
          <QB items={this.state.qb} onClick={this.toggleModal}/>
          <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal} items={this.state.selectedItem}/>
        </div>
      )
    } else if (this.state.view === 'K') {
      return (
        <div className="column animated fadeIn">
          <br/>
          <button className="back-button animated pulse" onClick={this.setView}>Back</button>
          <Kickers items={this.state.k} onClick={this.toggleModal}/>
          <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal} items={this.state.selectedItem}/>
        </div>
      )
    } else if (this.state.view === 'DEF') {
      return (
        <div className="column animated fadeIn">
          <br/>
          <button className="back-button animated pulse" onClick={this.setView}>Back</button>
          <Defense items={this.state.def} onClick={this.toggleModal}/>
          <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal} items={this.state.selectedItem}/>
        </div>
      )
    } else if (this.state.view === 'home') {
      return (
        <div>
          <img id="logo" src={"https://s3-us-west-1.amazonaws.com/fantasyash/logo.png"}/>
          <div className='button-container'>
          <p className="home-text">Select a position to start creating your own rankings:</p>
          <br/>
          <button  className = 'big-button animated pulse' name="QB" onClick={this.toggleView}>QB</button>
          <button  className = 'big-button animated pulse' name="WR" onClick={this.toggleView}>WR</button>
          <button  className = 'big-button animated pulse' name="RB" onClick={this.toggleView}>RB</button>
          <button  className = 'big-button animated pulse' name="K" onClick={this.toggleView}>K</button>
          <button  className = 'big-button animated pulse' name="DEF" onClick={this.toggleView}>DEF</button>

          </div>
        </div>
      )
    } else {
      return (
        <div>
          <img src='https://thumbs.gfycat.com/FaithfulDeafeningBullmastiff-small.gif'></img>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));