import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchesListGroup from './ListGroup/MatchesListGroup';

export default class Matches extends Component{

  render(){
    const profiles=[{name:'ae',img:'https://robohash.org/2440'},{name:'se',img:'https://robohash.org/9415'}];
    console.log(this.props.profiles)
    return(
      <div className='container'>
        <MatchesListGroup profiles={this.props.profiles} updateProfile={this.props.updateProfile}/>
      </div>
    );
  }
}
