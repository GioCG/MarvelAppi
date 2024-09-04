import CryptoJS from "crypto-js"
 
    const API_PUBLIC_KEY = "5910cb9c6439029d686adf2756888824"
    const API_PRIVATE_KEY = "ce7cc2c3c3af9b265211aed4a46f883db78d96e0"
 
    //Funciona como Salt y es para mandar un dato de tiempo actual
    const time_stamp = new Date().getTime()
 
    const hash = CryptoJS.MD5(time_stamp + API_PRIVATE_KEY + API_PUBLIC_KEY).toString()
 
    const api_url = `https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`
    const api_url_bus= `https://gateway.marvel.com:443/v1/public/characters/`
    export  const reqCharacters = async () => {
        const resp = await fetch(api_url)
        const {data} = await resp.json()
        return data
    }

    export const reqBusCharacters = async (CharName) => {
        const resp = await fetch(`${api_url_bus}${CharName}?ts=${time_stamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
        const {data} = await resp.json()
        return data
    }
 

 
 

  

