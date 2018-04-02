import React from 'react';
import { hot } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/main/main.component';

const App = () => (
	<MuiThemeProvider>
		<Main />
	</MuiThemeProvider>
);

export default hot(module)(App);