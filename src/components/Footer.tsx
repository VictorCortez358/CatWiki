import Image from 'next/image';
import CatWikiLogo from '../../public/CatwikiLogo.svg';

const Footer = () => {
    return (
        <footer className="flex justify-center mt-20 phone:mt-5">
            <div className="flex flex-row justify-between items-center w-portrait bg-black rounded-t-3xl py-5 px-10 phone:py-3 phone:px-6 phone:flex-col phone:items-start phone:justify-center">
                <Image className="invert contrast-[150%] first-letter:w-32 h-10 tablet:w-2/3 phone:w-16" src={CatWikiLogo} alt="Logo" />
                <p className="text-white font-monserrat font-medium text-base tablet:text-sm phone:text-xs">created by 
                    <a href="https://www.linkedin.com/in/v%C3%ADctor-rafael-valenzuela-cortez-36268b238/" className="text-white font-bold"> Victor Cortez </a>
                    - devChallenge.io 2023
                </p>
            </div>
        </footer>
    )
}

export default Footer;