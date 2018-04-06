import React from 'react';
import compose from 'recompose/compose';
import { MuiThemeProvider } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import { withStyles, withTheme, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Main from './components/main/main.component';

const theme = createMuiTheme({

});

const styles = () => {
	return {
		root: {
			flexGrow: 1,
		},
	};
};

const App = (classes) => (
	<div classes={classes.root}>
		<CssBaseline />
		<MuiThemeProvider theme={theme}>
			<AppBar position="static">
				<Toolbar>
					<Avatar
						alt="Abram Simon"
						src="/avatar.jpg"
					/>
					<Typography variant="title" color="inherit">
						Abram Simon (an interactive interview)
					</Typography>
				</Toolbar>
			</AppBar>
			<Grid container spacing={16}>
				<Grid item xs={12}>
					<Paper>
						<Main />
					</Paper>
				</Grid>
			</Grid>
		</MuiThemeProvider>
	</div>
);

export default compose(
	withStyles(styles, { name: 'App' }),
	withTheme()
)(App);