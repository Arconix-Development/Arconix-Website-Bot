import styles from "../styles/Home.module.css";
import Image from 'next/image'
import {Suspence, useRef,useEffect,useState} from "react"
import Navbar from "../components/Navbar";


export default function Home() {

  return (
    <>
    
      <div className={styles.HomeMainContainer}>
        
        <Navbar/>       

        <div className={styles.HomeContentContainer}>
            {/* <div className="HomeIntroCoverBox1">
               <div className="CoverBox1Triangle"></div>
            </div> */}
            <div className={styles.HomeIntroCoverBox1}>
            </div>
            <div className={styles.HomeIntroText}>
                <div className={styles.HomeIntroMainText}>
                    A new era of<br/> Discord<br/>Management
                </div>
                <div className={styles.HomeIntroSecondaryText}>
                    Arconix solves the issue of a boring discord server, ready to help you make your dream server with the maximum potential for success
                </div>

                <div className={styles.HomeIntroButtons}>
                    <div className={styles.HomeButtonButton1}>Let&apos;s Begin</div>
                    <div className={styles.HomeButtonButton2}>Features</div>
                </div>
            </div>
        </div>

        

        <div className={styles.HomeBeltContainer}>
            <div className={styles.HomeBeltTitle}>Not using Arconix?</div>
            <div className={styles.HomeBeltSubTitle}>Here are the things you <br/> are missing out on!</div>
            <div className={styles.HomeBeltBoxesContainer}>

                <div className={styles.BeltBox}>
                    <div className={styles.BeltBoxTitleContainer}>
                        <div className={styles.BeltBoxTitleImage}></div>
                        <div className={styles.BeltBoxTitleName}>Timeless aesthetics</div>
                    </div>
                    <div className={styles.BeltBoxContext}>
                        Build beautiful UIs with ease. Start with Google&apos;s Material Design, or create your own sophisticated theme.
                    </div>
                </div>

                <div className={styles.BeltBox}>
                    <div className={styles.BeltBoxTitleContainer}>
                        <div className={styles.BeltBoxTitleImage}></div>
                        <div className={styles.BeltBoxTitleName}>Timeless aesthetics</div>
                    </div>
                    <div className={styles.BeltBoxContext}>
                        Build beautiful UIs with ease. Start with Google&apos;s Material Design, or create your own sophisticated theme.
                    </div>
                </div>
                
                <div className={styles.BeltBox}>
                    <div className={styles.BeltBoxTitleContainer}>
                        <div className={styles.BeltBoxTitleImage}></div>
                        <div className={styles.BeltBoxTitleName}>Timeless aesthetics</div>
                    </div>
                    <div className={styles.BeltBoxContext}>
                        Build beautiful UIs with ease. Start with Google&apos;s Material Design, or create your own sophisticated theme.
                    </div>
                </div>
                
                <div className={styles.BeltBox}>
                    <div className={styles.BeltBoxTitleContainer}>
                        <div className={styles.BeltBoxTitleImage}></div>
                        <div className={styles.BeltBoxTitleName}>Timeless aesthetics</div>
                    </div>
                    <div className={styles.BeltBoxContext}>
                        Build beautiful UIs with ease. Start with Google&apos;s Material Design, or create your own sophisticated theme.
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.HomeContentOneContainer}>
            <div className={styles.HomeContentOneContentContainer}>
                <div className={styles.HomeContentOneTextContainer}>
                    <div className={styles.HomeContentOneTitle}><span className={styles.gradient}>Plan, Organize, and Execute Your Projects</span></div>
                    <div className={styles.HomeContentOneSubtitle}>Plan, Organize, and Execute Your Projects Plan, Organize, and Execute Your Projects</div>
                
                </div>
                <div className={styles.HomeContentOneImage}>

                </div>
            </div>
        </div>



        <div className={styles.HomeContentTwoContainer}> 
            <div className={styles.HomeTwoMainContentContainer}>
                <div className={styles.HomeTwoMainContentLeftSide}>
                    <div className={styles.HomeTwoTitle}>Your Whole Discord<br/> at one page</div>
                    <div className={styles.HomeTwoContextBox1}>
                        <div className={styles.HomeTwoContextTitle}>
                            Tools for every stack
                        </div>
                        <div className={styles.HomeTwoContextContext}>
                            We offer client and server libraries in everything from React and PHP to .NET and iOS.
                        </div>
                    </div>
                    <div className={styles.HomeTwoContextBox1}>
                        <div className={styles.HomeTwoContextTitle}>
                            Tools for every stack
                        </div>
                        <div className={styles.HomeTwoContextContext}>
                            We offer client and server libraries in everything from React and PHP to .NET and iOS.
                        </div>
                    </div>

                </div>
                <div className={styles.HomeTwoMainContentRightSide}>

                </div>
            </div>
        </div>



        <div className={styles.HomeContentEndPart}>
            <div className={styles.HomeContentEndStartNow}>
                <div className={styles.HomeContentEndTitle}>Alleviate your Discord server<br/> with <span className={styles.EndTitleGradient}>Arconix</span></div>
                <div className={styles.HomeContentEndSubtitle}>
                    Find out why MUI&apos;s tools are trusted by thousands of open source developers and teams around the world.
                </div>
                <div className={styles.HomeContentEndButton}>Get Started</div>
            </div>
            <div className={styles.HomeContentEndDocs}>
                <div className={styles.HomeContentEndBox}>
                    <div className={styles.HomeContentEndBoxTitle}>Showcase</div>
                    <div className={styles.HomeContentEndBoxContext}>
                        Check out some great examples of MUI&apos;s products in action.
                    </div>
                    <div className={styles.HomeContentEndBoxButton}>Learn more</div>
                </div>
                <div className={styles.HomeContentEndBox}>
                    <div className={styles.HomeContentEndBoxTitle}>Showcase</div>
                    <div className={styles.HomeContentEndBoxContext}>
                        Check out some great examples of MUI&apos;s products in action.
                    </div>
                    <div className={styles.HomeContentEndBoxButton}>Learn more</div>
                </div>
            </div>
        </div>

        <div className={styles.HomeContentFooter}>
            <div className={styles.HomeFooterContentContainer}>
                <div className={styles.HomeFooterUpperContent}>

                    <div className={styles.HomeUpperFooterPart1}>
                        <div className={styles.HomeUpperPart11}>
                            <div className={styles.HomeUpperPart11Title}>Arconix</div>
                            <div className={styles.HomeUpperPart11Context}>
                                Helper.gg is a Discord ticket bot, designed to empower and perform, with speeds that no other bot can offer provide.
                            </div>
                        </div>
                        <div className={styles.HomeUpperPart12}>
                            <div className={styles.HomeUpper12Title}>Follow us on</div>
                            <div className={styles.HomeUpper12Socials}>
                                <div className={styles.cube}></div>
                                <div className={styles.cube}></div>
                                <div className={styles.cube}></div>
                                <div className={styles.cube}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.HomeUpperFooterPart3}>
                        <div className={styles.HomeUpper3Part}>
                            <div className={styles.HomeUpper3PartTitle}>Products</div>
                            <div className={styles.HomeUpper3LinkContainer}>
                                <div className={styles.HomeUpper3PartLink}>Dashboard</div>
                                <div className={styles.HomeUpper3PartLink}>Dashboard</div>
                                <div className={styles.HomeUpper3PartLink}>Dashboard</div>
                                <div className={styles.HomeUpper3PartLink}>Dashboard</div>
                            </div>
                        </div>
                        <div className={styles.HomeUpper3Part}>
                            <div className={styles.HomeUpper3PartTitle}>Products</div>
                            <div className={styles.HomeUpper3LinkContainer}>
                                <div className={styles.HomeUpper3PartLink}>Dashboard</div>
                                <div className={styles.HomeUpper3PartLink}>Dashboard</div>
                                <div className={styles.HomeUpper3PartLink}>Dashboard</div>
                                <div className={styles.HomeUpper3PartLink}>Dashboard</div>
                            </div>
                        </div>
                        <div className={styles.HomeUpper3Part}>
                            <div className={styles.HomeUpper3PartTitle}>Products</div>
                            <div className={styles.HomeUpper3LinkContainer}>
                                <div className={styles.HomeUpper3PartLink}>Dashboard</div>
                                <div className={styles.HomeUpper3PartLink}>Dashboard</div>
                                <div className={styles.HomeUpper3PartLink}>Dashboard</div>
                                <div className={styles.HomeUpper3PartLink}>Dashboard</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.HomeFooterCopyrightContent}>
                    Copyright © 2023 Material UI SAS.
                </div>
            </div>
        </div>

    </div>
    </>
  )
}
