export const styles = {
    paddingX: 'sm:px-16 px-6',
    paddingY: 'sm:py-16 py-6',
    padding: 'sm:px-16 px-6 sm:py-12 py-4',
    marginX: 'sm:mx-16 mx-6',
    marginY: 'sm:my-12 my-4',
    margin: 'sm:mx-16 mx-6 sm:my-12 my-4',
    container: 'xl:max-w-[1280px] w-full',
    flexBetween: ' flex justify-between items-center',
    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-center items-start',
    paragraph: 'font-montserrat font-normal text-lightWhite text-[18px] leading-[30.8px]',
    heading1: 'font-montserrat font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]',
    heading2: 'font-montserrat font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]',
}


export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionImg: `flex-1 ${styles.flexStart} flex-col`,
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} `,
    sectionInfo: `flex-1 flex-col ${styles.flexStart} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
}




