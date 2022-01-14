import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Card.css";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Performences from "./Performences";

const LocIcon = styled(LocationOnIcon)`
    transform: scale(0.5);
    margin: 0;
`;

const Typo = styled(Typography)`
    display: flex;
    align-items: center;
`;

const CardOne = ({ element }) => {
    const [performers, setPerformers] = useState([]);
    const isPerformence = () => {
        if (performers.length !== 0) setPerformers([]);
        else setPerformers(element.performers);
    };
    console.log(element);
    return (
        <Card className='Card' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    height='200'
                    width='100'
                    image={element.image}
                    // image={data.performers[0].images.huge}
                    alt='green iguana'
                />
                <CardContent>
                    <Typography gutterBottom variant='h4' component='div'>
                        {element.title}
                    </Typography>
                    <Typography
                        className='loc'
                        variant='body1'
                        color='text.primary'>
                        <LocIcon />
                        {element.address},
                    </Typography>
                    <Typography variant='body4' color='text.secondary'>
                        {element.location},{element.country}
                    </Typography>
                    <Typo variant='b3' onClick={isPerformence}>
                        <br />
                        <KeyboardArrowDownIcon />
                        Performers:{element.performers.length}
                    </Typo>
                    <Performences performers={performers} />
                    <Typography variant='body6'>
                        <br />
                        <br /> Type: {element.type.toUpperCase()}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' variant='contained' color='success'>
                    <a href={element.url}>Book Ticket</a>
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardOne;
