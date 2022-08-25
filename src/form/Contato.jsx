import styles from "../css/clima.module.css"
import {useNavigate} from "react-router-dom";

export default function Contato(){
    const navigate = useNavigate()
    return(
        <div className={styles.container}>
            <div className={styles.img}>
                <img src="user.png" />
            </div>
            <div className={styles.form}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h1>Formulário de Contato</h1>
                    </div>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <label htmlFor="">Nome: </label>
                        <input type="text" />

                    </div>
                    <div className={styles.input}>
                        <label htmlFor="">Telefone: </label>
                        <input type="number" />

                    </div>
                    <div className={styles.input}>
                        <label htmlFor="">Email: </label>
                        <input type="email" />

                    </div>
                    <div className={styles.input}>
                        <label htmlFor="">Endereço: </label>
                        <input type="text" />
                    </div>
                <div className={styles.buttons}>
                    <div className={styles.button}>
                        <button onClick={()=>
                        navigate("/")}>Salvar</button>
                    </div>
                </div>
            
                    
            </div>
            </div> 
            </div>  
     
    )
}