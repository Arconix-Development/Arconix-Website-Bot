import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "../styles/Swiper.module.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from 'react-simple-typewriter'


function SwiperThing () {
    const SwiperBody={
        height:"100vh",
        width:"80vw",
        backgroundColor:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    };

    const tester = {
        width:"100%",
        height:"max-content",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }


    return(
        <div style={SwiperBody}>
            <div className={styles.SwiperContainer}>
                <div className={styles.SwiperTextTypewriter}>Text Typewriter 
                    <span style={{marginLeft:"5px"}}>
                        <Typewriter
                            words={['Word1','Word2','Word3']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={120}
                            deleteSpeed={100}
                            delaySpeed={4000}/>
                    </span> 
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation,Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide style={tester}>
                        <div className={styles.SwiperChildContainer}>
                            Test1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={tester}>
                        <div className={styles.SwiperChildContainer}>
                            Test1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={tester}>
                        <div className={styles.SwiperChildContainer}>
                            Test1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={tester}>
                        <div className={styles.SwiperChildContainer}>
                            Test1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={tester}>
                        <div className={styles.SwiperChildContainer}>
                            Test1
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}


export default SwiperThing