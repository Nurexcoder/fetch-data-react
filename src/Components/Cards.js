import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card'
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const Container= styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Cards = ({datas}) => {
    console.log(datas);
    return (
       <Container>
         {datas.length?datas.map((data)=>(<Card  key={data.id} data={data}/>)):(<CircularProgress/>)}
         </Container>
        
      
      
     
    )
}

export default Cards
