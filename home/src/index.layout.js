import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HomeAppBar from './homeappbar';
import Game from './tictactoe/index';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function IndexLayout(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <HomeAppBar />
    
            <div className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h1>I am Abram Simon and this is my README.</h1>
                            <span>Well, the README is a work in progress.  In the meantime, wanna play some tic-tac-toe?</span><br /><br />
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={16}>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <Game />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

IndexLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexLayout);
