import Image from "next/image"
import CatWikiLogo from "../../public/CatwikiLogo.svg"

const Header = () => {
    return (
        <div className="flex justify-center">
        <header className="flex justify-start w-portrait my-4">
            <Image className="h-12 items-start" src={CatWikiLogo} alt="Logo"  />
        </header>
        </div>
    )
}

export default Header;