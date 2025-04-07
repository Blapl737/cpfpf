import imgVelo from './../../../img/imagevelo.png'
import styles from './veloimg.module.css'
// import styles from '../../../style'

function Veloimg(){
    return (
        <div className={styles.Veloimg}>
			<img src={imgVelo} alt="Veloimg" />
		</div>
    )
}

export default Veloimg