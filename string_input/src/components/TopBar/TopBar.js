import { AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import useStyles from './styles';


const TopBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SmartCow
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;