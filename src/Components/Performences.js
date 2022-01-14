import * as React from "react";
import List from "@mui/material/List";
import Performance from "./Performence";

const Cards = ({ performers }) => {
    
    return (
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            aria-label='contacts'>
            {performers.length ? (
                performers.map((data) => (
                    <Performance key={data.id} data={data} />
                ))
            ) : (
                <></>
            )}
        </List>
    );
};

export default Cards;
