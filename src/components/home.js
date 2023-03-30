import { styles } from "../util/style"
import { discount } from '../assets'

const Home = () => {
  return (
    <section  id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        {/* Information */}
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            
            {/* Discount Information*/}
            <div className='flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient'>
                <img src={discount} alt='discount' className="w-[30px] bg-lightWhite"/>
                <p className={`${styles.paragraph}`}><span className="text-white px-[8px]">20%</span>Chegirma <span className="text-white">1 oylik</span> xisob uchun</p>
            </div>
            
            {/* Title */}
            <div className='w-full'>
                <h1 className={`${styles.heading1}`}>Yangi Avlod <br/><span>To'lov usuli</span></h1>
            </div>
            
            {/* Description */}
            <div className=''></div>
        
        </div>

        {/* Animation Img */}
        <div className=""></div>
    </section>
  )
}

export default Home