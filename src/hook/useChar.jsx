//hook retorna un objeto

import { useEffect, useState } from "react"
import {reqCharacters,reqBusCharacters} from "../services/characters"
export const useChar = () => {

    const [characters, setCharacters] = useState()

    // inidicar al useState que omita la funcion = hook propio de REACT(useEffect)
    const handleGetCharacter =(e,name)=>{
        e.preventDefault()
        reqBusCharacters(name)
            .then((data)=>{
                if(data){
                    setCharacters(data.results)
                } else{
                    setError('Character not found');
                }
            })
    }
    useEffect(()=>{
        //codigo que interesa limitar la cantidad de recargas
        //llamada al servicio
        reqCharacters().then((data)=>{
            setCharacters(data.results)
        })
    }, [/*dependencias*/])
    
     const formatImageUrl = (char)=>{
        const imagePath = char.thumbnail
        const url_image = `${imagePath.path}.${imagePath.extension}`
        return url_image
    }

    //retorno del hook
    return{
        characters,
        formatImageUrl,
        handleGetCharacter
    }
    
}
