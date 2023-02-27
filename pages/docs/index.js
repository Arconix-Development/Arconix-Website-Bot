import styles from '../../components/docscss/DocsHome.module.css'
import DocsNavbar from '../../components/utils/DocsNavbar'
import DocsSideNav from '../../components/utils/DocsSideNav'

function DocsHome(){

    return(
        <div className={styles.DocsHomeMainContainer}>
            <DocsNavbar/>
            <div className={styles.DocsHomeContentContainer}>
            <DocsSideNav/>
                <div className={styles.DocsHomeMainContentContainer}>
                    <div className={styles.DocsHomeMainStuffContainer}>
                        <div className={styles.DocsHomeTextContainer}>
                            <div className={styles.DocsHomeContentTitle}>Arconix Documentations</div>
                            <div className={styles.DocsHomeContentContext}>You will learn how to setup Arconix,<br/> learn how it works and to make your server what you want it to be!</div>
                            <div className={styles.DocsHomeTextContentWay}>
                                <div className={styles.DocsHomeTextContentButton}>Get started</div>
                                or <div className={styles.DocsHomeTextContentSpacer}>Click below boxes</div>
                            </div>
                        </div>     
                        
                        
                        <div className={styles.DocsCommonUsageContainer}>
                            <div className={styles.DocsCommonUsageTitle}>Most Used Features</div>
                            <div className={styles.DocsCommonUsageBoxesMainContainer}>
                                <div className={styles.DocsCommonUsageBoxContainer}>
                                    <div className={styles.DocsCommonUsageBoxTitle}>Moderation</div>
                                    <div className={styles.DocsCommonUsageBoxContext}>Viridia is a method by which you can generate your user’s goal like in a way it is possible to calculate the requirements and develop your automated agents to resolve your company’s</div>
                                </div>
                                <div className={styles.DocsCommonUsageBoxContainer}>
                                    <div className={styles.DocsCommonUsageBoxTitle}>Tickets</div>
                                    <div className={styles.DocsCommonUsageBoxContext}>Researchers Dr. Doug Boyer and Dr. Juan Abella of the University of Alberta, along with their many collaboratorss</div>
                                </div>
                                <div className={styles.DocsCommonUsageBoxContainer}>
                                    <div className={styles.DocsCommonUsageBoxTitle}>Something</div>
                                    <div className={styles.DocsCommonUsageBoxContext}>Researchers Dr. Doug Boyer and Dr. Juan Abella of the University of Alberta, along with their many collaborators</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.DocsDashboardPart}>
                            <div className={styles.DocsCommonUsageTitle}>Dashboard</div>
                            <div className={styles.DocsDashboardSubTitle}>General</div>

                            <div className={styles.DocsDashboardBoxesContainer}>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                            </div>

                            <div className={styles.DocsDashboardSubTitle}>Moderation</div>

                            <div className={styles.DocsDashboardBoxesContainer}>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                            </div>

                            <div className={styles.DocsDashboardSubTitle}>Moderation</div>

                            <div className={styles.DocsDashboardBoxesContainer}>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                            </div>

                            <div className={styles.DocsDashboardSubTitle}>Moderation</div>

                            <div className={styles.DocsDashboardBoxesContainer}>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                            </div>

                            <div className={styles.DocsDashboardSubTitle}>Moderation</div>

                            <div className={styles.DocsDashboardBoxesContainer}>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                                <div className={styles.DocsDashboardBox}></div>
                            </div>
                        </div>

                        <div className={styles.DocsFooter}>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocsHome