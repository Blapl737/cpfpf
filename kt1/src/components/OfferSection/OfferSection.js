import styles from './OfferSection.module.css'
// import styles from '../../style'
import Veloimg from './veloimg/Veloimg'

function OfferSection(){
    return (
        <div className={styles.OfferSection}>
            <h1 className={styles.h11}>Что мы предлагаем</h1>
            <p className={styles.p1}>В нашей мастерской можно выполнить<br/> комплексное техническое обслуживание<br/>велосипеда, ремонт и настройку всех его узлов,<br/>шиномонтажные работы. Вовремя проведенное<br/>ТО велосипеда помогает избежать многих<br/>проблем и дорогого ремонта.  Все работы<br/>выполняем качественно и с душой. </p>
            <Veloimg/>
        </div>
    )
}

export default OfferSection