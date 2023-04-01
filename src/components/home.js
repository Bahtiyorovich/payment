import { styles } from "../util/style"
import { discount, homeRobot } from '../assets'
import {Button} from './index';

const Home = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            {/* Animation Img */}
            <div className={`mx-20 flex-1 ${styles.flexStart} md:my-0 my-10 h-[610px] relative robot`}>
                <img src={homeRobot} alt='homeRobot' className="w-[100%] h-[100%] relative z-10 rounded-sm"/>
            </div>
            {/* Information */}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                {/* Discount Information*/}
                <div className=' flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient'>
                    <img src={discount} alt='discount' className="w-[30px] bg-lightWhite" />
                    <p className={`${styles.paragraph}`}><span className="text-white px-[8px]">20%</span>Chegirma <span className="text-white">1 oylik</span> xisob uchun</p>
                </div>

                {/* Title */}
                <div className='w-full'>
                    <h1 className={`${styles.heading1}`}>Yangi Avlod <br /><span className="text-gradient">To'lov usuli</span></h1>
                </div>

                {/* Description */}
                <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>

                {/* Getting Started */}
                <Button styles={`mt-3 text-lightWhite`}/>

                {/* Gradient Style  */}
                {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue-gradient"></div>
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white-gradient "></div>
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pink-gradient "></div> */}
            </div>

        </section>
    )
}

export default Home