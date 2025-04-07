import styles from'./DescriptionSection.module.css'


function DescriptionSection(){
    return (
        <div className={styles.DescriptionSection}>
            <div className={styles.p11}>
                <p>Приехав к нам однажды, многие наши клиенты становятся<br/>постоянными, а часть из них даже друзьями.</p>

                <p>А также в нашей мастерской можно отремонтировать<br/>электросамокат и электровелосипед.</p>
            </div>        
        </div>
    )
}

export default DescriptionSection