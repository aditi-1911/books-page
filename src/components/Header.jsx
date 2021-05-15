import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useEffect, useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: ' center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito'
    },
    appbar: {
        background: 'none',
        fontFamily: 'Nunito',
    },
    icon: {
        color: '#fff',
        fontSize: '4rem',
        color: '#49274A'

    },
    appbarTitle: {
        flexGrow: '2',
        fontSize: '4rem',
        color: '#49274A'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    colorText: {
        color: '#49274A'

    },
    container: {
        textAlign: 'center',
    },
    goDown: {
        color: '#49274A',
        fontSize: '4rem'
    },
    title: {
        color: '#49274A',
        fontSize: '6rem',
        fontFamily: 'Nunito'
    }
}));

export default function Header() {
    const classes = useStyles();

    const [checked, setChecked] = useState(false);
    const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(4);

    useEffect(() => {
        setChecked(true)
    }, []);

    return (
        <div className={classes.root} id="header">

            {/* <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Just <span className={classes.colorText}>Sell It</span>- Books
                    </h1>
                    <IconButton  {...buttonProps}>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar> */}

                <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={0}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>Explore Books... 
    
                </h1>
                    <Scroll to="select-category" smooth={true}>


                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>

        </div>
    );
}