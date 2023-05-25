
function Hero_main() {
   return ( 
      <>
            <nav className="relative pt-16">
            <div className="hero h-96 bg-cover " style={{ backgroundImage: `url("../public/assets/heros/bgAnime.png")` }}>
               <div className="hero-overlay bg-opacity-60"></div>
               <div className="hero-content text-center text-neutral-content">
                  <div className="hidden lg:block">
                     <h1 className="text-8xl font-bold pr-16">
                        <span className="text-red-500"> BURGER </span> 
                        <span className="inline-block">
                           <img src="../public/burgeranime.png" alt="LOGO" width={50} />
                        </span>
                        <span className="text-white-500"> ANIME </span>
                        </h1>
                  </div>
                  <div className="lg:hidden">
                     <img src="../public/burgeranime.png" alt="LOGO" width={50} />
                  </div>
               </div>
            </div>
            </nav>
            
            
      </>
    );
}

export default Hero_main;