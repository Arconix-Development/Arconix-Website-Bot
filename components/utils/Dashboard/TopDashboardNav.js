import styles from './css/TopDashboardNav.module.css'
import Image from 'next/image'
import logo from "../../images/logoone.png"

function TopDashboardNav(){
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ArconixLogo}>
                <Image src={logo} alt="logo" className={styles.DashboardLogo}/>
                <div className={styles.LogoText}>Arconix</div>
            </div>
            <div className={styles.AccountContainer}>
                <div className={styles.Bell}></div>
                <div className={styles.Accountpfp}></div>
            </div>
        </div>
    )
}

export default TopDashboardNav