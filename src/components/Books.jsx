import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import books from '../static/books';
import { render } from '@testing-library/react';
import { ImageAspectRatioRounded } from '@material-ui/icons';
// import ImageCard from './ImageCard';
// import category from '../static/category'
// import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default function Books() {
    const classes = useStyles();
    //const checked = useWindowPosition("header");


    
    return (
        <div className={classes.root} id="select-category">

        

        <div className="grid-display-products d-flex flex-row flex-wrap mx-auto">

       
            <ImageCard books={books[0]}/>
            <ImageCard books={books[1]}/>
            <ImageCard books={books[2]}/>
            <ImageCard books={books[3]}/>
            <ImageCard books={books[4]}/>
            <ImageCard books={books[5]}/>
            <ImageCard books={books[6]}/>
            <ImageCard books={books[7]}/>
                   
                    
             </div>
             </div>








        // <div className={classes.root} id="select-category">
        //     {/* <div class="container">
        //         <div class="row">
        //             <div class="col-sm">
        //                 <ImageCard books={books[0]}/>
        //             </div>
        //             <div class="col-sm">
        //             <ImageCard books={books[1]}/>
        //             </div>
        //             <div class="col-sm">
        //             <ImageCard books={books[2]}/>
        //             </div>
        //         </div>
        //         <div class="row">
        //             <div class="col-sm">
        //                 <ImageCard books={books[3]}/>
        //             </div>
        //             <div class="col-sm">
        //             <ImageCard books={books[4]}/>
        //             </div>
        //             <div class="col-sm">
        //             <ImageCard books={books[5]}/>
        //             </div>
        //         </div>

                
        //     </div> */}
            
        // </div>
    );
    }
