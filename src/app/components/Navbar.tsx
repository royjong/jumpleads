const Navbar = () => {
    return ( 
       <div className="bg-[#1858f6] flex flex-col w-full overflow-hidden mx-auto">
           {/* Container for width */}
          <div className="w-[85%] mx-auto flex flex-row items-center justify-between py-5" >
           <div>
              {/* Logo */}
              <img className="w-[150px]" src="https://i.postimg.cc/Z5Y2QG9r/jumpstart-200-x-50-px.png"></img>
           </div>
           <div className="flex flex-row items-center gap-4">
              {/* Nav items */}
              <ul className="hidden space-x-5  md:visible md:flex">
                <li><a  className="text-white" href="#">Home</a></li>
                <li><a className="text-white" href="#">Pricing</a></li>
                <li><a className="text-white" href="#">Usecases</a></li>
                <li><a href="#"></a></li>
              </ul>

              {/* CTA button */ }
              <button className="bg-[#19f6a3] px-3 py-2 rounded-md font-bold">
                Gratis proberen! 
              </button>

           </div>
              
          </div>
          {/* End container for width */}
        </div>
     );
}
 
export default Navbar;