import React from 'react';

class Search extends React.Component {


    render() {
      return (
        <div className="row">
          <div className="search-container">
            <input type="text" placeholder="Search Players" onChange={this.props.onInputChange}></input>
          </div>
        </div>
      )
    }
  }
  
  export default Search;

