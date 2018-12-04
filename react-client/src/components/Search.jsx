import React from 'react';

class Search extends React.Component {


    render() {
      return (
        <div className="row">
          <div className="input-field">
            <input type="text" placeholder="Search Players" onChange={this.props.onInputChange}></input>
          </div>
        </div>
      )
    }
  }
  
  export default Search;

