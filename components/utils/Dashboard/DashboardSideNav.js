import styles from "./css/DashboardSideNav.module.css"
import { motion } from "framer-motion"
import { useState } from "react"

function DashboardSideNav(){

    const [sideNavWidth,setSideNavWidth] = useState(true)

    function Arrow({Tester}){
        return(
        true ?
        <div className="Rotator" style={{
            transform: !Tester ? "rotate(90deg)" : "rotate(0deg)" ,
            display: sideNavWidth ? "block" : "none"
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 18" fill="#fff">
                <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
                </svg>
        </div>
         : ""
        )
    }

    const centeredPfp={
        marginLeft:sideNavWidth ? "0px" : "-1px",
        transition: "all 0.3s ease"
    }

    const textPfp={
        color:sideNavWidth ? "#ffffff" : "#ffffff00",
        transition: "color 0.3s ease",
        userSelect:sideNavWidth ? "auto" : "none"
    }

    const navTitle={
        opacity:sideNavWidth ? 1 : 0,
        transition: "all 0.3s ease",
        userSelect:sideNavWidth ? "auto" : "none"
    }

    const navButton={
        opacity:sideNavWidth ? 1 : 0,
        userSelect:sideNavWidth ? "auto" : "none",
        transition: "all 0.3s ease",
    }

    const navPic ={
        marginLeft:sideNavWidth ? "0px" : "13px",
        transition: "all 0.5s ease",
        height:sideNavWidth ? "25px" : "30px",
        width:sideNavWidth ? "25px" : "30px",
    }

    const navGap={
        gap:sideNavWidth ? "20px" : "30px",
        transition: "gap 0.3s ease",
    }

    return(
        <motion.div
            className={styles.DashboardSideNavContainer}
            animate={{width: sideNavWidth ? "300px" : "70px"}}
            initial={{width:"300px"}}
            transition={{duration:0.5}}
        >
            <div className={styles.DashboardSideNavContentContainer}>
                <div className={styles.DashboardSideNavTopPart}>
                    <div className={styles.TopPartServerContainer}>
                        <div style={centeredPfp} className={styles.ServerPicture}></div>
                        <div className={styles.ServerNameContainer}>
                            <div style={textPfp} className={styles.ServerName}>Arconix Development</div>
                            <div className={styles.ServerArrow}><Arrow Tester={true}/></div>
                        </div>
                    </div>
                </div>

                <div className={styles.DashboardSideNavMiddlePart}>

                    <div className={styles.ContainerButtons}>
                        <div className={styles.ContainerTitle} style={navTitle}>General</div>
                        <div className={styles.ButtonContainer} style={navGap}>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ContainerButtons}>
                        <div className={styles.ContainerTitle} style={navTitle}>General</div>
                        <div className={styles.ButtonContainer} style={navGap}>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ContainerButtons}>
                        <div className={styles.ContainerTitle} style={navTitle}>General</div>
                        <div className={styles.ButtonContainer} style={navGap}>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ContainerButtons}>
                        <div className={styles.ContainerTitle} style={navTitle}>General</div>
                        <div className={styles.ButtonContainer} style={navGap}>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ContainerButtons}>
                        <div className={styles.ContainerTitle} style={navTitle}>General</div>
                        <div className={styles.ButtonContainer} style={navGap}>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                            <div className={styles.Buttonsomething}>
                                <div className={styles.ButtonPic} style={navPic}></div><div className={styles.ButtonNav} style={navButton}>Leaderboard</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.DashboardSideNavBottomPart} onClick={()=>setSideNavWidth(!sideNavWidth)}>
                    
                </div>
            </div>
        </motion.div>
    )
}

export default DashboardSideNav