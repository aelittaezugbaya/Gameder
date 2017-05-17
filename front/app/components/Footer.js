import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component{
  render(){
    return(
      <footer className="footer">
          <div className="container">
            <p className="text-muted center">The Application by: Swedish-Meatballs</p>
            <p className="text-muted center">Aidar Mukhamadiev, Aelitta Ezugbaya, Vili Korhonen, Valtteri Kukkola</p>
          </div>
      </footer>
    );
  }
}
