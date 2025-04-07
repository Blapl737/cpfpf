import styles from './RentalSection.module.css'
// import styles from '../../style'
import Velosec from './Velosec.js/Velosec'

function RentalSection(){
    return (
        <div className={styles.RentalSection}>
            <Velosec/>
            <div className={styles.text}>
                <h1 className={styles.h111}>Прокат велосипедов</h1>
                <p className={styles.p1111}>У нас вы можете взять на прокат<br/>хорошо обслуженные и настроенные<br/>велосипеды. Как раз мы находимся в<br/>прекрасном парке!</p>
            </div>
        </div>
    )
}

export default RentalSection