import { styles } from "../util/style"
import { statistics } from "../util/constants"

const Statistics = () => {
  return (
    <div className={`${styles.flexStart} flex-col  md:flex-row flex-wrap sm:mb-20 mb-6`}>
      {statistics.map(item => (
        <div  key={item.id} className={`flex-1 flex justify-start items-center flex-row  m-3 `}>
          <h4 className="font-montserrat font-semibold xs:text-[41px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{item.value}</h4>
          <p className="font-montserrat font-normal xs:text-[20px] text-[16px] text-white xs:leading-[26px] leading-[22px]">{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Statistics