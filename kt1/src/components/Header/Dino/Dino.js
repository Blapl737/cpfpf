import imgG from './../../../img/dino.svg'
// import styles from '../../../styles'
// import styles from '../../../style'
import styles from './dino.module.css'


function Dino(){
    return (
        <div className={styles.Dino}>
			<img src={imgG} alt="Dino" />
		</div>
    )
}

export default Dino