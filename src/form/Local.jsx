import styles from "../css/clima.module.css"
import React from "react";
import { useForm } from 'react-hook-form';


export default function Local(){

    const {setValue} = useForm();
    

    return(
        <div className={styles.container}>
            <div className={styles.img}>
                <img src="local.png" />
            </div>
            <div className={styles.form}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h1>Geolocalizador</h1>
                    </div>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <label htmlFor="">CEP:</label>
                        <input type="text" placeholder="00000-000" id="cep" onBlur={
                            (e)=>{
                                const cep = e.target.value.replace("-","");
                                console.log(cep);
                                fetch(`https://viacep.com.br/ws/${cep}/json`)
                                .then(res => res.json()).then(data=>{
                                    console.log(data);
                                    setValue('logradouro', data.logradouro);
                                    setValue('bairro', data.bairro);
                                    setValue('localidade', data.localidade);
                                    setValue('uf', data.uf);
                                });
                            }
                        }/>

                    </div>
                    <div className={styles.input}>
                        <label htmlFor="">Logradouro:</label>
                        <input type="text" placeholder="Rua Tal" id="logradouro"
                        />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="">Bairro:</label>
                        <input type="text" placeholder="Bairro Fulano" id="bairro"/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="">Local:</label>
                        <input type="text" placeholder="Condomínio Cicrano" id="localidade"/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="">UF:</label>
                        <input type="text" placeholder="UF" id="uf"/>
                    </div>
                </div>
                <div className={styles.buttons}>
                    
                </div>

            </div>  
          
        </div>
    )
}