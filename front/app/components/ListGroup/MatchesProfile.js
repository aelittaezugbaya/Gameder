import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserShape from '../UserView';

export default class MatchesProfile extends Component{
  render(){
    const name = this.props.user.name;
    const img = this.props.user.img;
    const email = this.props.user.email;
    const desc = this.props.user.desc;
    const index = this.props.index;
    return(
      <li className="list-group-item row">
        <div className='col-md-2 col-xs-5'>
          <img src={img} className="img-circle matchImg"/>
        </div>
        <div className='col-md-10 col-xs-7'>
        <a href='#'  onClick={ev => this.props.onClick(ev, index)}  className="pull-right">
          <i className='fa fa-times'/>
        </a>
          <h3>{` ${name}`}</h3>
          <h4>{email}</h4>
          <h5>{desc}</h5>
        </div>
      </li>
    );
  }
}

MatchesProfile.propTypes={
  user: PropTypes.shape(UserShape),
  index:PropTypes.number,
}
