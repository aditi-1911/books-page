import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import category from '../static/category';
import { Collapse } from 'bootstrap';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    backgroundColor: '#49274A',
    margin: '20px'
  },
  media: {
    width: 300,
    height: 400,
    textAlign: 'center',
    alignItems: 'center',
    padding: '10px',
    marginLeft:'10px'
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textAlign: 'center',
    color: '#F4DECB'
  },
  desc: {
    textAlign: 'center',
    color: '#F4DECB',
    fontWeight: 'bold',
    fontSize: '15px',
    fontFamily: 'Nunito'

  },
  btntext: {
    fontFamily: 'Nunito',
    textAlign: 'center',
    alignItems: 'center',
    color: '#F4DECB',
    marginLeft: '10px'

  },
  image: {
    alignItems: 'center',
    margin: '10px'
  }
  //   media:{
  //     maxWidth: 645,
  //   }
});

export default function ImageCard({ books, checked }) {
  const classes = useStyles();

  return (
    //<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image= {books.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>

           {books.title}

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
           {books.desc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
           {books.price}
          </Typography>
        </CardContent>

      <CardActions>
        <Button size="small" color="primary" className="ms-auto me-auto">
          <h5 className={classes.btntext}>View</h5>
        </Button>
      </CardActions>
    </Card>
    

    // <div className="grid-display-products d-flex flex-row flex-wrap">
    //   {books.map((book) => (
    //     <div className="card col-lg-2 pt-3 mt-3 ms-5 me-5 ps-3 pe-3">
    //       <div className="col">
    //         <div className="col">
    //           <img className="img-fluid displayThumbnail" alt="" src={books.ImageUrl}
    //             id={book._id}
    //           //onClick={handleSelect}
    //           />
    //         </div>
    //         <div className="col">
    //           <div className="card-body data-display-grid">
    //             <h2 className="card-title data-display-heading">{books.title}</h2>
    //             <h5 className="card-title data-display-subheading"> {books.desc}</h5>
    //             <p className="card-text data-display-price">
    //               ₹{books.price}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>


    // </Collapse>


  );
}
