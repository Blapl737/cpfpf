import styles from './nav.module.css'
// import styles from '../../../style'

function Nav(){

    return (
      <div className={styles.Nav}>
        <div className={styles.nav1}>О нас</div>
        <div className={styles.nav2}>Услуги</div>
        <div className={styles.nav3}>Аренда</div>
      </div>
    )
  }
  
  export default Nav