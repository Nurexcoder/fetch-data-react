import React, { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import axios from "axios";
import { Button } from "@mui/material";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
const App = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const [ids, setIds] = useState([])
    const db = new Dexie("Post");
    db.version(2).stores({
        items: "++id,title,address,location,country,performers,type,url,image",
    });
    const allItems = useLiveQuery(() => db.items.toArray(), []);
    useEffect(() => {
        const addInDb = async (element,i) => {
            if (allItems) {
                if (allItems.length===0) {
                    await db.items.add({
                        title: element.title,
                        address: element.venue.address,
                        location: element.venue.display_location,
                        country: element.venue.country,
                        performers: element.performers,
                        type: element.type.toUpperCase(),
                        url: element.url,
                        image: element.performers[0].image.huge,
                    });
                    // console.log('Hi');
                    
                } else {
                    
                    await db.items.update( 
                        allItems[i].id,{
                        title: element.title,
                        address: element.venue.address,
                        location: element.venue.display_location,
                        country: element.venue.country,
                        performers: element.performers,
                        type: element.type.toUpperCase(),
                        url: element.url,
                        image: element.performers[0].image,
                    });
                    // console.log('Hello');
                }
            }
        };
        const getData = async () => {
            const datas = await axios.get(
                `https://api.seatgeek.com/2/events?client_id=MjQ1OTk2ODB8MTYzNzczNDkzNy45MDAwMjE&page=${currentPage}&per_page=20`
            );
            setData(datas.data.events);
            const newData = datas.data.events;
            if (newData.length !== 0) {
                await newData.forEach(addInDb);
            }
            console.log(datas.data.events);
            // setIsMount(true);
        };
        getData();
    }, [currentPage]);
    console.log(allItems);
    
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
