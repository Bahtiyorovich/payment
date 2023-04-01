import {logo } from "../assets"
import { footerLinks, socialMedia } from "../util/constants"
import { styles } from "../util/style"
import {FooterLink} from "./"

const Footer = () => {
  return (
    <div id="footer" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full` }>
            <div className='flex-1 flex flex-col justify-start mr-10'>
                <img src={logo} alt="logo" className='w-[250px] h-[72px] object-contain'/>
                <p className={`${styles.paragraph} mt-4 max-w-[280px]`}>
                    To'lovlarni oson, ishonchli va xavfsiz qilishning yangi usuli
                </p>
            </div>
            <div className='flex-[1.5] w-full flex flex-row justify-around flex-wrap md:mt-0 mt-10'> 
                {footerLinks.map((footerLink, idx) => (
                    <FooterLink key={idx} {...footerLink}/>
                ))}
            </div>        
        </div> 

           {/*Social Links  */}
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] bprder-t-[#3f3e45]'>
            <p className='font-montserrat font-normal text-[16px] text-lightWhite leading-[27px]'>Coppyright 2023 Sh.Y Developer. All Right Reserved</p>
            <div className='flex justify-between'>
                {socialMedia.map((icon, idx) => (
                    <img 
                        key={idx} 
                        src={icon.icon}
                        alt="social-link" 
                        className={`w-[25px] h-[25px] cursor-pointer 
                        ${idx !== socialMedia.length - 1 ? 'mr-5' : 'mr-0'} `}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer