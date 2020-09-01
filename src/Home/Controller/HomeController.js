import React from 'react';
import HomeView from '../View/homeView';
import HomeModel from '../Model/homeModel';
import ActivityCard from '../../Components/ActivityCard';

class HomeController extends React.Component {
  constructor() {
    super();
    this.homeModel = new HomeModel();
  }

  render() {
    return (
      //Chamando o View e passando o props count_info
      <>
        <ActivityCard />
      </>
    );
  }
}

export default HomeController;
