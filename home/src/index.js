import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomeAppBar from './homeappbar';
import Game from './tictactoe/index';
import './index.css';

function Abram(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <HomeAppBar />
            <h1>I am Abram Simon and this is my README.</h1>
            <span>Well, the README is a work in progress.  In the meantime, wanna play some tic-tac-toe?</span><br /><br />
            <Game />
        </React.Fragment>
    );
}

ReactDOM.render(
    <Abram />,
    document.getElementById('root')
);
