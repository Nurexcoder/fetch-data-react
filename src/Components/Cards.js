import * as React from "react";

import Card from "./Card";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Cards = ({ datas }) => {
    console.log(datas);
    return (
        <Container>
            {datas.length ? (
                datas.map((data) => <Card key={data.id} data={data} />)
            ) : (
                <CircularProgress />
            )}
        </Container>
    );
};

export default Cards;
