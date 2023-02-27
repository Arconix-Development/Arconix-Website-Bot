import { motion } from "framer-motion";
import { useState } from "react";
import styles from './DocsSideNav.module.css'

function DocsSideNav(){
    const [side,setSide] = useState(true)
    const [section,setSection] = useState(false)
    const [section1,setSection1] = useState(false)
    const [section2,setSection2] = useState(false)

    const sidenav={
        width:side? "210px" : "60px",
    }

    const SectionPart = {
        pointerEvents: !side ? "none" : "auto",
    }

    const SectionName ={
        opacity: side ? 1 : 0,
    }

    function Arrow({Tester}){
        return(
        side ?
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
         : ""
        )
    }

    const SmallBlock ={
        border:side ?  "1px solid rgba(0,0,0,0)" : "1px solid rgba(0,0,0,1)",
        pointerEvents: side ? "none" : "auto",
        transition:"0.3s border-color ease",
    }

    return(
        <motion.div className={styles.DocsHomeContentSideNavbar}
            animate={sidenav}
            initial={{width:"210px"}}
            transition={{duration:0.5}}
        >
            <motion.div className={styles.SideNavContentContainer}
                animate={{marginLeft: side ? "15px" : "5px"}}
                transition={{duration:0.5}}
                initial={{marginLeft:"15px"}}
                >

                <div className={styles.SideNavContentButtonSection} style={SectionPart}>
                    <div className={styles.SideNavButtonSectionName} style={SectionName} onClick={()=>setSection(!section)}>
                        
                        <Arrow Tester={section} style={{
                            width:"max-content",
                            height:"max-content",
                            transform: section ? "rotate(90deg)" : "rotate(0deg)",
                            transition: "0.3s transform ease",
                        }}/>

                        Moderation</div>
                    <div className={styles.SideNavButtonSectionBlock} style={{
                        height:side && section ? "140px" : "0px",
                        opacity:side &&  section ? 1 : 0,
                        marginTop:side &&  section ? "0px" : "-20px",
                        pointerEvents:side &&  section ? "auto" : "none",
                        transition:"0.3s all ease",
                    }}>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                    </div>
                </div>

                <div className={styles.SideNavContentButtonSection}>
                    <div className={styles.SideNavButtonSectionName} style={SectionName} onClick={()=>setSection1(!section1)}>

                    <Arrow Tester={section1} style={{
                            width:"max-content",
                            height:"max-content",
                            transform: section1 ? "rotate(90deg)" : "rotate(0deg)",
                            transition: "0.3s transform ease",
                        }}/>

                        Moderation</div>
                    <div className={styles.SideNavButtonSectionBlock} style={{
                        height:side && section1 ? "140px" : "0px",
                        opacity:side && section1 ? 1 : 0,
                        marginTop:side && section1 ? "0px" : "-20px",
                        pointerEvents:side && section1 ? "auto" : "none",
                        transition:"0.3s all ease",
                    }}>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                    </div>
                </div>

                <div className={styles.SideNavContentButtonSection}>
                    <div className={styles.SideNavButtonSectionName} style={SectionName} onClick={()=>setSection2(!section2)}>
                    
                    <Arrow Tester={section2} style={{
                            width:"max-content",
                            height:"max-content",
                            transform: section2 ? "rotate(90deg)" : "rotate(0deg)",
                            transition: "0.3s transform ease",
                        }}/>
                        
                        Moderation</div>
                    <div className={styles.SideNavButtonSectionBlock} style={{
                        height:side && section2 ? "140px" : "0px",
                        opacity:side &&  section2 ? 1 : 0,
                        marginTop:side &&  section2 ? "0px" : "-20px",
                        pointerEvents:side &&  section2 ? "auto" : "none",
                        transition:"0.3s all ease",
                    }}>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                        <div className={styles.SideNavSectionBlockButton}>Segment</div>
                    </div>
                </div>


                <div className={styles.SideNavSectionSmallContainer} style={{zIndex: side ? "-12" : "5"}}>
                    <div style={SmallBlock} className={styles.SideNavSectionSmallBlock}></div>
                    <div style={SmallBlock} className={styles.SideNavSectionSmallBlock}></div>
                    <div style={SmallBlock} className={styles.SideNavSectionSmallBlock}></div>
                </div>

            </motion.div>

            <div className={styles.SideNavBottomPart}>
                <div className={styles.SideNavWidthButton} onClick={()=>setSide(!side)}>
                    L
                </div>
            </div>
        </motion.div>
    )
}

export default DocsSideNav;