import React from 'react';

import Button from './components/Button';
import Header from './components/Header';
import TextInput from './components/TextInput';
import Settings from './components/Settings';
import Dropdown from './components/Dropdown';
import RangeSlider from './components/RangeSlider';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import Discovery from './components/Discovery';
import MatchesListGroup from './components/ListGroup/MatchesListGroup';
import Matches from './components/Matches';
import Footer from './components/Footer'

const pages = [
  {
    title: 'Discovery',
    component: Discovery,
  },
  {
    title: 'Matches',
    component: Matches,
  },
];

export default class MainView extends React.Component{
  constructor(props){
    super(props);
    this.switchTab = this.switchTab.bind(this);
    this.addProfiles=this.addProfiles.bind(this);
    this.state = {
      activeTab: 0,
      profiles: [],
      oldProfiles:[]
    };

    this.addProfiles = this.addProfiles.bind(this);
    this.saveProfiles = this.saveProfiles .bind(this);
    this.getOldProfiles = this.getOldProfiles.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  saveProfiles(array){
    let saved = this.state.oldProfiles;
    saved=saved.concat(array);
    this.setState({
      oldProfiles: saved
    });
  }

  getOldProfiles(){
    let old = this.state.oldProfiles;
    this.setState({
      oldProfiles:[]
    });
    return old;
  }


  addProfiles(user) {
    let pro = this.state.profiles;
    pro.push(user);
    this.setState({
      profiles: pro,
    });
  }
   updateProfile(index){
     this.state.profiles.splice(index, 1)
     this.setState({
       profiles: this.state.profiles
     });
   }

  switchTab(ev) {
    this.setState({
      activeTab: Number(ev.target.id),
    });
  }

  renderTabs() {
    const tabs = [];
    let  index, props;

    for(let page of pages){
      index = pages.indexOf(page);
      props = {
        key: page.title,
        className: this.state.activeTab === index
          ? 'active'
          : '',
      };

      tabs.push(
        <li {...props}>
          <a href="#" onClick={this.switchTab} id={index}>
            {page.title}
            {' '}
            {page.title == 'Matches' && this.state.profiles.length > 0 ? <span className="badge">{this.state.profiles.length}</span> : ''}
          </a>
        </li>
      );
    }
    return tabs;
  }

  renderPage() {
    return pages[this.state.activeTab].component;
  }

  render() {
    const Page = this.renderPage();
    return(
      <div>
        <Header/>
        <div className="container">
          <ul className="nav nav-tabs nav-justified tabs">
              {this.renderTabs()}
           </ul>
          <div className="tab-content">
            <Page addProfiles={this.addProfiles} profiles={this.state.profiles} saveProfiles={this.saveProfiles} getOldProfiles={this.getOldProfiles} updateProfile={this.updateProfile}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
