import {useState} from "react"
const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-pink-400 text-white shadow-md ">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold hover:text-red-600">MYLOGO✈️</div>
                {/* desktop */}
                <div className="hidden md:flex space-x-12">
                    <a href="#" className="hover:text-gray-500">Home</a>
                    <a href="#" className="hover:text-gray-500" >Service</a>
                    <a href="#" className="hover:text-gray-500">About</a>
                    <a href="#" className="hover:text-gray-500">Contact</a>
                </div>
                <button className="px-6 py-3 text-white font-semibold rounded-lg hover:bg-pink-800 hover:shadow-lg transition duration-300">Sign Up
</button>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✖️" : "☰"}</button>

            </div>
            {/* mobile */}
            {isOpen && (
                <div>
                    <a className="block text-white hover:text-gray-300" href="">Home</a>
                    <a  className="block text-white hover:text-gray-300"  href="">Service</a>
                    <a className="block text-white hover:text-gray-300" href="">About</a>
                    <a  className="block text-white hover:text-gray-300" href="">Contact</a>
                </div>
            )}
        </nav>
    )
}
export default Navbar