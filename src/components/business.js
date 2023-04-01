import { features } from "../util/constants"
import { layout, styles } from "../util/style"
import Button from "./button"
import FeaturesCard from "./features-card"

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Biznesingizni rivojlantiring <br className='sm:block hidden'/>
          Invistitsiya Bizdan !
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <Button styles={` mt-5`}/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, idx) => (
            <FeaturesCard key={feature.id} {...feature} idx={idx}/>
        ))}
      </div>
    </section>
  )
}

export default Business