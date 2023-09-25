import React from 'react';
import firstImage from '../../public/image1.png';
import secondImage from '../../public/image2.png';
import thirdImage from '../../public/image3.png';
import Image from 'next/image';
import './styles/WhyCat.css'

const WhyCat = () => {
    return(
        <div className='flex justify-center mt-12'> 
            <div className='flex justify-center items-center w-9/12 gap-4 tablet:flex-col'>
                <div className='flex flex-col justify-center items-start gap-8 w-1/2 tablet:w-full'>
                    <h1 className='text-5xl font-bold phone:text-2xl'>Why should you have a cat?</h1>
                    <p className='text-lg font-medium phone:text-sm'>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
                    <div className="flex flex-row items-center gap-2 mt-4 phone:mt-0">
                            <p className="text-base font-bold opacity-60 phone:text-xs">READ MORE</p>
                            <svg  xmlns="http://www.w3.org/2000/svg" className='opacity-60 tablet:w-4 h-4' width="24" height="24" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </div>
                </div>
                <div className='img-cats'>
                    <Image src={secondImage} alt='secondImage' className='pics' />
                    <Image src={firstImage} alt='firstImage' className='pics' />
                    <Image src={thirdImage} alt='thirdImage' className='pics' />
                </div>
            </div>
        </div>
)}

export default WhyCat;