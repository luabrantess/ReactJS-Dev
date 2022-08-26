import styles from "../css/clima.module.css"
import React from "react";
import { useForm } from 'react-hook-form';


export default function Local(){

    const {setValue,register} = useForm();
    const check = (e)=>{
        const cep = e.target.value.replace("-","");
       
        fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(res => res.json()).then(data=>{

            setValue('logradouro', data.logradouro);
            setValue('bairro', data.bairro);
            setValue('localidade', data.localidade);
            setValue('uf', data.uf);
        });
    }

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
                            check}/>

                    </div>
                    <div className={styles.input}>
                        <label htmlFor="">Logradouro: </label>
                        <input type="text" placeholder="Rua Tal" id="logradouro" {...register("logradouro")}
                        />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="">Bairro:</label>
                        <input type="text" placeholder="Bairro Fulano" id="bairro" {...register("bairro")}/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="">Local:</label>
                        <input type="text" placeholder="Condomínio Cicrano" id="localidade" {...register("localidade")}/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="">UF:</label>
                        <input type="text" placeholder="UF" id="uf" {...register("uf")}/>
                    </div>
                </div>
                <div className={styles.buttons}>
                    
                </div>

            </div>  
          
        </div>
    )
}