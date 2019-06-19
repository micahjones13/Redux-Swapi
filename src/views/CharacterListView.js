import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { CharacterList } from "../components";
// import actions
import { getChar } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChar();
  }

  
  render() {
    if (this.props.fetching) {
      return <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
    }
    if(this.props.error){
      return <div><p className = 'error'>{this.props.error}</p></div>
    }
    return (
      <div className="CharactersList_wrapper">
        <p>Character Names:</p>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
  characters: state.characters,
  fetching: state.fetching,
  error: state.error
  }
}
export default connect(
  mapStateToProps,
  { getChar, }
)(CharacterListView);


