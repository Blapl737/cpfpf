import styles from './ServiceItem.module.css'
// import styles from '../../../style'

function ServiceItem(props){
    const {backgroundColor, title} = props

    // let title1 = 'Title 1'
    // let title2 = 'Title 2'

    // let text1 = 'Text 1'
    // let text2 = 'Text 2'

    return(
        <div className={styles.Block} style={{backgroundColor}}>
            <h2>{title}</h2>
        </div>
    )
}

export default ServiceItem