const HeaderHome = () => {
    return ( 
        <div className="mx-auto px-4 bg-[#1958f6] w-full overflow-hidden">
               {/* Container && Grid layout with two columns */ }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-[85%] mx-auto">
                <div className="flex flex-col justify-center mt-10  md:mt-10 space-y-3 mx-auto">
                    <h1 className="text-3xl  text-white md:text-4xl lg:6xl font-bold leading-tight tracking-tighter mb-4">Genereer <span className="text-[#41f6a3]">eindeloze B2B leads </span>  met 1 klik op de knop - Het is net als magie!</h1>
                    <p className="text-lg2 md:text-xl mb-6 text-sm text-gray-200">Probeer Jumpleads nu 3 dagen gratis, en ontdek de kracht.</p>
                    <button className="bg-[#19f6a3] text-gray-600 px-4 py-2 rounded-md font-bold w-[200px] md:w-[240px]">Ja, Gratis proberen!</button>
                    <p className="text-sm text-white">30 dagen niet goed geld terug garantie</p>
                </div>
                <div className="flex justify-end items-center mt-10 ">
                    <div className="w-full md:w-[500px] rounded-xl overflow-hidden">
                        <img className="w-full h-auto" src="https://i.postimg.cc/SK7SG7CR/pexels-andrea-piacquadio-3769021.jpg" alt="" />
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default HeaderHome;
