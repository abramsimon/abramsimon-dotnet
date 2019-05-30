import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function HomeAppBar(props) {
  const { classes } = props;
  
  function handleLinkedInClick(e) {
    e.preventDefault();
    window.location.href = "https://www.linkedin.com/in/abramsimon/";
  }
  function handleGithubClick(e) {
    e.preventDefault();
    window.location.href = "https://github.com/abramsimon";
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Abram Simon v37.0
          </Typography>
          <Tooltip title="LinkedIn">
            <IconButton color="inherit">
              <FaLinkedin onClick={handleLinkedInClick} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Github">
            <IconButton color="inherit">
              <FaGithub onClick={handleGithubClick} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HomeAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeAppBar);