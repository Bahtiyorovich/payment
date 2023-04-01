import { styles } from "../util/style"
import Button from "./button"

const CTA = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-dark-gradient rounded-[20px] box-shadow`}>
        <div className='flex-1 flex flex-col'>
            <h2 className={`${styles.heading2}`}>
                Xizmatlarni Sinab Ko'ring !
            </h2>
            <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
            Xayriya qiling: Agar siz ushbu saytdan muntazam foydalansangiz va saytni Internetda saqlashga yordam bermoqchi bo'lsangiz, iltimos, xosting va tarmoqli kengligi uchun to'lovni to'lashda yordam berish uchun oz miqdorda xayriya qilishni o'ylab ko'ring.
            </p>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button/>
        </div>
    </div>
  )
}

export default CTA