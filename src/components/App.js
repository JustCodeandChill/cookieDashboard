import React from "react";
import DashboardPage from '../pages/DashboardPage';
//styles
import "semantic-ui-css/semantic.min.css";

import "../styles/App.css";
//router
import {BrowserRouter, Route} from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <Route path="/" component={DashboardPage} />
          </BrowserRouter>
          {/* <DashboardPage /> */}
      </div>
    );
  }
}

export default App;
