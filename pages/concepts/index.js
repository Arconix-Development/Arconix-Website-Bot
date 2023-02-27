import styles from "../../styles/Concepts.module.css"
import LineChart from "./utils/Area"
import BarChart from "./utils/Bar"
import Skewed from "./utils/Skewed"

function Concept(){
    return(
        <div className={styles.MainContainer}>
            <div className={styles.BarChart}>
                <BarChart/>
            </div>
            <div className={styles.BarChart}>
                <LineChart/>
            </div>
            {/* <div className={styles.BarChart}>
                <Skewed/>
            </div> */}
        </div>
    )
}

export default Concept