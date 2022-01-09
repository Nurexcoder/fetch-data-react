import React, { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import axios from "axios";
import { Button } from "@mui/material";

const App = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const datas = await axios.get(
                `https://api.seatgeek.com/2/events?client_id=MjQ1OTk2ODB8MTYzNzczNDkzNy45MDAwMjE&page=${currentPage}&per_page=20`
            );
            setData(datas.data.events);
            console.log(datas.data.events);
            // setIsMount(true);
        }
        getData()
        }, [currentPage]);

        //     // console.log(data);
        // useEffect(() => {
            
            
            
        //         let newPerf;
        //         // console.log(data.length);
    
        //         if (data.length!==0) {
        //         const makeTwenty = () => {
        //                 const obj1 = data[1];
        //                 const performences = obj1.performers;
    
        //                 console.log(obj1);
        //                 //  performences[0].location=[obj1.venue]
        //                 console.log(performences);
        //                 performences.forEach((performance) => {
        //                     performance.address = obj1.venue.address;
        //                     performance.name = obj1.venue.name;
        //                     performance.nowLocation = obj1.venue.display_location;
        //                     performance.country = obj1.venue.country;
        //                     performance.utc = obj1.venue.visible_until_utc;
                            
        //                     // i>10?:i++
        //                 });
    
        //                 newPerf = performences;
    
        //                 // performences=(...perfor)
        //                 // performences[0].location=obj1.venue
        //                 // currentData[0].location=obj1.venue
    
        //                 // const currArr = currentData;
        //                 // currArr.push(...newPerf);
        //                 // console.log(currArr);
        //                 setCurrentData(newPerf);
                    
        //         }
            
        //             makeTwenty();
                    
        //             // console.log(i,j);
                
        //     }
        //         // let j=0
        //         // while<(currentData.length<20){
            
        //         // j++
                
            
        // },[data,currentData])    
     
        

    // useEffect(() => {
    //     // }
    // }, [currentData]);
    // useEffect(() => {
    //     if(data.length!==0){

    //     }
    // }, [data])
    const loadMore = () => {
      setCurrentPage(p=>p+1)
      console.log(currentPage);
    };
    // j++
    // i=currentData.length

    // makeTwenty();

    return (
        <div>
            <Cards datas={data} />
            <Button style={{margin:'5px 40%',witdh:"100%"}} variant="contained" color="success" className="btn" onClick={loadMore}>Load More</Button>
        </div>
    );
};

export default App;
