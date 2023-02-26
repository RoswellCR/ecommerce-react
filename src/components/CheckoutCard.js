import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';
import accounting from "accounting";
import {makeStyles} from "@material-ui/core"
import { Delete } from '@material-ui/icons';
import IconButton from '@mui/material/IconButton';


const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 300,
    },
    action: {
      marginTop: "1rem",
    },
    media: {
    //    height: 0,
     //  paddingTop: "56.25%", // 16:9
    },
    cardActions: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center",
    },
    cardRating: {
      display: "flex",
    },
  }));



export default function CheckoutCard({product}) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.root}>
      <CardHeader
         
        action={
          <Typography
            className={ClassNames.action}
            variant='h5'
            color='textSecondary'
          >{accounting.formatMoney(product.price, "€")}</Typography>
        }
        title={product.name}
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image }
        alt={product.name}
        className = {classes.media}
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
        {Array(product.rating)
         .fill()
         .map((_,i) => (
          <p>&#11088;</p>
          ))}
        </div>  
          <IconButton>
            <Delete/>
          </IconButton>
      </CardActions>
      
    </Card>
  );
}