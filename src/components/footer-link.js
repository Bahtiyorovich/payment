
const FooterLink = ({title, links}) => {
  return (
    <div className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
        <h4 className='font-montserrat font-medium text-[18px] leading-[27px] text-white'>
            {title}
        </h4>
        <ul className='list-none mt-4'>
            {links.map((link, idx) => (
                <li key={link.name} className={`text-lightWhite font-montserrat font-normal text-[16px] cursor-pointer hover:text-secondary 
                    ${idx !== links.length - 1 ? 'mb-4' : 'mb-0' }
                `}>
                    {link.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FooterLink