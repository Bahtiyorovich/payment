import { layout , styles} from "../util/style"
import {card} from '../assets'
import Button from "./button"

const Contract = () => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Bir nechta oson qadamlar bilan  kontrakt tuzing !
            </h2>
            <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire
            </p>
            <Button styles={`mt-10`}/>
        </div>
        <div className={layout.sectionImg}>
            <img src={card} alt="card" className="w-[100%] h-[100%]"/>
        </div>
    </section>
  )
}

export default Contract