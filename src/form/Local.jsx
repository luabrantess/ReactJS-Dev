import styles from "../css/clima.module.css"


export default function Local(){



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
                   
                </div>
                <div className={styles.buttons}>
                    
                </div>

            </div>  
          
        </div>
    )
}