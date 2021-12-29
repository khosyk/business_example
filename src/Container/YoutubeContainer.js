import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Youtube from '../Presenter/Youtube';



export default function YoutubeContainer() {
    const [loader, setLoader] =useState(true);
    const [items, setItems] = useState(null)    
    useEffect(() =>{
        GetYoutube()
    },[])
    return(
        <Youtube items={items} loader={loader} />
    )

    
async function GetYoutube(){

    const playListId = 'PLaSDflnRoEc328ekRsg_PzCFn7FWtAVYG'
    const num = 3;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyAHktbABRsBIOdePuAZVbwNE1spHHuJ3_Y&playlistId=${playListId}&maxResults=${num}`;

    try{
        const {data:{items}} = await axios.get(url);
        setItems(items);
        if(items.length > 0 ){
            setLoader(false);
        }
    }catch(err){
        alert(`Youtube error: ${err}`)
    }
};
}

