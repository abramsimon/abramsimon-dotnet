import React, {Component} from 'react';
import { connect } from 'react-redux';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';

const mapStateToProps = state => {
	return { suggestedQuestions: state.suggestedQuestions };
};

const styles = {
	container: {
		textAlign: 'center',
		paddingTop: 200,
	},
};

const ConnectedMain = ({suggestedQuestions}) => (
	<div style={styles.container}>
		<h1>Abram Simon</h1>
		<h2>interactive interview</h2>
		<AutoComplete
			dataSource={suggestedQuestions}
		/>
		<FlatButton
			label="?"
			secondary={true}
		/>
	</div>
);

const Main = connect(mapStateToProps)(ConnectedMain);

export default Main;