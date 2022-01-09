import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Performance from './Performence'
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const Container= styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Cards = ({performers}) => {
    // console.log(datas);
    return (

        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        aria-label="contacts"
        >
      
        {performers.length?performers.map((data)=>(<Performance  key={data.id} data={data}/>)):(<></>)}
       
    
    </List>
        
        
      
      
     
    )
}


export default Cards

