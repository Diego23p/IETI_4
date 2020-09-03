import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FormatListNumberedRoundedIcon from '@material-ui/icons/FormatListNumberedRounded';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Task} from "./Task";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const catalinaList = [
      {
        "description": "Hacer la DB",
        "responsible": {
          "name": "Catalina",
          "email": "Catalina@gmail"
        },
        "status": "Ready",
        "dueDate": 1599831824221
      },
      {
        "description": "Implementar FrontEnd",
        "responsible": {
          "name": "Catalina",
          "email": "catalina@gmail"
        },
        "status": "To do",
        "dueDate": 1598931924221
      }
    ];

    const samuelList = [
      {
        "description": "Desarrollar en IOS",
        "responsible": {
          "name": "Samuel",
          "email": "samuel@gmail"
        },
        "status": "To do",
        "dueDate": 1598881824221
      }
    ];

    const catalinaView = () => {
      return <Task taskList={catalinaList}/>
    };

    const samuelView = () => {
      return <Task taskList={samuelList}/>
    }

    return (
        <Router>
            <div className={classes.root}>
            <CssBaseline />
            <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}
                >
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
                            User
                        </Typography>
                    </Toolbar>
                </AppBar>

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
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    </div>

                    <Divider /><Divider />

                    <List>
                        <ListItem button key="Catalina">
                            <ListItemIcon >
                                <FormatListNumberedRoundedIcon />
                            </ListItemIcon>
                            <Link to="/catalinaTask" >Catalina</Link>
                        </ListItem>

                        <ListItem button key="Samuel">
                            <ListItemIcon>
                                <FormatListNumberedRoundedIcon />
                            </ListItemIcon>
                            <Link to="/samuelTask" >Samuel</Link>
                        </ListItem>

                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            href="/" >
                            Sign Out
                        </Button>
                    </List>
                    
                </Drawer>

                <main
                    className={clsx(classes.content, {
                    [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                      <Typography variant="h4">
                            Select a User
                        </Typography>
                        <Route exact path="/catalinaTask" component={catalinaView}/>
                        <Route exact path="/samuelTask" component={samuelView}/>
                      
                </main>
            </div>
        </Router>
    );
}
