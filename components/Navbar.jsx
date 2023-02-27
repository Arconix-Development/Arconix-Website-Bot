import logo from "./images/logoone.png"
import Image from 'next/image'
import styles from "./Navbar.module.css"
import { useState,useContext } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { ModalContext } from './helpers/Contexts';

function Navbar () {

  const router = useRouter()

//   const BoxRedirect = (x) =>{
//     router.push(`/${x}`)
//   }
//   const {beltRef} = useContext(ModalContext)

  const [ModalHover,setModalHover] = useState(false)

  const NavModal={
    height:ModalHover ? "max-content" : "200px",
    width: ModalHover ? "max-content" : "max-content",
    background:ModalHover ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
    opacity: ModalHover ? 1 : 0,
    transition: "opacity 1s ease-in",
    pointerEvents: !ModalHover ? "none" : "auto",
    "-webkit-user-select":ModalHover? "auto":"none",
    "-moz-user-select":ModalHover? "auto":"none",
    userSelect:ModalHover? "auto":"none",
  }

  // const BoxStyle={
  //   borderColor:ModalHover ? "rgba(0,0,0,1)" : "rgba(0,0,0,0)",
  // }


  return (
    <div className={styles.HomeNavbarContainer}>
    <div className={styles.HomeNavbarMainContainer}>
        <div className={styles.HomeNavbarLeftSide}>
            <div className={styles.HomeNavbarLogoContainer}>
                <Image src={logo} alt="logo" className={styles.HomeLogo}/> <div className={styles.HomeLogoName}>Arconix</div>
            </div>
        </div>
        <div className={styles.HomeNavbarRightSide}>

            <div className={styles.NavButton} onMouseEnter={()=>setModalHover(true)} onMouseLeave={()=>setModalHover(false)}>
              Docs

            <motion.div className={styles.Contboxnewdesign}
                animate={NavModal}
                initial={{opacity:0}}
            >
                <div className={styles.ContboxBox}>
                    <div className={styles.Contboxnewdesigntitle}>
                        Moderation
                    </div>
                    <div className={styles.Contboxnewdesigncontext}>
                        Keep your chat clean with Arconix Moderation
                    </div>
                </div>

                <div className={styles.ContboxBox}>
                    <div className={styles.Contboxnewdesigntitle}>
                        Moderation
                    </div>
                    <div className={styles.Contboxnewdesigncontext}>
                        Keep your chat clean with Arconix Moderation
                    </div>
                </div>

                <div className={styles.ContboxBox}>
                    <div className={styles.Contboxnewdesigntitle}>
                        Moderation
                    </div>
                    <div className={styles.Contboxnewdesigncontext}>
                        Keep your chat clean with Arconix Moderation
                    </div>
                </div>

                <div className={styles.ContboxBox}>
                    <div className={styles.Contboxnewdesigntitle}>
                        Moderation
                    </div>
                    <div className={styles.Contboxnewdesigncontext}>
                        Keep your chat clean with Arconix Moderation
                    </div>
                </div>

                <div className={styles.ContboxBox}>
                    <div className={styles.Contboxnewdesigntitle}>
                        Moderation
                    </div>
                    <div className={styles.Contboxnewdesigncontext}>
                        Keep your chat clean with Arconix Moderation
                    </div>
                </div>
              
            </motion.div>

            </div>
            
            <div className={styles.NavButton}>Support</div>
            <div className={styles.HomeSignUp}>Sign Up</div>
          </div>
        </div>
    </div>
  )
}

export default Navbar