import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline}  from '@material-ui/core';
import  Header from './components/Header';
import Books from './components/Books';
// import Categories from './components/CategoryHeader';
// import CategoryHeader from './components/Categories';

const useStyles = makeStyles({
  root: {
    minHeight: '100%',
    //backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/homepage.png'})`,
    backgroundColor: '#F4DECB',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
});

export default function Hook() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <CssBaseline/>
      <CssBaseline/>
      <CssBaseline/>
      <Books/>
      {/* <CategoryHeader/>
      <Categories/> */}
      
  </div>
  );
}

