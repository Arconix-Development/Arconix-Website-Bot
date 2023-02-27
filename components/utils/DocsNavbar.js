import styles from "./DocsNavbar.module.css"

function DocsNavbar(){

    const Buttoner={
        color:"#3d94f2",
        backgroundPosition: "100% 100%",
        backgroundSize: "100% 2px",
    }

    return(
        <div className={styles.DocsNavbarContainer}>
            <div className={styles.DocsNavbarContent}>

                <div className={styles.DocsNavbarLeftSide}>
                    <div className={styles.DocsNavbarLogo}>Arconix</div>
                    <div className={styles.DocsNavbarButtonContainer}>
                        <div style={Buttoner} className={styles.DocsNavbarButton}>Setting up</div>
                        <div className={styles.DocsNavbarButton}>Moderation</div>
                        <div className={styles.DocsNavbarButton}>Tickets</div>
                        <div className={styles.DocsNavbarButton}>User Interactions</div>
                        <div className={styles.DocsNavbarButton}>Activities</div>
                    </div>
                </div>

                <div className={styles.DocsNavbarRightSide}>
                    <div className={styles.DocsNavbarSignUp}>Sign Up </div>
                </div>
            </div>
        </div>
    )
}

export default DocsNavbar