import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainApp from './components/main_app/main.jsx';

injectTapEventPlugin();

export class App extends React.Component {
  render(){
    return(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history = {hashHistory}>
      <Route path = "/" component = {MainApp} />
    </Router>
    </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
