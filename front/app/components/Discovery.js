import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import UserView from './UserView';
import Button from './Button';

// a proxy endpoint
//const endpoint = '/api/profiles';


export default class Discovery extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {},
      loads:0,
      clicks:0,
      profiles:[]
    };
    this.clickSuccess = this.clickSuccess.bind(this);
    this.clickDeny = this.clickDeny.bind(this);
  }

  componentWillMount() {
    let old = this.props.getOldProfiles();
    axios.get('http://localhost:8080/api/profiles')
      .then(res => {
        this.setState({
          profiles:old.concat(res.data)
        });
        console.log(this.state.profiles);
        this.setState({
          currentUser: this.getUserFromArray(),
        });
      });

  }

  componentWillUnmount(){
    let currentProfiles = this.state.profiles;
    currentProfiles.unshift(this.state.currentUser);
    this.props.saveProfiles(currentProfiles);
  }

  getNewUsers(){
    axios.get('http://localhost:8080/api/profiles')
      .then(res => {
        this.setState({
          profiles: this.state.profiles.concat(res.data)
        });

        console.log(this.state.profiles);
      });

  }

  getUserFromArray(){
    let user = this.state.profiles[0]
    this.state.profiles.splice(0,1)
    if(this.state.profiles.length<=2){
      this.getNewUsers();
    }
    return user;
  }

  likeProfile(){
    let profile = this.state.currentUser;
    if(profile.like==true){
      this.props.addProfiles(profile);
    }
    this.newUser();
  }

  getRandomUser() {
    let i = Math.floor(Math.random()*((this.state.profiles.length-1)-0+1)+0);
    if(!this.state)
      return this.state.profiles[i];

    return this.state.profiles[i] !== this.state.currentUser
      ? this.state.profiles[i]
      : this.getRandomUser();
  }

  clickSuccess(){
    this.likeProfile();
  }

  clickDeny(){
    this.newUser();
  }

  newUser(){
    this.setState({
      currentUser: this.getUserFromArray(),
    });
  }

  render(){
    return(
      <div>
        <UserView user={this.state.currentUser} onSuccessClick={this.clickSuccess} onDenyClick={this.clickDeny}/>
      </div>
    );
  }
}
