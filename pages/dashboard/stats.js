import DashboardSideNav from "../../components/utils/Dashboard/DashboardSideNav"
import styles from "../../components/dashboardcss/Stats.module.css"
import TopDashboardNav from "../../components/utils/Dashboard/TopDashboardNav"
import { useState } from "react"
import LineChart from "../concepts/utils/Area"
import BarChart from "../concepts/utils/Bar"

function Statspage(){

    const [arrow,setArrow] = useState(false)

    function Arrow({Tester}){
        return(
        <div className="Rotator" style={{
            transform: Tester ? "rotate(90deg)" : "rotate(0deg)" ,
            }}>
            <svg
            height="10px"
            width="10px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            >
                <path
                fill="#156CC4"
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                />
            </svg>
        </div>
        )
    }


    return(
        <div className={styles.DashboardStatsContainer}>
            <DashboardSideNav/>
            <div className={styles.DashboardStatsContentContainer}>
                <TopDashboardNav/>
                <div className={styles.DashboardStatsMainMainContentContainer}>

                    <div className={styles.DashboardStatsMainContainer}>
                        <div className={styles.DashboardStatsTitlesContainer}>
                            <div className={styles.DashboardStatsTypesContainer}>
                                <div className={styles.DashboardStatsType1}>Activity</div>
                                <div className={styles.DashboardStatsType2}>Joins</div>
                                <div className={styles.DashboardStatsType3}>Moderation</div>
                            </div>
                            <div className={styles.DashboardStatsTimeframeContainer}>
                                <div className={styles.DashboardStatsTimeframe}>Timeframe:</div>
                                <div className={styles.DashboardStatsTimeframeSelect}>Daily</div>
                                <div className={styles.DashboardStatsTimeframeArrow}><Arrow/></div>
                            </div>
                        </div> 

                        <>

                            <div className={styles.StatsChartsContainer}>
                                <div className={styles.StatsLineChart}><LineChart/></div>
                                <div className={styles.StatsBarChart}><BarChart/></div>
                            </div>

                            <div className={styles.StatsComplainBoxesContainer}>
                                <div className={styles.StatsComplainBox}>
                                    <div className={styles.StatsComplainBoxPicture}></div>
                                    <div className={styles.StatsComplainBoxTitle}>Title</div>
                                    <div className={styles.StatsComplainBoxNumber}>43</div>
                                </div>
                                <div className={styles.StatsComplainBox}>
                                    <div className={styles.StatsComplainBoxPicture}></div>
                                    <div className={styles.StatsComplainBoxTitle}>Title</div>
                                    <div className={styles.StatsComplainBoxNumber}>43</div>
                                </div>
                                <div className={styles.StatsComplainBox}>
                                    <div className={styles.StatsComplainBoxPicture}></div>
                                    <div className={styles.StatsComplainBoxTitle}>Title</div>
                                    <div className={styles.StatsComplainBoxNumber}>43</div>
                                </div>
                                <div className={styles.StatsComplainBox}>
                                    <div className={styles.StatsComplainBoxPicture}></div>
                                    <div className={styles.StatsComplainBoxTitle}>Title</div>
                                    <div className={styles.StatsComplainBoxNumber}>43</div>
                                </div>
                            </div>

                        </>

                        <div className={styles.StatsNotificationsContainer}>
                            <div className={styles.StatsNotificationsBox}>
                                <div className={styles.StatsNotificationsTitle}>Title</div>
                                <div className={styles.StatsNotificationsContext}>
                                Today's weather is sunny and warm with temperatures reaching into the mid-70s. 
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Statspage