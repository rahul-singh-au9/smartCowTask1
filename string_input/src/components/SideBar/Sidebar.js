import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  List,
  CssBaseline,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from './styles';
import InputVal from '../Input/Input';


const Sidebar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    // Hook
    const useWindowSize = () => {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

    useEffect(() => {
      // Handler to call on window resize
        const handleResize = () => {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    // Empty array ensures that effect is only run on mount

    return windowSize;
    }

    const size = useWindowSize();
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >

            {
            size.width > 560
            ?
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" noWrap>
                    SmartCow
                </Typography>
            </Toolbar>
            : ''
            }

        </AppBar>

        {
        size.width > 560 ?
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
        paper: classes.drawerPaper,
        }}
            >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                    ) : (
                        <ChevronRightIcon />
                    )}
                </IconButton>
            </div>
            <Divider />
            <List>
                {["H", "C"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? "HOME" : "CONTACT"}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer> : ''
    }
    <main
        className={clsx(classes.content, {
        [classes.contentShift]: open,
        })}
    >
        <div className={classes.drawerHeader} />
        <InputVal />
    </main>
    </div>
    );
}

export default Sidebar;

// {size.width}px / {size.height}px