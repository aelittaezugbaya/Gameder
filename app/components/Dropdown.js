import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Dropdown extends Component{

  constructor(props) {
    super(props);

    this.changeTitle = this.changeTitle.bind(this);

    this.state = {
      title: props.title,
    }
  }
  changeTitle(ev){
    this.setState({title:ev.target.text});
  }
  getSelect(){
    const list = [];
    let onclick = this.props.type =="select"? (this.changeTitle) : undefined;
    for(let li of this.props.options){
        list.push(<li onClick={onclick}><a href="#">{li}</a></li>)
    }
    return list;

  }
  render(){
    const className=this.props.className;
    return(
      <div className="dropdown">
        <button className="data-toggle btn" className={`${className}`}  type="button" data-toggle="dropdown">{this.state.title}
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          {this.getSelect()}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes={
  className:PropTypes.string,
  title:PropTypes.string,
  type:PropTypes.string,
  options:PropTypes.array
}
