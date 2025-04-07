import logoImg from './../../../img/logo.png'
import styles from './logo.module.css'
// import styles from '../../../style'

function Logo(){
    return (
        <div className={styles.Logo}>
			<img src={logoImg} alt="Logo" />
		</div>
    )
}

export default Logo