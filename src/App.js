import React, { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import axios from "axios";
import { Button } from "@mui/material";

const App = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            const datas = await axios.get(
                `https://api.seatgeek.com/2/events?client_id=MjQ1OTk2ODB8MTYzNzczNDkzNy45MDAwMjE&page=${currentPage}&per_page=20`
            );
            setData(datas.data.events);
            console.log(datas.data.events);
            // setIsMount(true);
        };
        getData();
    }, [currentPage]);

    const loadMore = () => {
        setCurrentPage((p) => p + 1);
        console.log(currentPage);
    };

    return (
        <div>
            <Cards datas={data} />
            <Button
                style={{ margin: "5px 40%", witdh: "100%" }}
                variant='contained'
                color='success'
                className='btn'
                onClick={loadMore}>
                Load More
            </Button>
        </div>
    );
};

export default App;
