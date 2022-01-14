import {useState,useEffect} from "react";

import Card from "./Card";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

const db = new Dexie("Post");
db.version(2).stores({
    items: "++id,title,address,location,country,performers,type,url,image",
});
const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Cards = () => {
    // console.log(datas);
    const allItems = useLiveQuery(() => db.items.toArray(), []);
    const [datas, setDatas] = useState([])
    useEffect(() => {
        setDatas(allItems)
    }, [allItems])
    return (
        <Container>
            {datas && datas.length? (
                datas.map((data) => <Card key={data.id} element={data}   />)
            ) : (
                <CircularProgress />
            )}
        </Container>
    );
};

export default Cards;
