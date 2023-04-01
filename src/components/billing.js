import { layout, styles } from "../util/style"
import { card2, google, appStore } from "../assets"
import {Button} from './'

const Billing = () => {
  return (
    <section id="products" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={card2} alt="payme-card" className="w-[100%] h-[90%] relative z-5"/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} ${styles.paddingX}`}>
          Hisob kitoblarni <br className="sm:block hidden"/> osongina boshqaring
        </h2>
        <p className={`${styles.paragraph} ${styles.paddingX}`}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
        </p>
        <div className={`${styles.paddingX} flex  flex-row flex-wrap sm:mt-10 mt-6`}>
          <img src={google} alt="google" className="w-[129px] h-[42px] object-cover mr-5 cursor-pointer"/>
          <img src={appStore} alt="appStore" className="w-[129px] h-[42px] object-cover mr-5 cursor-pointer"/>
        </div>
        <Button styles={` sm:m-[65px] m-[25px] `}/>
      </div>
    </section>
  )
}

export default Billing