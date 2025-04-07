import Logo from "./logo/Logo"
import Nav from "./nav/Nav"
import Buttom from "./buttom/Buttom"
import styles from './Header.module.css'
// import styles from '../../style'
import Dino from "./Dino/Dino"

function Header(){

  return (
    <div className={styles.Header}>
        <Logo/>
        <Nav/>
        <Buttom/>
        <h1 className={styles.h1}>Веломастерская “Велозар”</h1>
        <p className={styles.p}>Мы, мастера веломастерской «Велозар», как раз<br/> те самые счастливые люди, которые смогли<br/>превратить свое увлечение и хобби в профессию.<br/>Мы сами любим кататься и хотим чтобы Ваш<br/>двухколесный друг приносил Вам только радость<br/>и удовольствие от езды.</p>
        <Dino/>
    </div>
  )
}

export default Header