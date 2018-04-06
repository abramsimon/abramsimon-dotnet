import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';

const styles = theme => {
	return {
		paper: {
			padding: theme.spacing.unit * 2,
		}
	};
};

const Main = ({classes}) => (
	<Grid item>
		<Paper className={classes.paper}>
			<FormControl>
				<InputLabel>Question:</InputLabel>
				<Input id="q" />
				<FormHelperText>Ask any question you want (no guarantees on the quality of the answers).</FormHelperText>
			</FormControl>
		</Paper>
	</Grid>
);

const mapStateToProps = state => {
	return { suggestedQuestions: state.suggestedQuestions };
};

export default compose(
	withStyles(styles, { name: 'Main' }),
	connect(mapStateToProps, null)
)(Main);