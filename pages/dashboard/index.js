import styles from "../../components/dashboardcss/Home.module.css"
import DashboardSideNav from "../../components/utils/Dashboard/DashboardSideNav"
import TopDashboardNav from "../../components/utils/Dashboard/TopDashboardNav"

function DashboardHome(){
    return(
        <div className={styles.DashboardHomeMainContainer}>
            <DashboardSideNav/>
            <div className={styles.DashboardHomeContentContainer}>
                <TopDashboardNav/>
                <div className={styles.DashboardMainMainContentContainer}>

                    <div className={styles.DashboardMainContent}>

                        <div className={styles.DashboardMostBasicUsagesShorted}>
                            <div className={styles.DashboardPartTitle}>Most Common Use Cases</div>
                            <div className={styles.DashboardBoxesContainer}>
                                <div className={styles.DashboardUsageBox}>
                                    <div className={styles.DashboardUsageBoxTitle}>Title Title Title</div>
                                    <div className={styles.DashboardUsageBoxContext}>
                                    If you can identify the difference between a leaf that has blue flowers and the leaf you just saw
                                    </div>
                                    <div className={styles.DashboardUsageBoxButton}>Get Started</div>
                                </div>
                                <div className={styles.DashboardUsageBox}>
                                    <div className={styles.DashboardUsageBoxTitle}>Title Title Title</div>
                                    <div className={styles.DashboardUsageBoxContext}>
                                    If you can identify the difference between a leaf that has blue flowers and the leaf you just saw
                                    </div>
                                    <div className={styles.DashboardUsageBoxButton}>Maybe here</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.DashboardModerationPart}>

                            <div className={styles.DashboardPartTitle}>Moderation</div>

                            <div className={styles.DashboardModBoxes}>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                            </div>

                        </div>

                        <div className={styles.DashboardModerationPart}>
                            
                            <div className={styles.DashboardPartTitle}>Moderation</div>

                            <div className={styles.DashboardModBoxes}>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                            </div>

                        </div>

                        <div className={styles.DashboardModerationPart}>
                            
                            <div className={styles.DashboardPartTitle}>Moderation</div>

                            <div className={styles.DashboardModBoxes}>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                            </div>

                        </div>

                        <div className={styles.DashboardModerationPart}>
                            
                            <div className={styles.DashboardPartTitle}>Moderation</div>

                            <div className={styles.DashboardModBoxes}>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                                <div className={styles.DashboardModBox}></div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome