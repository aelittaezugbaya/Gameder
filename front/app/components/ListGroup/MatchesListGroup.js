import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchesProfile from './MatchesProfile';

export default class MatchesListGroup extends Component{
  constructor(props){
    super(props);

    this.deleteProfile = this.deleteProfile.bind(this)
  }

  deleteProfile(ev, index){
    if(index != undefined)
      this.props.updateProfile(index)
  }

  renderProfiles(){
    let profiles = this.props.profiles;
    const list = [];

    profiles.forEach((user,index)=>{
      list.push(
          <MatchesProfile key = {index} index={index} user = {user} onClick={this.deleteProfile}/>
      )
    });
    return list;
  }

  render(){
    const user={
      name:'some name',
      img:'https://robohash.org/7433',
    }
    return(
      <ul className="list-group">
        {this.renderProfiles()}
      </ul>
    );
  }
}

MatchesListGroup.propTypes={
  profiles: PropTypes.array,
}
