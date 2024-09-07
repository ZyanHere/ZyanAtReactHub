import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <>
        <nav className=" container flex flex-row justify-around items-center py-4 md:py-8 uppercase font-semibold relative z-20 text-xs md:text-lg">
            <a href="#">About</a>
            <a href="#">Explore</a>
            <a href="#"><img src={Logo} alt="" className="w-14"/></a>
            <a href="#">Journel</a>
            <a href="#">Search</a>
        </nav>
    
    </>
  )
}

export default Navbar
