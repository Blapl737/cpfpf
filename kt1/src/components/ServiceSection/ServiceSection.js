import styles from  './ServiceSection.module.css'
// import styles from  '../../style'
import ServiceItem from './ServiceItem/ServiceItem'

function ServiceSection(){
    return (
        <div className={styles.ServiceSection}>
            <div>
                <ServiceItem title='Годовое ТО' backgroundColor='DarkBlue'/>
                <ServiceItem title='Выравнивание колес' backgroundColor='DodgerBlue'/>
                <ServiceItem title='Настройка переключателей' backgroundColor='MediumSeaGreen'/>
            </div>
        </div>
    )
}

export default ServiceSection