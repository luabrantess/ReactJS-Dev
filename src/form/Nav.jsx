import {useNavigate} from "react-router-dom";
import Pag1 from "../pages/Clima";
import styles from "../css/clima.module.css"

export default function Nav(){
    const navigate = useNavigate()

    return(
        <div className={styles.buttons}>
            <div className={styles.button}>
                <button onClick={()=> {
                    navigate("/clima")
                }}>Clima</button>
                <button onClick={()=>{
                    navigate("/local")
                }}>Localizador</button>
                <button onClick={()=>{
                    navigate("/contato")
                }}>Formulário</button>
            </div>
        </div>
    )
}