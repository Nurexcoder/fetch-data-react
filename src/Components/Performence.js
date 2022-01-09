import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Card.css'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
const CardOne = ({data}) => {
  console.log(data);
    return (
      // <ListItemButton>
      <ListItem>
        {data.name}
      </ListItem>
      // <ListItemText primary="Chelsea Otakan" />
    // </ListItemButton>
    )
}

export default CardOne


