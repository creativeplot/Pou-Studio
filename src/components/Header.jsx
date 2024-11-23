
import NavBar from "./NavBar";

// lg:h-4/6
const Header = ({ changeHeaderText, changeContent, changeImage, shrink, heightFactor, linkBgChange}) => {

  const factor = heightFactor();

  const linkChange = linkBgChange();

  return (
    <>
    <header className={`flex flex-col items-center h-2/3 px-2 ${factor === true ? shrink() : 'lg:h-4/6'} ${factor === true ? 'lg:mb-0' : 'lg:mb-16'} ${factor === true ? 'lg:mt-0' : 'lg:mt-28'}`}>
        
        <NavBar linkChange={linkChange} />

        <h1 className="text-4xl font-medium text-center max-w-screen-md mt-64 leading-snug lg:text-7xl lg:leading-snug lg:mt-36 lg:font-semibold">{changeHeaderText()}</h1>
        <>
        {changeContent()}
        </>
        
        
    </header>
    {changeImage()}
    </>

  )
}

// A brand and product designer working with clients globally

/* <ul className="gap-x-3 p-2 hidden md:flex mt-6 text-sm">
            <li className="grid place-content-center">Expertise</li>
            <li className="bg-neutral-200 p-2 px-3 rounded-3xl ">Branding</li>
            <li className="bg-neutral-200 p-2 px-3 rounded-3xl ">Product</li>
            <li className="bg-neutral-200 p-2 px-3 rounded-3xl ">Design Systems</li>
        </ul> */

export default Header;