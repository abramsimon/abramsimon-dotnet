import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete'
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleTouchTap() {
    // a question was asked
  }

  render() {

    const questions = [
      "who are you?",
      "what is this project?",
      "what else can i ask?"
    ]

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>Abram Simon</h1>
          <h2>interactive interview</h2>
          <AutoComplete
            dataSource={questions}
          />
          <FlatButton
            label="?"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;