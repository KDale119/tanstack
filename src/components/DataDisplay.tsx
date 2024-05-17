import {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";



export default function DataDisplay() {
    const [albums, setAlbums] = useState<any[]>()
    function getAlbums(){
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(response => setAlbums(response.data))
    }

        useQuery({
            queryKey:["album"],
            queryFn: getAlbums
        })
    return (
        <>
            <ul>{albums?.map(album =>
                <li key={album.id}> {album.title}</li>)}
            </ul>
            {/*<AlbumForm setAlbums={setAlbums}/>*/}

        </>
    )
}