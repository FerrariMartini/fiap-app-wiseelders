import React from 'react';
import HomeModel from '../Model/homeModel';
import ActivityDashboard from '../../ActivityDashboard/ActivityDashboards';
import ActivityList from '../../ActivityList/ActivityList';

class HomeController extends React.Component {
  constructor() {
    super();
    this.homeModel = new HomeModel();
  }

  render() {
    return (
      <>
        <ActivityList />
      </>
    );
  }
}

export default HomeController;
