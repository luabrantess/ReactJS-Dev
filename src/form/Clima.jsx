import styles from "../css/clima.module.css"
import axios from 'axios';
import React, { useState, useEffect } from "react";


export default function Clima(){

    const [local, setLocal] = useState(false);
    const [clima, setClima] = useState(false);


    
    const getClima = async (lat, long) => {
        let value = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
            lat: lat,
            lon: long,
            appid: 'a66f15803807ee6c43bbb91c86c94875',
            lang: 'pt',
            units: 'metric'
            }
        });
        setClima(value.data);
       
        }

    useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
        getClima(position.coords.latitude, position.coords.longitude);
        setLocal(true)
    })
    /* Permissão para ter as coordenadas do usuário 
    setLocal == true, também é possível fazer um condicional*/
    }, [])
    if (clima === false){
      
    } else {

        return(
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src="weather-app.png" />
                </div>
                <div className={styles.form}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <h1>Clima e Tempo</h1>
                        </div>
                    </div>
                    <div className={styles.inputs}>
                        <div className={styles.value}>Local: {clima['name']}</div>
                        <div className={styles.value}>Informação: {clima['weather'][0]['description']}</div>
                        <div className={styles.value}>Temperatura atual: {clima['main']['temp']}</div>
                        <div className={styles.value}>Temperatura mínima: {clima['main']['temp_min']}</div>
                        <div className={styles.value}>Temperatura máxima: {clima['main']['temp_max']}</div>
                </div>

                  </div>  
                  
                </div>
                        
        )


    }

        
}
